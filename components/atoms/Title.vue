<template>
  <h3 class="title">
    {{ title }}
  </h3>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 1.75em;
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 3px;
    margin: 24px auto;
    background: #86d0c1;
  }
}
</style>
