<template>
  <div class="w-full min-h-screen bg-[#EBFFFB] lg:bg-white">
    <div class="lg:grid grid-cols-2 px-4 sm:px-[1rem] md:px-[2rem] lg:px-0">
      <section
        class="relative w-full min-h-screen bg-[#DFFFF8] hidden lg:block"
      >
        <img
          src="/images/brand-seakun/seakun-green.svg"
          alt="seakun"
          class="w-[120px] h-[29px] absolute top-[61px] left-[59px]"
        />
        <img
          src="/images/user/forgot-password.svg"
          alt="illustration"
          class="mx-auto w-full"
        />
      </section>
      <div class="w-full pt-8 lg:pt-0">
        <div class="w-full sm:max-w-[478px] mx-auto">
          <section
            class="p-1 lg:p-5 bg-white card-wrapper rounded-xl lg:rounded-none mt-4 lg:mt-0"
          >
            <img
              src="/images/profile-page/group-send.svg"
              alt="forgot-password"
              class="absolute w-[130px] h-[200px] right-0 top-0 hidden lg:block"
            />
            <div v-if="!isSuccess" class="mx-auto lg:mt-[148px]">
              <img
                src="/images/illustration/forgot-password/request-mobile.png"
                alt="email"
                class="w-full lg:hidden"
              />
              <div class="mt-5 lg:mt-0 px-4 pb-5 lg:pb-0 lg:px-0">
                <h1 class="text-base lg:text-[26px] font-bold text-[#49A794]">
                  Buat Password Baru
                </h1>
                <p
                  class="text-sm lg:text-base text-gray-secondary dm-sans mt-[8px]"
                >
                  Password baru kamu harus berbeda dengan password sebelumnya..
                </p>
                <InputPassword
                  v-model="password"
                  id="password"
                  label="Password"
                  class-label="!text-sm lg:!text-base"
                  placeholder="Masukkan password baru kamu"
                  class="mt-5 lg:mt-8 !text-sm !lg:text-base"
                  @keyup="validateForm('password')"
                  :error="errorForm.password"
                />
                <InputPassword
                  v-model="retypePassword"
                  id="confirm-password"
                  label="Konfirmasi Password"
                  class-label="!text-sm lg:!text-base"
                  placeholder="Konfirmasi password baru kamu"
                  class="mt-4 lg:mt-8 !text-sm !lg:text-base"
                  @keyup="validateForm('retypePassword')"
                  :error="errorForm.retypePassword"
                />
                <Button
                  @click="onClickUpdatePassword"
                  add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-7 lg:mt-8 dm-sans "
                  :is-loading="isLoading"
                  >Simpan</Button
                >
                <div
                  v-if="errorUpdatePassword.isError"
                  class="mt-5 text-center text-red-500"
                >
                  {{ errorUpdatePassword.message }}
                </div>
              </div>
            </div>
            <div v-else class="mx-auto mt-4 lg:mt-[148px] p-4">
              <img
                class="mx-auto"
                src="/images/user/success-update-password.svg"
                alt="password berhasil diubah"
              />
              <h2
                class="text-[#00BA88] font-bold text-center mt-[16px] lg:text-[24px]"
              >
                Password Berhasil Diganti
              </h2>
              <p class="text-[14px] lg:text-base text-center mt-[4px]">
                Penggantian password telah berhasil dilakukan.
              </p>
              <Button
                @click="toLoginPage"
                add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-7 lg:mt-8 dm-sans "
                >Login</Button
              >
            </div>
          </section>
        </div>
      </div>
    </div>

    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import InputPassword from '~/components/atoms/InputPassword.vue';
import Button from '~/components/atoms/Button.vue';
import RequestFromEmail from './views/request-from-email.vue';
import FormVerification from './views/form-verification.vue';
import FormNewPassword from './views/form-new-password.vue';
import ModalSuccsess from './views/modal-succsess.vue';
import Spinner from '~/components/atoms/Spinner.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import UserService from '~/services/UserServices';

export default {
  components: {
    InputPassword,
    Button,
    RequestFromEmail,
    FormVerification,
    FormNewPassword,
    ModalSuccsess,
    Spinner,
    Snackbar,
  },
  data() {
    return {
      UserService,
      userUid: '',
      token: '',
      email: '',
      isLoading: false,
      isSuccess: false,
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
      errorUpdatePassword: {
        isError: false,
        message: '',
      },
    };
  },
  mounted() {
    this.UserService = new UserService(this);
    const { token, userUid } = this.$route.query;
    this.userUid = userUid;
    this.token = token;
  },
  methods: {
    onClickUpdatePassword() {
      if (this.validateForm()) {
        this.updateForgettedPassword();
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

      if (input == 'password' || !input) {
        if (password === '') {
          errorTemp.password = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        }
      }
      if (input == 'retypePassword' || !input) {
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
    async updateForgettedPassword() {
      const { UserService } = this;
      const payload = {
        token: this.token,
        uid: this.userUid,
        password: this.password,
      };
      this.isLoading = true;
      try {
        const fetchUpdatePassword = await UserService.updateForgettedPassword(
          payload
        );
        if (fetchUpdatePassword.data) {
          this.isSuccess = true;
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          this.$refs.snackbar.showSnackbar({
            message: `Gagal mengubah password. Pastikan password berbeda dengan password sebelumnya`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        } else if (
          error.response.status === 403 ||
          error.response.status === 401
        ) {
          this.$refs.snackbar.showSnackbar({
            message: `Token tidak valid atau sudah digunakan untuk mengubah password`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        } else if (error.response.status === 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Token atau user tidak ditemukan`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        } else {
          this.$refs.snackbar.showSnackbar({
            message: `Terjadi kesalahan. Silakan coba beberapa saat lagi atau hubungi admin`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        }
      }
      this.isLoading = false;
    },
    toLoginPage() {
      this.$router.push('/user/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}

@media only screen and (max-width: 1024px) {
  .card-wrapper {
    box-shadow: 0px 2px 10px 0px rgba(160, 163, 189, 0.1);
  }
}
</style>
