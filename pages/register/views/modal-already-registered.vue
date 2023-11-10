<template>
  <ModalBase :is-show="isShow" @onClose="close">
    <div
      v-if="!isSent"
      class="rounded-[12px] bg-white p-[24px] max-w-[95% md:max-w-[420px] text-sm lg:text-base"
    >
      <img
        class="mx-auto w-[150px] lg:w-[200px]"
        src="/images/register/already-registered.svg"
        alt="email sudah terdaftar"
      />
      <p class="text-center font-bold mt-4">
        Email {{ email }} Sudah Terdaftar
      </p>
      <p class="mt-2 text-center">
        Silakan klik reset password untuk mengatur ulang kata sandi
      </p>
      <div class="mt-[32px] w-full px-5 lg:px-3 pb-1">
        <Button
          @click="sendUpdatePasswordEmail"
          add-class="w-full text-white bg-primary py-4 text-center font-bold rounded-[8px]"
          :is-loading="isLoading"
          >Reset Password</Button
        >
      </div>
    </div>

    <div
      v-else
      class="rounded-[12px] bg-white p-[24px] md:max-w-[420px] text-sm lg:text-base"
    >
      <img
        class="mx-auto w-[150px] lg:w-[200px]"
        src="/images/register/email-sent.svg"
        alt="email sudah terkirim"
      />
      <p class="mt-4 text-center">
        Link untuk melakukan pengaturan ulang kata sandi sudah kami kirimkan ke
        email <b>{{ email }}</b
        >. Silakan cek inbox kamu
      </p>
      <div class="mt-[12px] flex justify-center gap-2">
        <p>Belum terima email dari kami?</p>
        <p
          role="button"
          @click="sendUpdatePasswordEmail"
          v-if="isResendEmailActive"
          class="text-blue-400 underline"
        >
          Kirim ulang
        </p>
        <p v-else>{{ resendEmailCounter }}</p>
      </div>
    </div>
  </ModalBase>
</template>

<script>
import UserService from '~/services/UserServices';
import Button from '~/components/atoms/Button';
import ModalBase from '~/components/atoms/ModalBase';

export default {
  components: {
    Button,
    ModalBase,
  },
  props: {
    email: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      UserService,
      isLoading: false,
      isSent: false,
      resendEmailCounter: 0,
      isResendEmailActive: false,
    };
  },
  mounted() {
    this.UserService = new UserService(this);
  },
  methods: {
    close() {
      this.$emit('close');
    },
    async sendUpdatePasswordEmail() {
      this.isLoading = true;
      const { email, UserService } = this;
      try {
        const fetchSendEmail = await UserService.sendForgotPasswordEmail(email);
        if (fetchSendEmail.data) {
          if (this.isSent) {
            this.$alert.show({
              status: 'success',
              message: 'Email berhasil dikirim',
            });
          }
          this.isSent = true;
          this.resendEmailCounter = 15;
          this.isLoading = false;
          this.isResendEmailActive = false;
          await this.RunCountdown();
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
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
  },
};
</script>

<style></style>
