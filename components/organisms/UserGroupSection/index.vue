<template>
  <div id="pengguna" class="container tn:pt-20 relative">
    <div class="tn:text-center md:text-left container-title">
      <h1
        class="font-bold tn:text-[20px] md:text-[30px] xl:text-[36px] tn:mb-3"
      >
        Pengguna Seakun
      </h1>
      <p class="tn:text-[14px] md:text-[24px]">
        Psst! Sudah ada puluhan ribu pengguna dan ribuan grup yang bergabung
        bersama kami!
      </p>
    </div>

    <div class="tn:py-6 container-group w-full">
      <div v-if="!dataProviderList.loading" class="relative z-0">
        <ButtonChevron
          v-if="pillScrollPosition !== 0"
          mode="left"
          class="hidden xl:block absolute z-10 -left-12 top-1/2 transform -translate-y-1/2"
          @click-chevron="scrollPill('left')"
        />
        <div class="flex items-center w-full">
          <div
            id="container-pill"
            class="scroll-provider flex space-x-[24px] overflow-x-auto overscroll-auto tn:-ml-1 px-1 tn:py-2"
          >
            <ProviderPill
              v-for="(provider, id) in dataProviderList.list"
              :key="id"
              :provider="provider"
              :is-loading="dataGroupList.loading"
              :data-group="dataGroupList.list"
              class="tn:mt-2 h-full flex-none cursor-pointer"
              :class="{
                'high-light ': provider.slug === highlight,
              }"
              @selectProvider="selectProvider"
            />
          </div>
        </div>
        <ButtonChevron
          v-if="!isPillEndScroll"
          mode="right"
          class="hidden xl:block absolute z-10 -right-12 top-1/2 transform -translate-y-1/2"
          @click-chevron="scrollPill('right')"
        />
      </div>
      <div
        v-else
        class="scroll-provider flex space-x-8 overflow-x-auto overscroll-auto tn:-ml-1 tn:px-1 tn:py-2"
      >
        <div
          class="max-w-sm w-72 h-16 py-3 px-3 tn:rounded-[8px] tn:shadow-md flex space-x-2 items-center justify-center"
          v-for="(item, index) in shimmerInitialData"
          :key="index"
        >
          <div class="shimmer h-8 w-96"></div>
        </div>
      </div>

      <div v-if="!dataGroupList.loading" class="relative z-0">
        <ButtonChevron
          v-if="groupScrollPosition !== 0"
          mode="left"
          class="hidden xl:block absolute z-10 -left-12 top-1/2 transform -translate-y-1/2"
          @click-chevron="scrollGroup('left')"
        />
        <div class="flex items-center w-full">
          <div
            id="container-card"
            class="scroll-provider flex space-x-6 overflow-x-auto overscroll-auto tn:-ml-1 tn:px-1 tn:py-2"
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
        </div>
        <ButtonChevron
          v-if="!isGroupEndScroll"
          mode="right"
          class="hidden xl:block absolute z-10 -right-12 top-1/2 transform -translate-y-1/2"
          @click-chevron="scrollGroup('right')"
        />
      </div>
      <div
        v-else
        class="scroll-provider flex space-x-6 overflow-x-auto overflow-y-auto tn:-ml-1 tn:px-1 tn:py-2"
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
import waitForElement from '~/helpers/utility.js';

export default {
  data() {
    return {
      shimmerInitialData: Array(4),
      provider: '',
      isShowModalPackages: false,
      dataPackages: {},
      highlight: 'youtube',
      pillScrollPosition: 0,
      groupScrollPosition: 0,
      isPillEndScroll: false,
      isGroupEndScroll: false,
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
      filterGroup: 'getFilterGroup',
    }),
  },
  mounted() {
    this.waitForElement('#container-pill').then((elm) => {
      elm.addEventListener('scroll', () => {
        const pillMaxScrollWidth = elm.scrollWidth - elm.clientWidth;
        this.pillScrollPosition = elm.scrollLeft;
        if (this.pillScrollPosition >= pillMaxScrollWidth) {
          this.isPillEndScroll = true;
        } else {
          this.isPillEndScroll = false;
        }
      });
    });
    this.waitForElement('#container-card').then((elm) => {
      elm.addEventListener('scroll', () => {
        const groupMaxScrollWidth = elm.scrollWidth - elm.clientWidth;
        this.groupScrollPosition = elm.scrollLeft;
        if (this.groupScrollPosition >= groupMaxScrollWidth - 1) {
          this.isGroupEndScroll = true;
        } else {
          this.isGroupEndScroll = false;
        }
      });
    });
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
    scrollGroup(direction) {
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
      this.$router.push(
        `/info/customers?provider=${this.filterGroup.providerUid}`
      );
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
    waitForElement,
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
#container-card {
  scroll-behavior: smooth;
}
#container-pill {
  scroll-behavior: smooth;
}
</style>
