<template>
  <div
    class="max-w-sm w-72 py-3 px-3 tn:rounded-full lg:rounded-2xl px-3 shadow flex space-x-2 items-center justify-center"
    @click="selectProvider(provider)"
  >
    <img class="" :src="`${provider.icon}`" alt="#" />
    <p class="text-lg font-bold">
      {{ provider.name }}
      <span
        v-if="!isLoading && provider.slug === dataGroup[0].name"
        class="text-sm font-normal"
        >({{ dataGroup[0].groupNumber }} grup)</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProvoderPill',
  props: {
    provider: {
      type: Object,
      default: {},
    },
    dataGroup: {
      type: Array,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectProvider(provider) {
      this.$emit('selectProvider', provider);
    },
  },
};
</script>

<style></style>
