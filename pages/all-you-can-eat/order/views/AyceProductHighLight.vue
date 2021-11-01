<template>
  <div class="order-detail bg-white shadow-md mt-2 rounded-md items-center">
    <div class="order-detail__product px-4 pt-4 pb-4 grid grid-cols-5 gap-2">
      <div class="flex-1">
        <img class="mx-auto" :src="`${variant.logo}`" alt="Image not found" />
      </div>
      <div class="detail-product__price col-span-4">
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p v-else class="md:text-lg tn:text-sm font-bold">
          {{ variant.restaurantName }}
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ variant.name }}
          <span class="uppercase">({{ variant.package }})</span>
        </p>
        <p class="md:text-lg tn:text-sm font-normal">
          {{ currencyFormat(grandTotal) }} / orang
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
  computed: {
    finalPrice() {
      return this.variant.detailPrice.finalPrice;
    },
  },
};
</script>

<style></style>
