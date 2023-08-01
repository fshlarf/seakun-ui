<template>
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 7.5C12.1109 7.5 13.4167 6.19416 13.4167 4.58333C13.4167 2.9725 12.1109 1.66667 10.5 1.66667C8.88921 1.66667 7.58337 2.9725 7.58337 4.58333C7.58337 6.19416 8.88921 7.5 10.5 7.5Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.16669 17.0833C2.16669 13.4012 5.5246 10.4167 9.66669 10.4167"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6667 17.9167C16.7378 17.9167 18.4167 16.2377 18.4167 14.1667C18.4167 12.0956 16.7378 10.4167 14.6667 10.4167C12.5956 10.4167 10.9167 12.0956 10.9167 14.1667C10.9167 16.2377 12.5956 17.9167 14.6667 17.9167Z"
      :stroke="color"
      stroke-width="1.5"
    />
    <path
      d="M14.25 12.9167V14.5833H15.9167"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#4BAC99',
    },
  },
};
</script>

<style></style>
