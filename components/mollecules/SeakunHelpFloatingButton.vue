<template>
  <div
    v-if="isShowSeakunHelp"
    class="btn-float tn:bottom-[15px] tn:right-[15px] xl:bottom-[30px] xl:right-[30px]"
  >
    <div class="relative">
      <div
        role="button"
        @click="isShowSeakunHelp = !isShowSeakunHelp"
        class="tn:hidden absolute -top-1 -right-1 z-[810] bg-red-500 text-white w-6 h-6 rounded-full md:flex justify-center items-center"
      >
        <i class="fa-solid fa-times"></i>
      </div>
      <div
        role="button"
        @click="isShowSeakunHelp = !isShowSeakunHelp"
        class="absolute -top-1 -right-1 z-[810] bg-red-500 text-white w-4 h-4 rounded-full tn:flex justify-center items-center md:hidden"
      >
        <i class="fa-solid fa-times fa-xs"></i>
      </div>
      <div role="button" @click="$emit('click')">
        <img
          class="tn:w-[110px] md:w-[150px] xl:!w-[200px]"
          src="/images/seakun-help.svg"
          alt="seakun help"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSeakunHelp: true,
    };
  },
};
</script>

<style>
.btn-float {
  position: fixed;
  z-index: 800 !important;
  filter: drop-shadow(15px 15px 12px rgba(83, 83, 83, 0.5));
}
</style>
