<template>
  <div id="provider" class="container pt-20">
    <div class="">
      <div class="flex justify-between items-center mb-2 px-2">
        <h1
          class="hidden md:block md:text-xl lg:text-2xl font-bold md:mb-4 lg:mb-8"
        >
          Berlangganan produk digital
        </h1>
        <h1 class="text-2xl md:hidden font-bold">Layanan digital</h1>
        <NuxtLink to="/" class="text-sm md:text-base text-primary font-bold"
          >See more</NuxtLink
        >
      </div>
      <div
        class="w-full h-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-6 px-0 justify-center"
      >
        <div class="" v-for="(product, id) in dataProductDigital" :key="id">
          <ProductCard
            :product="product"
            class="md:w-full md:h-full"
            @showPriceScheme="showPriceScheme"
          />
        </div>
      </div>

      <div class="pt-5 px-2 md:my-8">
        <h1 class="text-2xl md:text-xl lg:text-2xl font-bold my-2 md:my-4">
          Layanan on demand
        </h1>
      </div>
      <div
        class="w-full h-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 px-0 justify-center place-items-stretch items-stretch items-center"
      >
        <div class="" v-for="(product, id) in dataProductOnDemand" :key="id">
          <ProductCard
            :product="product"
            class="md:w-full md:h-full"
            v-if="product.preview"
          />
        </div>
        <div class="">
          <ProposeCard
            :propose="dataProposeProvider"
            class="md:w-full h-full"
          />
        </div>
      </div>
    </div>
    <ModalPriceScheme
      :show-modal="showModalScheme"
      :data-scheme="dataDetailProvider"
      @closeModal="closeModalScheme"
    />
  </div>
</template>

<script>
import ProductCard from '~/components/mollecules/ProductCard';
import ProposeCard from '~/components/mollecules/ProposeCard';
import ModalPriceScheme from '~/components/mollecules/ModalPriceScheme';
import { providerList } from './provider-list';
import axios from 'axios'

export default {
  data() {
    return {
      showModalScheme: false,
      providerList,
      dataDetailProvider: {
        list: {},
        slug: '',
        name: '',
      },
      dataProductDigital: [],
      dataProductOnDemand: [
        {
          id: 1,
          name: 'Sequrban',
          slug: 'sequrban',
          img: '/images/product/sekurban.svg',
        icon: '/images/icons/sekurban.svg',
          isActive: true,
          isNew: true,
          preview:
            'Lengkapi ibadahmu bersama Seakun. Berkurban sapi lebih murah dengan sistem patungan. Halal, mudah, aman.',
        },
        {
          id: 2,
          name: 'Pahamify',
          slug: 'pahamify',
          img: '/images/product/pahamify.svg',
          icon: '/images/icons/pahamify.svg',
          isActive: false,
          preview:
            'Belajar jarak jauh lebih mudah, lengkap, dan murah bersama konten premium Pahamify',
        },
        {
          id: 3,
          name: 'Kulina',
          slug: 'kulina',
          img: '/images/product/kulina.svg',
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
    };
  },
  components: {
    ProductCard,
    ProposeCard,
    ModalPriceScheme,
  },
  mounted() {
    this.fechProviders('product-digital')
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
    async fechProviders(type) {
      try {
        const { data } = await axios.get(`https://seakun-packet-api-v1.herokuapp.com/${type}`)
        for(let i = 1; i <= 8; i++) {
          data.forEach(element => {
            if (element.id === i) this.dataProductDigital.push(element)
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
