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
          v-if="!dataProviderList.loading"
          id="container-pill"
          class="scroll-provider flex space-x-8 overflow-x-auto overscroll-auto px-3 py-2 -ml-4"
        >
          <ProviderPill
            v-for="(provider, id) in dataProviderList.list"
            :key="id"
            :provider="provider"
            :is-loading="dataGroupList.loading"
            :data-group="dataGroupList.list"
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

      <div
        v-if="!dataGroupList.loading"
        class="relative flex items-center w-full"
      >
        <span
          v-if="dataGroupList.list && dataGroupList.list.length >= 5"
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
            v-for="(group, id) in dataGroupList.list"
            :key="id"
            :group="group"
            class="my-2 w-full h-full flex-none"
            @click-order="onClickOrder"
          />
          <ButtonChevron
            v-if="dataGroupList.list && dataGroupList.list.length >= 5"
            btnText="Selengkapnya"
            class="self-center"
            @click-chevron="toCustomerPage"
          />
        </div>
        <span
          v-if="dataGroupList.list && dataGroupList.list.length >= 5"
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
          class="flex-none tn:w-64 tn:h-64 md:w-72 md:h-72"
          v-for="(item, index) in shimmerInitialData"
          :key="index"
        >
          <UserCardShimmer />
        </div>
      </div>
    </div>

    <ModalPackages
      :is-show="isShowModalPackages"
      :provider="dataPackages"
      @onClose="onCloseModalPackages"
      :slug="provider"
      @choosePacket="choosePacket"
    />
  </div>
</template>

<script>
import ProviderPill from '~/components/mollecules/ProviderPill.vue';
import GroupCard from '~/components/mollecules/GroupCard.vue';
import Button from '~/components/atoms/Button.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import CardShimmer from '~/components/mollecules/CardShimmer';
import UserCardShimmer from './views/group-card-loading.vue';
import ModalPackages from '~/components/organisms/ProductSection/views/ModalPackages.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      shimmerInitialData: Array(4),
      provider: '',
      isShowModalPackages: false,
      dataPackages: {},
      highlight: 'youtube',
    };
  },
  components: {
    ProviderPill,
    GroupCard,
    Button,
    ButtonChevron,
    CardShimmer,
    ModalPackages,
    UserCardShimmer,
  },
  computed: {
    ...mapGetters({
      dataProviderList: 'getProviders',
      dataGroupList: 'getGroups',
      dataCardVariant: 'getDataCardVariant',
    }),
  },
  methods: {
    ...mapActions({
      fetchGroup: 'applyFilterGroup',
      setSelectedProvider: 'setSelectedProvider',
      setDataCardVariant: 'setDataCardVariant',
    }),
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
      this.setSelectedProvider(provider);
      this.fetchGroup(provider.uid);
      this.highlight = provider.slug;
      this.providerUid = provider.uid;
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
      this.dataProviderList.list.forEach((providers) => {
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
      const data = {
        ...this.dataCardVariant,
        isPo: packet.isPo,
        isHost: packet.isHost,
      };
      this.setDataCardVariant(data);

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
