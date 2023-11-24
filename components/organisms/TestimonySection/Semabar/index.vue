<template>
  <no-ssr>
    <div
      class="w-full mt-7 md:mt-[35px] lg:mt-[52px] container-semabar"
      id="testimony-semabar"
    >
      <header class="lg:text-left mb-7 lg:mb-8 text-[#15382F] w-full">
        <h1 class="font-bold text-base md:text-xl lg:text-[28px] text-center">
          Testimonial
        </h1>
        <p class="text-sm md:text-base lg:text-xl text-center pt-2">
          Berikut ini testimoni dari mereka yang sudah menggunakan layanan
          semabar.
        </p>
      </header>
      <div class="relative md:pr-3">
        <ButtonChevron
          v-show="!isPillEndScroll"
          @click-chevron="scrollPill('right')"
          class="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer hidden md:block"
        />
        <ButtonChevron
          v-show="pillScrollPosition != 0"
          @click-chevron="scrollPill('left')"
          class="absolute top-1/2 -translate-y-1/2 -left-5 cursor-pointer hidden md:block rotate-180"
        />
        <div
          id="semabar-testimony-wrapper"
          class="flex flex-col md:flex-row gap-5 overflow-x-scroll testimony-semabar scroll-smooth"
          v-if="filteredList.length > 0"
        >
          <CardTestimonySemabarVue
            v-for="(testimony, id) in filteredList"
            :key="id"
            :data-testimony="testimony"
            class="md:min-w-[330px] lg:min-w-[300px] xl:min-w-[350px]"
          />
          <div
            class="flex gap-2 items-center pt-4 md:pt-6 mx-auto w-max cursor-pointer md:hidden"
            @click="showAllDataVenue"
          >
            <p
              class="text-green-seakun-secondary-dark text-xs md:text-sm font-medium"
            >
              Show more
            </p>
            <Chevron color="#00BA88" />
          </div>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import CardTestimonySemabarVue from './views/CardTestimonySemabar.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import waitForElement from '~/helpers/utility.js';
import Chevron from '~/components/atoms/Chevron.vue';

export default {
  components: {
    CardTestimonySemabarVue,
    ButtonChevron,
    Chevron,
  },
  data() {
    return {
      pillScrollPosition: 0,
      isPillEndScroll: false,
      filteredList: [],
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
        {
          name: 'Gilang',
          address: 'Medan, Sumatera Utara',
          text:
            'Selama join main minisoccer di Mainbarengseakun itu makin nambah teman , nambah wawasan, sehat, dan matchnya itu seru,yang pastinya mantap lah...',
          images: 'gilang.jpeg',
        },
        {
          name: 'Iqbal',
          address: 'Medan, Sumatera Utara',
          text:
            'Main mini soccer bareng seakun itu sangat asik. Kita bakal ketemu sama orang baru yang tidak kita kenal tapi meraka baik baik semua. Sistem yang di terapkan untuk pertandingan juga sangat efisien. Fun banget main bareng mereka',
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

  created() {
    if (process.client) {
      this.updateFilteredList();
      window.addEventListener('resize', this.updateFilteredList);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFilteredList);
  },
  methods: {
    waitForElement,
    updateFilteredList() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        this.filteredList = this.dataTestimony.slice(0, 3);
      } else {
        this.filteredList = this.dataTestimony;
      }
    },
    showAllDataVenue() {
      this.filteredList = this.dataTestimony;
    },
    scrollPill(direction) {
      const wrapper = document.getElementById('semabar-testimony-wrapper');
      if (direction == 'right') {
        wrapper.scrollLeft += wrapper.offsetWidth;
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
