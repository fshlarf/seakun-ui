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
          v-if="!isLoadingProduct"
          id="container-pill"
          class="scroll-provider flex space-x-8 overflow-x-auto overscroll-auto px-3 py-2 -ml-4"
        >
          <ProviderPill
            v-for="(provider, id) in dataProviders"
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
          v-else
          id="container-pill"
          class="scroll-provider flex space-x-8 overflow-x-auto overscroll-auto px-3 py-3 -ml-4"
        >
          <div
            class="max-w-sm w-72 h-16 py-3 px-3 tn:rounded-full lg:rounded-2xl shadow flex space-x-2 items-center justify-center"
            v-for="(item, index) in shimmerInitialData"
            :key="index"
          >
            <div class="shimmer h-8 w-96"></div>
          </div>
        </div>
        <span class="hidden xl:block -mr-14 z-20 mt-1 ml-2">
          <ButtonChevron
            class="self-center opacity-30 hover:opacity-100"
            @click-chevron="scrollPill('right')"
          />
        </span>
      </div>

      <div v-if="!isLoading" class="relative flex items-center w-full">
        <span
          v-if="dataDetailGroup.length >= 5"
          class="hidden xl:block -ml-10 mr-4"
        >
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
            v-if="dataDetailGroup.length >= 5"
            btnText="Selengkapnya"
            class="self-center"
            @click-chevron="toCustomerPage"
          />
        </div>
        <span
          v-if="dataDetailGroup.length >= 5"
          class="hidden xl:block -mr-14 z-20 ml-2"
        >
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
      :provider="dataPackages"
      @on-close="onCloseModalPackages"
      :slug="provider"
      @choosePacket="choosePacket"
      :is-loading="isLoadingProduct"
    />
  </div>
</template>

<script>
import MasterService from '~/services/MasterServices.js';
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
      MasterService,
      shimmerInitialData: Array(4),
      isLoading: true,
      dataDetailGroup: [],
      provider: '',
      isFetchingPacket: false,
      isLoadingProduct: false,
      isShowModalPackages: false,
      dataPackages: {},
      dataProviders: [],
      paramGetProviderList: {
        page: 1,
        limit: 20,
      },
      highlight: 'youtube',
      providerUid: '1ec4b4fa-a756-456b-a01a-f48ff48fad58',
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
    this.MasterService = new MasterService(this);
    this.getProviders();
    this.getAccountGroups(this.providerUid);
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
      this.getAccountGroups(provider.uid);
      this.isLoading = true;
      this.highlight = provider.slug;
      this.providerUid = provider.uid;
    },
    async getProviders() {
      this.isLoadingProduct = true;
      const { MasterService, paramGetProviderList } = this;
      try {
        const fetchProviderList = await MasterService.getProvider(
          paramGetProviderList
        );
        if (fetchProviderList.data) {
          const { data } = fetchProviderList.data;
          this.dataProviders = data.filter((provider) => {
            return provider.slug !== 'vidio';
          });
        } else {
          throw new Error(fetchProviderList);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingProduct = false;
    },
    async getAccountGroups(providerUid) {
      const { MasterService } = this;
      const params = {
        page: 1,
        limit: 5,
        providerUid,
      };
      try {
        const fetchAccountGroups = await MasterService.getAccountGroups(params);
        if (fetchAccountGroups.data) {
          const { data } = fetchAccountGroups.data;
          this.dataDetailGroup = data ? data : [];
          this.isLoading = false;
        } else {
          throw new Error(fetchAccountGroups);
        }
      } catch (error) {
        console.log(error);
      }
    },
    toCustomerPage() {
      this.$router.push(`/info/customers?provider=${this.providerUid}`);
    },
    onClickOrder(provider) {
      if (provider.toLowerCase() === 'microsoft') {
        this.provider = 'microsoft365';
      } else {
        this.provider = provider;
      }
      this.dataProviders.forEach((providers) => {
        if (providers.slug.toLowerCase() === this.provider.toLowerCase()) {
          this.dataPackages = providers;
        }
      });
      this.isShowModalPackages = true;
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    choosePacket(packet) {
      this.$router.push(
        `/order?provider=${this.provider}&variant_id=${packet.uid}&package_id=${packet.packageUid}`
      );
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
