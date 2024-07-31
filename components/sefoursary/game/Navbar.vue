<template>
  <div class="w-full sm:bg-white drop__shadow">
    <div
      class="container-about-us py-[10px] sm:h-[75px] lg:h-[88px] flex items-center"
    >
      <img
        src="/images/sefoursary/background/game.webp"
        alt="banner"
        class="absolute top-0 left-0 z-10 right-0 max-h-[160px] w-full sm:hidden object-cover"
      />
      <img
        src="/images/sefoursary/background/game-desktop.webp"
        alt="banner"
        class="absolute sm:top-[75px] lg:top-[88px] left-0 z-10 right-0 max-h-[346px] w-full hidden sm:block object-cover"
      />
      <nuxt-link to="/">
        <img
          src="/images/sefoursary/logo.svg"
          alt="seakun"
          class="z-20 relative w-[100px] sm:w-[130px] lg:w-[174px]"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 640px) {
  .drop__shadow {
    box-shadow: 1px 2px 10px rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
