<template>
  <div :class="addClass">
    <section
      :class="{ '-rotate-180': isShow }"
      @click="(isShow = !isShow), $emit('click')"
      class="w-max transition-all ease-in-out duration-200"
    >
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.45998 4.97461C2.23321 5.20342 2.23328 5.57226 2.46012 5.80099L6.29872 9.67152C6.6899 10.066 7.32759 10.066 7.71878 9.67152L11.5574 5.80099C11.7842 5.57226 11.7843 5.20342 11.5575 4.97461C11.328 4.74297 10.9536 4.74292 10.7239 4.97449L7.71883 8.00503C7.32763 8.39954 6.68986 8.39954 6.29867 8.00503L3.29355 4.97449C3.06393 4.74292 2.68954 4.74297 2.45998 4.97461Z"
          :fill="color"
        />
      </svg>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      typeof: String,
      default: '#2D2D2D',
    },
    addClass: {
      typeof: String,
      default: '',
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
