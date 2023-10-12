<template>
  <div class="w-full pb-4 lg:pb-0 sm:max-w-[478px] mx-auto shadow-wrapper">
    <div class="w-full mx-auto lg:hidden">
      <nuxt-link to="/">
        <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
      </nuxt-link>
    </div>
    <div
      class="bg-white p-6 rounded-xl text-gray-secondary space-y-6 lg:mt-[121px] w-full mt-4"
    >
      <div class="text-center">
        <img
          src="/images/profile-page/succsess-change-password.png"
          alt="succsessfully"
          class="w-[207px] h-[148px] mx-auto mt-6"
        />
        <h3 class="lg:text-[26px] text-[#49A794] font-bold pt-6">
          Password Berhasil Diganti
        </h3>
        <p class="text-base pt-1">
          Penggantian password telah berhasil dilakukan.
        </p>
        <Button
          class="text-white bg-green-primary border-2 border-green-primary w-full !text-sm lg:!text-base !h-[42px] lg:!h-[54px] mt-5"
          >Login</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
@media only screen and (max-width: 1024px) {
  .shadow-wrapper {
    box-shadow: 0px 2px 10px 0px rgba(160, 163, 189, 0.1);
  }
}
</style>
