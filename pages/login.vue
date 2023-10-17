<template>
  <div class="w-full min-h-screen hero-login">
    <main class="container !px-4 pb-4 lg:pb-0">
      <section>
        <div class="w-full sm:max-w-[478px] mx-auto lg:hidden pt-8">
          <nuxt-link to="/">
            <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
          </nuxt-link>
        </div>
      </section>
      <div
        class="mt-4 lg:mt-0 relative lg:fixed z-40 lg:top-[110px] lg:left-1/2 lg:-translate-x-1/2 bg-white p-1 lg:p-5 rounded-[15px] mx-auto w-full sm:max-w-[478px]"
      >
        <img
          src="/images/background/bg-register-mobile.png"
          alt="login"
          class="w-full object-contain lg:hidden rounded-lg"
        />
        <h1
          class="text-base md:text-xl lg:text-[26px] font-bold text-[#49A794] pt-5 lg:pt-0 pl-3 lg:pl-0"
        >
          Selamat Datang
        </h1>
        <p
          class="text-gray-secondary dm-sans pt-1 lg:pt-0 pl-3 lg:pl-0 text-sm lg:text-base"
        >
          Silahkan masuk ke akun kamu.
        </p>
        <form class="mt-5 lg:mt-8 px-3" @submit.prevent="submit">
          <label
            for="email"
            class="text-gray-secondary !text-sm !lg:text-base dm-sans pb-2 block"
            >Email</label
          >
          <Input
            v-model="email"
            id="email"
            name="email"
            placeholder="Masukkan email"
            class-name="text-sm lg:text-base "
            @keyup="validationForm('email')"
            :error="errorForm.email"
          />

          <InputPassword
            v-model="password"
            label="Password"
            class-label="text-gray-secondary !text-sm !lg:text-base dm-sans mt-4 block"
            class-name="text-sm lg:text-base "
            placeholder="Masukkan password kamu disini"
            @keyup="validationForm('password')"
            :error="errorForm.password"
          />
          <div
            class="mt-5 lg:mt-4 flex justify-between items-center dm-sans text-sm lg:text-base"
          >
            <section class="flex gap-2 lg:gap-3 items-center">
              <Checkbox
                @getval="getValCheckbox"
                add-class="lg:w-6 lg:h-6 w-4 h-4"
              />
              <p>Ingatkan saya</p>
            </section>
            <p
              class="text-[#25BCAF] cursor-pointer"
              @click="$router.push('/user/forgot-password')"
            >
              Lupa password?
            </p>
          </div>
          <Button
            @click="onClickLogin"
            :is-loading="isLoading"
            add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-base font-bold mt-7 lg:mt-11 dm-sans"
            >Login</Button
          >
          <p
            class="py-5 lg:pb-0 lg:pt-8 text-center dm-sans text-sm lg:text-base text-gray-secondary"
          >
            Belum punya akun?
            <span
              class="text-[#08A081] cursor-pointer"
              @click="$router.push('/register')"
              >Daftar</span
            >
          </p>
        </form>
      </div>
    </main>

    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Button from '~/components/atoms/Button.vue';
import Checkbox from '~/components/atoms/Checkbox.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import { setToken, setUid, setUsername } from '~/helpers/tokenAuth';
import AuthService from '~/services/AuthServices';

export default {
  components: {
    Input,
    InputPassword,
    Button,
    Checkbox,
    Snackbar,
  },
  data() {
    return {
      AuthService,
      isRememberMe: false,
      email: '',
      password: '',
      isLoading: false,
      errorForm: {
        email: {
          isError: false,
          message: '',
        },
        password: {
          isError: false,
          message: '',
        },
      },
    };
  },
  mounted() {
    this.checkAuth();
    this.checkLoginDataInLocalStorage();
    this.AuthService = new AuthService(this);
  },
  methods: {
    checkAuth() {
      const accesToken = this.$cookies.get('ATS');
      const refreshToken = this.$cookies.get('RTS');

      if (accesToken && refreshToken) {
        this.$router.push('/');
      }
    },
    checkLoginDataInLocalStorage() {
      const savedLoginData = JSON.parse(localStorage.getItem('login_data'));
      if (savedLoginData) {
        this.email = savedLoginData.email;
        this.password = savedLoginData.password;
        this.isRememberMe = savedLoginData.isRememberMe;
      }
    },
    getValCheckbox(val) {
      this.isRememberMe = val;
    },
    onClickLogin() {
      if (this.validationForm()) {
        this.login();
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validationForm(input) {
      const { email, password } = this;
      let isValid = true;
      let errorTemp = {
        email: {
          isError: false,
          message: '',
        },
        password: {
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

      if (input === 'password' || !input) {
        if (password === '') {
          errorTemp.password = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        }
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    async login() {
      this.isLoading = true;
      try {
        const fetchLogin = await this.AuthService.login(
          this.email,
          this.password
        );
        const {
          accessToken,
          refreshToken,
          exp,
          uid,
          username,
        } = fetchLogin.data.data;
        setToken(this, { accessToken, refreshToken, exp });
        setUid(this, uid);
        setUsername(this, username);
        if (this.isRememberMe) {
          this.setLocalStorageLoginData();
        } else {
          localStorage.removeItem('login_data');
        }
        this.$router.push({ path: '/' });
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.$refs.snackbar.showSnackbar({
            message: `Email atau password salah`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        } else if (error.response.status === 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Email tidak ditemukan`,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
          });
        }
      }
      this.isLoading = false;
    },
    setLocalStorageLoginData() {
      const { isRememberMe, email, password } = this;
      const dataLogin = {
        email: email,
        password: password,
        isRememberMe: isRememberMe,
      };
      localStorage.setItem('login_data', JSON.stringify(dataLogin));
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
  .hero-login {
    background-color: #c7f5ec;
    position: relative;
    z-index: 0;
  }
  .hero-login::before {
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
  .hero-login {
    background-image: url('/images/background/bg-login.png');
    background-size: cover;
  }
}
</style>
