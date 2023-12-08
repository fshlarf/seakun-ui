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

    <div class="p-3 md:p-5 lg:p-8 bg-[#DBF8F2] text-dmsans rounded-lg">
      <header class="flex justify-between items-center text-main">
        <p class="text-sm font-medium md:text-base lg:text-[20px] text-main">
          Venue yang tersedia
        </p>
        <div class="flex items-center gap-1 cursor-pointer relative">
          <p
            class="text-xs md:text-sm lg:text-[18px] text-main font-medium"
            @click="isShowModalCity = !isShowModalCity"
          >
            {{
              selectedCity && selectedCity != 'Semua'
                ? selectedCity
                : 'Filter Kota'
            }}
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
              v-for="(data, id) in citys"
              :key="id"
              :data="data"
              @clickMenuFilter="
                filterCity(data),
                  (selectedCity = data.name),
                  (isShowModalCity = false)
              "
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
          @click-card="
            data.isAvailable
              ? $router.push({
                  path: '/semabar/details-venue',
                  query: { detailVenue: JSON.stringify(data) },
                })
              : null
          "
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
            member: 150,
            detailsFee: {
              fieldFee: 2400000,
              referee: 200000,
              consumption: 100000,
              otherFacilities: 135000,
              totalFee: 2835000,
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
            address:
              'Jl. Logam No.7, RT.7/RW.8, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210',
            maps:
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3494264236692!2d106.78892859999999!3d-6.2175673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7cc70ce5a39%3A0x2ad1d2e9cc5cd357!2sLA.PANG.AN%2045%20Permata%20Hijau!5e0!3m2!1sid!2sid!4v1701942824996!5m2!1sid!2sid',

            whatsappCommunity:
              'https://chat.whatsapp.com/IZhOxHR2Tik9Y6bRJhAVhx',
            benefits: [
              'Komunitas terkelola',
              'Venue terjamin',
              'Game terorganisir',
              'Pembagian tim yang adil',
              'Keanggotaan yang terorganisir',
              'Leaderboard pemain',
              'Fasilitas tambahan lainnya (rompi, bola, fotografer)',
            ],
            facility: [
              {
                name: 'Bench Pemain',
                images: 'bench',
              },
              {
                name: 'Tribune Penonton',
                images: 'tribune',
              },
              {
                name: 'Musholla',
                images: 'mosque',
              },
              {
                name: 'Kamar Mandi',
                images: 'bathroom',
              },
              {
                name: 'Parkir Motor & Mobil (Tarif Normal)',
                images: 'park',
              },
            ],
            gallery: [
              {
                images: 'permata-hijau-1.webp',
              },
              {
                images: 'permata-hijau-2.webp',
              },
              {
                images: 'permata-hijau-3.webp',
              },
              {
                images: 'permata-hijau-4.webp',
              },
              {
                images: 'permata-hijau-5.webp',
              },
              {
                images: 'permata-hijau-6.webp',
              },
              {
                images: 'permata-hijau-7.webp',
              },
            ],
          },
          {
            name: 'Rahayu Minisoccer',
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
            address:
              'Jl. Rahayu, Pasar VI Tembung Kec. Percut Sei Tuan, Kabupaten Deli Serdang',
            maps:
              'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7964.028638092421!2d98.7689968!3d3.5841861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137316d523615%3A0x9762cdeb0682def9!2sRahayu%20Mini%20Soccer!5e0!3m2!1sid!2sid!4v1701942689597!5m2!1sid!2sid',
            whatsappCommunity:
              'https://chat.whatsapp.com/FkNsftkEpx9LLvLJBBd7Vv',
            benefits: [
              'Komunitas terkelola',
              'Venue terjamin',
              'Game terorganisir',
              ' Pembagian tim yang adil',
              'Keanggotaan yang terorganisir',
              ' Leaderboard pemain',
              'Fasilitas tambahan lainnya (rompi, bola, fotografer)',
            ],
            facility: [
              {
                name: 'Bench Pemain',
                images: 'bench',
              },
              {
                name: 'Tribune Penonton',
                images: 'tribune',
              },
              {
                name: 'Masjid Terdekat',
                images: 'mosque',
              },
              {
                name: 'Kamar Mandi',
                images: 'bathroom',
              },
              {
                name: 'Parkir Motor & Mobil (Free)',
                images: 'park',
              },
            ],
            gallery: [
              {
                images: 'rahayu-1.webp',
              },
              {
                images: 'rahayu-2.webp',
              },
              {
                images: 'rahayu-3.webp',
              },
              {
                images: 'rahayu-4.webp',
              },
              {
                images: 'rahayu-5.webp',
              },
              {
                images: 'rahayu-6.webp',
              },
              {
                images: 'rahayu-7.webp',
              },
            ],
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
            city: 'Tanggerang',
          },
          {
            name: 'DNA Arena Cinere',
            isAvailable: false,
            images: 'arena-cinere.webp',
            city: 'Depok',
          },
        ],
      },
      citys: [
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
          name: 'Tanggerang',
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
      this.updateFilteredList();
      window.addEventListener('resize', this.updateFilteredList);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFilteredList);
  },

  methods: {
    filterCity(param) {
      if (param.name == 'Semua') {
        this.filteredList = this.dataVenue.list;
      } else {
        this.filteredList = this.dataVenue.list.filter(
          (data) => data.city == param.name
        );
      }
    },

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
      if (this.selectedCity == 'Semua') {
        this.filteredList = this.dataVenue.list;
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
