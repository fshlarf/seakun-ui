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
    <div
      class="flex items-center gap-[9px] overflow-x-scroll service-parent mt-6 ml-6 md:ml-0"
    >
      <section
        v-for="(service, id) in menus"
        :key="id"
        class="transition-all ease-in duration-200 p-2 rounded-t-xl"
        @click="handleClickMenu(service.name)"
        :class="{
          ' bg-[#DEFDF5] ': activeMenu === service.name,
        }"
      >
        <div
          class="bg-cover bg-center relative service-menu rounded-[6px] text-center"
          :class="{
            'border-[3px] border-[#23D7A6] rounded-[10px] bg-red-200':
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
    <CardService />
  </div>
</template>

<script>
import CardService from './views/CardService.vue';
export default {
  components: {
    CardService,
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
      ],
    };
  },

  methods: {
    handleClickMenu(name) {
      this.activeMenu = name;
    },
  },
};
</script>

<style lang="scss" scoped>
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
