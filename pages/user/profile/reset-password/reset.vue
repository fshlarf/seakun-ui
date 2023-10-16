<template>
  <main class="mt-6 md:mt-0">
    <div
      v-if="!isSuccess"
      class="bg-white p-6 rounded-xl text-gray-secondary space-y-6"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <div>
        <h2 class="text-[20px] font-bold">Buat Password Baru</h2>
        <p class="text-sm pt-1 leading-5">
          Password baru kamu harus berbeda dengan password sebelumnya.
        </p>
      </div>
      <InputPassword
        v-model="password"
        label="Password"
        placeholder="Masukkan password"
        class-label="!text-base !text-gray-secondary"
        class-name="!text-base !text-gray-secondary"
        @keyup="validateForm('password')"
        :error="errorForm.password"
      />
      <InputPassword
        v-model="retypePassword"
        label="Konfirmasi Password"
        placeholder="Ketik ulang password"
        class-label="!text-base !text-gray-secondary"
        class-name="!text-base !text-gray-secondary"
        @keyup="validateForm('retypePassword')"
        :error="errorForm.retypePassword"
      />
      <div class="text-right">
        <Button
          @click="onClickResetPassword"
          :is-loading="isLoading"
          class="text-white bg-green-primary border-2 border-green-primary w-[166px] !text-base h-[46px]"
          >Reset Password</Button
        >
      </div>
    </div>

    <div
      v-else
      class="bg-white p-6 rounded-xl text-gray-secondary space-y-6"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <nuxt-link to="/user/profile" class="flex items-center gap-2">
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-xs">Kembali</p>
      </nuxt-link>
      <div class="text-center">
        <img
          src="/images/profile-page/succsess-change-password.png"
          alt="check email"
          class="w-[207px] h-[148px] mx-auto"
        />
        <h3 class="text-gray-secondary text-[18px] font-bold">
          Password Berhasil Diganti
        </h3>
        <p class="text-sm text-gray-secondary">
          Penggantian password telah berhasil dilakukan.
        </p>
        <Button
          @click="toProfilePage"
          class="text-white mt-5 bg-green-primary border-2 border-green-primary w-full md:max-w-[138px] !text-base md:h-[42px]"
          >OK</Button
        >
      </div>
    </div>

    <Snackbar ref="snackbar" />
  </main>
</template>

<script>
import UserService from '~/services/UserServices';
import Button from '~/components/atoms/Button.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';

export default {
  layout: 'profile',
  components: {
    InputPassword,
    Button,
    Snackbar,
  },
  data() {
    return {
      UserService,
      token: '',
      password: '',
      retypePassword: '',
      errorForm: {
        password: {
          isError: false,
          message: '',
        },
        retypePassword: {
          isError: false,
          message: '',
        },
      },
      isLoading: false,
      isSuccess: false,
    };
  },
  mounted() {
    this.UserService = new UserService(this);
    const { token } = this.$route.query;
    if (token) {
      this.token = token;
    } else {
      this.$router.push('/user/profile');
    }
  },
  methods: {
    onClickResetPassword() {
      if (this.validateForm()) {
        this.updatePassword();
      }
    },
    validateForm(input) {
      const { password, retypePassword } = this;
      let isValid = true;
      let errorTemp = {
        password: {
          isError: false,
          message: '',
        },
        retypePassword: {
          isError: false,
          message: '',
        },
      };

      if (input === 'password' || !input) {
        if (password === '') {
          errorTemp.password = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        }
      }

      if (input === 'retypePassword' || !input) {
        if (retypePassword === '') {
          errorTemp.retypePassword = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        } else if (password !== retypePassword) {
          errorTemp.retypePassword = {
            isError: true,
            message: 'Password harus sama',
          };
          isValid = false;
        }
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    async updatePassword() {
      const { UserService, token, password } = this;
      this.isLoading = true;
      try {
        const fetchUpdatePassword = await UserService.updatePassword(
          token,
          password
        );
        if (fetchUpdatePassword.data) {
          this.isSuccess = true;
        }
      } catch (error) {
        console.log(error);
        this.$refs.snackbar.showSnackbar({
          message: `Terjadi kesalahan. Coba beberapa saat lagi atau hubungi admin`,
          className: '',
          color: 'bg-red-400',
          duration: 4000,
        });
      }
      this.isLoading = false;
    },
    toProfilePage() {
      this.$router.push('/user/profile');
    },
  },
};
</script>

<style lang="scss" scoped></style>
