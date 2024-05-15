<template>
  <div>
    <div
      class="w-full fixed top-0 z-40 flex items-center bg-white shadow-md shadow-black/[5%] h-[49px] sm:h-[64px] px-5 md:px-9 lg:px-0"
    >
      <nuxt-link
        to="/"
        class="w-full lg:max-w-[900px] xl:max-w-[1150px] mx-auto"
      >
        <img
          class="h-6 w-[100px] sm:h-[25px] sm:w-[100px]"
          src="/images/navbar/new_brand_seakun.svg"
          alt="brand seakun"
        />
      </nuxt-link>
    </div>
    <div class="px-5 mt-[73px] sm:mt-[101px]">
      <div
        class="w-full sm:max-w-[450px] lg:max-w-[700px] mx-auto md:border border-[#F4FAF8] shadow rounded-[20px] p-5"
      >
        <img
          src="/images/seakun-tip/thankyou.webp"
          alt="thankyou"
          class="w-[150px] h-[156px] lg:w-[260px] lg:h-[271px] mx-auto"
        />
        <div class="text-center text-[#2D2D2D] mt-5 sm:mt-7">
          <p class="text-base sm:text-lg md:text-xl lg:text-[36px] font-bold">
            Terima Kasih!
          </p>
          <p
            class="text-xs sm:text-sm pt-1 sm:pt-2 lg:pt-3 max-w-[600px] mx-auto"
          >
            Tip dari Kakak telah kami terima. <br class="sm:hidden" />
            Terima kasih atas dukungan dan apresiasi yang luar biasa kepada tim
            Seakun! Dukungan ini akan menjadi semangat baru bagi tim kami untuk
            terus meningkatkan kualitas layanan.
          </p>
        </div>
        <Button
          label="Kembali ke Beranda"
          addClass="text-white !text-base font-bold bg-primary w-full h-11 mt-[30px] sm:mt-10 lg:mt-[52px] sm:h-[56px]"
          @click="$router.push('/')"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './../../../components/mollecules/Footer.vue';
import Button from '../../../components/atoms/Button.vue';

export default {
  components: {
    Footer,
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
