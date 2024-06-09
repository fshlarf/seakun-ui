<template>
  <ModalBase :is-show="isShowModal" @onClose="isShowModal = false">
    <div>
      <div
        class="cow-gallery tn:w-full mx-auto lg:w-[500px] xl:w-[800px] overflow-hidden rounded-[15px] relative z-0"
      >
        <div
          v-show="activeSlider.id > 1"
          @click="slideLeft"
          class="absolute left-0 xl:left-[16px] top-1/2 transform -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-chevron flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/atoms/chevron-white-left.svg" alt="chevron" />
        </div>
        <div
          v-show="activeSlider.id < promoImages.length"
          @click="slideRight"
          class="absolute right-0 xl:right-[16px] top-1/2 transform -translate-y-1/2 rotate-180 w-[38px] h-[38px] rounded-full bg-chevron flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/atoms/chevron-white-left.svg" alt="chevron" />
        </div>
        <div
          class="absolute left-1/2 transform -translate-x-1/2 bottom-[15px] flex justify-center items-center space-x-2"
        >
          <div
            v-for="(promo, id) in promoImages"
            :key="id"
            @click="
              activeSlider = promoImages.find((promo) => promo.id == id + 1)
            "
            class="rounded-full transition-all ease-in-out delay-50"
            :class="`${
              activeSlider.id === id + 1
                ? 'w-[24px] h-[5px] bg-[#00BA88]'
                : 'w-[6px] h-[6px] bg-white cursor-pointer'
            }`"
          ></div>
        </div>
        <nuxt-link
          v-if="activeSlider.internalLink"
          :to="activeSlider.internalLink"
        >
          <img :src="`${activeSlider.img}`" alt="foto promo" />
        </nuxt-link>
        <a
          v-else-if="activeSlider.externalLink"
          :href="activeSlider.externalLink"
          target="_blank"
        >
          <img :src="`${activeSlider.img}`" alt="foto promo" />
        </a>
        <div v-else>
          <img :src="`${activeSlider.img}`" alt="foto promo" />
        </div>
      </div>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from '~/components/atoms/ModalBase.vue';

export default {
  components: {
    ModalBase,
  },
  data() {
    return {
      isShowModal: true,
      promoImages: [],
      promoImageMobile: [
        {
          id: 1,
          img: '/images/promo/sequrban-mobile.webp',
          internalLink: '/sekurban',
        },
        {
          id: 2,
          img: '/images/promo/uang-kaget-mobile.webp',
          externalLink:
            'https://x.com/OfficialSeakun/status/1788089320072781888',
        },
        {
          id: 3,
          img: '/images/promo/wa-mobile.webp',
        },
        {
          id: 4,
          img: '/images/promo/netflix-info-mobile.webp',
        },
      ],
      promoImageDesktop: [
        {
          id: 1,
          img: '/images/promo/sequrban.webp',
          internalLink: '/sekurban',
        },
        {
          id: 2,
          img: '/images/promo/uang-kaget.webp',
          externalLink:
            'https://x.com/OfficialSeakun/status/1788089320072781888',
        },
        {
          id: 3,
          img: '/images/promo/wa.webp',
        },
        {
          id: 4,
          img: '/images/promo/netflix-info.webp',
        },
      ],
      slider: 1,
      activeSlider: {},
    };
  },
  mounted() {
    this.setPromoImageByScreenSize();
    if (this.promoImages.length > 1) {
      let slideCount = 0;
      const slidePromo = setInterval(() => {
        slideCount++;
        this.slideRight();
        if (slideCount == this.promoImages.length - 1) {
          clearInterval(slidePromo);
        }
      }, 8000);
    }
  },
  methods: {
    setPromoImageByScreenSize() {
      let screen = window.innerWidth;
      if (screen <= 1028) {
        this.promoImages = this.promoImageMobile;
        this.activeSlider = this.promoImageMobile[0];
      } else {
        this.promoImages = this.promoImageDesktop;
        this.activeSlider = this.promoImageDesktop[0];
      }
    },
    slideLeft() {
      if (this.activeSlider.id > 1) {
        const idx = this.activeSlider.id - 1;
        this.activeSlider = this.promoImages.find((promo) => promo.id == idx);
      }
    },
    slideRight() {
      if (this.activeSlider.id < this.promoImages.length) {
        const idx = this.activeSlider.id + 1;
        this.activeSlider = this.promoImages.find((promo) => promo.id == idx);
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
  },
};
</script>

<style>
.bg-chevron {
  background: rgba(0, 0, 0, 0.35);
}
</style>
