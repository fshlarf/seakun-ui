<template>
  <div class="container relative z-0">
    <div class="md:hidden mt-16 p-2">
      <BannerMobileSequrban />
    </div>
    <div class="tn:hidden md:block md:pt-24">
      <img
        class="w-full"
        src="/images/sequrban/banner.png"
        alt="Image not found"
      />
    </div>
    <div
      class="absolute z-10 tn:hidden md:block md:top-32 lg:top-36 xl:top-40 mx-auto"
    >
      <div class="grid grid-cols-2 gap-0 justify-center items-center">
        <div></div>
        <div
          class="md:-ml-10 lg:-ml-10 xl:-ml-28 tn:pr-0 md:pr-12 lg:pr-20 xl:pr-44"
        >
          <h1
            class="md:font-bold lg:font-extrabold md:text-xl lg:text-2xl xl:text-5xl text-white md:mb-2 lg:mb-3 xl:mb-4"
          >
            Sequrban x <span class="text-secondary">Wadiqibas</span>
          </h1>
          <p
            class="text-secondary md:pl-0 md:text-xs lg:text-base font-bold tn:mt-2"
          >
            Mulai dari
          </p>
          <h2
            class="text-secondary md:pl-0 md:text-xl lg:text-xl xl:text-[36px] font-extrabold"
          >
            Rp2.740.000
            <span class="text-white md:text-sm xl:text-lg font-normal">
              / orang</span
            >
          </h2>
          <p class="md:text-xs lg:text-base xl:text-base text-white my-2">
            Idul Adha sebentar lagi datang! Sudah menyiapkan hewan qurban untuk
            melengkapi ibadahmu? Seakun bisa membantumu berqurban sapi dengan
            program patungan yang disebut dengan Sequrban. InsyaAllah amanah,
            aman, lebih terjangkau, dan praktis.
          </p>
          <p class="text-secondary md:mt-4 md:text-xs lg:text-sm xl:text-base">
            *Layanan untuk seluruh Indonesia, pengiriman daging bagian qurban
            untuk wilayah Jabodetabek.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerMobileSequrban from './BannerMobileSequrban.vue';
export default {
  components: {
    BannerMobileSequrban,
  },
};
</script>

<style></style>
