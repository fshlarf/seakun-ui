<template>
  <div
    class="mt-6 md:mt-[32px] lg:mt-[52px] pb-2 md:pb-3 lg:pb-5 container"
    id="service-information"
  >
    <div class="w-full text-center text-[#15382F] max-w-[928px] mx-auto">
      <h1 class="text-dmsans font-bold text-base md:text-xl lg:text-[28px]">
        Info Layanan
      </h1>
      <p class="text-sm md:text-base lg:text-xl pt-2">
        Pilih permainan dan olahraga yang kamu sukai, dan temukan informasi
        lengkap tentang layanan semabar di bawah ini!
      </p>
    </div>
    <section
      class="flex items-center mt-6 mx-[23px] md:mx-[40px] lg:mx-[55px] justify-center gap-4"
    >
      <ButtonChevron
        variant="bg-[#00BA881A]"
        fillColor="#00BA88"
        mode="left"
        @click-chevron="scrollFill('left')"
        class="hidden md:block"
      />
      <div
        class="flex items-center gap-[9px] lg:gap-4 overflow-x-scroll service-parent scroll-smooth"
        id="service-wrapper"
      >
        <section
          v-for="(service, id) in menus"
          :key="id"
          class="transition-all ease-in duration-200 p-2 lg:p-4 rounded-t-xl cursor-pointer lg:min-w-[190px] lg:max-w-[190px]"
          @click="handleClickMenu(service.name)"
          :class="{
            ' bg-[#DEFDF5] ': activeMenu === service.name,
          }"
        >
          <div
            class="bg-cover bg-center relative service-menu rounded-[6px] text-center"
            :class="{
              'border-[3px] border-[#23D7A6] rounded-[10px]':
                activeMenu === service.name,
            }"
            :style="`background-image: url(/images/semabar/illustration/service-menu/${service.background})`"
          >
            <h3
              class="text-sm font-bold text-white w-[120px] py-[15px] relative z-40 whitespace-nowrap"
            >
              {{ service.name }}
            </h3>
          </div>
        </section>
      </div>
      <ButtonChevron
        variant="bg-[#00BA881A]"
        fillColor="#00BA88"
        @click-chevron="scrollFill('right')"
        class="hidden md:block"
      />
    </section>

    <div class="p-3 md:p-5 lg:p-8 bg-[#DBF8F2] text-dmsans rounded-lg">
      <header class="flex justify-between items-center text-main">
        <p class="text-sm font-medium md:text-base lg:text-[20px] text-main">
          Venue yang tersedia
        </p>
        <div class="flex items-center gap-1 cursor-pointer">
          <p class="text-xs md:text-sm lg:text-[18px] text-main font-medium">
            Filter Kota
          </p>
          <Chevron />
        </div>
      </header>
      <section
        class="rounded-[10px] border-[#00BA88] border-[1px] p-2 flex items-start gap-1 bg-[#EBFFF9] my-6"
      >
        <img
          src="/images/icons/atoms/round-info-green.svg"
          alt="info"
          class="w-3 h-3 lg:w-5 lg:h-5"
        />
        <p
          class="text-xs md:text-sm lg:text-base text-[#00BA88] font-semibold text-nunito"
        >
          Nikmati harga lebih terjangkau dengan menjadi member! Bayar sekaligus
          4 match per-bulan dan nikmati biaya admin lebih murah!
        </p>
      </section>
      <section
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5"
        v-show="filteredList.length > 0"
      >
        <CardService
          v-for="(data, id) in filteredList"
          :key="id"
          :cardData="data"
          @click-card="$router.push('/semabar/details-venue')"
        />
      </section>
      <div
        class="flex gap-2 items-center pt-6 mx-auto w-max cursor-pointer"
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
</template>

<script>
import CardService from './views/CardService.vue';
import Chevron from '~/components/atoms/Chevron.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';

export default {
  components: {
    CardService,
    Chevron,
    ButtonChevron,
  },
  data() {
    return {
      activeMenu: 'Mini Soccer',
      menus: [
        {
          name: 'Mini Soccer',
          background: 'minisoccer.svg',
        },
        {
          name: 'Badminton',
          background: 'badminton.svg',
        },
        {
          name: 'Futsal',
          background: 'futsal.svg',
        },
        {
          name: 'Tenis Meja',
          background: 'tenis.svg',
        },
        {
          name: 'Mini Soccer 2',
          background: 'minisoccer.svg',
        },
        {
          name: 'Badminton 2',
          background: 'badminton.svg',
        },
        {
          name: 'Futsal 2',
          background: 'futsal.svg',
        },
        {
          name: 'Tenis Meja 2',
          background: 'tenis.svg',
        },
      ],
      dataVenue: {
        list: [
          {
            name: 'Pancoran Soccer Field 1',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'psf.svg',
          },
          {
            name: 'D37 Mini Soccer',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'd-37.svg',
          },
          {
            name: 'Pancoran Soccer Field',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'psf.svg',
          },
          {
            name: 'D37 Mini Soccer',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'd-37.svg',
          },
          {
            name: 'Pancoran Soccer Field',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'psf.svg',
          },
          {
            name: 'D37 Mini Soccer',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'd-37.svg',
          },
          {
            name: 'Pancoran Soccer Field',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'psf.svg',
          },
          {
            name: 'D37 Mini Soccer',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'd-37.svg',
          },
          {
            name: 'Pancoran Soccer Field 1',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'psf.svg',
          },
          {
            name: 'D37 Mini Soccer',
            member: 150,
            price: {
              membership: 85000,
              nonMembership: 95000,
            },
            images: 'd-37.svg',
          },
        ],
      },
      filteredList: [],
    };
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
    updateFilteredList() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.filteredList = this.dataVenue.list.slice(0, 3);
      } else if (screenWidth < 1024) {
        this.filteredList = this.dataVenue.list.slice(0, 4);
      } else {
        this.filteredList = this.dataVenue.list.slice(0, 8);
      }
    },
    showAllDataVenue() {
      this.filteredList = this.dataVenue.list;
    },
    handleClickMenu(name) {
      this.activeMenu = name;
    },
    scrollFill(direction) {
      const wrapper = document.getElementById('service-wrapper');
      if (direction == 'left') {
        wrapper.scrollLeft = 0;
      } else {
        wrapper.scrollLeft += wrapper.offsetWidth - 100;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}
.service-menu::after {
  border-radius: 6px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.45);
}
/* Hide scrollbar for Chrome, Safari and Opera */
.service-parent::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.service-parent {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
