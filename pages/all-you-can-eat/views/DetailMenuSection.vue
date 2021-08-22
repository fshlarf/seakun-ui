<template>
  <div class="container">
    <div
      class="scroll-menu p-3 tn:flex tn:space-x-4 tn:overflow-x-auto tn:overscroll-auto md:grid md:grid-cols-3 md:gap-8 md:flex-none md:overscroll-none md:overflow-x-hidden md:space-x-0"
    >
      <MenuPills
        v-for="(menu, id) in menuLable"
        :key="id"
        class="cursor-pointer tn:w-72 md:w-full h-16 flex-none"
        :class="{
          'high-light ': menu === activeMenu,
        }"
        :lable="menu"
        @onClickMenu="onClickMenu"
      />
    </div>
    <div v-if="showMenu">
      <DetailMenu
        :data-menus="dataPreview"
        :data-images="listMenus"
        :image-preview="preview"
        @onClickImage="onClickImage"
      />
    </div>
    <div v-if="showLocation">
      <LocationMenu />
    </div>
    <div v-if="showScenario">
      <ScenarioMenu />
    </div>
  </div>
</template>

<script>
import MenuPills from './MenuPills.vue';
import DetailMenu from './DetailMenu.vue';
import ScenarioMenu from './ScenarioMenu.vue';
import LocationMenu from './LocationMenu.vue';
export default {
  data() {
    return {
      activeMenu: 'Menu',
      showMenu: true,
      showLocation: false,
      showScenario: false,
      menuLable: ['Menu', 'Lokasi', 'Skenario'],
      preview: '',
      dataPreview: {},
      listMenus: [
        {
          id: 1,
          price: 53000,
          src: 'images/all you can eat/menu/menu-0.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate, debitis voluptas assumenda asperiores velit officia voluptatem voluptates alias dolorem aliquid tempore illo distinctio voluptatum et? Ex voluptate molestiae vero non ab ad modi quibusdam? Fugit, omnis sit.',
        },
        {
          id: 2,
          price: 67000,
          src: 'images/all you can eat/menu/menu-1.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Fugit, omnis sit.',
        },
        {
          id: 3,
          price: 80000,
          src: 'images/all you can eat/menu/menu-2.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate, debitis voluptas assumenda asperiores velit officia voluptatem voluptates alias dolorem aliquid tempore illo distinctio voluptatum et? Ex voluptate molestiae vero non ab ad modi quibusdam?',
        },
        {
          id: 4,
          price: 55000,
          src: 'images/all you can eat/menu/menu-3.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate, debitis voluptas assumenda asperiores velit officia voluptatem voluptates alias dolorem aliquid tempore illo distinctio voluptatum et? Ex voluptate molestiae vero non ab ad modi quibusdam? Fugit, omnis sit.',
        },
        {
          id: 5,
          price: 69000,
          src: 'images/all you can eat/menu/menu-4.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate.',
        },
        {
          id: 6,
          price: 72000,
          src: 'images/all you can eat/menu/menu-5.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate, debitis voluptas assumenda asperiores velit officia voluptatem voluptates alias dolorem aliquid tempore illo distinctio voluptatum et?',
        },
        {
          id: 7,
          price: 58000,
          src: 'images/all you can eat/menu/menu-6.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate, debitis voluptas assumenda asperiores velit officia voluptatem voluptates alias dolorem aliquid tempore illo distinctio voluptatum et? Ex voluptate molestiae vero non ab ad modi quibusdam? Fugit, omnis sit.',
        },
        {
          id: 8,
          price: 85000,
          src: 'images/all you can eat/menu/menu-7.jpg',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur adipisci animi saepe? Adipisci minus quaerat commodiullam provident nemo repellendus voluptate, debitis voluptas assumenda asperiores velit officia.',
        },
      ],
    };
  },
  components: {
    MenuPills,
    DetailMenu,
    ScenarioMenu,
    LocationMenu,
  },
  mounted() {
    this.preview = this.listMenus[0].src;
    this.dataPreview = this.listMenus[0];
  },
  methods: {
    onClickMenu(menu) {
      this.activeMenu = menu;
      if (menu === 'Menu') {
        this.showMenu = true;
        this.showLocation = false;
        this.showScenario = false;
      } else if (menu === 'Lokasi') {
        this.showMenu = false;
        this.showLocation = true;
        this.showScenario = false;
      } else if (menu === 'Skenario') {
        this.showMenu = false;
        this.showLocation = false;
        this.showScenario = true;
      }
    },
    onClickImage(data) {
      this.preview = data.src;
      this.dataPreview = data;
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
