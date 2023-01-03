<template>
  <div class="w-full h-full rounded-2xl bg-primary p-8 text-center">
    <div>
      <img
        class="w-full h-40 mx-auto"
        src="/images/banner/seakun-mobile.svg"
        alt="subscribe with seakun"
      />
    </div>
    <p class="text-white font-bold tn:my-4 tn:px-3 text-xl">
      Berlangganan bersama lebih
      <span class="text-secondary">praktis, legal, aman</span> dan
      <span class="text-secondary">murah</span>
    </p>
    <Button
      variant="third"
      label="Pesan sekarang"
      class="text-sm"
      @click="$emit('clickOrder')"
    />
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

<style></style>
