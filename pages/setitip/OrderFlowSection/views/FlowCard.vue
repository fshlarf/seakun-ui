<template>
  <div class="w-full rounded-xl shadow-xl tn:p-3 md:p-4">
    <div class="mx-auto my-1">
      <img :src="`${flow.img}`" alt="#" class="my-3 tn:w-2/5 md:w-1/3" />
    </div>
    <div class="">
      <h1
        class="font-bold text-secondary text-md md:text-lg lg:text-lg my-1 md:my-2"
      >
        {{ flow.title }}
      </h1>
    </div>
    <div class="my-2">
      <p class="text-xs md:text-sm">{{ flow.preview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flow: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style></style>
