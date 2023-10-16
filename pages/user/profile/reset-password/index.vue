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
      class="bg-white p-6 rounded-xl text-gray-secondary"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <nuxt-link to="/user/profile" class="flex items-center gap-2 mt-0">
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-xs">Kembali</p>
      </nuxt-link>
      <div class="text-center mt-6">
        <img
          src="/images/illustration/send-email.png"
          alt="check email"
          class="w-[125px] h-[115px] mx-auto"
        />
        <h3 class="text-gray-secondary text-[18px] font-bold mt-6">
          Cek Email Kamu
        </h3>
        <p class="text-sm text-gray-secondary">
          Kami telah mengirimkan instruksi pemulihan kata sandi ke email Anda
        </p>
        <!-- <Button
          class="text-white mt-5 bg-green-primary border-2 border-green-primary w-[166px] !text-base h-[46px]"
          >Buka Email</Button
        >
        <p class="pt-5 text-sm text-[#999CA1]">Skip, nanti saya konfirmasi</p> -->
      </div>
    </div>

    <Snackbar ref="snackbar" />
  </main>
</template>

<script>
import UserService from '~/services/UserServices';
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';

export default {
  layout: 'profile',
  components: {
    Input,
    Button,
    Snackbar,
  },
  data() {
    return {
      UserService,
      form: 4,
      isSent: false,
      isLoading: false,
      email: '',
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
        }
      } catch (error) {
        console.log(error);
        this.$refs.snackbar.showSnackbar({
          message: `Gagal mengirim email. Pastikan email kamu sudah sesuai`,
          className: '',
          color: 'bg-red-400',
          duration: 4000,
        });
      }
      this.isLoading = false;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped></style>
