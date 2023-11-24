<template>
  <div @click="$emit('click-chevron')" class="">
    <div
      class="relative cursor-pointer w-9 h-9 rounded-full mx-auto flex justify-center items-center"
      :class="addClass"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="cursor-pointer text-white absolute z-10"
        :class="`${mode === 'left' ? 'reverse' : ''}`"
        :fill="fillColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <div class="w-full h-full rounded-full absolute" :class="variant"></div>
    </div>
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
    addClass: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'bg-primary',
    },
    fillColor: {
      type: String,
      default: '#ffff',
    },
  },
};
</script>

<style lang="scss" scoped>
.reverse {
  transform: rotate(180deg);
}
</style>
