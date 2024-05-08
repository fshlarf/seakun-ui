<template>
  <div
    class="bg-white mt-2 rounded-[10px] items-center tn:px-3 tn:py-3 md:px-4 md:py-4 border !border-[#08A081]"
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
        <p class="md:text-sm text-xs font-bold">SeGlowUp</p>
        <p class="md:text-sm text-xs">Zap {{ zap.provider.package.name }}</p>
        <p class="md:text-sm text-xs">
          {{ currencyFormat(zap.provider.package.variant.grandTotal) }}
        </p>
      </div>
    </div>

    <div
      class="flex justify-between pt-3 border-t border-gray-100 md:text-sm text-xs"
    >
      <div class="md:text-sm text-xs text-gray-secondary">
        Status Pembayaran
      </div>
      <div class="flex items-center gap-[2px] md:gap-2">
        <p class="text-primary font-bold text-xs md:text-sm">SUKSES</p>
        <img
          src="/images/icons/atoms/success-green.svg"
          alt="sukses"
          class="md:w-6 md:h-6 w-3 h-3"
        />
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
