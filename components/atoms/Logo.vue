<template>
  <div class="flex items-center">
    <img
      src="/images/seakunid.png"
      width="40"
      height="40"
      alt="image not found"
      class="rounded-full mr-2"
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
