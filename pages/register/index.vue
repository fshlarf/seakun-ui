<template>
  <div
    class="w-full min-h-screen h-full"
    :class="`${isRegisterSuccess ? 'bg-white' : 'hero-register'}`"
  >
    <nuxt-link class="hidden lg:block absolute z-10 top-12 left-24" to="/">
      <img
        class="w-[120px]"
        src="/images/brand-seakun/seakunid-white.svg"
        alt="logo seakun"
      />
    </nuxt-link>
    <main
      class="px-4 sm:px-[1rem] md:px-[2rem] lg:px-0 pb-4 lg:pb-0 lg:!flex lg:grid-cols-none lg:justify-between"
    >
      <div
        id="bg-register"
        class="hidden lg:block h-full min-h-screen lg:w-[47%] bg-cover bg-center relative"
        style="background-image: url(/images/background/bg-register.webp)"
      ></div>
      <div class="max-w-max lg:hidden pt-8 relative z-40">
        <nuxt-link to="/login">
          <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
        </nuxt-link>
      </div>
      <div
        class="lg:bg-white relative mt-4 lg:mt-0 rounded-[12px] lg:rounded-none lg:w-[53%] lg:h-screen lg:flex lg:items-center lg:justify-center lg:pb-10"
      >
        <div v-if="!isRegisterSuccess" class="lg:w-[518px]">
          <img
            src="/images/background/right-register.png"
            alt="ilustration"
            class="absolute top-0 right-0 hidden xl:block"
          />
          <div
            class="w-full rounded-xl lg:rounded-none bg-white sm:max-w-[478px] mx-auto pt-1 pb-5 px-1 lg:px-5 mt-3 lg:mt-[60px]"
          >
            <form @submit.prevent="submit">
              <img
                src="/images/background/bg-register-mobile.webp"
                alt="register"
                class="w-full object-contain lg:hidden rounded-lg"
              />
              <div class="px-3 lg:px-0 mt-4 lg:mt-0">
                <h1 class="text-base lg:text-[26px] font-bold text-[#49A794]">
                  Buat Akun di Sini
                </h1>
                <p
                  class="text-sm lg:text-base text-[#474747] dm-sans mt-1 pt-1 lg:pt-0"
                >
                  Sudah punya akun?
                  <span
                    @click="$router.push('/login')"
                    class="cursor-pointer text-green-primary hover:opacity-70 underline underline-offset-2"
                    >Login</span
                  >
                </p>
              </div>
              <div class="space-y-3 lg:space-y-4 mt-3 lg:mt-8 px-4 lg:px-0">
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
                <p class="text-sm">Nomor Whatsapp</p>
                <div class="flex gap-3 !mt-2">
                  <div
                    class="border h-full p-3 rounded-lg flex gap-1 items-center cursor-pointer"
                    @click="isShowModalCountry = true"
                  >
                    <img
                      :src="`/images/flags/${selectedCountry.slug}.png`"
                      :alt="selectedCountry.name"
                      class="w-[26px] h-4.5 lg:h-5 border border-[#E7E7E7]"
                    />
                    <img
                      src="/images/icons/atoms/up-triangle.svg"
                      alt="triangle"
                      class="w-[15px] h-[15px]"
                    />
                  </div>
                  <div class="relative w-full">
                    <div
                      id="phone-number-code"
                      class="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-[#A0A3BD]"
                    >
                      <div class="relative">
                        <p class="text-sm lg:text-base">
                          {{ selectedCountry.dialCode }}
                        </p>
                        <div
                          class="absolute w-[1px] bg-[#C5C7DB80] h-full top-1/2 -translate-y-1/2 -right-2 ml-4"
                        ></div>
                      </div>
                    </div>
                    <Input
                      v-model="phoneNumber"
                      :class-input="[
                        selectedCountry.dialCode.length <= 3
                          ? 'pl-[52px]'
                          : selectedCountry.dialCode.length == 4
                          ? 'pl-[62px]'
                          : 'pl-[72px]',
                        'relative',
                      ]"
                      :placeholder="placeholderVal"
                      class-name="text-sm lg:text-base "
                      class-label="text-gray-secondary !text-sm !lg:text-base "
                      @keyup="validationForm('phone')"
                      :error="errorForm.phone"
                      class-error="absolute top-[105%]"
                    >
                    </Input>
                  </div>
                </div>
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
                <div class="flex items-start gap-2 mt-11">
                  <Checkbox add-class="w-5 h-5 pt-1" @getval="handleCheckbox" />
                  <p class="text-xs lg:text-sm text-main leading-[18px]">
                    Dengan mendaftar, saya menyetujui
                    <a class="text-primary" href="/terms-of-use" target="_blank"
                      >Syarat dan Ketentuan Seakun</a
                    >, serta
                    <a
                      class="text-primary"
                      href="/privacy-policy"
                      target="_blank"
                      >Kebijakan Privasi</a
                    >
                  </p>
                </div>
              </div>
              <div class="px-3 lg:px-0">
                <Button
                  @click="onClickRegister"
                  add-class="text-sm lg:text-base bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-base font-bold mt-4 lg:mt-7 dm-sans"
                  :is-loading="isLoading"
                  :disabled="!isAgreeWithTerms"
                  >Daftar</Button
                >
              </div>
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
            Silakan cek email kamu untuk melakukan verifikasi. Link verifikasi
            hanya berlaku selama 12 jam. Jika tidak ada email masuk, periksa
            spam/junk di email kamu.
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

    <ModalCountry
      v-if="isShowModalCountry"
      @clickOption="getCountryOption"
      :country-list="internationalPhoneNumbers"
      :selected="selectedCountry"
    />

    <ModalAlreadyRegistered
      :is-show="isShowAlreadyRegistered"
      :email="email"
      @close="onCloseModalAlreadyRegistered"
    />
  </div>
