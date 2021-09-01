<template>
  <div class="order-detail bg-white shadow-md mt-2 rounded-md items-center">
    <div class="order-detail__product px-4 pt-4 pb-4 grid grid-cols-5 gap-2">
      <div class="flex-1">
        <img
          class="detail-product__image mx-auto"
          :src="`${variant.image}`"
          alt="Image not found"
        />
      </div>
      <div class="detail-product__price col-span-4">
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p v-else class="md:text-lg tn:text-sm font-bold">Shabu Hachi</p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ variant.name }} - {{ variant.variant }}
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ currencyFormat(variant.price) }} (1 Paket)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import { setNameProvider } from '~/helpers/word-transformation.js';

export default {
  name: 'ProductHighlight',
  props: {
    variant: {
      type: Object,
      default: () => {},
    },
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
    setNameProvider,
  }),
};
</script>

<style></style>
