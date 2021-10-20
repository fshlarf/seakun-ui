<template>
  <div class="my-4">
    <p class="text-2xl font-bold">Skenario</p>
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
