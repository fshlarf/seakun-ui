<template>
  <div
    class="w-full grid grid-cols-2 gap-8 rounded-xl bg-white shadow-xl p-4 items-center"
  >
    <div class="mx-auto">
      <img :src="`${benefit.img}`" alt="No image found" class="w-full" />
    </div>
    <div class="">
      <p class="text-lg">{{ benefit.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    benefit: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style></style>
