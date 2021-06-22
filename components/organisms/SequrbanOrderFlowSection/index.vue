<template>
  <div id="orderFlow" class="container order-flow pt-12 pb-8 lg:pt-24 md:pb-12">
    <div class="mb-8 flex gap-3 items-center">
      <h1 class="tn:text-2xl md:text-4xl tn:text-center md:text-left font-bold">
        Cara pesan
      </h1>
      <div class="cursor-pointer" @click="showModalInfo">
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9999 29.9999C6.71561 29.9999 -0.00012207 23.2842 -0.00012207 14.9999C-0.00012207 6.71561 6.71561 -0.00012207 14.9999 -0.00012207C23.2842 -0.00012207 29.9999 6.71561 29.9999 14.9999C29.9908 23.2804 23.2804 29.9908 14.9999 29.9999ZM2.99988 15.2579C3.07085 21.8597 8.46154 27.1642 15.0637 27.1289C21.6658 27.0932 26.9992 21.7311 26.9992 15.1289C26.9992 8.52664 21.6658 3.16454 15.0637 3.12887C8.46154 3.09356 3.07085 8.39802 2.99988 14.9999V15.2579ZM17.9999 22.4999H13.4999V16.4999H11.9999V13.4999H16.4999V19.4999H17.9999V22.4999ZM16.4999 10.4999H13.4999V7.49988H16.4999V10.4999Z"
            fill="#8DCABE"
          />
        </svg>
      </div>
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
    <ModalSequrbanInfo :show-modal="isShowModal" @closeModal="closeModalInfo" />
  </div>
</template>

<script>
import FlowCard from '~/components/mollecules/FlowCard.vue';
import ModalSequrbanInfo from '~/components/mollecules/ModalSequrbanInfo.vue';
export default {
  data() {
    return {
      isShowModal: false,
      dataOrderFlow: [
        {
          id: 1,
          title: 'Pesan layanan',
          img: '/images/sequrban/order flow/flow-1.svg',
        },
        {
          id: 2,
          title: 'Pembayaran DP',
          img: '/images/sequrban/order flow/flow-2.svg',
        },
        {
          id: 3,
          title: 'Full-group & pelunasan',
          img: '/images/sequrban/order flow/flow-3.svg',
        },
        {
          id: 4,
          title: 'Qurban diproses',
          img: '/images/sequrban/order flow/flow-4.svg',
        },
        {
          id: 5,
          title: 'Bagian qurban diterima',
          img: '/images/sequrban/order flow/flow-5.svg',
        },
        {
          id: 6,
          title: 'Selesai',
          img: '/images/sequrban/order flow/flow-6.svg',
        },
      ],
    };
  },
  components: {
    FlowCard,
    ModalSequrbanInfo,
  },
  methods: {
    showModalInfo() {
      this.isShowModal = true;
    },
    closeModalInfo() {
      this.isShowModal = false;
    },
  },
};
</script>

<style></style>
