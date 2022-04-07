<template>
  <div id="history" class="container tn:mt-8 lg:pt-20 tn:pt-12">
    <div class="">
      <div id="product-digital" class="px-2">
        <h1 class="tn:text-xl md:text-2xl font-bold md:mb-4 lg:mb-4">
          Pembelian Selesai
        </h1>
      </div>
      <div class="tn:mt-4">
        <div
          v-if="!isLoadingProduct"
          class="scroll-provider flex space-x-6 overflow-x-auto overscroll-auto px-3 pt-2"
        >
          <div
            class="mt-2 mb-4 flex-none"
            v-for="(product, id) in dataTransaction"
            :key="id"
          >
            <ProductCard :product="product" class="md:w-full md:h-full" />
          </div>
        </div>

        <div
          v-else
          class="scroll-provider flex space-x-6 overflow-x-auto overscroll-auto px-3 pt-2"
        >
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './views/ProductCard.vue';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import { SEAKUN_PACKAGE_API } from '~/constants/api.js';

export default {
  components: {
    ProductCard,
    CardShimmerVertical,
  },
  data() {
    return {
      isLoadingProduct: false,
      dataUsers: [],
      dataTransaction: [
        {
          id: 1,
          name: 'Fifa 22 (Origin)',
          slug: 'fifa22',
          img: '/images/setitip/product/fifa.png',
          icon: '/images/setitip/icons/fifa.svg',
          price: 659000,
          preview: 'Pembelian Game Fifa 22 di Platform Origin.',
          users: [
            {
              name: 'Faishal Arif',
              initial: 'FA',
            },
          ],
        },
        {
          id: 2,
          name: 'Adobe Photoshop',
          slug: 'adobe-photoshop',
          img: '/images/setitip/product/photoshop.jpg',
          icon: '/images/setitip/icons/adobe.svg',
          price: 3237600,
          preview: 'Pembelian Adobe Photoshop 1 tahun.',
          users: [
            {
              name: 'Aadilah Azis',
              initial: 'AA',
            },
          ],
        },
        {
          id: 3,
          name: 'Playstation PUBG',
          slug: 'ps-pubg',
          img: '/images/setitip/product/pubg.jpg',
          icon: '/images/setitip/icons/playstation.svg',
          price: 129000,
          preview:
            'Pembelian Game Playstation 4 Players Unknown Battle Ground (PUBG)',
          users: [
            {
              name: 'Benny Fazrido',
              initial: 'BF',
            },
          ],
        },
      ],
    };
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
</style>
