<template>
  <div
    class="tn:w-full md:w-[268px] bg-white !rounded-[8px] tn:p-2 md:p-[14px] provider-card relative z-0"
  >
    <div class="tn:pt-2 md:pt-4 flex justify-center items-center">
      <div class="cloud"></div>
    </div>

    <div class="flex gap-3 items-center tn:mt-4">
      <div
        class="tn:w-[40px] tn:h-[40px] md:w-[48px] md:h-[48px] rounded-full overflow-hidden"
      >
        <div class="shimmer w-full h-full"></div>
      </div>
      <div class="shimmer h-5 w-1/2"></div>
    </div>
    <hr class="tn:my-2" />

    <div class="flex items-center justify-between tn:mt-4">
      <div class="shimmer block md:h-4 tn:w-1/2 md:w-1/3"></div>
      <div class="shimmer block md:h-4 tn:w-3/4 md:w-1/2"></div>
    </div>
    <div class="flex items-center justify-between tn:mt-3">
      <div class="shimmer block md:h-4 tn:w-1/2 md:w-1/3"></div>
      <div class="shimmer block md:h-4 tn:w-3/4 md:w-1/2"></div>
    </div>
    <hr class="tn:my-2 tn:mt-4" />
    <div class="flex justify-between items-center">
      <div class="shimmer w-1/3 tn:h-4 md:h-6"></div>
      <div class="shimmer w-1/2 tn:h-4 md:h-6"></div>
    </div>
    <hr class="tn:my-2" />
    <div class="shimmer w-full tn:h-8 md:h-10"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.provider-card {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
}
.cloud {
  position: relative;
  z-index: 10;
  width: 38px;
  height: 10.5px;
  background-color: #f5f5f5 !important;
  border-radius: 10px;
  position: relative;
}
.cloud:before {
  content: '';
  position: absolute;
  background-color: #f5f5f5 !important;
  z-index: 15;
  width: 14px;
  height: 14px;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}

@media screen and (min-width: 600px) {
  .cloud {
    width: 76px;
    height: 21px;
  }
  .cloud:before {
    width: 28px;
    height: 28px;
    top: -14px;
  }
}
</style>
