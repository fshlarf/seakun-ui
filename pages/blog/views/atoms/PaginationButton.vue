<template>
  <button
    @click="$emit('handleClick')"
    class="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-[#F1F1F1] bg-white"
    :class="`${disable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`"
  >
    <svg
      v-if="type === 'left'"
      class="stroke-[#2D2D2D] stroke-[3px]"
      width="16px"
      height="16px"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
    <svg
      v-else-if="type === 'right'"
      class="stroke-[#2D2D2D] stroke-[3px]"
      width="16px"
      height="16px"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'right',
    },
  },
};
</script>
