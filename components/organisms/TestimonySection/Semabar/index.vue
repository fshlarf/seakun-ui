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
          Lihat tanggapan puas dari mereka yang sudah lebih dulu bergabung di
          komunitas Semabar
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
              {{ allreadyDisplayData ? 'Show less' : 'Show more' }}
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
            'Minisoccer bareng kawan di Seakun seru!!! Lapangan yang nyaman, atmosfer penuh semangat, dan teman-teman yang ramah.',
          images: 'khoir.jpeg',
        },
        {
          name: 'Samsul',
          address: 'Medan, Sumatera Utara',
          text:
            'Lapangannya bagus, matchnya sudah diatur, dan ketemu temen baru yang asik dan seru. Terima kasih Seakun untuk pengalaman bermain yang tak terlupakan!',
          images: 'samsul.jpeg',
        },
        {
          name: 'Fauzan',
          address: 'Medan, Sumatera Utara',
          text:
            'Rasanya bukan sekedar main sepakbola, karena kita jadi akrab di lapangan maupun di luar lapangan. Selain sehat, juga bisa punya persahabatan baru.',
          images: 'fauzan.jpeg',
        },
        {
          name: 'Gilang',
          address: 'Medan, Sumatera Utara',
          text:
            'Selama join main minisoccer di Semabar makin nambah teman, nambah wawasan, sehat, dan matchnya itu seru! Yang pastinya mantap lah...',
          images: 'gilang.jpeg',
        },
        {
          name: 'Iqbal',
          address: 'Medan, Sumatera Utara',
          text:
            'Kita bakal ketemu sama orang baru yang tidak kita kenal, tapi meraka baik baik semua. Sistem yang diterapkan untuk pertandingan juga sangat efisien. Fun banget main bareng mereka.',
          images: 'iqbal.jpeg',
        },
      ],
      windowWidth: 0,
      allreadyDisplayData: false,
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
      this.windowWidth = window.innerWidth;
      window.addEventListener('resize', this.updateFilteredList);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFilteredList);
  },
  methods: {
    waitForElement,
    updateFilteredList() {
      const newWindowWidth = window.innerWidth;
      if (newWindowWidth !== this.windowWidth) {
        if (newWindowWidth < 768) {
          this.filteredList = this.dataTestimony.slice(0, 3);
        } else {
          this.filteredList = this.dataTestimony;
        }
      }
    },
    showAllDataVenue() {
      if (this.allreadyDisplayData) {
        this.filteredList = this.dataTestimony.slice(0, 3);
      } else {
        this.filteredList = this.dataTestimony;
      }
      this.allreadyDisplayData = !this.allreadyDisplayData;
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
