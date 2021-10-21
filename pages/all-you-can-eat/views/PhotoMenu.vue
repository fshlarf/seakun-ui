<template>
  <div>
    <div class="mt-3">
      <Tabs>
        <Tab :active="showTabP1" @click="onClickTabPhoto('p1')"> Semua </Tab>
        <Tab :active="showTabP2" @click="onClickTabPhoto('p2')"> Makanan </Tab>
        <Tab :active="showTabP3" @click="onClickTabPhoto('p3')">
          Suasana Restoran
        </Tab>
      </Tabs>
    </div>
    <div class="grid grid-cols-6 gap-3 my-4">
      <img
        v-for="(image, id) in photos"
        :key="id"
        class="w-full h-32 object-cover rounded-lg"
        :src="`${image.image}`"
        alt="image not found"
      />
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from '~/components/atoms/tabs/';
export default {
  components: {
    Tabs,
    Tab,
  },
  data() {
    return {
      showTabP1: true,
      showTabP2: false,
      showTabP3: false,
      photos: [],
      dataPhotos: [
        {
          id: 1,
          image: 'images/all you can eat/menu/Voyage-01.jpg',
          category: 'suasana',
        },
        {
          id: 2,
          image: 'images/all you can eat/menu/Voyage-02.jpg',
          category: 'suasana',
        },
        {
          id: 3,
          image: 'images/all you can eat/menu/Voyage-03.jpg',
          category: 'suasana',
        },
        {
          id: 4,
          image: 'images/all you can eat/menu/Voyage-04.jpg',
          category: 'makanan',
        },
        {
          id: 5,
          image: 'images/all you can eat/menu/Voyage-05.jpg',
          category: 'makanan',
        },
        {
          id: 6,
          image: 'images/all you can eat/menu/Voyage-06.jpg',
          category: 'makanan',
        },
      ],
    };
  },
  mounted() {
    this.photos = this.dataPhotos;
  },
  methods: {
    onClickTabPhoto(tab) {
      if (tab === 'p1') {
        this.showTabP1 = true;
        this.showTabP2 = false;
        this.showTabP3 = false;
        this.photos = this.dataPhotos;
      } else if (tab === 'p2') {
        this.showTabP1 = false;
        this.showTabP2 = true;
        this.showTabP3 = false;

        const newPhotos = [];
        this.dataPhotos.forEach((e) => {
          if (e.category === 'makanan') {
            newPhotos.push(e);
          }
        });
        this.photos = newPhotos;
      } else {
        this.showTabP1 = false;
        this.showTabP2 = false;
        this.showTabP3 = true;

        const newPhotos = [];
        this.dataPhotos.forEach((e) => {
          if (e.category === 'suasana') {
            newPhotos.push(e);
          }
        });
        this.photos = newPhotos;
      }
    },
  },
};
</script>

<style></style>
