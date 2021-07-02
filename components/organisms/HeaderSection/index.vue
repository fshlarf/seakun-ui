<template>
  <div class="relative z-0">
    <div
      class="w-full absolute -z-30 tn:-top-10 md:-top-10 lg:-top-18 xl:-top-60"
    >
      <img
        class="md:w-full tn:h-80 md:h-full"
        src="/images/header-bg.svg"
        alt="Image not found"
      />
    </div>
    <div
      class="tn:hidden md:block flex overflow-x-hidden overflow-y-hidden slider"
    >
      <div class="tn:hidden md:block w-full h-full flex-none slide-first">
        <BannerMain @onClickOrder="onClickOrder" @nextSlide="nextSlide" />
      </div>
      <div class="tn:hidden md:block w-full h-full flex-none slide-second">
        <BannerSequrban
          @onClickOrder="onClickOrderSequrban"
          @previousSlide="previousSlide"
        />
      </div>
    </div>
    <div
      class="relative z-0 pt-20 px-3 md:hidden flex overflow-x-auto gap-3 overflow-y-hidden slider"
    >
      <img
        class="w-11/12 h-full flex-none md:hidden"
        src="/images/banner/seakun-mobile2.png"
        alt="image not found"
        @click="onClickOrder"
      />
      <img
        class="w-11/12 h-full flex-none md:hidden"
        src="/images/banner/sequrban-mobile.png"
        alt="image not found"
        @click="onClickOrderSequrban"
      />
    </div>
  </div>
</template>

<script>
import BannerMain from '~/components/mollecules/BannerMain.vue';
import BannerSequrban from '~/components/mollecules/BannerSequrban.vue';
export default {
  components: {
    BannerMain,
    BannerSequrban,
  },
  mounted() {
    setTimeout(this.nextSlide, 2000);
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
    onClickOrderSequrban() {
      this.$router.push('/sequrban');
    },
    nextSlide() {
      let activeSlide = document.querySelector('.slider');
      activeSlide.scrollLeft = activeSlide.scrollWidth;
    },
    previousSlide() {
      let activeSlide = document.querySelector('.slider');
      activeSlide.scrollLeft = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  scroll-behavior: smooth;
}
.slider::-webkit-scrollbar {
  display: none;
}
.slider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
