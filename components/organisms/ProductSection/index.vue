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
        <h1 class="text-2xl md:hidden font-bold">Layanan Digital</h1>
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
          Layanan Non Digital
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
      @onClose="onCloseModalPackages"
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
import { providerList } from '../../../constants/price-scheme';
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
        limit: 50,
      },
      isLoadingProduct: false,
      dataDetailProvider: {
        list: {},
        slug: '',
        name: '',
      },
      dataProductOnDemand: [
        {
          id: 1,
          name: 'Sekeranjang',
          slug: 'sekeranjang',
          img: '/images/product/on demand/sekeranjang.png',
          isActive: true,
          preview:
            'Cari teman patungan beli barang Buy 1 Get 1 atau beli barang dengan kuantitas banyak untuk mendapatkan discount sampai 50%.',
        },
        {
          id: 2,
          name: 'Sefitnes',
          slug: 'sefitnes',
          img: '/images/product/on demand/sefitnes.png',
          isActive: false,
          preview:
            'Cari teman patungan berlangganan gym, fitness dan fasilitas olahraga untuk mendapatakan potongan harga.',
        },
        {
          id: 3,
          name: 'Seatap',
          slug: 'seatap',
          img: '/images/product/on demand/seatap.png',
          isActive: false,
          preview:
            'Cari teman patungan untuk sewa rumah, kostan atau apartemen.',
        },
        {
          id: 4,
          name: 'Sekelas',
          slug: 'sekelas',
          img: '/images/product/on demand/sekelas.png',
          isActive: false,
          preview:
            'Cari teman patungan untuk beli dan berlangganan kelas online atau offline.',
        },
        {
          id: 5,
          name: 'Segame',
          slug: 'segame',
          img: '/images/product/on demand/segame.png',
          isActive: false,
          preview:
            'Cari teman patungan, langganan dan main bareng futsal, sepakbola, tenis, badminton dll.',
        },
        {
          id: 6,
          name: 'Sekatering',
          slug: 'sekatering',
          img: '/images/product/on demand/sekatering.png',
          isActive: false,
          preview: 'Cari teman patungan berlangganan katering terdekat.',
        },
        {
          id: 7,
          name: 'Sejalan',
          slug: 'sejalan',
          img: '/images/product/on demand/sejalan.png',
          isActive: false,
          preview: 'Berlangganan bersama ojek online terpercaya.',
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
