<template>
  <button
    @click="$emit('handleClick')"
    class="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-[#F1F1F1] bg-white"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
