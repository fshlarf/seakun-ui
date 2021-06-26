<template>
  <div id="pengguna" class="container pt-12">
    <div class="tn:text-center md:text-left container-title">
      <h1 class="font-bold tn:text-xl md:text-2xl md:mb-4 lg:mb-4">
        Pengguna Seakun.id
      </h1>
      <p class="font-semibold">
        Psst! Sudah ada ratusan grup loh, yang bergabung bersama kami! Klik
        kategori untuk melihat.
      </p>
    </div>
    <div class="my-6 container-group">
      <div
        class="scroll-provider flex gap-8 overflow-x-auto overscroll-auto px-3 py-2 -ml-4"
      >
        <ProviderPill
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
        class="scroll-provider flex gap-6 overflow-x-auto overscroll-auto px-3 pt-2 -ml-4"
      >
        <GroupCard
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
import ProviderPill from '~/components/mollecules/ProviderPill.vue';
import GroupCard from '~/components/mollecules/GroupCard.vue';
import Button from '~/components/atoms/Button.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import CardShimmer from '~/components/mollecules/CardShimmer';
import axios from 'axios';

export default {
  data() {
    return {
      shimmerInitialData: Array(4),
      isLoading: true,
      dataDetailGroup: [],
      highlight: 'netflix',
      dataProviderList: [
        {
          id: 1,
          name: 'Netflix',
          slug: 'netflix',
          icon: '/images/icons/netflix.svg',
          totalGroup: 430,
        },
        {
          id: 2,
          name: 'Spotify',
          slug: 'spotify',
          icon: '/images/icons/spotify.svg',
          totalGroup: 317,
        },
        {
          id: 3,
          name: 'Gramedia',
          slug: 'gramedia',
          icon: '/images/icons/gramedia.svg',
          totalGroup: 51,
        },
        {
          id: 4,
          name: 'Youtube',
          slug: 'youtube',
          icon: '/images/icons/youtube.svg',
          totalGroup: 208,
        },
        {
          id: 5,
          name: 'Microsoft 365',
          slug: 'microsoft',
          icon: '/images/icons/microsoft.svg',
          totalGroup: 52,
        },
        {
          id: 6,
          name: 'Canva',
          slug: 'canva',
          icon: '/images/icons/canva.svg',
          totalGroup: 18,
        },
        {
          id: 7,
          name: 'Nintendo Switch',
          slug: 'nintendo-switch',
          icon: '/images/icons/nintendo.svg',
          totalGroup: 88,
        },
        {
          id: 8,
          name: 'Apple One',
          slug: 'apple-one',
          icon: '/images/icons/apple-one.svg',
          totalGroup: 8,
        },
      ],
    };
  },
  components: {
    ProviderPill,
    GroupCard,
    Button,
    ButtonChevron,
    CardShimmer,
  },
  mounted() {
    this.getCustomersData('netflix');
  },
  methods: {
    selectProvider(provider) {
      this.getCustomersData(provider.slug);
      this.isLoading = true;
      this.highlight = provider.slug;
    },
    getCustomersData(provider) {
      axios
        .get(
          `https://seakun-api.herokuapp.com/registered-user/group-${provider}`
        )
        .then((res) => {
          this.processDataCustomers(res.data, provider);
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    processDataCustomers(customers, provider) {
      let newArr = [];
      let theArr = [];

      customers.map((e, i) => {
        newArr.push(e.group);
        theArr[parseInt(e.group) - 1] = {
          groupNumber: parseInt(e.group),
          members: [],
          name: e.provider,
          brand: `/images/${e.provider}.png`,
        };
      });

      customers.map((e, i) => {
        if (newArr.includes(e.group)) {
          theArr[parseInt(e.group) - 1].members.push(e.customer_name);
        }
      });

      const netArr = theArr
        .slice(theArr.length - 5, theArr.length - 0)
        .sort()
        .reverse();
      this.dataDetailGroup = netArr;
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
.container-title {
  max-width: 1090px !important;
  margin: 0 auto;
}
.container {
  max-width: 1450px !important;
}
</style>
