<template>
  <div
    class="wrapper w-full lg:h-[40vw] bg-cover bg-center flex flex-col mt-5 md:mt-8 lg:mt-[60px] pb-[30px] lg:pb-0"
    id="seakun-customers"
  >
    <img
      src="/images/about-us/illustration/map-mobile.webp"
      alt="map"
      class="lg:hidden pt-[50px] w-full"
    />
    <div
      class="lg:container-about-us text-white text-center lg:text-left h-full"
    >
      <div
        class="w-full sm:max-w-[500px] lg:max-w-[350px] mx-auto lg:mx-0 p-5 lg:p-0 flex flex-col justify-center min-h-full"
      >
        <div>
          <p class="text-lg md:text-xl lg:text-[36px] font-extrabold">
            Pengguna Seakun
          </p>
          <p class="text-xs md:text-sm pt-2 leading-5">
            Puluhan ribu pengguna telah menikmati benefit patungan layanan
            premium dengan aman. Bergabunglah dengan kami dan nikmati berbagai
            kemudahannya!
          </p>
          <div class="lg:pr-[70px] xl:pr-[84px] text-sm lg:text-base">
            <button
              class="bg-[#0CB794] flex gap-2 justify-center items-center leading-[165%] text-base font-bold py-3 mt-5 md:mt-7 mx-auto w-full"
              @click="$router.push('/#provider')"
            >
              <img src="/images/about-us/icons/cart.svg" alt="cart" />
              <p>Berlangganan Sekarang</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    background-image: url('/images/about-us/illustration/bg-maps.webp');
  }
}
@media (max-width: 1023px) {
  .wrapper {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
