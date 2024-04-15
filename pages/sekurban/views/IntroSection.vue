<template>
  <div
    class="h-screen w-full bg-cover"
    style="background-image: url('/images/sekurban-new/bg.webp')"
  >
    <div
      class="w-full h-screen relative flex items-center bg-black/75 text-white"
    >
      <div class="w-full items-center justify-center text-center">
        <div class="mt-10 mx-5 md:mx-50">
          <h1
            class="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-10"
          >
            Patungan Qurban Sapi Bersama
          </h1>
          <div class="flex justify-center items-center my-3 gap-4">
            <img
              src="/images/sekurban-new/brand-seakun.png"
              class="h-[17px] md:h-8 lg:h-12"
            />
            <span class="text-xl md:text-3xl lg:text-[40px] font-extrabold"
              >X</span
            >
            <img
              src="/images/sekurban-new/brand-kita-bisa.png"
              class="h-[17px] md:h-8 lg:h-12"
            />
            <span class="text-xl md:text-3xl lg:text-[40px] font-extrabold"
              >X</span
            >
            <img
              src="/images/sekurban-new/brand-eqo-qurban.png"
              class="h-[17px] md:h-6 lg:h-14"
            />
          </div>
          <p
            class="text-sm md:text-base lg:text-[18px] font-normal leading-5 md:leading-7 md:mx-20"
          >
            Kini Seakun berkolaborasi dengan Kitabisa dan Ecoqurban dalam rangka
            membantu sesama untuk menunaikan ibadah qurban.
          </p>
        </div>

        <button
          class="bg-primary text-base w-[284px] md:w-[276px] md:text-lg lg:text-[22px] font-bold text-white py-3 mt-8"
          @click="scrollToSection"
        >
          Lihat Layanan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    Button,
  },
  methods: {
    scrollToSection() {
      this.scrollToElementWithOffset('product-detail-sekurban', 25);
      this.open = false;
    },
    scrollToElementWithOffset(elementId, offset) {
      var element = document.getElementById(elementId);
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style>
.bg-gradient-sekurban {
  background: linear-gradient(96.79deg, #a6eadc 1.13%, #98daf2 103.41%);
}
</style>
