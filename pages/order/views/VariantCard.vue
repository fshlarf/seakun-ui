<template>
  <div class="order-detail bg-white shadow-md mt-2 rounded-md items-center">
    <div
      class="order-detail__product px-4 pt-4 pb-2 grid tn:grid-cols-7 md:grid-cols-5 gap-2 items-center"
    >
      <div v-if="dataVariant.providerSlug" class="tn:col-span-2 md:col-span-1">
        <img
          class="detail-product__image w-full"
          :src="`/images/product/brand/${dataVariant.providerSlug}.png`"
          alt="product sequrban"
        />
      </div>
      <div
        class="detail-product__price tn:col-span-5 md:col-span-4 ml-4 space-y-1"
      >
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p v-else class="md:text-lg tn:text-sm font-bold">
          {{ dataVariant.packageName }}
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ dataVariant.packageDetail }}
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
          {{ currencyFormat(dataVariant.grandTotal) }}
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'VariantCard',
  props: {
    dataVariant: {
      type: Object,
      default: () => {},
    },
    isLoading: {
      type: Boolean,
      dafault: false,
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style></style>