</template>

<script>
import ModalCountry from './views/modal-country.vue';
import ModalAlreadyRegistered from './views/modal-already-registered.vue';
import UserService from '~/services/UserServices';
import Button from '~/components/atoms/Button.vue';
import Spinner from '~/components/atoms/Spinner.vue';
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Checkbox from '../../components/atoms/Checkbox.vue';
import { capitalizeFirstLetter } from '~/helpers/word-transformation.js';
import { internationalPhoneNumbers } from '~/constants/code-phone';

export default {
  components: {
    Input,
    Button,
    InputPassword,
    Spinner,
    ModalCountry,
    Checkbox,
    ModalAlreadyRegistered,
  },
  data() {
    return {
      UserService,
      internationalPhoneNumbers,
      formWidth: 'lg:w-[60%]',
      isShowModalCountry: false,
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      retypePassword: '',
      placeholderVal: '',
      selectedCountry: internationalPhoneNumbers[0],
      isAgreeWithTerms: false,
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
      isShowAlreadyRegistered: false,
    };
  },
  mounted() {
    this.checkAuth();
    this.UserService = new UserService(this);
    if (window.innerWidth >= 768) {
      this.placeholderVal = 'Masukkan Nomor Whatsapp';
    } else this.placeholderVal = 'Nomor Whatsapp';
  },
  methods: {
    onCloseModalAlreadyRegistered() {
      this.isShowAlreadyRegistered = false;
    },
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
      const idnPhoneFormat = /^[8][0-9]*$/;
      const globalPhoneFormat = /^[0-9]*$/;
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
        } else if (
          this.selectedCountry.dialCode == '+62' &&
          !phoneNumber.match(idnPhoneFormat)
        ) {
          errorTemp.phone = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 8123456789',
          };
          isValid = false;
        } else if (
          this.selectedCountry.dialCode != '+62' &&
          !phoneNumber.match(globalPhoneFormat)
        ) {
          errorTemp.phone = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 8123456789',
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
      const countryCode = this.selectedCountry.dialCode.slice(1);
      const payload = {
        name: capitalizeFirstLetter(this.name),
        email: this.email,
        phoneNumber: countryCode + this.phoneNumber,
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
          this.isShowAlreadyRegistered = true;
        } else if (error.response.status === 403) {
          this.$alert.show({
            status: 'error',
            title: 'Nomor whatsapp tidak valid',
            message: 'Pastikan nomor whatsapp kamu sudah benar',
            duration: 6000,
          });
        } else {
          this.$alert.show({
            status: 'error',
            message:
              'Terjadi kesalahan. Coba beberapa saat lagi atau hubungi admin',
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
          this.$alert.show({
            status: 'success',
            message: 'Email berhasil dikirim. Silakan cek email kamu',
          });
          await this.RunCountdown();
        }
      } catch (error) {
        this.isLoadingResendEmail = false;
        console.log(error);
        this.$alert.show({
          status: 'error',
          message:
            'Terjadi kesalahan. Coba beberapa saat lagi atau hubungi admin',
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
    getCountryOption(val) {
      this.selectedCountry = val;
      this.isShowModalCountry = !this.isShowModalCountry;
    },
    handleCheckbox(val) {
      this.isAgreeWithTerms = val;
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
