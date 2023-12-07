<template>
  <div class="bg-white p-3 rounded-[6px] w-full">
    <header class="shimmer w-full h-[106px]">
      <div
        class="font-nunito text-green-seakun-secondary-dark leading-normal pt-[26px] pl-4 md:pl-[23px]"
      >
        <div class="shimmer"></div>
        <div class="pt-1 shimmer"></div>
      </div>
    </header>
    <section class="space-y-2 mt-2 w-full">
      <div class="flex justify-between items-center">
        <div class="shimmer w-1/2 h-4"></div>
        <div class="shimmer w-[60px] h-4"></div>
      </div>
      <div class="flex justify-between items-center">
        <div class="shimmer w-1/2 h-4"></div>
        <div class="shimmer w-[60px] h-4"></div>
      </div>
      <div class="flex justify-between items-center">
        <div class="shimmer w-1/2 h-4"></div>
        <div class="shimmer w-[60px] h-4"></div>
      </div>
      <div class="flex justify-between items-center">
        <div class="shimmer w-1/2 h-4"></div>
        <div class="shimmer w-[60px] h-4"></div>
      </div>
    </section>
    <div class="grid">
      <section class="relative w-[60px] mt-6 h-3 shimmer"></section>
      <section class="relative w-[90%] mt-1 h-4 shimmer"></section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 425px) {
  .categoryWidth {
    max-width: 320px;
  }
}
@media (max-width: 375px) {
  .categoryWidth {
    max-width: 300px;
  }
}
@media (max-width: 320px) {
  .categoryWidth {
    max-width: 260px;
  }
}
</style>
