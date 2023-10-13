<template>
  <div class="w-full min-h-screen h-full hero-register">
    <main
      class="px-4 sm:px-[1rem] md:px-[2rem] xl:px-0 pb-4 xl:pb-0 xl:!flex xl:grid-cols-none xl:justify-between"
    >
      <div id="bg-register" class="hidden xl:block h-screen w-max">
        <img
          class="h-full"
          src="/images/background/bg-register.png"
          alt="daftar"
        />
      </div>
      <div class="w-full sm:max-w-[478px] mx-auto xl:hidden pt-8">
        <nuxt-link to="/">
          <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
        </nuxt-link>
      </div>
      <div
        class="xl:bg-white relative xl:mt-0 rounded-[12px] xl:rounded-none xl:w-[53%] xl:h-screen xl:flex xl:items-center xl:justify-center"
      >
        <div class="xl:w-[518px]">
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
              src="/images/illustration/register-mobile.png"
              alt="login"
              class="w-full object-contain lg:hidden"
            />
            <div class="px-3 lg:px-0 mt-3 lg:mt-0">
              <h1 class="text-[26px] font-bold text-[#49A794]">
                Buat Akun Disini
              </h1>
              <p class="text-base text-gray-secondary dm-sans pt-1 lg:pt-0">
                Silakan buat akun Kamu disini.
              </p>
            </div>
            <div class="space-y-3 lg:space-y-4 mt-3 lg:mt-8 px-3 lg:px-0">
              <Input
                v-model="name"
                label="Nama Lengkap"
                id="name"
                name="name"
                placeholder="Masukkan nama kamu disini"
                class-name="text-sm lg:text-base "
                class-label="text-gray-secondary !text-sm !lg:text-base"
                @keyup="validationForm('name')"
                :error="errorForm.name"
              />
              <Input
                v-model="email"
                label="Email"
                placeholder="Masukkan email kamu disini"
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
                placeholder="Masukkan  password kamu disini"
                class-name="text-sm lg:text-base "
                class-label="text-gray-secondary !text-sm !lg:text-base"
                @keyup="validationForm('password')"
                :error="errorForm.password"
              />
              <InputPassword
                v-model="retypePassword"
                label="Konfirmasi Password"
                class-name="text-sm lg:text-base "
                placeholder="Ketik ulang password kamu disini"
                class-label="text-gray-secondary !text-sm !lg:text-base dm-sans"
                @keyup="validationForm('retypePassword')"
                :error="errorForm.retypePassword"
              />
            </div>
            <div class="px-3 lg:px-0">
              <Button
                @click="onClickRegister"
                add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-base font-bold mt-8 lg:mt-11 dm-sans"
                >Daftar</Button
              >
              <p
                class="pt-3 pb-3 lg:pb-0 lg:pt-8 text-center dm-sans text-sm lg:text-base text-gray-secondary"
              >
                Sudah punya akun?
                <span
                  class="text-[#08A081] cursor-pointer"
                  @click="$router.push('/user/login')"
                  >Login</span
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UserService from '~/services/UserServices';
import Button from '../../../components/atoms/Button.vue';
import Input from '../../../components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import {
  currencyFormat,
  capitalizeFirstLetter,
  formatPhoneNumber,
} from '~/helpers/word-transformation.js';

export default {
  components: {
    Input,
    Button,
    InputPassword,
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
    };
  },
  mounted() {
    this.UserService = new UserService(this);
  },
  methods: {
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
        console.log(name);
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
          console.log('phone empty');
          errorTemp.phone = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          isValid = false;
        } else if (!phoneNumber.match(idnPhoneFormat)) {
          console.log('phone format incorrect');
          errorTemp.phone = {
            isError: true,
            message: 'Format nomor whatsapp salah',
          };
          isValid = false;
        }
      }

      if (input === 'password' || !input) {
        console.log(password);
        if (password === '') {
          console.log('empty');
          errorTemp.password = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        }
      }

      if (input === 'retypePassword' || !input) {
        if (retypePassword === '') {
          console.log('emptyt retype');
          errorTemp.retypePassword = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        } else if (password !== retypePassword) {
          console.log('unmatch');
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
          console.log(fetchRegister.data);
        } else {
          throw new Error(fetchRegister);
        }
      } catch (error) {
        console.log(error);
      }
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
  }
}
@media only screen and (min-width: 1024px) {
  .hero-register {
    background-color: white;
  }
}
</style>
