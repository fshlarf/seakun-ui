<template>
  <div
    class="w-full min-h-screen h-full"
    :class="`${isRegisterSuccess ? 'bg-white' : 'hero-register'}`"
  >
    <main
      class="px-4 sm:px-[1rem] md:px-[2rem] xl:px-0 pb-4 xl:pb-0 xl:!flex xl:grid-cols-none xl:justify-between"
    >
      <div id="bg-register" class="hidden xl:block h-screen xl:w-[47%]">
        <img
          class="object-cover-top"
          src="/images/background/bg-register.png"
          alt="daftar"
        />
      </div>
      <div class="w-full sm:max-w-[478px] mx-auto xl:hidden pt-8">
        <nuxt-link to="/login">
          <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
        </nuxt-link>
      </div>
      <div
        class="xl:bg-white relative xl:mt-0 rounded-[12px] xl:rounded-none xl:w-[53%] xl:h-screen xl:flex xl:items-center xl:justify-center"
      >
        <div v-if="!isRegisterSuccess" class="xl:w-[518px]">
          <img
            src="/images/background/right-register.png"
            alt="ilustration"
            class="absolute top-0 right-0 hidden lg:block"
          />
          <form
            @submit.prevent="submit"
            class="w-full rounded-xl lg:rounded-none bg-white sm:max-w-[478px] mx-auto p-1 lg:p-5 mt-3 lg:mt-[60px]"
          >
            <img
              src="/images/background/bg-register-mobile.png"
              alt="register"
              class="w-full object-contain lg:hidden rounded-lg"
            />
            <div class="px-3 lg:px-0 mt-3 lg:mt-0">
              <h1 class="text-[26px] font-bold text-[#49A794]">
                Buat Akun di Sini
              </h1>
              <p class="text-base text-gray-secondary dm-sans pt-1 lg:pt-0">
                Silakan buat akun kamu di sini
              </p>
            </div>
            <div class="space-y-3 lg:space-y-4 mt-3 lg:mt-8 px-3 lg:px-0">
              <Input
                v-model="name"
                label="Nama Lengkap"
                id="name"
                name="name"
                placeholder="Masukkan nama kamu di sini"
                class-name="text-sm lg:text-base "
                class-label="text-gray-secondary !text-sm !lg:text-base"
                @keyup="validationForm('name')"
                :error="errorForm.name"
              />
              <Input
                v-model="email"
                label="Email"
                placeholder="Masukkan email kamu di sini"
                class-name="text-sm lg:text-base "
                class-label="text-gray-secondary !text-sm !lg:text-base"
                @keyup="validationForm('email')"
                :error="errorForm.email"
              />
              <Input
                v-model="phoneNumber"
                label="Nomor Whatsapp"
                placeholder="Cth: 62812345678"
                class-name="text-sm lg:text-base "
                class-label="text-gray-secondary !text-sm !lg:text-base"
                @keyup="validationForm('phone')"
                :error="errorForm.phone"
              />
              <InputPassword
                v-model="password"
                label=" Password"
                placeholder="Masukkan password kamu di sini"
                class-name="text-sm lg:text-base "
                class-label="text-gray-secondary !text-sm !lg:text-base"
                @keyup="validationForm('password')"
                :error="errorForm.password"
              />
              <InputPassword
                v-model="retypePassword"
                label="Konfirmasi Password"
                class-name="text-sm lg:text-base "
                placeholder="Ketik ulang password kamu di sini"
                class-label="text-gray-secondary !text-sm !lg:text-base dm-sans"
                @keyup="validationForm('retypePassword')"
                :error="errorForm.retypePassword"
              />
            </div>
            <div class="px-3 lg:px-0">
              <Button
                @click="onClickRegister"
                add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-base font-bold mt-8 lg:mt-11 dm-sans"
                :is-loading="isLoading"
                >Daftar</Button
              >
              <p
                class="pt-3 pb-3 lg:pb-0 lg:pt-8 text-center dm-sans text-sm lg:text-base text-gray-secondary"
              >
                Sudah punya akun?
                <span
                  class="text-[#08A081] cursor-pointer"
                  @click="$router.push('/login')"
                  >Login</span
                >
              </p>
            </div>
          </form>
        </div>
        <div v-else class="xl:w-[518px] mt-20 xl:mt-0">
          <img
            class="mx-auto"
            src="/images/register/success.svg"
            alt="pendaftaran berhasil"
          />
          <h2
            class="text-[#00BA88] font-bold text-center mt-[16px] lg:text-[24px]"
          >
            Registrasi Berhasil
          </h2>
          <p class="text-[14px] lg:text-base text-center mt-[4px]">
            Silakan cek email kamu untuk melakukan verifikasi
          </p>
          <div class="flex space-x-3 items-center justify-center mt-[8px]">
            <p class="text-center dm-sans text-sm text-slate-500">
              Tidak menemukan email?
              <span
                v-if="isResendEmailActive"
                class="text-[#08A081] cursor-pointer underline"
                @click="resendVerificationEmail"
                >Kirim ulang email</span
              >
              <span v-else-if="!isLoadingResendEmail">{{
                resendEmailCounter
              }}</span>
            </p>
            <Spinner v-if="isLoadingResendEmail" />
          </div>
        </div>
      </div>
    </main>

    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import UserService from '~/services/UserServices';
