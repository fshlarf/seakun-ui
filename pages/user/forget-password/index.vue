<template>
  <div class="w-full min-h-screen bg-[#EBFFFB] lg:bg-white">
    <div class="lg:grid grid-cols-2 px-4 sm:px-[1rem] md:px-[2rem] lg:px-0">
      <section
        class="relative w-full min-h-screen bg-[#DFFFF8] hidden lg:block"
      >
        <nuxt-link to="/">
          <img
            src="/images/brand-seakun/seakun-green.svg"
            alt="seakun"
            class="w-[120px] h-[29px] absolute top-[61px] left-[59px]"
          />
        </nuxt-link>
        <img
          src="/images/user/forgot-password.svg"
          alt="illustration"
          class="mx-auto w-full"
        />
      </section>
      <div class="w-full pt-8 lg:pt-0">
        <div class="w-full sm:max-w-[478px] mx-auto">
          <div class="w-full mx-auto lg:hidden">
            <nuxt-link to="/login">
              <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
            </nuxt-link>
          </div>
          <section
            class="p-1 lg:p-5 bg-white card-wrapper rounded-xl lg:rounded-none mt-4 lg:mt-0"
          >
            <img
              src="/images/profile-page/group-send.svg"
              alt="forgot-password"
              class="absolute w-[130px] h-[200px] right-0 top-0 hidden lg:block"
            />
            <div v-if="!isEmailSent" class="mx-auto lg:mt-[148px]">
              <img
                src="/images/illustration/forgot-password/request-mobile.webp"
                alt="email"
                class="w-full lg:hidden"
              />
              <div class="mt-5 lg:mt-0 px-4 pb-5 lg:pb-0 lg:px-0">
                <h1 class="text-base lg:text-[26px] font-bold text-[#49A794]">
                  Lupa Password
                </h1>
                <p
                  class="text-sm lg:text-base text-gray-secondary dm-sans mt-[8px]"
                >
                  Kami akan mengirim link ubah password ke email Kamu
                </p>
                <Input
                  v-model="email"
                  id="email"
                  email="email"
                  label="Alamat Email"
                  class-label="!text-sm lg:!text-base"
                  placeholder="Masukkan alamat email kamu"
                  class="mt-5 lg:mt-[32px] !text-sm !lg:text-base"
                  @keyup="validateForm()"
                  :error="errorEmail"
                />
                <Button
                  @click="onClickSendEmail"
                  add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-7 lg:mt-8 dm-sans "
                  :is-loading="isLoadingSendEmail"
                  >Kirim</Button
                >
              </div>
            </div>
            <div v-else class="mx-auto lg:mt-[148px]">
              <img
                class="mx-auto"
                src="/images/illustration/send-email.png"
                alt="email berhasil dikirim"
              />
              <h2
                class="text-[#00BA88] font-bold text-center mt-[16px] lg:text-[24px]"
              >
                Email Berhasil dikirim
              </h2>
              <p class="text-[14px] lg:text-base text-center mt-[4px]">
                Silakan cek email kamu untuk membuat password baru. Token ubah
                password berlaku selama 12 jam.
              </p>
              <div class="flex space-x-3 items-center justify-center mt-[8px]">
                <p class="text-center dm-sans text-sm text-slate-500">
                  Tidak menemukan email?
                  <span
                    v-if="isResendEmailActive"
                    class="text-[#08A081] cursor-pointer underline"
                    @click="sendForgotPasswordEmail"
                    >Kirim ulang email</span
                  >
                  <span v-else-if="!isLoadingSendEmail">{{
                    resendEmailCounter
                  }}</span>
                </p>
                <Spinner v-if="isLoadingSendEmail" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
import Spinner from '~/components/atoms/Spinner.vue';
import UserService from '~/services/UserServices';

export default {
  components: {
    Input,
    Button,
    Spinner,
  },
  data() {
    return {
      UserService,
      email: '',
      isLoadingSendEmail: false,
      resendEmailCounter: 0,
      isResendEmailActive: false,
      isEmailSent: false,
      errorEmail: {
        isError: false,
        message: '',
      },
    };
  },
  mounted() {
    this.UserService = new UserService(this);
  },
  methods: {
    onClickSendEmail() {
      if (this.validateForm()) {
        this.sendForgotPasswordEmail();
      }
    },
    validateForm() {
      const { email } = this;
      let isValid = true;
      if (email === '') {
        this.errorEmail = {
          isError: true,
          message: 'Email harus diisi',
        };
        isValid = false;
      } else if (!this.validateEmail(email)) {
        this.errorEmail = {
          isError: true,
          message: 'Format email salah. cth: john@mail.com',
        };
        isValid = false;
      } else {
        this.errorEmail = {
          isError: false,
          message: '',
        };
        isValid = true;
      }
      return isValid;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async sendForgotPasswordEmail() {
      const { UserService } = this;
      this.isLoadingSendEmail = true;
      try {
        const fetchSendEmail = await UserService.sendForgotPasswordEmail(
          this.email
        );
        if (fetchSendEmail.data) {
          this.isEmailSent = true;
          this.resendEmailCounter = 15;
          this.isLoadingSendEmail = false;
          this.isResendEmailActive = false;
          this.$alert.show({
            status: 'success',
            message: 'Email berhasil dikirim',
          });
          await this.RunCountdown();
        }
      } catch (error) {
        console.log(error);
        this.isLoadingSendEmail = false;
        this.$alert.show({
          status: 'error',
          message:
            'Gagal mengirim email. Pastikan kamu menginput email yang sama dengan email registrasi.',
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
  .card-wrapper {
    box-shadow: 0px 2px 10px 0px rgba(160, 163, 189, 0.1);
  }
}
</style>
