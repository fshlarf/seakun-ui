<template>
  <div class="container order-flow pt-12 lg:pt-24 md:pb-12">
    <div class="mb-8">
      <h1 class="tn:text-2xl md:text-4xl text-center md:text-left font-bold">
        Cara berlangganan
      </h1>
    </div>
    <div
      class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-around space-x-5 md:space-x-2 lg:space-x-2"
    >
      <FlowCard
        :dataFlow="dataFlow"
        v-for="(dataFlow, id) in dataOrderFlow"
        :key="id"
        class="w-24 md:w-56 lg:w-auto mb-2"
      />
    </div>
  </div>
</template>

<script>
import FlowCard from '~/components/mollecules/FlowCard.vue';
export default {
  data() {
    return {
      dataOrderFlow: [
        {
          id: 1,
          title: 'Pesan layanan',
          img: '/images/order flow/flow-1.svg',
        },
        {
          id: 2,
          title: 'Pembayaran',
          img: '/images/order flow/flow-2.svg',
        },
        {
          id: 3,
          title: 'Menunggu proses',
          img: '/images/order flow/flow-3.svg',
        },
        {
          id: 4,
          title: 'Pesanan diterima',
          img: '/images/order flow/flow-4.svg',
        },
        {
          id: 5,
          title: 'Selesai!',
          img: '/images/order flow/flow-5.svg',
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
