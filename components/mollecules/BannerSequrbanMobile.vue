<template>
  <div class="w-full h-full rounded-2xl bg-primary p-8 text-center">
    <div>
      <img
        class="w-full h-40 mx-auto"
        src="/images/banner/sequrban-mobile.svg"
        alt="berlangganan sequrban"
      />
    </div>
    <h2 class="text-sm text-secondary font-semibold mt-3">
      Sequrban, <span class="text-white">Seakun x Wadiqibas</span>
    </h2>
    <p class="text-white font-bold my-2">
      Berqurban sapi bersama.
      <span class="text-secondary">Patungan lebih mudah</span>, dan
      <span class="text-secondary">Insya Allah amanah</span>
    </p>
    <Button
      variant="third"
      label="Lihat detail"
      class="text-sm"
      @click="$emit('onClickSequrban')"
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
