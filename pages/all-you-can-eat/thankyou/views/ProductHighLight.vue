<template>
  <div
    class="order-detail bg-white shadow-md mt-2 rounded-md items-center"
  >
    <div
      class="order-detail__product px-4 pt-4 pb-4 grid grid-cols-5 gap-2"
    >
      <div class="flex-1">
        <img
          class="detail-product__image mx-auto"
          src="/images/all you can eat/brand/shabu-hachi.png"
          alt="Image not found"
        />
      </div>
      <div class="detail-product__price col-span-4">
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p v-else class="md:text-lg tn:text-sm font-bold">Shabu Hachi</p>
        <p class="md:text-lg tn:text-sm font-normal"> All You Can Eat - Paket 5 Orang </p>
        <p class="md:text-lg tn:text-sm font-normal"> {{ currencyFormat(120000) }} (1 Paket)</p>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'ProductHighlight',
  props: {
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
