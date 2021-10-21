<template>
  <div class="container pt-20">
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
    <div class="mt-3">
      <Tabs>
        <Tab class="" :active="showTabP1" @click="onClickTabPackage('p1')">
          All You Can Eat
        </Tab>
        <Tab class="" :active="showTabP2" @click="onClickTabPackage('p2')">
          Bakar di Rumah
        </Tab>
      </Tabs>
    </div>
    <div v-if="showTabP1" class="space-y-2 mt-4">
      <DineInPackage
        v-for="(packages, id) in dineInPackages"
        :key="id"
        :packet="packages"
      />
    </div>
    <div v-if="showTabP2" class="mt-4">
      <div class="md:grid md:grid-cols-5 md:gap-6 tn:space-y-2 md:space-y-0">
        <div class="md:col-span-2">
          <img
            class="w-full tn:h-32 md:h-full lg:h-80 xl:h-64 object-cover"
            src="images/all you can eat/menu/menu-0.jpg"
            alt="image not found"
          />
        </div>
        <div class="md:col-span-3">
          <p class="text-3xl font-bold mb-2">Bakar di Rumah</p>
          <p class="md:ml-3">Syarat dan ketentuan:</p>
          <ul class="list-decimal tn:pl-8 md:pl-10">
            <li v-for="(terms, id) in takeAwayDetail.terms" :key="id">
              {{ terms }}
            </li>
          </ul>
        </div>
      </div>
      <TakeAwayPackage
        v-for="(dataPacket, idx) in takeAwayPackages"
        :key="idx"
        :packet="dataPacket"
      />
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from '~/components/atoms/tabs/';
import DineInPackage from './DineInPackage.vue';
import TakeAwayPackage from './TakeAwayPackage.vue';
import PackageVariant from './PackageVariant.vue';
export default {
  components: {
    Tabs,
    Tab,
    DineInPackage,
    TakeAwayPackage,
    PackageVariant,
  },
  data() {
    return {
      showTabP1: true,
      showTabP2: false,
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
          package: 'Paket Individu',
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
      dineInPackages: [
        {
          id: 1,
          name: 'All You Can Eat',
          title: 'Paket 5 orang',
          image: 'images/all you can eat/menu/menu-0.jpg',
          detailPrice: {
            price: 24000,
            member: 5,
            jointPrice: 120000,
            adminFee: 10000,
          },
          terms: [
            'lorem ipsum',
            'lorem imsum',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus dolore, obcaecati hic voluptatem praesentium adipisci provident voluptates odit quos.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto molestiae nisi ea repudiandae officiis nihil placeat, esse, beatae repellendus quibusdam quae assumenda itaque illo magnam doloremque dolorum aspernatur voluptates.',
            'lorem ipsum',
          ],
        },
      ],
      takeAwayDetail: {
        terms: [
          'lorem ipsum',
          'lorem imsum',
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus dolore, obcaecati hic voluptatem praesentium adipisci provident voluptates odit quos.',
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto molestiae nisi ea repudiandae officiis nihil placeat, esse, beatae repellendus quibusdam quae assumenda itaque illo magnam doloremque dolorum aspernatur voluptates.',
          'lorem ipsum',
        ],
      },
      takeAwayPackages: [
        {
          id: 1,
          name: 'Paket Berduaan',
          image: 'images/all you can eat/menu/menu-1.jpg',
          detailPrice: {
            price: 24000,
            member: 5,
            jointPrice: 120000,
            adminFee: 10000,
          },
        },
        {
          id: 2,
          name: 'Paket Berempatan',
          image: 'images/all you can eat/menu/menu-2.jpg',
          detailPrice: {
            price: 24000,
            member: 5,
            jointPrice: 120000,
            adminFee: 10000,
          },
        },
        {
          id: 3,
          name: 'Paket Ramean',
          image: 'images/all you can eat/menu/menu-3.jpg',
          detailPrice: {
            price: 24000,
            member: 5,
            jointPrice: 120000,
            adminFee: 10000,
          },
        },
      ],
    };
  },
  methods: {
    onClickTabPackage(tab) {
      if (tab === 'p1') {
        this.showTabP1 = true;
        this.showTabP2 = false;
      } else if (tab === 'p2') {
        this.showTabP2 = true;
        this.showTabP1 = false;
      }
    },
    toggleShow(id) {
      this.packages[id - 1].isShowTerms = !this.packages[id - 1].isShowTerms;
    },
  },
};
</script>

<style></style>
