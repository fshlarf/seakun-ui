<template>
  <div
    class="max-w-sm w-52 py-3 px-3 tn:rounded-full lg:rounded-2xl shadow flex space-x-2 items-center justify-center"
    @click="selectProvider(provider)"
  >
    <p class="text-lg font-bold">
      {{ provider.name }}
      <span class="text-sm font-normal">({{ provider.totalGroup }} grup)</span>
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
