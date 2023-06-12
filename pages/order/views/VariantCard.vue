<template>
  <div
    class="box-detail border-[1px] border-[#8DCABE] rounded-[10px] bg-white items-center"
  >
    <div
      class="order-detail__product md:px-[21.5px] tn:px-[17px] md:pt-6 tn:pt-4 md:pb-[20px] tn:pb-3 sm:flex gap-5 items-center"
    >
      <div v-if="dataVariant.providerSlug" class="tn:w-full sm:w-auto">
        <img
          class="detail-product__image w-full tn:h-[121px] md:h-auto"
          :src="`/images/product/brand/order/${dataVariant.providerSlug}.png`"
          alt="product sequrban"
        />
      </div>
      <div
        class="relative detail-product__price space-y-1 items-center tn:mt-4 md:mt-0"
      >
        <p v-if="isLoading" class="font-bold shimmer w-9/12"></p>
        <p class="md:text-base tn:text-sm font-bold tn:pt-6 md:pt-0">
          {{ dataVariant.providerName }}
        </p>
        <p
          class="md:text-sm tn:hidden sm:block text-[#00B5D4] font-bold bg-[#00B5D4] bg-opacity-5 rounded w-auto px-2"
        >
          {{ dataVariant.packageName }}
        </p>
        <p
          class="absolute top-0 left-0 text-xs sm:hidden text-[#00B5D4] font-bold bg-[#00B5D4] bg-opacity-5 rounded w-auto px-2"
        >
          {{ dataVariant.packageName }}
        </p>
        <p
          class="md:text-lg tn:text-xs font-normal text-[#363636] opacity-80 tn:mt-1 md:mt-0"
        >
          {{ dataVariant.packageDetail }}
        </p>
      </div>
    </div>
    <hr class="border-[#8DCABE] border-opacity-20 mx-[21.5px]" />
    <div
      class="flex justify-between px-4 md:pt-3 md:pb-3 tn:pt-2 tn:pb-[18px] tn:text-xs md:text-base"
    >
      <div class="text-[#363636] opacity-50">Biaya Langganan</div>
      <div class="font-bold">
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

<style>
.box-detail {
  /* border: 1px solid #8dcabe; */
  box-shadow: 0px 2px 8px rgba(28, 37, 44, 0.04);
  /* border-radius: 10px; */
  font-family: 'DM Sans', sans-serif !important;
}
</style>
