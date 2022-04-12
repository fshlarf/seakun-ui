<template>
  <div id="provider" class="container iner tn:mt-8 lg:pt-20 pt-20">
    <div class="">
      <div
        id="product-digital"
        class="flex justify-between items-center mb-2 px-2"
      >
        <h1
          class="hidden md:block md:text-xl lg:text-2xl font-bold md:mb-4 lg:mb-4"
        >
          Berlangganan Produk Digital
        </h1>
        <h1 class="text-2xl md:hidden font-bold">Layanan digital</h1>
        <NuxtLink
          to="/"
          class="hidden text-sm md:text-base text-primary font-bold"
          >See more</NuxtLink
        >
      </div>
      <div class="tn:mt-4">
        <div
          v-if="!isLoadingProduct"
          class="w-full h-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-6 px-0 justify-center"
        >
          <div class="" v-for="(product, id) in dataProviders" :key="id">
            <ProductCard
              :product="product"
              class="md:w-full md:h-full"
              @showPriceScheme="showPriceScheme"
              @on-click-product="onClickProductDigital"
            />
          </div>
        </div>

        <div
          v-else
          class="grid tn:gap-3 md:gap-4 xl:gap-5 tn:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
        </div>
      </div>

      <!-- <SetitipBanner /> -->

      <div id="product-ondemand" class="pt-5 px-2 md:my-8">
        <h1 class="text-2xl md:text-xl lg:text-2xl font-bold my-2 md:my-4">
          Layanan On Demand
        </h1>
      </div>

      <div class="tn:mt-4">
        <div
          v-if="!isLoadingProduct"
          class="w-full h-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 px-0 justify-center place-items-stretch items-stretch items-center"
        >
          <div class="" v-for="(product, id) in dataProductOnDemand" :key="id">
            <ProductCard
              :product="product"
              class="md:w-full md:h-full"
              v-if="product.preview"
              @on-click-product="onClickProductOnDemand"
            />
          </div>
          <div class="">
            <ProposeCard
              :propose="dataProposeProvider"
              class="md:w-full h-full"
            />
          </div>
        </div>
        <div
          v-else
          class="grid tn:gap-3 md:gap-4 xl:gap-5 tn:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
        </div>
      </div>
    </div>

    <ModalPackages
      :is-show="isShowModalPackages"
      :provider="choosedProvider"
      @on-close="onCloseModalPackages"
      :slug="choosedSlugProvider"
      @choosePacket="choosePacket"
      :is-loading="isLoadingProduct"
    />

    <ModalPriceScheme
      :show-modal="showModalScheme"
      :data-scheme="dataDetailProvider"
      @closeModal="closeModalScheme"
      @toSchemePage="toSchemePage"
    />
  </div>
</template>

<script>
import ProductCard from '~/components/mollecules/ProductCard';
import MasterService from '~/services/MasterServices.js';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import ProposeCard from '~/components/mollecules/ProposeCard';
import ModalPriceScheme from '~/components/mollecules/ModalPriceScheme';
import { providerList } from './provider-list';
import ModalPackages from './views/ModalPackages.vue';
import SetitipBanner from './views/SetitipBanner.vue';
import { SEAKUN_PACKAGE_API } from '~/constants/api.js';

export default {
  components: {
    ProductCard,
    CardShimmerVertical,
    ProposeCard,
    ModalPriceScheme,
    ModalPackages,
    SetitipBanner,
  },
  data() {
    return {
      MasterService,
      showModalScheme: false,
      providerList,
      dataProviders: [],
      paramGetProviderList: {
        page: 1,
        limit: 20,
      },
      isLoadingProduct: false,
      dataDetailProvider: {
        list: {},
        slug: '',
        name: '',
      },
      dataProductOnDemand: [
        // {
        //   id: 1,
        //   name: 'Sequrban',
        //   slug: 'sequrban',
        //   img: '/images/product/sekurban.png',
        //   icon: '/images/icons/sekurban.svg',
        //   isActive: false,
        //   isNew: true,
        //   preview:
        //     'Lengkapi ibadahmu bersama Seakun. Berkurban sapi lebih murah dengan sistem patungan. Halal, mudah, aman.',
        // },
        // {
        //   id: 2,
        //   name: 'Pahamify',
        //   slug: 'pahamify',
        //   img: '/images/product/pahamify.png',
        //   icon: '/images/icons/pahamify.svg',
        //   isActive: false,
        //   preview:
        //     'Belajar jarak jauh lebih mudah, lengkap, dan murah bersama konten premium Pahamify',
        // },
        {
          id: 1,
          name: 'Kulina',
          slug: 'kulina',
          img: '/images/product/kulina.png',
          icon: '/images/icons/kulina.svg',
          isActive: false,
          preview:
            'Menu hemat, berkualitas, dan murah. Pesan makan siangmu bersama teman-teman di kulina',
        },
      ],
      dataProposeProvider: {
        name: 'Oops!',
        preview: 'Layanan kamu belum ada di Seakun?',
        img: '/images/product/propose.svg',
      },
      isShowModalPackages: false,
      choosedProvider: {},
      choosedSlugProvider: '',
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    this.getProviders();
  },
  methods: {
    showPriceScheme(param1, param2) {
      this.showModalScheme = true;
      this.dataDetailProvider = {
        list: this.providerList,
        slug: param1,
        name: param2,
      };
    },
    closeModalScheme() {
      this.showModalScheme = false;
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
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
          this.dataProviders = data;
        } else {
          throw new Error(fetchProviderList);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingProduct = false;
    },
    onClickProductDigital(product) {
      this.isShowModalPackages = true;
      this.choosedProvider = product;
      this.choosedSlugProvider = product.slug;
    },
    onClickProductOnDemand(product) {
      this.$router.push(`/${product.slug}`);
    },
    choosePacket(packet) {
      this.$router.push(
        `/order?provider=${this.choosedSlugProvider}&variant_id=${packet.uid}&package_id=${packet.packageUid}`
      );
    },
    toSchemePage() {
      this.$router.push('/info/scheme-of-price');
    },
  },
};
</script>

<style lang="scss" scoped></style>
