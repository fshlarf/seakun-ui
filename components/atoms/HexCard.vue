<template>
  <div class="relative z-0 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
    <div
      class="text-center absolute z-100 mx-auto left-0 right-0 top-16 lg:top-24"
    >
      <h1 class="text-xl lg:text-3xl xl:text-4xl font-bold">
        {{ value }}
      </h1>
      <p class="text-base md:text-md xl:text-2xl font-bold">{{ label }}</p>
    </div>
    <img class="static z-0 w-100 h-100" src="/images/polygon-bg.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HexCard',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
