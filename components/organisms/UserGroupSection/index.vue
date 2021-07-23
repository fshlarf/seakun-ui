<template>
  <div id="pengguna" class="container pt-16">
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
        class="scroll-provider flex space-x-8 overflow-x-auto overscroll-auto px-3 py-2 -ml-4"
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
        class="scroll-provider flex space-x-6 overflow-x-auto overscroll-auto px-3 pt-2 -ml-4"
      >
        <GroupCard
          v-for="(group, id) in dataDetailGroup"
          :key="id"
          :group="group"
          class="my-2 w-full h-full flex-none"
          @click-order="onClickOrder"
        />
        <ButtonChevron class="self-center" @click-chevron="toCustomerPage" />
      </div>

      <div
        v-else
        class="scroll-provider flex space-x-6 overflow-x-auto overflow-y-auto px-3 py-2"
      >
        <div
          class="flex-none w-72 h-72"
          v-for="(item, index) in shimmerInitialData"
          :key="index"
        >
          <CardShimmerVertical />
        </div>
      </div>
    </div>

    <ModalPackages
      :is-show="isShowModalPackages"
      :provider="setNameProvider"
      @on-close="onCloseModalPackages"
      :packages="dataPackages"
      :slug="provider"
      @choose-packet="choosePacket"
      :is-loading="isFetchingPacket"
    />
  </div>
</template>

<script>
import ProviderPill from '~/components/mollecules/ProviderPill.vue';
import GroupCard from '~/components/mollecules/GroupCard.vue';
import Button from '~/components/atoms/Button.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import CardShimmer from '~/components/mollecules/CardShimmer';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import ModalPackages from '~/components/organisms/ProductSection/views/ModalPackages.vue';
import axios from 'axios';

export default {
  data() {
    return {
      shimmerInitialData: Array(4),
      isLoading: true,
      dataDetailGroup: [],
      provider: '',
      isFetchingPacket: false,
      isShowModalPackages: false,
      dataPackages: [],
      highlight: 'netflix',
      dataProviderList: [
        {
          id: 1,
          name: 'Netflix',
          slug: 'netflix',
          icon: '/images/icons/netflix.svg',
        },
        {
          id: 2,
          name: 'Spotify',
          slug: 'spotify',
          icon: '/images/icons/spotify.svg',
        },
        {
          id: 3,
          name: 'Gramedia',
          slug: 'gramedia',
          icon: '/images/icons/gramedia-digital.svg',
        },
        {
          id: 4,
          name: 'Youtube',
          slug: 'youtube',
          icon: '/images/icons/youtube.svg',
        },
        {
          id: 5,
          name: 'Microsoft 365',
          slug: 'microsoft',
          icon: '/images/icons/microsoft-365.svg',
        },
        {
          id: 6,
          name: 'Canva',
          slug: 'canva',
          icon: '/images/icons/canva.svg',
        },
        {
          id: 7,
          name: 'Disney+ Hotstar',
          slug: 'disney-hotstar',
          icon: '/images/icons/disney-hotstar.png',
        },
        // {
        //   id: 8,
        //   name: 'Apple One',
        //   slug: 'apple-one',
        //   icon: '/images/icons/apple-one.svg',
        // },
        // {
        //   id: 9,
        //   name: 'Wattpad',
        //   slug: 'wattpad',
        //   icon: '/images/icons/wattpad.svg',
        // },
        // {
        //   id: 10,
        //   name: 'Nintendo Switch',
        //   slug: 'nintendo-switch',
        //   icon: '/images/icons/nintendo.svg',
        // },
      ],
    };
  },
  components: {
    ProviderPill,
    GroupCard,
    Button,
    ButtonChevron,
    CardShimmer,
    CardShimmerVertical,
    ModalPackages,
  },
  mounted() {
    this.getCustomersData('netflix');
  },
  computed: {
    setNameProvider() {
      switch (this.provider) {
        case 'netflix':
          return 'Netflix';
          break;
        case 'spotify':
          return 'Spotify';
          break;
        case 'youtube':
          return 'Youtube';
          break;
        case 'gramedia':
          return 'Gramedia';
          break;
        case 'microsoft':
          return 'Microsoft 365';
          break;
        case 'canva':
          return 'Canva';
          break;
        case 'disney-hotstar':
          return 'Disney+ Hotstar';
          break;
        case 'apple-one':
          return 'Apple One';
          break;
        case 'wattpad':
          return 'Wattpad';
          break;
        case 'nintendo':
          return 'Nintendo Switch';
          break;
        default:
          return this.provider;
      }
    },
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
    toCustomerPage() {
      this.$router.push(`/info/customers?provider=${this.highlight}`);
    },
    onClickOrder(provider) {
      this.provider = provider;
      this.isShowModalPackages = true;
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    async fetchPackages() {
      const provider =
        this.provider === 'microsoft'
          ? 'microsoft365'
          : this.provider.toLowerCase();

      try {
        const { data } = await axios.get(
          `https://seakun-packet-api-v2.herokuapp.com/${provider}`
        );
        if (data) {
          this.dataPackages = data;
          this.isFetchingPacket = false;
        }
      } catch (err) {
        console.log(err);
      }
    },
    choosePacket(packet) {
      this.$router.push(
        `/order?provider=${this.provider}&packet_id=${packet.id}`
      );
    },
  },
  watch: {
    provider() {
      this.isFetchingPacket = true;
      this.fetchPackages();
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
