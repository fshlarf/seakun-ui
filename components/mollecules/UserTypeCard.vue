<template>
  <div class="w-full rounded-xl shadow-xl py-4 tn:px-6 md:px-8 lg:px-6">
    <div class="text-center">
      <h1 class="font-bold text-secondary text-center tn:text-xl md:text-2xl tn:my-1 md:my-2">
        {{ title }}
      </h1>
    </div>
    <div class="flex justify-center my-1">
      <img
        :src="`${provider.icon}`"
        alt="#"
        v-for="(provider, id) in providerIcons"
        :key="id"
        class="mx-1 sm:my-3"
      />
    </div>
    <div class="my-2">
      <slot name="preview"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    providerIcons: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
