<template>
  <div
    class="bg-white mt-2 rounded-[10px] items-center tn:px-3 tn:py-3 md:px-4 md:py-4 border !border-[#8DCABE]"
  >
    <div class="tn:pb-3 md:pb-4 flex tn:space-x-2 md:space-x-4 items-start">
      <div class="w-[95px] rounded-[8px] overflow-hidden">
        <img
          class="min-w-full min-h-full object-cover object-center"
          :src="`/images/seglowup/${zap.provider.package.name}.png`"
          alt="product zap"
        />
      </div>
      <div class="space-y-1">
        <p class="md:text-base tn:text-sm font-bold">SeGlowUp</p>
        <p class="md:text-base tn:text-sm">
          Zap {{ zap.provider.package.name }}
        </p>
        <p class="md:text-base tn:text-sm">
          {{ currencyFormat(zap.provider.package.variant.grandTotal) }}
        </p>
      </div>
    </div>

    <div
      class="flex justify-between pt-3 border-t border-gray-100 md:text-base tn:text-sm"
    >
      <div class="text-[#363636] opacity-50">Harga Patungan</div>
      <div class="font-bold">
        {{ currencyFormat(zap.provider.package.variant.grandTotal) }}
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'ZapOrderCard',
  props: {
    zap: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style></style>
