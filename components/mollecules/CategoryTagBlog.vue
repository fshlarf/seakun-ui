<template>
  <div
    :class="`inline px-2 py-0.5 ${labelType} ${titleSize} rounded-[20px] font-medium`"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: 'light',
    },
  },
  computed: {
    titleSize() {
      return this.size === 'small'
        ? 'text-[10px] md:text-[12px]'
        : 'text-[12px] md:text-[14px]';
    },
    labelType() {
      return this.type === 'light'
        ? 'bg-primary/20 text-primary'
        : 'bg-primary/50 text-white';
    },
  },
};
</script>

<style scoped></style>
