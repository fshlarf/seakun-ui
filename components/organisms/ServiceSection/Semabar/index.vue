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
        lengkap tentang layanan Semabar di bawah ini!
      </p>
    </div>
    <section
      class="flex items-center mt-6 mx-[23px] md:mx-[40px] lg:mx-[69px] justify-center gap-4"
    >
      <ButtonChevron
        variant="bg-[#00BA881A]"
        fillColor="#00BA88"
        mode="left"
        @click-chevron="scrollFill('left')"
        class="hidden md:block"
      />
      <div
        class="flex items-center gap-[9px] lg:gap-8 overflow-x-scroll service-parent scroll-smooth"
        id="service-wrapper"
      >
        <section
          v-for="(service, id) in menus"
          :key="id"
          class="transition-all ease-in duration-200 p-2 lg:p-4 rounded-t-xl lg:min-w-[190px] lg:max-w-[190px]"
          @click="handleClickMenu(service)"
          :class="`{
            ${activeMenu === service.name ? 'bg-[#DEFDF5] ' : null}
            ${service.isActive ? 'cursor-pointer' : 'cursor-not-allowed'}
          }`"
        >
          <div
            class="bg-cover bg-center relative service-menu rounded-[6px] text-center"
            :class="`{
              ${
                activeMenu === service.name
                  ? 'border-[3px] border-[#23D7A6] rounded-[10px]'
                  : null
              }:
              ${!service.isActive ? 'opacity-30' : null}
              
            }`"
            :style="`background-image: url(/images/semabar/illustration/service-menu/${service.background})`"
          >
            <h3
              class="text-sm font-bold text-white min-w-[120px] py-[15px] relative z-40 whitespace-nowrap"
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

    <div class="p-3 md:p-5 lg:p-8 bg-[#DEFDF5] text-dmsans rounded-lg">
      <header class="flex justify-between items-center text-main">
        <p class="text-sm font-medium md:text-base lg:text-[20px] text-main">
          Venue yang tersedia
        </p>
        <div class="flex items-center gap-1 cursor-pointer relative">
          <p
            class="text-xs md:text-sm lg:text-[18px] text-main font-medium"
            @click="isShowModalCity = !isShowModalCity"
          >
            {{ selectedCity != 'Semua' ? selectedCity : 'Filter Kota' }}
          </p>
          <Chevron
            :isShow="isShowModalCity"
            @click="isShowModalCity = !isShowModalCity"
          />
          <div
            class="bg-white px-5 z-20 rounded-[5px] space-y-2 absolute top-[100%] mt-3 right-0 overflow-hidden transition-all ease-in-out"
            :class="isShowModalCity ? 'h-max py-2' : 'h-0'"
          >
            <Dropdown
              :class-text="{
                'text-green-seakun-secondary-dark': selectedCity == data.name,
              }"
              v-for="(data, id) in cities"
              :key="id"
              :data="data"
              @clickMenuFilter="onFilterCity(data)"
            />
          </div>
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
          Yuk, jadi member sekarang! Bayar sekaligus 4 match per-bulan dan
          nikmati biaya admin lebih murah
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
          @click-card="
            data.isAvailable
              ? $router.push({
                  path: '/semabar/details-venue',
                  query: { detailVenue: data.slug },
                })
              : null
          "
        />
      </section>
      <div
        class="flex gap-2 items-center pt-6 mx-auto w-max cursor-pointer"
        @click="onShowMore"
        v-if="!allreadyDisplayData"
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
import Dropdown from './views/Dropdown.vue';

export default {
  components: {
    CardService,
    Chevron,
    ButtonChevron,
    Dropdown,
  },
  data() {
    return {
      allreadyDisplayData: false,
      isShowMore: false,
      activeMenu: 'Mini Soccer',
      menus: [
        {
          name: 'Mini Soccer',
          background: 'minisoccer.svg',
          isActive: true,
        },
        {
          name: 'Tenis',
          background: 'tennis.svg',
          isActive: false,
        },
        {
          name: 'Badminton',
          background: 'badminton.svg',
          isActive: false,
        },
        {
          name: 'Futsal',
          background: 'futsal.svg',
          isActive: false,
        },
        {
          name: 'Tenis Meja ',
          background: 'table-tennis.svg',
          isActive: false,
        },
      ],
      dataVenue: {
        list: [
          {
            name: 'LA.PANG.AN 45 Permata Hijau',
            slug: 'permata-hijau',
            member: 150,
            detailsFee: {
              detailsPrice: {
                membership: {
                  sharedFee: 81000,
                  adminFee: 9000,
                  pricePerMatch: 90000,
                  moreEffiecient: '56% !!',
                },
                nonMembership: {
                  sharedFee: 81000,
                  adminFee: 14000,
                  pricePerMatch: 95000,
                },
              },
            },
            isAvailable: true,
            images: 'permata-hijau.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Rahayu Mini Soccer Medan',
            slug: 'rahayu-minisoccer',
            member: 150,
            detailsFee: {
              fieldFee: 600000,
              referee: 100000,
              consumption: 50000,
              otherFacilities: 300000,
              totalFee: 1050000,
              detailsPrice: {
                membership: {
                  sharedFee: 30000,
                  adminFee: 7500,
                  pricePerMatch: 37500,
                },
                nonMembership: {
                  sharedFee: 30000,
                  adminFee: 7500,
                  pricePerMatch: 37500,
                },
              },
            },
            isAvailable: true,
            images: 'rahayu-minisoccer.webp',
            city: 'Medan',
          },
          {
            name: 'D37 Duren Tiga',
            isAvailable: false,
            images: 'd-37.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Epic Wesoccer Menteng',
            isAvailable: false,
            images: 'epic-wesoccer.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Pancoran Soccer Field',
            isAvailable: false,
            images: 'psf.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Main Gandaria',
            isAvailable: false,
            images: 'main-gandaria.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'ASATU Arena Cikini',
            isAvailable: false,
            images: 'asatu-cikini.webp',
            classImage: 'rounded',
            city: 'Jakarta Pusat',
          },
          {
            name: 'Revo Duren Sawit',
            isAvailable: false,
            images: 'revo.webp',
            classImage: 'rounded',

            city: 'Jakarta Timur',
          },
          {
            name: 'POP Pulomas',
            isAvailable: false,
            images: 'pulomas.webp',
            classImage: 'rounded ',
            city: 'Jakarta Timur',
          },
          {
            name: 'Centro Utan Jati',
            isAvailable: false,
            images: 'centro.webp',
            classImage: 'rounded',
            city: 'Jakarta Barat',
          },
          {
            name: 'Rival Sport Sunter',
            isAvailable: false,
            images: 'rival-sunter.webp',
            classImage: 'rounded',

            city: 'Jakarta Utara',
          },
          {
            name: 'Gator Arena PIK',
            isAvailable: false,
            images: 'gator-arena.webp',
            city: 'Jakarta Utara',
          },
          {
            name: 'Jet One Bintaro',
            isAvailable: false,
            images: 'jet-one-bintaro.webp',
            city: 'Tangerang',
          },
          {
            name: 'DNA Arena Cinere',
            isAvailable: false,
            images: 'arena-cinere.webp',
            city: 'Depok',
          },
        ],
      },
      cities: [
        {
          name: 'Semua',
        },
        {
          name: 'Jakarta Selatan',
        },
        {
          name: 'Jakarta Pusat',
        },
        {
          name: 'Jakarta Timur',
        },
        {
          name: 'Jakarta Utara',
        },
        {
          name: 'Tangerang',
        },
        {
          name: 'Depok',
        },
        {
          name: 'Medan',
        },
      ],
      filteredList: [],
      isShowModalCity: false,
      selectedCity: 'Semua',
    };
  },
  created() {
    if (process.client) {
      this.displayAllListByScreenSize();
      window.addEventListener('resize', this.updateFilteredListByResize);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFilteredListByResize);
  },

  methods: {
    onFilterCity(param) {
      this.selectedCity = param.name;
      this.filterCity();
    },
    filterCity() {
      if (this.selectedCity == 'Semua') {
        this.allreadyDisplayData = false;
        this.displayAllListByScreenSize();
      } else {
        this.filteredList = this.dataVenue.list.filter(
          (data) => data.city == this.selectedCity
        );
        this.allreadyDisplayData = true;
      }
      this.isShowModalCity = false;
    },
    displayAllListByScreenSize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.filteredList = this.dataVenue.list.slice(0, 3);
      } else if (screenWidth < 1024) {
        this.filteredList = this.dataVenue.list.slice(0, 4);
      } else {
        this.filteredList = this.dataVenue.list.slice(0, 8);
      }
    },
    updateFilteredListByResize() {
      this.$alert.show({
        status: 'error',
        message: 'resize triggered',
      });
      this.filterCity(this.selectedCity);
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.filteredList = this.filteredList.slice(0, 3);
      } else if (screenWidth < 1024) {
        this.filteredList = this.filteredList.slice(0, 4);
      } else {
        this.filteredList = this.filteredList.slice(0, 8);
      }
    },
    onShowMore() {
      if (this.selectedCity == 'Semua') {
        this.filteredList = this.dataVenue.list;
        this.allreadyDisplayData = true;
      }
    },
    handleClickMenu(val) {
      if (val.isActive) {
        this.activeMenu = val.name;
      }
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
