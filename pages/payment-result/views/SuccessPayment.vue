<template>
  <div class="thankyou max-w-2xl w-full mx-auto pt-4 tn:-mb-4 md:mb-0">
    <div
      class="md:rounded-3xl md:shadow-md tn:px-3 md:px-8 lg:px-16 md:py-8 w-full pt-4"
    >
      <img
        class="w-1/3 mx-auto"
        src="/images/thank-you-new.png"
        alt="payment success"
      />
      <div class="text-center tn:px-4 md:px-12">
        <h3 class="font-bold text-3xl mt-4 text-center">Terima Kasih!</h3>
        <p class="text-center md:text-lg mt-4 text-gray-500">
          Selamat, pembayaran kamu berhasil dikonfirmasi. pesanan kamu akan
          segera diproses oleh admin Seakun.
        </p>
      </div>

      <div
        class="tn:px-4 md:px-6 tn:py-4 md:py-8 mt-2 bg-gray-50 shadow-md tn:rounded-xl md:rounded-3xl"
      >
        <div>
          <p class="font-bold text-lg">Detail Pesanan</p>
          <OrderCard
            v-for="(detailOrder, id) in dataOrder"
            :key="id"
            :order="detailOrder"
          />
        </div>
        <div class="mt-4 md:space-y-1">
          <div class="text-center">
            <p>Total Pembayaran</p>
            <p class="font-bold text-xl">{{ currencyFormat(totalTransfer) }}</p>
          </div>
        </div>
      </div>

      <div>
        <p class="tn:mt-4 md:mt-6 lg:mt-8">
          Mohon menunggu 1 x 24 jam, jika melewati rentang waktu tersebut dan
          pesanan kamu belum diproses, harap hubungi admin via whatsapp
          <a
            href="https://api.whatsapp.com/send/?phone=6282124852232"
            target="_blank"
            class="text-primary"
            >+6282124852232</a
          >.
        </p>
      </div>
      <Button
        class="w-full bg-green-seakun text-white tn:mt-5 md:mt-6 py-[12px] rounded-2xl"
        label="Kembali ke beranda"
        @click="toHomePage()"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import OrderCard from './OrderCard.vue';
import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';
export default {
  name: 'thankyou-page',
  layout: 'new',
  props: {
    dataOrder: {
      type: Array,
      default: () => [],
    },
    totalTransfer: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      currencyFormat,
      moment,
    };
  },
  components: {
    Button,
    OrderCard,
  },
  methods: {
    toHomePage() {
      this.$router.push('/');
    },
  },
};
</script>
