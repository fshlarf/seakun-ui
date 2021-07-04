<template>
  <div class="relative z-0">
    <div
      class="tn:hidden md:block w-full absolute -z-30 tn:-top-10 md:-top-10 lg:-top-18 xl:-top-60"
    >
      <img
        class="tn:hidden md:block md:w-full tn:h-80 md:h-full"
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
    <div class="relative z-0 pt-20">
      <div
        class="px-3 md:hidden flex overflow-x-auto gap-3 overflow-y-hidden slider2 place-items-stretch items-stretch"
      >
        <div class="w-11/12 h-full flex-none md:hidden">
          <BannerMainMobile @clickOrder="onClickOrder" />
        </div>
        <div class="w-11/12 h-full flex-none md:hidden">
          <BannerSequrbanMobile @onClickSequrban="onClickOrderSequrban" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerMain from '~/components/mollecules/BannerMain.vue';
import BannerSequrban from '~/components/mollecules/BannerSequrban.vue';
import BannerMainMobile from '~/components/mollecules/BannerMainMobile.vue';
import BannerSequrbanMobile from '~/components/mollecules/BannerSequrbanMobile.vue';
export default {
  data() {
    return {
      scrollPosition: 'left',
    };
  },
  components: {
    BannerMain,
    BannerSequrban,
    BannerMainMobile,
    BannerSequrbanMobile,
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
.slider2::-webkit-scrollbar {
  display: none;
}
.slider2 {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
