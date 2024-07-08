<template>
  <div
    class="text-primary text-sm font-bold py-2 px-3 rounded-[25px] bg-[#D4F5EE]"
    :class="addClass"
  >
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      typeof: String,
      default: '',
    },
    addClass: {
      typeof: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
