<template>
  <div class="flex items-center">
    <img
      src="/images/navbar/seakun_logo.png"
      width="40"
      height="40"
      alt="logo seakun"
      class="mr-2"
    />
    <span class="text-primary font-bold">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
