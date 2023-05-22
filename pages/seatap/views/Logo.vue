<template>
  <div class="flex items-center">
    <img
      src="/images/favicon-old.ico"
      width="56px"
      height="56px"
      alt="logo seakun"
      class="mr-[19px]"
    />
    <span class="tn:hidden lg:block text-[#8DCABE] text-2xl">{{ label }}</span>
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
