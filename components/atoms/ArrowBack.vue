<template>
  <div :class="addClass">
    <div @click="$emit('click')" class="cursor-pointer">
      <svg
        :width="height"
        :height="height"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 12.5H4M4 12.5L10 18.5M4 12.5L10 6.5"
          :stroke="color"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      typeof: String,
      default: 'white',
    },
    addClass: {
      typeof: String,
      default: '',
    },
    height: {
      typeof: String,
      default: '24',
    },
    width: {
      typeof: String,
      default: '24',
    },
  },
};
</script>

<style lang="scss" scoped></style>
