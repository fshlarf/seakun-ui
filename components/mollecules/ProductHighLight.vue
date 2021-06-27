<template>
  <div
    class="order-detail bg-white shadow-md mt-2 rounded-md items-center mx-2"
  >
    <div
      class="order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center"
    >
      <div class="flex-1">
        <img
          class="detail-product__image w-full"
          :src="`/images/${provider.toLowerCase()}.png`"
          alt="Image not found"
        />
      </div>
      <div class="detail-product__price col-span-4 ml-4">
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p v-else class="md:text-lg tn:text-sm font-bold">
          <span class="capitalize">{{ provider }} </span> - {{ packageName }}
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ currencyFormat(grandTotal) }} x ({{ totalMonth }} Bulan)
        </p>
      </div>
    </div>
    <div
      class="order-detail__payment flex justify-between px-4 py-3 border-t border-gray-50"
    >
      <div>Total Pembayaran</div>
      <div>
        <p v-if="isLoading" class="shimmer w-4/12"></p>
        <template v-else>
          {{ currencyFormat(grandTotal) }}
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'ProductHighlight',
  props: {
    provider: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      dafault: false,
    },
    packageName: {
      type: String,
      default: '',
    },
    grandTotal: {
      type: Number | String,
      default: null,
    },
    totalMonth: {
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
