<template>
  <div
    class="bg-white md:mt-5 tn:mt-[9.5] rounded-[10px] items-center tn:px-3 tn:pt-[9.5px] md:px-7 md:pt-[35px] border !border-[#8DCABE]"
  >
    <div
      class="tn:pb-3 md:pb-[23px] flex tn:space-x-3 md:space-x-4 items-center"
    >
      <div class="rounded-[8px] overflow-hidden">
        <img
          class="min-w-full min-h-full object-cover object-center"
          src="/images/sekurban/cow/cow-new.png"
          alt="product sekurban"
        />
      </div>
      <div class="space-y-1">
        <p class="md:text-base tn:text-sm font-bold">
          Sekurban (Seakun x Kitabisa)
        </p>
        <p class="md:text-base tn:text-sm">Sapi Kupang / Bali</p>
        <p class="md:text-base tn:text-sm">
          {{ currencyFormat(sekurban.provider.package.variant.grandTotal) }}
        </p>
      </div>
    </div>

    <div
      class="flex justify-between border-t border-gray-100 md:text-base tn:text-sm tn:mb-[9.5px] md:mb-5"
    >
      <div class="text-[#363636] opacity-50 md:mt-[17.5px] tn:mt-2">
        Biaya Kurban
      </div>
      <div class="font-bold md:mt-[17.5px] tn:mt-2">
        {{ currencyFormat(sekurban.provider.package.variant.grandTotal) }}
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
