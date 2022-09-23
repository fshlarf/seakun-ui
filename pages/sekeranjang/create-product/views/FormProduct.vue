<template>
  <div class="max-w-[632px] mx-auto tn:pt-28">
    <div
      role="button"
      @click="backToHome"
      class="flex max-w-max space-x-2 items-center"
    >
      <img
        class="w-[32px] h-[32px]"
        src="/images/icons/atoms/back-arrow.svg"
        alt="go back icon"
      />
      <p class="text-[20px] tn:p-0 tn:m-0">Kembali</p>
    </div>

    <div class="tn:mt-6">
      <FormBanner />
    </div>

    <div class="tn:mt-6">
      <FormMain />
    </div>
  </div>
</template>

<script>
import FormBanner from './FormBanner';
import FormMain from './FormMain.vue';
export default {
  components: {
    FormBanner,
    FormMain,
  },
  methods: {
    backToHome() {
      this.$router.push('/sekeranjang');
    },
  },
};
</script>

<style></style>
