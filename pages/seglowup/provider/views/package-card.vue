<template>
  <div
    class="relative z-0 rounded-[8px] md:rounded-[8px] overflow-hidden cursor-pointer h-[85px]"
    :class="`${
      selectedPackage && selectedPackage.packageName == pkg.packageName
        ? 'border-2 border-primary'
        : ''
    }`"
    @click="$emit('onSelectPackage', pkg)"
  >
    <div
      v-if="pkg.active !== 1"
      class="absolute z-20 w-full h-full bg-black/40 flex justify-center items-center lg:justify-end lg:items-start lg:p-3"
    >
      <div class="bg-white rounded-full px-2 py-1 text-[10px] lg:text-[12px]">
        Slot Penuh
      </div>
    </div>
    <div
      class="absolute z-10 bottom-0 top-1/2 -translate-y-1/2 left-0 h-full w-full px-1 flex justify-center items-center pt-10"
    >
      <p class="text-[10px] lg:text-base font-[800] text-white">
        {{ pkg.packageName }}
      </p>
    </div>
    <div
      class="h-[85px] bg-white bg-cover bg-center w-full"
      :style="`background-image: url('/images/product/zap/${pkg.packageName}.svg');`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    pkg: {
      type: Object,
      default: () => {},
    },
    selectedPackage: {
      type: Object,
      default: () => {},
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {},
};
</script>

<style></style>
