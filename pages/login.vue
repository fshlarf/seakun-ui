<template>
  <div class="w-full min-h-screen hero-login">
    <nuxt-link class="hidden lg:block absolute z-10 top-12 left-24" to="/">
      <img
        class="w-[120px]"
        src="/images/brand-seakun/seakunid-white.svg"
        alt="logo seakun"
      />
    </nuxt-link>
    <main class="container !px-4 pb-4 lg:pb-0">
      <div class="max-w-max lg:hidden pt-8 relative z-40">
        <nuxt-link to="/">
          <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
        </nuxt-link>
      </div>
      <div
        class="mt-4 lg:mt-0 relative lg:fixed z-40 lg:top-[110px] lg:left-1/2 lg:-translate-x-1/2 bg-white pb-5 p-1 lg:p-5 lg:pb-8 rounded-[12px] mx-auto w-full sm:max-w-[478px]"
      >
        <img
          src="/images/background/bg-register-mobile.webp"
          alt="login"
          class="w-full object-contain lg:hidden rounded-lg"
        />
        <h1
          class="text-base md:text-xl lg:text-[26px] font-bold text-[#49A794] pt-4 lg:pt-0 pl-3"
        >
          Login
        </h1>
        <p
          class="text-sm lg:text-base text-[#474747] dm-sans pt-1 lg:pt-0 pl-3 mt-1"
        >
          Belum punya akun?
          <span
            @click="$router.push('/register')"
            class="cursor-pointer text-green-primary hover:opacity-70 underline underline-offset-2"
            >Daftar</span
          >
        </p>
        <form class="mt-5 lg:mt-6 px-3" @submit.prevent="submit">
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
            @pressEnter="onClickLogin"
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
              @click="$router.push('/user/forget-password')"
            >
              Lupa password?
            </p>
          </div>
          <Button
            @click="onClickLogin"
            :is-loading="isLoading"
            add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-7 lg:mt-9 dm-sans"
            >Login</Button
          >
        </form>
        <!-- <section class="px-3 mt-4 space-y-4 lg:space-y-6">
          <div class="text-center h-max relative">
            <div class="dividing-line text-[#B3B0C8]">
              <p class="bg-white w-max mx-auto relative px-2 z-30">atau</p>
            </div>
          </div>
          <div class="border rounded-lg py-2 cursor-pointer">
            <section class="w-full flex justify-center items-center gap-2">
              <img
                src="/images/icons/icon-google.svg"
                alt="google"
                class="w-7 h-7"
              />
              <p class="text-sm lg:text-base">Lanjutkan dengan Google</p>
            </section>
          </div>
        </section> -->
      </div>
    </main>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Button from '~/components/atoms/Button.vue';
import Checkbox from '~/components/atoms/Checkbox.vue';
import {
  setToken,
  setUid,
  setUsername,
  setCustomerUid,
  setAvatar,
} from '~/helpers/tokenAuth';
import AuthService from '~/services/AuthServices';
import { mapActions } from 'vuex';

export default {
  components: {
    Input,
    InputPassword,
    Button,
    Checkbox,
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
      deviceOS: 'web',
      scope: 'web',
    };
  },
  mounted() {
    this.checkAuth();
    this.checkLoginDataInLocalStorage();
    this.AuthService = new AuthService(this);
  },
  methods: {
    ...mapActions({
      setUserAvatar: 'setUserAvatar',
    }),
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
        const timestamp = new Date().getTime();
        const fetchLogin = await this.AuthService.login(
          this.email,
          this.password,
          this.deviceOS,
          timestamp.toString(),
          this.scope
        );
        const {
          accessToken,
          refreshToken,
          exp,
          uid,
          username,
          customerUid,
          avatar,
        } = fetchLogin.data.data;
        setToken(this, { accessToken, refreshToken, exp });
        setUid(this, uid);
        setUsername(this, username);
        setCustomerUid(this, customerUid);
        setAvatar(this, avatar);
        this.setUserAvatar(avatar);
        if (this.isRememberMe) {
          this.setLocalStorageLoginData();
        } else {
          localStorage.removeItem('login_data');
        }
        this.$router.push({ path: '/' });
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.$alert.show({
            status: 'error',
            title: 'Login gagal',
            message: 'Email atau password salah',
          });
        } else if (error.response.status === 404) {
          this.$alert.show({
            status: 'error',
            title: 'Login gagal',
            message: 'Email tidak ditemukan',
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
@media only screen and (max-width: 1020px) {
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
    background-image: url('/images/background/bg-login.webp');
    background-size: cover;
  }
}
.dividing-line::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  background-color: #b3b0c859;
  height: 1px;
}
</style>
