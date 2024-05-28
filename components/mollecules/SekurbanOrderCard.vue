<template>
  <div
    class="bg-white mt-2 rounded-[10px] items-center tn:px-3 tn:py-3 md:px-4 md:py-4 border !border-[#08A081]"
  >
    <div class="tn:pb-3 md:pb-4 flex tn:space-x-2 md:space-x-4 items-center">
      <div class="w-[95px] h-[81px] rounded-[8px] overflow-hidden">
        <img
          class="min-w-full min-h-full object-cover object-center"
          src="/images/sekurban/cow/cow-1.jpg"
          alt="product sekurban"
        />
      </div>
      <div class="space-y-1">
        <p class="md:text-sm text-xs font-bold">
          Sequrban (Seakun x Kitabisa x Ecoqurban)
        </p>
        <p class="md:text-sm text-xs">Sapi Kupang / Bali</p>
        <p class="md:text-sm text-xs">
          {{ currencyFormat(sekurban.provider.package.variant.grandTotal) }}
        </p>
      </div>
    </div>

    <div
      class="flex justify-between pt-3 border-t border-gray-100 md:text-sm text-xs"
    >
      <div class="text-gray-secondary md:text-sm text-xs">
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
  name: 'SekurbanOrderCard',
  props: {
    sekurban: {
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
