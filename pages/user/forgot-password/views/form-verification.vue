<template>
  <div class="w-full sm:max-w-[478px] mx-auto">
    <div class="w-full mx-auto lg:hidden">
      <nuxt-link to="/">
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
      <div class="mx-auto lg:mt-[148px]">
        <img
          src="/images/illustration/forgot-password/confirm-email-mobile.png"
          alt="email"
          class="w-full lg:hidden"
        />
        <div class="mt-5 lg:mt-0 px-4 pb-5 lg:pb-0 lg:px-0">
          <h1 class="text-base lg:text-[26px] font-bold text-[#49A794]">
            Konfirmasi Email Kamu
          </h1>
          <p class="text-sm lg:text-base text-gray-secondary dm-sans">
            Masukan kode OTP yang telah Kami kirim ke email Kamu.
          </p>
          <Input
            placeholder="Masukkan kode OTP kamu"
            class="mt-5 lg:mt-8 !text-sm !lg:text-base"
          />
          <Button
            type="submit"
            add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-7 lg:mt-8 dm-sans "
            >Kirim</Button
          >
          <p
            class="text-sm lg:text-base text-[#66738F] text-center cursor-pointer pt-5"
          >
            Minta Ulang
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Input,
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
  .card-wrapper {
    box-shadow: 0px 2px 10px 0px rgba(160, 163, 189, 0.1);
  }
}
</style>
