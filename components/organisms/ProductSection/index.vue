<template>
  <div class="container">
    <div class="lg:py-12">
      <div class="flex justify-between items-center mb-2 px-2">
        <h1
          class="hidden md:block md:text-3xl lg:text-4xl font-bold md:mb-4 lg:mb-8"
        >
          Berlangganan produk digital
        </h1>
        <h1 class="text-2xl md:hidden font-bold">Layanan digital</h1>
        <NuxtLink to="/" class="text-sm md:text-base text-primary font-bold"
          >See more</NuxtLink
        >
      </div>
      <div
        class="w-full h-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 px-0 justify-center place-items-stretch items-stretch"
      >
        <div class="" v-for="(product, id) in dataProductDigital" :key="id">
          <ProductCard
            :product="product"
            class="md:w-full md:h-full"
            v-if="product.package"
          />
        </div>
      </div>

      <div class="pt-5 px-2 md:my-8">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold my-2 md:my-4">
          Layanan on demand
        </h1>
      </div>
      <div
        class="w-full h-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 px-0 justify-center place-items-stretch items-stretch"
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
            class="md:w-full md:h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/mollecules/ProductCard';
import ProposeCard from '~/components/mollecules/ProposeCard';
export default {
  data() {
    return {
      dataProductDigital: [
        {
          id: 1,
          name: 'Netflix',
          img: '/images/product/netflix.svg',
          icon: '/images/icons/netflix.svg',
          package: [
            {
              name: 'Premium user host',
              price: '27.500',
            },
            {
              name: 'Premium user reguler',
              price: '27.500',
            },
          ],
        },
        {
          id: 2,
          name: 'Spotify',
          img: '/images/product/spotify.svg',
          icon: '/images/icons/spotify.svg',
          package: [
            {
              name: 'Premium user host',
              price: '27.500',
            },
            {
              name: 'Premium user reguler',
              price: '27.500',
            },
          ],
        },
        {
          id: 3,
          name: 'Youtube',
          img: '/images/product/youtube.svg',
          icon: '/images/icons/youtube.svg',
          package: [
            {
              name: 'Premium',
              price: '27.500',
            },
          ],
        },
        {
          id: 4,
          name: 'Gramedia',
          img: '/images/product/gramedia.svg',
          icon: '/images/icons/gramedia.svg',
          package: [
            {
              name: 'Non-fiksi premiun',
              price: '27.500',
            },
            {
              name: 'Fiksi premium',
              price: '27.500',
            },
            {
              name: 'Full premium',
              price: '27.500',
            },
          ],
        },
        {
          id: 5,
          name: 'Microsoft 365',
          img: '/images/product/microsoft.svg',
          icon: '/images/icons/microsoft.svg',
          package: [
            {
              name: 'Premium',
              price: '27.500',
            },
          ],
        },
        {
          id: 6,
          name: 'Canva',
          img: '/images/product/canva.svg',
          icon: '/images/icons/canva.svg',
          package: [
            {
              name: 'Premium',
              price: '27.500',
            },
          ],
        },
        {
          id: 7,
          name: 'Nintendo Switch',
          img: '/images/product/nintendo.svg',
          icon: '/images/icons/nintendo.svg',
          package: [
            {
              name: 'Premium',
              price: '27.500',
            },
          ],
        },
        {
          id: 8,
          name: 'Apple One',
          img: '/images/product/apple-one.svg',
          icon: '/images/icons/apple-one.svg',
          package: [
            {
              name: 'Premium',
              price: '27.500',
            },
          ],
        },
      ],
      dataProductOnDemand: [
        {
          id: 1,
          name: 'Pahamify',
          img: '/images/product/pahamify.svg',
          icon: '/images/icons/pahamify.svg',
          preview:
            'Belajar jarak jauh lebih mudah, lengkap, dan murah bersama konten premium Pahamify',
        },
        {
          id: 2,
          name: 'Kulina',
          img: '/images/product/kulina.svg',
          icon: '/images/icons/kulina.svg',
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
  },
};
</script>

<style lang="scss" scoped></style>
