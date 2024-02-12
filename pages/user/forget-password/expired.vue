<template>
  <div class="w-full h-screen pt-4 lg:pt-[148px]">
    <div class="mx-auto max-w-[400px] p-4">
      <div v-if="!isEmailSent">
        <img
          class="mx-auto"
          src="/images/user/forget-password-expired.svg"
          alt="token kadaluarsa"
        />
        <h2
          class="text-[#00BA88] font-bold text-center mt-[16px] lg:text-[24px]"
        >
          Link Sudah Kedaluarsa
        </h2>
        <p class="text-[14px] lg:text-base text-center mt-[4px]">
          Masa aktif link hanya berlaku selama 12 jam. Silakan masukkan email
          untuk mengirim ulang email reset password
        </p>
        <Input
          v-model="email"
          id="email"
          class-label="!text-sm lg:!text-base"
          placeholder="Masukkan alamat email kamu"
          class="mt-5 lg:mt-[32px] !text-sm !lg:text-base"
          @keyup="validateEmail()"
          :error="errorEmail"
        />
        <Button
          @click="onClickSendEmail"
          add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-4 lg:mt-6 dm-sans "
          :is-loading="isLoadingSendEmail"
          >Kirim</Button
        >
      </div>
      <div v-else>
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
          Silakan cek email kamu untuk membuat password baru. Link ubah password
          berlaku selama 12 jam.
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
    validateEmail() {
      const { email } = this;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isMatch = re.test(String(email).toLowerCase());
      let isValid = true;

      if (!email) {
        this.errorEmail = {
          isError: true,
          message: 'Format email salah',
        };
        isValid = false;
      } else if (!isMatch) {
        this.errorEmail = {
          isError: true,
          message: 'Format email salah',
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
    onClickSendEmail() {
      if (this.validateEmail()) {
        this.sendEmailResetPassword();
      }
    },
    async sendEmailResetPassword() {
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

<style></style>
