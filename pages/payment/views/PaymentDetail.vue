<template>
  <div>
       <div v-if="isLoading" class="text-center mt-4">
        <p class="shimmer w-7/12"></p>
        <p class="shimmer w-6/12"></p>
        <p class="shimmer w-9/12"></p>
      </div>
    <div v-else class="flex flex-column mt-4 items-center">
      <p class="text-base font-normal opacity-50">Total bayar</p>
      <div class="payment-detail__price flex cursor-pointer">
        <p
          class="text-2xl font-normal my-2"
          v-html="formatCodePayment(paymentTotal)"
        ></p>
        <CopyIcon />
      </div>
      <p class="text-sm font-normal">
        Pastikan nominal sesuai hingga 3 digit terakhir
      </p>
    </div>
    <div class="mt-12">
      <p class="text-xl text-center font-bold">
        Metode Pembayaran yang Tersedia
      </p>
      <div class="flex flex-wrap justify-center mt-3">
        <div
          v-for="(payment, index) in dataPaymentMethod"
          :key="index"
          class="flex bg-white shadow-md w-36 h-11 mx-1 my-2 rounded-xl justify-center"
        >
          <img :src="`/images/payment/${payment}.png`" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'PaymentDetail',
  components: {
    CopyIcon,
  },
  data: () => ({
    currencyFormat,
  }),
  props: {
    paymentTotal: {
      type: Number,
      default: 0,
    },
    dataPaymentMethod: {
      type: Array,
      default: () => [
        'qris',
        'ovo',
        'dana',
        'visa',
        'bca',
        'mandiri',
        'shopee pay',
        'master card',
        'bni',
        'bri',
        'link aja',
        'jcb',
      ],
    },
    copyNominal: {
      type: Function,
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatCodePayment(value) {
      if (value) {
        const currency = this.currencyFormat(value);
        const startTotal = currency.substring(0, currency.length - 3);
        const lastCode = currency.substring(
          currency.length - 3,
          currency.length
        );
        return `${startTotal}<span class="text-green-seakun font-bold">${lastCode}</span>`;
      }
      return '-';
    },
  },
};
</script>
<style lang="scss" scoped>
.payment-detail {
  &__price {
    svg {
      width: 14px;
      height: auto;
      display: inline-block;
      fill: #8dcabe;
      margin-top: -4px;
      margin-left: 12px;
      cursor: pointer;
    }
  }
}
</style>
