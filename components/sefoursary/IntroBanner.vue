<template>
  <!-- <div class="sefoursary-intro w-full bg-cover bg-no-repeat mt-10"></div> -->
  <div
    class="w-full bg-[#D9D9D9]/30 h-[441px] xl:h-[663px] relative z-20 mb-[64px] overflow-hidden"
  >
    <div
      class="flex flex-col items-center justify-center top-0 w-full pt-[90px] xl:pt-[130px] relative z-20"
    >
      <img
        src="/images/sefoursary/sefoursary-mobile.svg"
        alt="sefoursary"
        class="w-[220px] sm:w-[280px] md:w-[300px] xl:w-[380px] mx-auto"
      />
      <p
        class="text-sm sm:text-base xl:text-lg font-semibold text-[#15382F] text-center max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] xl:max-w-[481px] mx-auto mt-3"
      >
        Yuk, ikuti keseruan di Anniversary Seakun, Menangkan beragam hadiah
        menariknya!
      </p>
      <div
        class="mt-6 play__button text-white w-[188px] xl:w-[270px] xl:h-[60px] h-11 flex justify-center items-center rounded-lg text-base xl:text-2xl font-bold cursor-pointer mx-auto"
        @click="$router.push('sefoursary/game')"
      >
        Main Sekarang
      </div>
    </div>
    <img
      src="/images/sefoursary/background/left-hero.webp"
      alt="sefoursary"
      class="w-[181px] sm:w-[260px] md:w-[310px] lg:w-[300px] xl:w-[540px] absolute -left-6 lg:left-0 bottom-0 z-10"
    />
    <img
      src="/images/sefoursary/background/right-hero.webp"
      alt="sefoursary"
      class="w-[200px] sm:w-[300px] md:w-[340px] lg:w-[330px] xl:w-[560px] absolute -right-7 lg:right-0 bottom-0 z-10"
    />
    <img
      src="/images/sefoursary/background/land-desktop.webp"
      alt="sefoursary"
      class="absolute right-0 left-0 bottom-0 h-11 xl:h-[129px] w-full"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.play__button {
  background: linear-gradient(to right, #336557 0%, #14372e 100%);
}
</style>
