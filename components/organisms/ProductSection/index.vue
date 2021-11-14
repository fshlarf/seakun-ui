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
          Berlangganan produk digital
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
          <div class="" v-for="(product, id) in dataProductDigital" :key="id">
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

      <div id="product-ondemand" class="pt-5 px-2 md:my-8">
        <h1 class="text-2xl md:text-xl lg:text-2xl font-bold my-2 md:my-4">
          Layanan on demand
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
      :packages="dataPackages"
      :slug="choosedSlugProvider"
      @choosePacket="choosePacket"
      :is-loading="isFetchingPacket"
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
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import ProposeCard from '~/components/mollecules/ProposeCard';
import ModalPriceScheme from '~/components/mollecules/ModalPriceScheme';
import { providerList } from './provider-list';
import axios from 'axios';
import ModalPackages from './views/ModalPackages.vue';
import { SEAKUN_PACKAGE_API } from '~/constants/api.js';

export default {
  components: {
    ProductCard,
    CardShimmerVertical,
    ProposeCard,
    ModalPriceScheme,
    ModalPackages,
  },
  data() {
    return {
      SEAKUN_PACKAGE_API,
      showModalScheme: false,
      providerList,
      isLoadingProduct: false,
      dataDetailProvider: {
        list: {},
        slug: '',
        name: '',
      },
      dataProductDigital: [],
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
      choosedProvider: '',
      choosedSlugProvider: '',
      dataPackages: [],
      isFetchingPacket: false,
    };
  },
  mounted() {
    this.fechProviders('product-digital');
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
    async fechProviders(type) {
      const { SEAKUN_PACKAGE_API } = this;
      this.isLoadingProduct = true;
      try {
        const { data } = await axios.get(`${SEAKUN_PACKAGE_API}/${type}`);
        for (let i = 1; i <= 20; i++) {
          data.forEach((element) => {
            if (element.id === i) this.dataProductDigital.push(element);
          });
        }
      } catch (err) {
        console.log(err);
      }
      this.isLoadingProduct = false;
    },
    onClickProductDigital(product) {
      this.isFetchingPacket = true;
      this.dataPackages = [];
      this.isShowModalPackages = true;
      this.choosedProvider = product.name;
      this.choosedSlugProvider = product.slug;
      this.fetchPackages(product.slug);
    },
    onClickProductOnDemand(product) {
      this.$router.push(`/${product.slug}`);
    },
    async fetchPackages(provider) {
      const { SEAKUN_PACKAGE_API } = this;
      const theProvider = provider === 'microsoft' ? 'microsoft365' : provider;

      try {
        const { data } = await axios.get(
          `${SEAKUN_PACKAGE_API}/${theProvider}`
        );
        if (data) {
          this.dataPackages = data;
        }
      } catch (err) {
        console.log(err);
      }
      this.isFetchingPacket = false;
    },
    choosePacket(packet) {
      this.$router.push(
        `/order?provider=${this.choosedSlugProvider}&packet_id=${packet.id}`
      );
    },
    toSchemePage() {
      this.$router.push('/info/scheme-of-price');
    },
  },
};
</script>

<style lang="scss" scoped></style>
