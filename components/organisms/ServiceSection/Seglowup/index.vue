<template>
  <div class="mt-6 md:mt-[44px] lg:mt-[64px]" id="service-seglowup">
    <div
      class="container-semabar w-full text-center text-[#2A5446] max-w-[928px] mx-auto"
    >
      <h1 class="text-dmsans font-bold text-base md:text-xl lg:text-[30px]">
        Layanan
      </h1>
      <p class="text-sm md:text-base lg:text-xl pt-2">
        Berikut ini beragam layanan yang tersedia di SeGlowUp
      </p>
    </div>
    <section
      class="md:container-semabar flex items-center w-full mt-6 pl-[23px] !justify-center gap-4"
    >
      <ButtonChevron
        variant="bg-[#00BA881A]"
        fillColor="#00BA88"
        mode="left"
        @click-chevron="scrollFill('left')"
        class="hidden md:block"
      />
      <div
        class="flex w-max items-center gap-[9px] lg:gap-4 overflow-x-scroll service-parent scroll-smooth pl-4 pr-8"
        id="service-wrapper"
      >
        <section
          v-for="(service, id) in menus"
          :key="id"
          class="transition-all ease-in duration-200 p-2 lg:p-4 rounded-t-xl min-w-[120px] lg:min-w-[190px]"
          :class="[
            service.name == activeMenu ? 'bg-[#DEF3EF] cursor-pointer' : '',
          ]"
        >
          <div
            class="w-full h-[48px] md:h-[60px] lg:h-[70px] bg-[#DEF3EF] rounded-lg flex items-center justify-center"
          >
            <div
              class="bg-[#DEF3EF] w-full h-full rounded-lg flex items-center justify-center"
              :class="{
                'border-[3px] border-[#23D7A6] !bg-white':
                  service.name === activeMenu,
              }"
            >
              <img
                v-if="service.background"
                :src="`/images/product/${service.background}`"
                :alt="service.name"
                class="w-full h-[26px] md:h-10 lg:h-[60px]"
              />
            </div>
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

    <div class="container-semabar">
      <div class="p-3 md:p-5 lg:p-8 bg-[#DEF3EF] text-dmsans rounded-lg">
        <header class="flex justify-between items-center text-main">
          <p class="text-sm font-medium md:text-base lg:text-[20px] text-main">
            ZAP Series
          </p>
        </header>

        <section
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-6 w-full"
          v-if="zap && !dataProviderListActive.loading"
        >
          <CardService
            v-for="(service, id) in zap.variants"
            :key="id"
            :data="service"
            :zap-uid="zap.uid"
            :package-uid="service.packageUid"
            :id="1 + id"
          />
        </section>
        <section
          v-else
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-6 w-full"
        >
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Chevron from '~/components/atoms/Chevron.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import CardShimmer from './views/CardShimmer.vue';
import CardService from './views/CardService.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Chevron,
    ButtonChevron,
    CardService,
    CardShimmer,
  },
  computed: {
    ...mapGetters({
      dataProviderListActive: 'getProvidersActive',
    }),
    zap() {
      return this.dataProviderListActive.list.find(
        (provider) => provider.slug == 'zap'
      );
    },
  },
  mounted() {
    this.fetchProvider();
  },
  data() {
    return {
      activeMenu: 'Zap',
      menus: [
        {
          name: 'Zap',
          background: 'zap.svg',
        },
        {
          name: 'coming-soon',
        },
        {
          name: 'coming-soon',
        },
        {
          name: 'coming-soon',
        },
      ],
    };
  },

  methods: {
    ...mapActions({
      fetchProvider: 'fetchProvider',
    }),
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
