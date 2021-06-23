<template>
  <div class="container tn:pt-10 lg:pt-20">
    <div class="tn:text-center md:text-left">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-4">
        Lihat dari grup yang tersedia
      </h1>
      <p class="font-semibold">
        Sudah banyak yang patungan qurban, nih. Yuk, lengkapi slot mereka!
      </p>
    </div>
    <div class="my-6">
      <div
        class="scroll-provider flex gap-8 overflow-x-auto overscroll-auto px-3 py-2"
      >
        <SequrbanPill
          v-for="(provider, id) in dataProviderList"
          :key="id"
          :provider="provider"
          :is-loading="isLoading"
          :data-group="dataDetailGroup"
          class="my-2 w-full h-full flex-none cursor-pointer"
          :class="{
            'high-light ': provider.slug === highlight,
          }"
          @selectProvider="selectProvider"
        />
      </div>

      <div
        v-if="!isLoading"
        class="scroll-provider flex gap-6 overflow-x-auto overscroll-auto px-3 py-2"
      >
        <SequrbanGroupCard
          v-for="(group, id) in dataDetailGroup"
          :key="id"
          :group="group"
          class="my-2 w-full h-full flex-none"
        />
        <ButtonChevron class="self-center" />
      </div>

      <div
        v-else
        class="scroll-provider flex gap-6 overflow-x-auto overflow-y-auto overscroll-contain px-3 py-2"
      >
        <div
          class="flex-none w-72 h-72"
          v-for="(item, index) in shimmerInitialData"
          :key="index"
        >
          <CardShimmer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groupList } from './group-list.js';
import SequrbanPill from './SequrbanPill';
import SequrbanGroupCard from './SequrbanGroupCard';
import Button from '~/components/atoms/Button';
import ButtonChevron from '~/components/atoms/ButtonChevron';
import CardShimmer from '~/components/mollecules/CardShimmer';

export default {
  data() {
    return {
      groupList,
      shimmerInitialData: Array(4),
      isLoading: false,
      dataDetailGroup: [],
      highlight: 'typeAll',
      dataProviderList: [
        {
          id: 1,
          name: 'Semua Tipe',
          slug: 'typeAll',
          totalGroup: 50,
        },
        {
          id: 2,
          name: 'Tipe A',
          slug: 'typeA',
          totalGroup: 10,
        },
        {
          id: 3,
          name: 'Tipe B',
          slug: 'typeB',
          totalGroup: 10,
        },
        {
          id: 4,
          name: 'Tipe C',
          slug: 'typeC',
          totalGroup: 10,
        },
        {
          id: 5,
          name: 'Tipe D',
          slug: 'typeD',
          totalGroup: 10,
        },
        {
          id: 6,
          name: 'Tipe E',
          slug: 'typeE',
          totalGroup: 10,
        },
      ],
    };
  },
  components: {
    SequrbanPill,
    SequrbanGroupCard,
    Button,
    ButtonChevron,
    CardShimmer,
  },
  mounted() {
    this.dataDetailGroup = this.groupList;
  },
  methods: {
    selectProvider(provider) {
      this.isLoading = true;
      const newArr = [];
      if (provider.slug === 'typeAll') {
        this.groupList.forEach((x) => {
          newArr.push(x);
        });
      } else {
        this.groupList.forEach((x) => {
          if (x.label === provider.slug) {
            newArr.push(x);
          }
        });
      }
      this.dataDetailGroup = newArr;
      this.isLoading = false;
      this.highlight = provider.slug;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-provider::-webkit-scrollbar {
  display: none;
}
.scroll-provider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.high-light {
  border: 2px solid #a9e0d5;
  background-image: linear-gradient(to right, #ffffff, #d4f1ec);
}
</style>
