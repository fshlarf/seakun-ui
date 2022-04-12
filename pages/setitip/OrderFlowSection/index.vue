<template>
  <div id="order-flow" class="container tn:pt-12 lg:pt-20">
    <div class="px-2">
      <h1 class="font-bold tn:text-xl md:text-2xl md:mb-4 lg:mb-8">
        Cara Pesan
      </h1>
    </div>
    <div
      class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 justify-center place-items-stretch items-stretch"
    >
      <FlowCard
        v-for="(flow, id) in dataFlow"
        :key="id"
        :flow="flow"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import FlowCard from './views/FlowCard.vue';
export default {
  data() {
    return {
      dataFlow: [
        {
          id: 1,
          title: 'Daftar',
          img: '/images/setitip/order flow/flow-1.png',
          preview: 'Daftarkan data diri dan detail produk yang akan dibeli',
        },
        {
          id: 2,
          title: 'Pembayaran',
          img: '/images/setitip/order flow/flow-2.png',
          preview: 'Link pembayaran akan dikirimkan oleh admin Seakun',
        },
        {
          id: 3,
          title: 'Menunggu Proses',
          img: '/images/setitip/order flow/flow-3.png',
          preview: 'Proses perwakilan pembayaran menggunakan kartu Seakun',
        },
        {
          id: 4,
          title: 'Selesai',
          img: '/images/setitip/order flow/flow-4.png',
          preview: 'Menunggu produk di deliver ke kamu oleh provider terkait',
        },
      ],
    };
  },
  components: {
    FlowCard,
  },
};
</script>

<style></style>
