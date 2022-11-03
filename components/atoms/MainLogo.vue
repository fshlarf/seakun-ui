<template>
  <div class="d-flex">
    <img
      src="/images/seakunid.png"
      width="40"
      height="40"
      alt="logo seakun"
      class="d-inline-block align-top rounded-circle mr-3"
    />
    <span class="text-primary font-weight-bold align-self-center">{{
      label
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'MainLogo',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
