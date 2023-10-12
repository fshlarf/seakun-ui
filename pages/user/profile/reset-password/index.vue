<template>
  <main>
    <div
      v-if="form == 1"
      class="bg-white p-4 md:p-5 lg:p-6 rounded-xl space-y-5 md:space-y-6 text-gray-secondary mt-6 md:mt-0"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <nuxt-link to="/user/profile" class="md:flex items-center gap-2 hidden">
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-xs">Kembali</p>
      </nuxt-link>
      <div>
        <h3 class="text-sm md:text-base lg:text-[20px] font-bold -mt-5 md:mt-0">
          Reset Password
        </h3>
        <p class="text-sm pt-2 leading-[18px] md:leading-5">
          Masukkan email yang terkait dengan akun Anda dan kami akan mengirimkan
          email berisi petunjuk untuk mengatur ulang kata sandi Anda.
        </p>
      </div>
      <Input
        label="Alamat Email"
        class-label="!text-sm md:!text-base !text-gray-secondary "
        class-name="!text-sm md:!text-base !text-gray-secondary "
      />
      <div class="text-right">
        <Button
          class="text-white bg-green-primary border-2 border-green-primary w-full md:w-[166px] !text-sm md:!text-base h-[46px] font-bold"
          >Kirim Instruksi</Button
        >
      </div>
    </div>
    <CheckEmail v-if="form == 2" />
    <NewPassword v-if="form == 3" />
    <ModalSuccsess v-if="form == 4" />
  </main>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
import CheckEmail from './views/check-email.vue';
import NewPassword from './views/new-password.vue';
import ModalSuccsess from './views/modal-succsess.vue';
export default {
  layout: 'profile',
  components: {
    Input,
    CheckEmail,
    NewPassword,
    ModalSuccsess,
  },
  data() {
    return {
      form: 4,
    };
  },
};
</script>

<style lang="scss" scoped></style>
