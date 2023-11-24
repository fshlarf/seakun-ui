<template>
  <div class="w-full container-semabar mt-12">
    <header
      class="flex xl:justify-evenly items-center bg-[#D9FDF3] rounded-t-[10px] overflow-x-scroll tab-menu"
    >
      <section
        v-for="(menu, id) in tabMenu"
        :key="id"
        class="relative text-center cursor-pointer min-w-[140px] md:min-w-[140px] mx-4 py-4 lg:py-6 lg:mx-6 whitespace-nowrap md:whitespace-normal"
        @click="activeTab = menu.content"
        :class="`${[
          activeTab == menu.content
            ? 'font-bold text-green-seakun-secondary-dark '
            : 'text-[#66738F]',
        ]}`"
      >
        <p class="text-sm md:text-base lg:text-[18px]">
          {{ menu.name }}
        </p>
        <div
          class="absolute bottom-0 rounded-[20px] bg-[#00BA88] hidden transition-all ease-in-out duration-200"
          :class="{
            '!block left-0 underline-animation ': activeTab == menu.content,
          }"
        ></div>
      </section>
    </header>
    <div>
      <TableBody
        class="p-3 md:p-5 lg:p-8"
        :selected="activeTab"
        :data="details"
      />
    </div>
  </div>
</template>

<script>
import TableBody from './TableBody.vue';
export default {
  components: {
    TableBody,
  },
  data() {
    return {
      tabMenu: [
        {
          name: 'Tentang',
          content: 'about',
        },
        {
          name: 'Skema Harga',
          content: 'price',
        },
        {
          name: 'Benefit Mabar',
          content: 'benefits',
        },
        {
          name: 'Alamat',
          content: 'address',
        },
        {
          name: 'Fasilitas',
          content: 'facility',
        },
        {
          name: 'Galeri',
          content: 'gallery',
        },
      ],
      activeTab: 'about',
      details: {
        about: [
          'Merupakan komunitas main bareng yang diinisiasi oleh Seakun.id dengan tujuan untuk mempertemukan kamu dengan mereka yang ingin bermain atau berolahraga bareng, namun terkendala dalam mencari teman mabar.',
          'Kini dengan Semabar kamu tidak perlu bingung dalam mencari teman untuk main bareng. Cukup dengan bergabung dalam komunitas, nanti kamu akan dicarikan partner untuk main bareng.. ',
        ],
        price: {
          detailsOfPlayingFees: {
            field: 1800000,
            consumption: 55000,
            otherFacilities: 450000,
            count: 2305000,
          },
          detailsOfPermatchFees: {
            nonMembership: {
              adminFees: 29123,
              pricePerMatch: 95000,
            },
            membership: {
              adminFees: 19123,
              priceForFourMatch: 340000,
            },
          },

          galery: [
            {
              images: 'galery-1',
            },
            {
              images: 'galery-2',
            },
            {
              images: 'galery-3',
            },
            {
              images: 'galery-4',
            },
          ],
        },
        benefits: [
          'Maintain Komunitas',
          'Maintain Membership Venue',
          'Organize Game (In Game)',
          'Organize Member',
          'Fasilitas Tambahan (Rompi)',
          'Leaderboards',
          'Pembagian Tim In Game',
        ],
        addressVenue: {
          address:
            'Jl. Swadaya No.37-43, RT.6/RW.14, Cipinang Besar Utara, Kec. Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13410',
        },
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
            name: 'Parkir Motor & Mobil',
            images: 'park',
          },
        ],
        gallery: [
          {
            images: 'gallery-1',
          },
          {
            images: 'gallery-2',
          },
          {
            images: 'gallery-3',
          },
          {
            images: 'gallery-4',
          },
          {
            images: 'gallery-1',
          },
          {
            images: 'gallery-2',
          },
        ],
      },
    };
  },
  props: {},
};
</script>

<style lang="scss" scoped>
.underline-animation {
  height: 4px;
  right: 100%;
  animation: drawBorder 0.5s ease forwards;
}

@keyframes drawBorder {
  from {
    right: 100%;
  }
  to {
    right: 0;
  }
}
.tab-menu::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.tab-menu {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
