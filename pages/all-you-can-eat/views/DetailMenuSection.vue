<template>
  <div class="container">
    <div
      class="scroll-menu p-3 tn:flex tn:space-x-4 tn:overflow-x-auto tn:overscroll-auto md:grid md:grid-cols-4 md:gap-8 md:flex-none md:overscroll-none md:overflow-x-hidden md:space-x-0"
    >
      <MenuPills
        v-for="(menu, id) in menuLable"
        :key="id"
        class="cursor-pointer tn:w-72 md:w-full h-14 flex-none"
        :class="{
          'high-light ': menu === activeMenu,
        }"
        :lable="menu"
        @onClickMenu="onClickMenu"
      />
    </div>
    <div v-if="showMenu">
      <DetailMenu
        :detail-restaurant="dataRestaurant"
        :image-preview="preview"
        @onClickImage="onClickImage"
      />
    </div>
    <div v-if="showLocation">
      <LocationMenu :restaurant="dataRestaurant" />
    </div>
    <div v-if="showPhoto">
      <PhotoMenu />
    </div>
    <div class="px-3" v-if="showTermsAndCondition">
      <TermsAndConditionMenu />
    </div>
  </div>
</template>

<script>
import MenuPills from './MenuPills.vue';
import DetailMenu from './DetailMenu.vue';
import PhotoMenu from './PhotoMenu.vue';
import TermsAndConditionMenu from './TermsAndConditionMenu.vue';
import LocationMenu from './LocationMenu.vue';
export default {
  data() {
    return {
      activeMenu: 'Menu',
      showMenu: true,
      showLocation: false,
      showPhoto: false,
      showTermsAndCondition: false,
      menuLable: ['Menu', 'Lokasi', 'Foto', 'Syarat & Ketentuan'],
      preview: '',
      dataRestaurant: {
        name: 'Voyage Restaurant Harris Harmoni',
        location: 'Harmoni, Jakarta Pusat',
        phone: '+622122036000',
        images: [
          'images/all you can eat/menu/Voyage-01.jpg',
          'images/all you can eat/menu/Voyage-02.jpg',
          'images/all you can eat/menu/Voyage-03.jpg',
          'images/all you can eat/menu/Voyage-04.jpg',
          'images/all you can eat/menu/Voyage-05.jpg',
          'images/all you can eat/menu/Voyage-06.jpg',
        ],
        address:
          'Jl. Hayam Wuruk No.6, RT.6/RW.2, Kb. Klp., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120',
      },
    };
  },
  components: {
    MenuPills,
    DetailMenu,
    TermsAndConditionMenu,
    LocationMenu,
    PhotoMenu,
  },
  mounted() {
    this.preview = this.dataRestaurant.images[0];
  },
  methods: {
    onClickMenu(menu) {
      this.activeMenu = menu;
      if (menu === 'Menu') {
        this.showMenu = true;
        this.showLocation = false;
        this.showPhoto = false;
        this.showTermsAndCondition = false;
      } else if (menu === 'Lokasi') {
        this.showMenu = false;
        this.showLocation = true;
        this.showPhoto = false;
        this.showTermsAndCondition = false;
      } else if (menu === 'Foto') {
        this.showMenu = false;
        this.showLocation = false;
        this.showPhoto = true;
        this.showTermsAndCondition = false;
      } else if (menu === 'Syarat & Ketentuan') {
        this.showMenu = false;
        this.showLocation = false;
        this.showPhoto = false;
        this.showTermsAndCondition = true;
      }
    },
    onClickImage(data) {
      this.preview = data;
    },
  },
};
</script>

<style scoped>
.scroll-menu::-webkit-scrollbar {
  display: none;
}
.scroll-menu {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.high-light {
  border: 2px solid #a9e0d5;
  background-image: linear-gradient(to right, #ffffff, #d4f1ec);
}
</style>
