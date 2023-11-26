<template>
  <div>
    <div v-if="isLoading" class="text-center mt-4">
      <p class="shimmer w-7/12"></p>
      <p class="shimmer w-6/12"></p>
      <p class="shimmer w-9/12"></p>
    </div>
    <div v-else class="flex flex-col mt-4 items-center">
      <p class="text-base font-normal opacity-50 mt-4">Total bayar</p>
      <div class="payment-detail__price flex cursor-pointer">
        <p
          class="text-2xl font-bold my-2 text-green-seakun"
          v-html="formatCodePayment(paymentTotal)"
        ></p>
      </div>
    </div>
    <div class="mt-12">
      <p class="text-xl text-center font-bold">
        Metode Pembayaran yang Tersedia
      </p>
      <div class="mt-4 mx-auto w-full">
        <img class="w-full" src="/images/payment/all-payment.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'PaymentDetail',
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
        'shopee pay',
        'link aja',
        'bca',
        'mandiri',
        'bni',
        'bri',
        'permata',
        'jenius',
        'alfamart',
      ],
    },
    copyNominal: {
      type: Function,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatCodePayment(value) {
      if (value) {
        const currency = this.currencyFormat(value);
        return currency;
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
