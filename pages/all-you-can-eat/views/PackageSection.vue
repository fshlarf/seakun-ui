<template>
  <div class="container pt-20" id="package-variant">
    <p class="tn:text-xl md:text-2xl tn:text-center md:text-left font-bold">
      Varian Paket
    </p>
    <div>
      <PackageVariant
        v-for="(packet, id) in packages"
        :key="id"
        :packet="packet"
        :is-show-terms="packet.isShowTerms"
        @toggleShow="toggleShow"
      />
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from '~/components/atoms/tabs/';
import PackageVariant from './PackageVariant.vue';
export default {
  components: {
    Tabs,
    Tab,
    PackageVariant,
  },
  data() {
    return {
      packages: [
        {
          id: 1,
          name: 'All You Can Eat - Lunch',
          package: 'Paket Individu',
          image: 'images/all you can eat/menu/menu-0.jpg',
          detailPrice: {
            originalPrice: 338000,
            vendorPrice: 358000,
            discountPrice: 202800,
            adminPrice: 20200,
            finalPrice: 223000,
          },
          voucher: {
            expired: '12 Desember 2021',
          },
          terms: [
            'lorem ipsum',
            'lorem imsum',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus dolore, obcaecati hic voluptatem praesentium adipisci provident voluptates odit quos.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto molestiae nisi ea repudiandae officiis nihil placeat, esse, beatae repellendus quibusdam quae assumenda itaque illo magnam doloremque dolorum aspernatur voluptates.',
            'lorem ipsum',
          ],
          isShowTerms: false,
        },
        {
          id: 2,
          name: 'All You Can Eat - Lunch',
          package: 'Paket Rombongan',
          image: 'images/all you can eat/menu/menu-0.jpg',
          detailPrice: {
            originalPrice: 338000,
            vendorPrice: 358000,
            discountPrice: 202800,
            adminPrice: 15200,
            finalPrice: 218000,
          },
          voucher: {
            expired: '12 Desember 2021',
          },
          terms: [
            'lorem ipsum',
            'lorem imsum',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus dolore, obcaecati hic voluptatem praesentium adipisci provident voluptates odit quos.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto molestiae nisi ea repudiandae officiis nihil placeat, esse, beatae repellendus quibusdam quae assumenda itaque illo magnam doloremque dolorum aspernatur voluptates.',
            'lorem ipsum',
          ],
          isShowTerms: false,
        },
        {
          id: 3,
          name: 'All You Can Eat - Dinner',
          package: 'Paket Individu',
          image: 'images/all you can eat/menu/menu-0.jpg',
          detailPrice: {
            originalPrice: 338000,
            vendorPrice: 358000,
            discountPrice: 214800,
            adminPrice: 20200,
            finalPrice: 235000,
          },
          voucher: {
            expired: '12 Desember 2021',
          },
          terms: [
            'lorem ipsum',
            'lorem imsum',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus dolore, obcaecati hic voluptatem praesentium adipisci provident voluptates odit quos.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto molestiae nisi ea repudiandae officiis nihil placeat, esse, beatae repellendus quibusdam quae assumenda itaque illo magnam doloremque dolorum aspernatur voluptates.',
            'lorem ipsum',
          ],
          isShowTerms: false,
        },
        {
          id: 4,
          name: 'All You Can Eat - Lunch',
          package: 'Paket Rombongan',
          image: 'images/all you can eat/menu/menu-0.jpg',
          detailPrice: {
            originalPrice: 338000,
            vendorPrice: 358000,
            discountPrice: 214800,
            adminPrice: 15200,
            finalPrice: 230000,
          },
          voucher: {
            expired: '12 Desember 2021',
          },
          terms: [
            'lorem ipsum',
            'lorem imsum',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus dolore, obcaecati hic voluptatem praesentium adipisci provident voluptates odit quos.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto molestiae nisi ea repudiandae officiis nihil placeat, esse, beatae repellendus quibusdam quae assumenda itaque illo magnam doloremque dolorum aspernatur voluptates.',
            'lorem ipsum',
          ],
          isShowTerms: false,
        },
      ],
    };
  },
  methods: {
    toggleShow(id) {
      this.packages[id - 1].isShowTerms = !this.packages[id - 1].isShowTerms;
    },
  },
};
</script>

<style></style>
