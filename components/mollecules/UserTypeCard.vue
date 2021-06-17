<template>
  <div class="w-full rounded-xl shadow-xl text-center p-4">
    <div class="text-center">
      <h1 class="font-bold text-primary text-2xl my-1">{{ title }}</h1>
    </div>
    <div class="flex justify-center my-3">
      <img
        :src="`${provider.icon}`"
        alt="#"
        v-for="(provider, id) in providerIcons"
        :key="id"
        class="mx-1"
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
