<template>
  <div class="my-4">
    <p class="text-2xl font-bold">Syarat & Ketentuan Paket Individu</p>
    <ul class="list-decimal list-inside my-2">
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
    </ul>
    <p class="text-2xl font-bold">Syarat & Ketentuan Paket Rombongan</p>
    <ul class="list-decimal list-inside my-2">
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
    </ul>
    <Button
      class="my-4 py-2 tn:w-full md:w-auto"
      label="PESAN SEKARANG"
      variant="third"
      @click="onClickChooseVariant"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  methods: {
    onClickChooseVariant() {
      const variantSection = document.getElementById('package-variant');
      variantSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  },
};
</script>

<style></style>
