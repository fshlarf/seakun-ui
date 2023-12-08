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
        :data="detailsVenue"
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
    };
  },
  props: {
    detailsVenue: {
      typeof: Object,
      default: () => {},
    },
  },
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
