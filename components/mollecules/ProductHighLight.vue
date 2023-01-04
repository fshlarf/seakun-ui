<template>
  <div class="order-detail bg-white shadow-md mt-2 rounded-md items-center">
    <div
      class="order-detail__product px-4 pt-4 pb-2 grid tn:grid-cols-7 md:grid-cols-5 gap-2 items-center"
    >
      <div v-if="provider" class="tn:col-span-2 md:col-span-1">
        <img
          class="detail-product__image w-full"
          :src="`/images/product/brand/${provider}.png`"
          alt="product sequrban"
        />
      </div>
      <div
        class="detail-product__price tn:col-span-5 md:col-span-4 ml-4 space-y-1"
      >
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p v-else class="md:text-lg tn:text-sm font-bold">
          {{ packageName }}
        </p>
        <p
          v-if="orderNumber"
          class="md:text-lg tn:text-sm font-semibold text-[#66738F] uppercase"
        >
          {{ orderNumber }}
        </p>
        <p v-if="totalMonth === 12" class="md:text-lg tn:text-sm font-normal">
          {{ currencyFormat(grandTotal) }} / 1 Tahun
        </p>
        <p v-else class="md:text-lg tn:text-sm font-normal">
          {{ currencyFormat(grandTotal) }} / {{ totalMonth }} Bulan
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
    orderNumber: {
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
