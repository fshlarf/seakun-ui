<template>
  <div
    class="bg-white p-6 rounded-xl text-gray-secondary space-y-6"
    style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
  >
    <nuxt-link to="/user/profile" class="flex items-center gap-2">
      <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
      <p class="text-xs">Kembali</p>
    </nuxt-link>
    <div>
      <h2 class="text-[20px] font-bold">Buat Password Baru</h2>
      <p class="text-sm pt-1 leading-5">
        Password barumu harus berbeda dengan password sebelumnya.
      </p>
    </div>
    <Input
      label="Password"
      class-label="!text-base !text-gray-secondary"
      class-name="!text-base !text-gray-secondary"
      type="password"
    />
    <Input
      label="Konfirmasi Password"
      class-label="!text-base !text-gray-secondary"
      class-name="!text-base !text-gray-secondary"
      type="password"
    />
    <div class="text-right">
      <Button
        class="text-white bg-green-primary border-2 border-green-primary w-[166px] !text-base h-[46px]"
        >Reset Password</Button
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
