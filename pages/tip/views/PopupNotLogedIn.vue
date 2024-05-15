<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 bg-black/40 flex justify-center"
  >
    <div
      class="bg-white h-max mt-[128px] mx-4 sm:mx-auto py-7 px-8 sm:px-9 sm:py-9 rounded-xl w-full max-w-[358px] relative"
    >
      <img
        src="/images/icons/atoms/close-rounded.svg"
        alt="close"
        class="w-[25px] h-[25px] cursor-pointer absolute -top-2 -right-2"
        @click="$emit('close')"
      />
      <img
        src="/images/seakun-tip/not-logged-in.webp"
        alt="not logged in"
        class="mx-auto w-[164px] h-[161px] sm:w-[180px] sm:h-[176px]"
      />
      <div
        class="mt-5 sm:mt-6 space-y-1 sm:space-y-2 text-gray-secondary mx-auto text-center"
      >
        <p class="text-base sm:text-lg font-bold">Kamu Belum Login</p>
        <p class="text-sm">Silakan login untuk memberikan TIP</p>
      </div>
      <Button
        label="Login"
        addClass="text-white !text-base font-bold bg-primary w-full h-11 mt-5 sm:mt-6 sm:h-[46px]"
        @click="handleLoginClick"
      />
    </div>
  </div>
</template>

<script>
import Button from '../../../components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  methods: {
    handleLoginClick() {
      this.$router.push('/login?from=tip');
    },
  },
};
</script>

<style lang="scss" scoped></style>
