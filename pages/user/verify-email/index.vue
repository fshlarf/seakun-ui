<template>
  <div class="w-full h-screen flex justify-center items-center">
    <KebabLoader v-if="isLoading" />
    <div v-else-if="isVerified" class="max-w-[400px] mx-auto text-center">
      <img
        class="mx-auto"
        src="/images/register/verified.svg"
        alt="akun aktif"
      />
      <h2 class="font-bold text-[#00BA88] lg:text-[24px] mt-4">
        Verifikasi Berhasil
      </h2>
      <p class="text-sm lg:text-base">
        Verifikasi email telah berhasil, silakan login
      </p>
      <Button
        @click="toLoginPage"
        add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-base font-bold mt-6 dm-sans"
        >Login</Button
      >
    </div>
  </div>
</template>

<script>
import UserService from '~/services/UserServices';
import Button from '~/components/atoms/Button';
import KebabLoader from '~/components/atoms/KebabLoader';

export default {
  components: {
    KebabLoader,
    Button,
  },
  data() {
    return {
      UserService,
      isLoading: true,
      token: '',
      userUid: '',
      isVerified: false,
    };
  },
  mounted() {
    this.UserService = new UserService(this);
    const { token, userUid } = this.$route.query;
    this.token = token;
    this.userUid = userUid;
    if (token && userUid) {
      this.verifyEmailToken();
    } else {
      this.$alert.show({
        status: 'error',
        message: 'Link verifikasi atau id user tidak ditemukan',
      });
    }
  },
  methods: {
    async verifyEmailToken() {
      this.isLoading = true;
      const { UserService } = this;
      try {
        const fetchVerifyEmail = await UserService.verifyEmailToken(
          this.token,
          this.userUid
        );
        if (fetchVerifyEmail.data) {
          this.isVerified = true;
        }
      } catch (error) {
        if (error.response.status == 403) {
          this.$router.push(
            `/user/verify-email/expired?token=${this.token}&userUid=${this.userUid}`
          );
        } else {
          this.$alert.show({
            status: 'error',
            message: 'Link verifikasi tidak valid atau user tidak ditemukan',
          });
        }
      }
      this.isLoading = false;
    },
    toLoginPage() {
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
