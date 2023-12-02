<template>
  <div
    v-if="isShow"
    class="absolute bottom-[27px]"
    :class="`${
      position == 'right'
        ? '-right-[20px]'
        : position == 'left'
        ? '-left-[20px]'
        : 'left-1/2 transform -translate-x-1/2'
    }`"
  >
    <div
      id="tooltip"
      class="relative rounded-[6px] px-[16px] py-[12px] min-w-[200px] border-none"
    >
      <div
        :class="`${
          position == 'right'
            ? 'triangle-right'
            : position == 'left'
            ? 'triangle-left'
            : 'triangle-center'
        }`"
        class="triangle"
      ></div>
      <p class="text-white text-xs border-none">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'center',
    },
  },
};
</script>

<style scoped>
#tooltip {
  background-color: rgba(45, 45, 45, 0.9) !important;
}
.triangle-center {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 9px 0 9px;
  border-color: rgba(45, 45, 45, 0.9) transparent transparent transparent;
}
.triangle-left {
  position: absolute;
  top: 100%;
  left: 18px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 9px 0 9px;
  border-color: rgba(45, 45, 45, 0.9) transparent transparent transparent;
}
.triangle-right {
  position: absolute;
  top: 100%;
  right: 18px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 9px 0 9px;
  border-color: rgba(45, 45, 45, 0.9) transparent transparent transparent;
}
</style>
