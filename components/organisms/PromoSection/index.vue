<template>
  <div id="promo-section" class="w-full" :class="addClass">
    <div class="w-full relative z-0">
      <template v-if="banners.length > 1">
        <!-- chevron left -->
        <div
          @click="scrollLeft"
          class="absolute z-10 top-1/2 left-3 xl:left-[22px] transform -translate-y-1/2 w-[26px] lg:w-[32px] h-[26px] lg:h-[32px] rounded-full flex justify-center items-center"
          :class="`${
            activeSlider.id == 1
              ? 'bg-black/10 cursor-not-allowed'
              : 'bg-black/30 cursor-pointer'
          }`"
        >
          <img
            class="mr-[2px]"
            src="/images/icons/atoms/chevron-white-left.svg"
            alt="scroll left"
          />
        </div>
        <!-- chevron right -->
        <div
          @click="scrollRight"
          class="absolute z-10 top-1/2 right-3 xl:right-[22px] transform -translate-y-1/2 w-[26px] lg:w-[32px] h-[26px] lg:h-[32px] rounded-full flex justify-center items-center rotate-180"
          :class="`${
            activeSlider.id == banners.length
              ? 'bg-black/10 cursor-not-allowed'
              : 'bg-black/30 cursor-pointer'
          }`"
        >
          <img
            class="mr-[2px]"
            src="/images/icons/atoms/chevron-white-left.svg"
            alt="scroll right"
          />
        </div>
      </template>
      <div
        id="promo-scroll"
        class="flex rounded-[10px] lg:rounded-[15px] overflow-hidden"
      >
        <img
          @click="onClickBanner(banner)"
          :id="`promo-${banner.id}`"
          class="w-full flex-none"
          :class="[
            banner.internalLink || banner.externalLink ? 'cursor-pointer' : '',
            classImg,
          ]"
          v-for="(banner, id) in banners"
          :key="id"
          :src="banner.img"
          alt="promo"
        />
      </div>
    </div>
    <div
      v-if="banners.length > 1"
      class="-mt-[13px] md:mt-[20px] flex justify-center items-center gap-[4px] lg:gap-[8px] relative z-10"
      :class="radioClass"
    >
      <div
        role="button"
        @click="scrollTo(banner.id)"
        v-for="(banner, id) in banners"
        :key="id"
        class="w-[7px] h-[7px] lg:w-[8px] lg:h-[8px] rounded-full"
        :class="`${
          banner.id == activeSlider.id ? 'bg-primary' : 'bg-[#D9D9D9]'
        }`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addClass: {
      typeof: String,
      default: 'px-4 md:container pt-20',
    },
    classImg: {
      typeof: String,
      default: '',
    },
    radioClass: {
      typeof: String,
      default: '',
    },
  },
  data() {
    return {
      mobileBanners: [
        {
          id: 1,
          img: '/images/promo/spo-mobile.webp',
        },
        {
          id: 2,
          img: '/images/promo/app-mobile.webp',
        },
        {
          id: 3,
          img: '/images/promo/ambassador-mobile.webp',
          externalLink: 'https://forms.gle/vcfzR8swQFwQGJrR8',
        },
        {
          id: 4,
          img: '/images/promo/uang-kaget-mobile.webp',
          externalLink:
            'https://x.com/OfficialSeakun/status/1788089320072781888',
        },
        {
          id: 5,
          img: '/images/promo/netflix-info-mobile.webp',
        },
      ],
      desktopBanners: [
        {
          id: 1,
          img: '/images/promo/spo-desktop.webp',
        },
        {
          id: 2,
          img: '/images/promo/app-desktop.webp',
        },
        {
          id: 3,
          img: '/images/promo/ambassador-desktop.webp',
          externalLink: 'https://forms.gle/vcfzR8swQFwQGJrR8',
        },
        {
          id: 4,
          img: '/images/promo/uang-kaget-desktop.webp',
          externalLink:
            'https://x.com/OfficialSeakun/status/1788089320072781888',
        },
        {
          id: 5,
          img: '/images/promo/netflix-info-desktop.webp',
        },
      ],
      banners: [],
      activeSlider: {},
    };
  },
  mounted() {
    this.selectBannersByScreenSize();
    const thisSeection = document.getElementById('promo-section');
    this.observeScroll(thisSeection);
  },
  methods: {
    onClickBanner(banner) {
      if (banner.internalLink) {
        this.$router.push(banner.internalLink);
      } else if (banner.externalLink) {
        window.open(banner.externalLink, '_blank');
      }
    },
    observeScroll(element) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (this.banners.length > 1) {
              let slideCount = 0;
              const slidePromo = setInterval(() => {
                slideCount++;
                this.scrollRight();
                if (slideCount == this.banners.length - 1) {
                  clearInterval(slidePromo);
                }
              }, 10000);
            }
          }
        },
        {
          root: null,
          threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        }
      );
      observer.observe(element);
    },
    selectBannersByScreenSize() {
      let screen = window.innerWidth;
      if (screen <= 500) {
        this.banners = this.mobileBanners;
        this.activeSlider = this.mobileBanners[0];
      } else {
        this.banners = this.desktopBanners;
        this.activeSlider = this.desktopBanners[0];
      }
    },
    scrollTo(id) {
      const container = document.getElementById('promo-scroll');
      this.activeSlider = this.banners.find((ban) => ban.id == id);
      container.scrollTo({
        top: 0,
        left:
          container.clientWidth * this.activeSlider.id - container.clientWidth,
        behavior: 'smooth',
      });
    },
    scrollRight() {
      if (this.activeSlider.id < this.banners.length) {
        const container = document.getElementById('promo-scroll');
        const newSliderId = this.activeSlider.id + 1;
        this.activeSlider = this.banners.find((ban) => ban.id == newSliderId);
        container.scrollTo({
          top: 0,
          left:
            container.clientWidth * this.activeSlider.id -
            container.clientWidth,
          behavior: 'smooth',
        });
      }
    },
    scrollLeft() {
      if (this.activeSlider.id > 1) {
        const container = document.getElementById('promo-scroll');
        const newSliderId = this.activeSlider.id - 1;
        this.activeSlider = this.banners.find((ban) => ban.id == newSliderId);
        container.scrollTo({
          top: 0,
          left:
            container.clientWidth * this.activeSlider.id -
            container.clientWidth,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

<style></style>