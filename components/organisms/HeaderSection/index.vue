<template>
  <div class="relative z-0">
    <div
      class="tn:hidden md:block w-full absolute -z-30 tn:-top-10 md:-top-10 lg:-top-18 xl:-top-60"
    >
      <img
        class="tn:hidden md:block md:w-full md:h-full"
        src="/images/header-bg.svg"
        alt="subscribe digital product with seakun"
      />
    </div>
    <div class="container">
      <div
        id="slider-desktop"
        class="tn:hidden md:block md:pt-28 lg:pt-36 xl:pt-24"
      >
        <!-- <div
        id="slider-desktop"
        class="tn:hidden md:flex space-x-2 overflow-x-auto overflow-y-hidden slider md:pt-28 lg:pt-36 xl:pt-24"
      > -->
        <div class="tn:hidden md:block w-full h-full flex-none slide-first">
          <BannerMain @onClickOrder="onClickOrder" />
        </div>
        <!-- <div class="tn:hidden md:block w-full h-full flex-none slide-first">
          <BannerSetitip />
        </div> -->
      </div>
    </div>
    <div class="relative z-0 pt-20">
      <div
        id="slider-mobile"
        class="px-3 md:hidden place-items-stretch items-stretch"
      >
        <!-- id="slider-mobile"
        class="px-3 md:hidden flex overflow-x-auto space-x-3 overflow-y-hidden slider2 place-items-stretch items-stretch"
      > -->
        <div class="w-full h-auto flex-none md:hidden">
          <BannerMainMobile @clickOrder="onClickOrder" />
        </div>
        <!-- <div class="w-11/12 h-auto flex-none md:hidden">
          <BannerSetitipMobile />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BannerMain from '~/components/mollecules/BannerMain.vue';
import BannerSetitip from '~/components/mollecules/BannerSetitip.vue';
import BannerSequrban from '~/components/mollecules/BannerSequrban.vue';
import BannerMainMobile from '~/components/mollecules/BannerMainMobile.vue';
import BannerSequrbanMobile from '~/components/mollecules/BannerSequrbanMobile.vue';
import BannerSetitipMobile from '~/components/mollecules/BannerSetitipMobile.vue';
export default {
  components: {
    BannerMain,
    BannerSetitip,
    BannerSequrban,
    BannerMainMobile,
    BannerSequrbanMobile,
    BannerSetitipMobile,
  },
  mounted() {
    // this.doSlider();
  },
  methods: {
    onClickOrder() {
      const penggunaSection = document.getElementById('provider');
      penggunaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
    doSlider() {
      const sliderContainerMobile = document.getElementById('slider-mobile');
      const slideWidthMobile = sliderContainerMobile.scrollWidth;

      self.setInterval(() => {
        if (sliderContainerMobile.scrollLeft <= 200) {
          sliderContainerMobile.scrollTo(
            sliderContainerMobile.scrollLeft + slideWidthMobile,
            0
          );
        } else if (sliderContainerMobile.scrollLeft > 200) {
          sliderContainerMobile.scrollTo(0, 0);
        }
      }, 7000);

      const sliderContainerDesktop = document.getElementById('slider-desktop');
      const slideWidth = sliderContainerDesktop.scrollWidth;
      const halfSlideWidth = slideWidth / 3;

      self.setInterval(() => {
        if (sliderContainerDesktop.scrollLeft <= halfSlideWidth) {
          sliderContainerDesktop.scrollTo(
            sliderContainerDesktop.scrollLeft + slideWidth,
            0
          );
        } else if (sliderContainerDesktop.scrollLeft > halfSlideWidth) {
          sliderContainerDesktop.scrollTo(0, 0);
        }
      }, 7000);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  scroll-behavior: smooth;
}
.slider2 {
  scroll-behavior: smooth;
}
.slider::-webkit-scrollbar {
  display: none;
}
.slider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.slider2::-webkit-scrollbar {
  display: none;
}
.slider2 {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
