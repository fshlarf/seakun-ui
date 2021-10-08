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
    <div class="my-6 container-group w-full">
      <div class="flex items-center w-full">
        <span class="hidden xl:block -ml-10 mr-4 mt-1">
          <ButtonChevron
            mode="left"
            class="self-center opacity-30 hover:opacity-100"
            @click-chevron="scrollPill('left')"
          />
        </span>
        <div
          id="container-pill"
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
        <span class="hidden xl:block -mr-14 z-20 mt-1 ml-2">
          <ButtonChevron
            class="self-center opacity-30 hover:opacity-100"
            @click-chevron="scrollPill('right')"
          />
        </span>
      </div>

      <div v-if="!isLoading" class="relative flex items-center w-full">
        <span class="hidden xl:block -ml-10 mr-4">
          <ButtonChevron
            mode="left"
            class="self-center opacity-30 hover:opacity-100"
            @click-chevron="scrollCard('left')"
          />
        </span>
        <div
          id="container-card"
          class="scroll-provider flex space-x-6 overflow-x-auto overscroll-auto px-3 pt-2 -ml-4"
        >
          <GroupCard
            v-for="(group, id) in dataDetailGroup"
            :key="id"
            :group="group"
            class="my-2 w-full h-full flex-none"
            @click-order="onClickOrder"
          />
          <ButtonChevron
            btnText="Selengkapnya"
            class="self-center"
            @click-chevron="toCustomerPage"
          />
        </div>
        <span class="hidden xl:block -mr-14 z-20 ml-2">
          <ButtonChevron
            class="self-center opacity-30 hover:opacity-100"
            @click-chevron="scrollCard('right')"
          />
        </span>
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
      :provider="setNameProvider(provider)"
      @on-close="onCloseModalPackages"
      :packages="dataPackages"
      :slug="provider"
      @choosePacket="choosePacket"
      :is-loading="isFetchingPacket"
    />
  </div>
</template>

<script>
import { setNameProvider } from '~/helpers/word-transformation.js';
import { SEAKUN_API, SEAKUN_PACKAGE_API } from '~/constants/api.js';
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
      SEAKUN_API,
      SEAKUN_PACKAGE_API,
      setNameProvider,
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
          icon: '/images/icons/gramedia.svg',
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
          icon: '/images/icons/microsoft.svg',
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
        {
          id: 8,
          name: 'Apple One',
          slug: 'apple-one',
          icon: '/images/icons/apple-one.svg',
        },
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
  methods: {
    scrollPill(direction) {
      if (direction === 'right') {
        document.getElementById('container-pill').scrollLeft += 600;
      } else {
        document.getElementById('container-pill').scrollLeft -= 600;
      }
    },
    scrollCard(direction) {
      if (direction === 'right') {
        document.getElementById('container-card').scrollLeft += 600;
      } else {
        document.getElementById('container-card').scrollLeft -= 600;
      }
    },
    selectProvider(provider) {
      this.getCustomersData(provider.slug);
      this.isLoading = true;
      this.highlight = provider.slug;
    },
    getCustomersData(provider) {
      const { SEAKUN_API } = this;
      axios
        .get(`${SEAKUN_API}/registered-user/group-${provider}`)
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
      const { SEAKUN_PACKAGE_API } = this;
      const provider =
        this.provider === 'microsoft'
          ? 'microsoft365'
          : this.provider.toLowerCase();

      try {
        const { data } = await axios.get(`${SEAKUN_PACKAGE_API}/${provider}`);
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
#container-card {
  scroll-behavior: smooth;
}
#container-pill {
  scroll-behavior: smooth;
}
</style>
