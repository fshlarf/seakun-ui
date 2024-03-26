<template>
  <main>
    <div
      v-if="!isSent"
      class="bg-white p-4 md:p-5 lg:p-6 rounded-xl space-y-5 md:space-y-6 text-gray-secondary mt-6 md:mt-0"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <nuxt-link
        to="/user/profile"
        class="md:flex items-center gap-2 hidden max-w-max"
      >
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-sm">Kembali</p>
      </nuxt-link>
      <div>
        <h3 class="text-sm md:text-base lg:text-[20px] font-bold -mt-5 md:mt-0">
          Reset Password
        </h3>
        <p class="text-sm pt-2 leading-[18px] md:leading-5">
          Masukkan email yang terkait dengan akun kamu dan kami akan mengirimkan
          email berisi petunjuk untuk mengatur ulang kata sandi kamu.
        </p>
      </div>
      <Input
        v-model="email"
        label="Alamat Email"
        class-label="!text-sm md:!text-base !text-gray-secondary "
        class-name="!text-sm md:!text-base !text-gray-secondary "
        :error="errorEmail"
      />
      <div class="text-right">
        <Button
          @click="sendUpdatePasswordEmail"
          :is-loading="isLoading"
          class="text-white bg-green-primary border-2 border-green-primary w-full md:w-[166px] !text-sm md:!text-base h-[46px] font-bold"
          >Kirim Instruksi</Button
        >
      </div>
    </div>

    <div
      v-else
      class="bg-white p-6 rounded-xl text-gray-secondary mt-6 md:mt-0"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <nuxt-link to="/user/profile" class="flex items-center gap-2 mt-0">
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-xs">Kembali</p>
      </nuxt-link>
      <div class="py-6" v-if="isTooManyAttempt">
        <img
          class="mx-auto w-[220px]"
          src="/images/user/too-many-attempts.svg"
          alt="email overload"
        />
        <h2
          class="text-[#00BA88] font-bold text-center mt-[16px] lg:text-[24px]"
        >
          Oops! Silahkan Menghubungi Admin
        </h2>
        <p class="text-[14px] lg:text-base text-center mt-[4px]">
          Masih belum mendapatkan email? Silahkan hubungi admin Seakun agar
          admin dapat membantu proses perubahan password kamu.
        </p>
        <a
          class="w-full flex justify-center"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=6282124852232"
        >
          <Button
            class="mt-6 mx-auto px-6 py-3 text-[16px]"
            variant="primary"
            label="Hubungi admin"
          />
        </a>
      </div>
      <div v-else>
        <div class="text-center mt-6">
          <img
            src="/images/illustration/send-email.png"
            alt="check email"
            class="w-[125px] h-[115px] mx-auto"
          />
          <h3 class="text-gray-secondary text-[18px] font-bold mt-6">
            Cek Email Kamu
          </h3>
          <p class="text-sm text-gray-secondary mx-auto max-w-[400px]">
            Kami telah mengirimkan instruksi perubahan password ke email kamu.
            Link reset password hanya berlaku selama 12 jam. Jika tidak ada
            email masuk, periksa spam/junk di email kamu.
          </p>
          <div class="flex space-x-3 items-center justify-center mt-[8px]">
            <p class="text-center dm-sans text-sm text-slate-500">
              Tidak menemukan email?
              <span
                v-if="isResendEmailActive"
                class="text-[#08A081] cursor-pointer underline"
                @click="sendUpdatePasswordEmail"
                >Kirim ulang email</span
              >
              <span v-else-if="!isLoading">{{ resendEmailCounter }}</span>
            </p>
            <Spinner v-if="isLoading" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserService from '~/services/UserServices';
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
import Spinner from '~/components/atoms/Spinner.vue';

export default {
  layout: 'profile',
  components: {
    Input,
    Button,
    Spinner,
  },
  data() {
    return {
      UserService,
      isSent: false,
      isLoading: false,
      resendEmailCounter: 0,
      isResendEmailActive: false,
      email: '',
      errorEmail: {
        isError: false,
        message: '',
      },
      isTooManyAttempt: false,
    };
  },
  mounted() {
    this.UserService = new UserService(this);
  },
  methods: {
    async sendUpdatePasswordEmail() {
      const { email, UserService } = this;
      if (!email) {
        this.errorEmail = {
          isError: true,
          message: 'Email harus diisi',
        };
        return;
      } else if (!this.validateEmail(email)) {
        this.errorEmail = {
          isError: true,
          message: 'Format email salah. cth: john@mail.com',
        };
        return;
      }

      this.isLoading = true;
      try {
        const fetchSendEmail = await UserService.sendUpdatePasswordEmail(email);
        if (fetchSendEmail.data) {
          this.isSent = true;
          this.resendEmailCounter = 15;
          this.isLoading = false;
          this.isResendEmailActive = false;
          this.$alert.show({
            status: 'success',
            message: 'Email berhasil dikirim',
          });
          await this.RunCountdown();
        }
      } catch (error) {
        this.isLoading = false;
        if (error?.response?.status == 403) {
          this.isSent = true;
          this.isTooManyAttempt = true;
        } else {
          this.$alert.show({
            status: 'error',
            message: 'Gagal mengirim email. Pastikan email kamu sudah sesuai',
          });
        }
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
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

<style lang="scss" scoped></style>
