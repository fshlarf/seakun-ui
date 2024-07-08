<template>
  <div class="cursor-pointer" @click="copyProps">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_25958_81674)">
        <path
          d="M9.53906 3H4.33594C3.59812 3 3 3.59812 3 4.33594V9.53906C3 10.2769 3.59812 10.875 4.33594 10.875H9.53906C10.2769 10.875 10.875 10.2769 10.875 9.53906V4.33594C10.875 3.59812 10.2769 3 9.53906 3Z"
          stroke="#A0A3BD"
          stroke-linejoin="round"
        />
        <path
          d="M8.98828 3L9 2.4375C8.99901 2.08971 8.86041 1.75644 8.61448 1.51052C8.36856 1.26459 8.03529 1.12599 7.6875 1.125H2.625C2.22754 1.12617 1.84669 1.28459 1.56564 1.56564C1.28459 1.84669 1.12617 2.22754 1.125 2.625V7.6875C1.12599 8.03529 1.26459 8.36856 1.51052 8.61448C1.75644 8.86041 2.08971 8.99901 2.4375 9H3"
          stroke="#A0A3BD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25958_81674">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      typeof: String || Number,
      default: '',
    },
  },
  methods: {
    copyProps() {
      navigator.clipboard.writeText(this.value);
      this.$alert.show({
        status: 'success',
        title: '',
        message: 'Copied to clipboard',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
