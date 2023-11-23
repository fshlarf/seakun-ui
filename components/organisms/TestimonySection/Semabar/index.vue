<template>
  <div
    class="w-full mt-7 md:mt-[35px] lg:mt-[52px] container-semabar"
    id="testimony-semabar"
  >
    <header class="text-center lg:text-left mb-7 lg:mb-8 text-[#15382F]">
      <h1 class="font-bold text-base md:text-xl lg:text-[28px]">Testimonial</h1>
      <p class="text-sm md:text-base lg:text-xl">
        Berikut ini testimoni dari mereka yang sudah menggunakan layanan
        semabar.
      </p>
    </header>
    <div class="relative md:pr-3">
      <ButtonChevron
        v-if="!isPillEndScroll"
        @click-chevron="scrollPill('right')"
        class="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer hidden md:block"
      />
      <ButtonChevron
        v-if="pillScrollPosition != 0"
        @click-chevron="scrollPill('left')"
        class="absolute top-1/2 -translate-y-1/2 -left-5 cursor-pointer hidden md:block rotate-180"
      />
      <div
        id="semabar-testimony-wrapper"
        class="flex flex-col md:flex-row gap-5 overflow-x-scroll testimony-semabar scroll-smooth"
      >
        <CardTestimonySemabarVue
          v-for="(testimony, id) in dataTestimony"
          :key="id"
          :data-testimony="testimony"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardTestimonySemabarVue from './views/CardTestimonySemabar.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import waitForElement from '~/helpers/utility.js';

export default {
  components: {
    CardTestimonySemabarVue,
    ButtonChevron,
  },
  data() {
    return {
      pillScrollPosition: 0,
      isPillEndScroll: false,
      dataTestimony: [
        {
          name: 'Khoir',
          address: 'Medan, Sumatera Utara',
          text:
            'Main minisoccer bersama Seakun benar-benar seru! Lapangan yang nyaman, atmosfer penuh semangat, dan teman-teman yang ramah. Terima kasih Seakun untuk pengalaman main sepakbola yang tak terlupakan!',
        },
        {
          name: 'Samsul',
          address: 'Medan, Sumatera Utara',
          text:
            'Serunya main bareng minisoccer bersama Seakun! Pengalaman bermain yang luar biasa, lapangan bagus, dan teman-teman  yang seru. Terima kasih Seakun untuk pengalaman bermain yang tak terlupakan!',
        },
        {
          name: 'Fauzan',
          address: 'Medan, Sumatera Utara',
          text:
            'Ini bukan sekadar main sepakbola, bersama Seakun kita jalani kebersamaan di lapangan dan di luar lapangan. Terima kasih Seakun untuk momen-momen tak terlupakan dan persahabatan yang terus berkembang!',
        },
      ],
    };
  },
  mounted() {
    this.waitForElement('#semabar-testimony-wrapper').then((elm) => {
      elm.addEventListener('scroll', () => {
        const pillMaxScrollWidth = elm.scrollWidth - elm.clientWidth;
        this.pillScrollPosition = elm.scrollLeft;
        if (this.pillScrollPosition >= pillMaxScrollWidth) {
          this.isPillEndScroll = true;
        } else {
          this.isPillEndScroll = false;
        }
      });
    });
  },
  methods: {
    waitForElement,
    scrollPill(direction) {
      const wrapper = document.getElementById('semabar-testimony-wrapper');
      if (direction == 'right') {
        this.left = wrapper.offsetWidth;
        wrapper.scrollLeft = this.left;
      } else wrapper.scrollLeft = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.testimony-semabar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.testimony-semabar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>