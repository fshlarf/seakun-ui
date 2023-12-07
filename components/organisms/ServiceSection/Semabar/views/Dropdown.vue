<template>
  <div>
    <p
      class="text-sm text-gray-secondary w-max cursor-pointer"
      :class="classText"
      @click="$emit('clickMenuFilter')"
    >
      {{ data.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      typeof: Object,
      default: () => {},
    },
    classText: {
      typeof: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
