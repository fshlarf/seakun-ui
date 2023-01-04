<template>
  <div class="w-full rounded-xl tn:shadow-md p-4">
    <div class="mx-auto my-1">
      <img :src="`${benefit.img}`" alt="#" class="mx-1 sm:my-3 w-full" />
    </div>
    <div class="">
      <h1
        class="font-bold text-secondary text-md md:text-lg lg:text-lg my-1 md:my-2"
      >
        {{ benefit.title }}
      </h1>
    </div>
    <div class="my-2">
      <p class="text-xs md:text-sm">{{ benefit.preview }}</p>
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
