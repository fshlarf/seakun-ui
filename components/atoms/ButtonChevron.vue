<template>
  <div @click="$emit('click-chevron')">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="cursor-pointer text-white bg-primary w-9 h-9 p-2 rounded-full mx-auto"
      :class="{ reverse: mode === 'left' }"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
    <span v-if="btnText" class="cursor-pointer">{{ btnText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.reverse {
  transform: rotate(180deg);
}
</style>
