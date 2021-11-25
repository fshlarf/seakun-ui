<template>
  <div class="order-detail bg-white shadow-md mt-4 rounded-xl items-center">
    <div class="order-detail__product px-4 pt-4 pb-4 grid grid-cols-5 gap-2">
      <div class="flex-1">
        <img
          class="detail-product__image mx-auto"
          :src="`${variant.logo}`"
          alt="Image not found"
        />
      </div>
      <div class="detail-product__price col-span-4">
        <p class="md:text-lg tn:text-sm font-bold">
          {{ variant.restaurantName }}
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ variant.name }}
          <span class="uppercase">({{ variant.package }})</span>
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ currencyFormat(grandTotal) }} x {{ totalPerson }} orang
        </p>
      </div>
    </div>
    <hr />
    <div class="flex justify-between items-center tn:p-3">
      <p class="font-bold text-gray-500">Total Pembayaran</p>
      <p class="text-gray-500">{{ currencyFormat(totalPayment) }}</p>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'ProductHighlight',
  props: {
    variant: {
      type: Object,
      default: () => {},
    },
    grandTotal: {
      type: Number | String,
      default: null,
    },
    totalPerson: {
      type: String | Number,
      default: null,
    },
  },
  computed: {
    totalPayment() {
      return this.grandTotal * this.totalPerson;
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style></style>
