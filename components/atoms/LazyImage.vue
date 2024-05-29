<template>
  <div>
    <img
      v-show="isLoaded"
      :src="src"
      :alt="alt"
      :class="className"
      @load="isLoaded = true"
    />
    <div
      v-if="!isLoaded"
      class="bg-slate-200 animate-pulse"
      :class="className"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  props: {
    className: {
      typeof: String,
      default: 'w-full h-full',
    },
    src: {
      typeof: String,
      default: '',
    },
    alt: {
      typeof: String,
      default: 'image',
    },
  },
};
</script>

<style lang="scss" scoped></style>
