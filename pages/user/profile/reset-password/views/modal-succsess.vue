<template>
  <div
    class="bg-white p-6 rounded-xl text-gray-secondary space-y-6"
    style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
  >
    <nuxt-link to="/user/profile" class="flex items-center gap-2">
      <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
      <p class="text-xs">Kembali</p>
    </nuxt-link>
    <div class="text-center">
      <img
        src="/images/profile-page/succsess-change-password.png"
        alt="check email"
        class="w-[207px] h-[148px] mx-auto"
      />
      <h3 class="text-gray-secondary text-[18px] font-bold">
        Password Berhasil Diganti
      </h3>
      <p class="text-sm text-gray-secondary">
        Penggantian password telah berhasil dilakukan.
      </p>
      <Button
        class="text-white mt-5 bg-green-primary border-2 border-green-primary w-full md:max-w-[138px] !text-base md:h-[42px]"
        >OK</Button
      >
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
