<template>
  <div :class="ClassIcon" v-bind="$props">
    <div class="text-white text-xs md:text-sm lg:text-base">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'CircleIcon',
  data() {
    return {
      ClassIcon: `bg-${this.variant} rounded-full h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 flex items-center justify-center`,
    };
  },
  props: {
    variant: {
      type: String,
      default: null,
    },
    label: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>

<style></style>
