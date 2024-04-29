<template>
  <div>
    <div
      class="w-full fixed top-0 z-40 flex items-center bg-white shadow h-[49px] sm:h-[64px] pl-4 md:pl-40"
    >
      <nuxt-link to="/">
        <img
          class="h-6 w-[100px] sm:h-[40px] sm:w-[163px]"
          src="/images/navbar/new_brand_seakun.svg"
          alt="brand seakun"
        />
      </nuxt-link>
    </div>
    <div class="mt-[73px] lg:mt-[101px] px-40">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
html {
  font-family: Montserrat !important;
  font-size: 16px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
