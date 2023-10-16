<template>
  <div
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
      <Button
        class="text-white mt-5 bg-green-primary border-2 border-green-primary w-[166px] !text-base h-[46px]"
        >Buka Email</Button
      >
      <p class="pt-5 text-sm text-[#999CA1]">Skip, nanti saya konfirmasi</p>
    </div>
  </div>
</template>
<script>
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  layout: 'profile',
  components: {
    Input,
  },
};
</script>

<style lang="scss" scoped></style>
