<template>
  <div class="hexagon">
    <div class="counter">
      <h1>{{ value }}</h1>
      <p>{{ label }}</p>
    </div>
    <img src="/images/polygon-bg.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HexCard',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.hexagon {
  position: relative;
  max-width: 255px;
  max-height: 255px;
  z-index: 0;

  img {
    position: relative;
    z-index: -10;
  }

  .counter {
    position: absolute;
    padding-top: 90px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;

    h1 {
      font-size: 48px;
      font-weight: 700;
      color: #000000;
    }
    p {
      font-size: 18px;
      font-weight: bold;
      color: #2d2d2d;
    }
  }
}
</style>
