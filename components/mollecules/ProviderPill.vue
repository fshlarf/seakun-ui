<template>
  <div
    class="min-w-[18rem] h-16 tn:p-3 tn:rounded-[8px] tn:shadow-md flex space-x-2 items-center justify-center"
    @click="selectProvider(provider)"
  >
    <img
      class="h-full"
      :src="`/images/icons/${provider.slug}.svg`"
      alt="logo provider"
    />
    <p class="text-lg font-bold">
      {{ provider.name }}
      <span
        v-if="
          !isLoading &&
          dataGroup &&
          dataGroup.length > 0 &&
          provider.slug === dataGroup[0].providerSlug
        "
        class="text-sm font-normal"
        >({{ dataGroup[0].group }} grup)</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProviderPill',
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
