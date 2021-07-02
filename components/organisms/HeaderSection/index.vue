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
          @previousSlide="nextSlide"
        />
      </div>
    </div>
    <div class="relative z-0 mt-20">
      <div
        class="px-3 md:hidden flex overflow-x-hidden gap-3 overflow-y-hidden slider2"
      >
        <div class="w-11/12 h-full flex-none md:hidden" @click="onClickOrder">
          <img
            class="w-full h-full md:hidden"
            src="/images/banner/seakun-mobile2.png"
            alt="image not found"
          />
        </div>
        <div
          class="w-11/12 h-full flex-none md:hidden"
          @click="onClickOrderSequrban"
        >
          <img
            class="w-full h-full md:hidden"
            src="/images/banner/sequrban-mobile.png"
            alt="image not found"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerMain from '~/components/mollecules/BannerMain.vue';
import BannerSequrban from '~/components/mollecules/BannerSequrban.vue';
export default {
  data() {
    return {
      scrollPosition: 'left',
    };
  },
  components: {
    BannerMain,
    BannerSequrban,
  },
  mounted() {
    setTimeout(this.slide, 2000);
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
    slide() {
      setInterval(this.nextSlide, 5000);
    },
    nextSlide() {
      let activeSlide = document.querySelector('.slider');
      let mobileSlide = document.querySelector('.slider2');
      if (activeSlide) {
        if (this.scrollPosition === 'left') {
          activeSlide.scrollLeft = activeSlide.scrollWidth;
          mobileSlide.scrollLeft = mobileSlide.scrollWidth;
          this.scrollPosition = 'right';
        } else {
          activeSlide.scrollLeft = 0;
          mobileSlide.scrollLeft = 0;
          this.scrollPosition = 'left';
        }
      }
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
</style>