import Button from '~/components/atoms/Button.vue';
import Spinner from '~/components/atoms/Spinner.vue';
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import {
  capitalizeFirstLetter,
  formatPhoneNumber,
} from '~/helpers/word-transformation.js';

export default {
  components: {
    Input,
    Button,
    InputPassword,
    Spinner,
    Snackbar,
  },
  data() {
    return {
      UserService,
      formWidth: 'lg:w-[60%]',
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      retypePassword: '',
      errorForm: {
        email: {
          isError: false,
          message: '',
        },
        name: {
          isError: false,
          message: '',
        },
        phone: {
          isError: false,
          message: '',
        },
        password: {
          isError: false,
          message: '',
        },
        retypePassword: {
          isError: false,
          message: '',
        },
      },
      isRegisterSuccess: false,
      registerData: {},
      isLoading: false,
      resendEmailCounter: 0,
      isResendEmailActive: true,
      isLoadingResendEmail: false,
    };
  },
  mounted() {
    this.checkAuth();
    this.UserService = new UserService(this);
  },
  methods: {
    checkAuth() {
      const accesToken = this.$cookies.get('ATS');
      const refreshToken = this.$cookies.get('RTS');

      if (accesToken && refreshToken) {
        this.$router.push('/');
      }
    },
    onClickRegister() {
      if (this.validationForm()) {
        this.submit();
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validationForm(input) {
      const { email, name, phoneNumber, password, retypePassword } = this;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const idnPhoneFormat = /^[0-9]+$/;
      let isValid = true;
      let errorTemp = {
        email: {
          isError: false,
          message: '',
        },
        name: {
          isError: false,
          message: '',
        },
        phone: {
          isError: false,
          message: '',
        },
        password: {
          isError: false,
          message: '',
        },
        retypePassword: {
          isError: false,
          message: '',
        },
      };

      if (input === 'email' || !input) {
        if (email === '') {
          errorTemp.email = {
            isError: true,
            message: 'Email harus diisi',
          };
          isValid = false;
        } else if (!this.validateEmail(email)) {
          errorTemp.email = {
            isError: true,
            message: 'Format email salah. cth: john@mail.com',
          };
          isValid = false;
        }
      }

      if (input === 'name' || !input) {
        if (name === '') {
          errorTemp.name = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!name.match(nameFormat)) {
          errorTemp.name = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'phone' || !input) {
        if (phoneNumber === '') {
          errorTemp.phone = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          isValid = false;
        } else if (!phoneNumber.match(idnPhoneFormat)) {
          errorTemp.phone = {
            isError: true,
            message: 'Format nomor whatsapp salah',
          };
          isValid = false;
        }
      }

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
    async submit() {
      this.isLoading = true;
      const payload = {
        name: capitalizeFirstLetter(this.name),
        email: this.email,
        phoneNumber: formatPhoneNumber(this.phoneNumber),
        password: this.password,
      };
      try {
        const { UserService } = this;
        const fetchRegister = await UserService.register(payload);
        if (fetchRegister.data) {
          const data = fetchRegister.data.meta.message;
          this.registerData = data;
          this.isRegisterSuccess = true;
        } else {
          throw new Error(fetchRegister);
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          this.$refs.snackbar.showSnackbar({
            message: `Email sudah terdaftar. Silakan login atau reset password di halaman login jika kamu lupa password`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        } else {
          this.$refs.snackbar.showSnackbar({
            message: `Terjadi kesalahan. Coba beberapa saat lagi atau hubungi admin`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        }
      }
      this.isLoading = false;
    },
    async resendVerificationEmail() {
      this.isResendEmailActive = false;
      this.isLoadingResendEmail = true;
      const { UserService } = this;
      const { email } = this.registerData;
      try {
        const fetchResendEmail = await UserService.resendVerificationEmail(
          email
        );
        if (fetchResendEmail.data) {
          this.resendEmailCounter = 15;
          this.isLoadingResendEmail = false;
          this.$refs.snackbar.showSnackbar({
            message: `Email berhasil dikirim. Silakan cek email kamu`,
            className: '',
            color: 'bg-green-400',
            duration: 3000,
          });
          await this.RunCountdown();
        }
      } catch (error) {
        this.isLoadingResendEmail = false;
        console.log(error);
        this.$refs.snackbar.showSnackbar({
          message: `Terjadi kesalahan. Coba beberapa saat lagi atau hubungi admin`,
          className: '',
          color: 'bg-red-400',
          duration: 4000,
        });
      }
    },
    async RunCountdown() {
      const countdownInterval = setInterval(() => {
        if (this.resendEmailCounter > 0) {
          this.resendEmailCounter--;
        } else {
          clearInterval(countdownInterval);
          this.isResendEmailActive = true;
        }
      }, 1000);
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
  .hero-register {
    background-color: #c7f5ec;
    position: relative;
  }
  .hero-register::before {
    content: '';
    background-image: url('/images/background/bg-layer-mobile.png');
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
  }
}
@media only screen and (min-width: 1024px) {
  .hero-register {
    background-color: white;
  }
}
</style>
