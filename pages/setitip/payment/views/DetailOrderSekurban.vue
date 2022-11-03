<template>
  <div
    class="order-detail bg-white shadow-md mt-8 rounded-md items-center mx-2"
  >
    <div
      class="order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center"
    >
      <div class="flex-1">
        <img
          class="detail-product__image w-9/12"
          :src="`${image}`"
          alt="payment setitip"
        />
      </div>
      <div class="detail-product__price col-span-4 ml-4">
        <p class="font-bold">
          <span class="capitalize">Sequrban (Seakun x Wadiqibas) </span>
        </p>
        <p class="font-normal py-2">
          Tipe {{ packageCode }} - {{ type }} ({{ `${weight} ${unitWeight}` }})
        </p>
        <p class="font-normal">{{ currencyFormat(totalCost) }}</p>
      </div>
    </div>
    <div
      class="order-detail__payment flex justify-between px-4 pt-3 pb-2 border-t border-gray-5-60"
    >
      <div>Total down payment (uang muka)</div>
      <div>
        <template>
          {{ currencyFormat(downPayment) }}
        </template>
      </div>
    </div>
    <div class="order-detail__payment flex justify-between px-4 pb-3">
      <div>Sisa pembayaran (**dibayar setelah grup penuh)</div>
      <div>
        <template>
          {{ currencyFormat(totalCost - downPayment) }}
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
export default {
  name: 'DetailOrderSeakunQurban',
  props: {
    provider: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      dafault: false,
    },
    image: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    packageCode: {
      type: String,
      default: '',
    },
    unitWeight: {
      type: String,
      default: '',
    },
    weight: {
      type: Number,
      default: null,
    },
    downPayment: {
      type: Number,
      default: null,
    },
    totalCost: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style></style>
