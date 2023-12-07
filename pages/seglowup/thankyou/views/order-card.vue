<template>
  <section
    class="rounded-[10px] p-[12px] md:p-4 bg-white h-max"
    style="box-shadow: 0px 2px 8px 0px rgba(28, 37, 44, 0.08)"
  >
    <div class="flex gap-3 items-center">
      <div class="w-[66px] xl:w-[88px]">
        <img
          :src="`/images/seglowup/${dataOrder.provider.package.name}.png`"
          alt="zap series"
        />
      </div>
      <div class="font-bold text-xs sm:text-sm lg:text-base">
        <p class="text-main text-dmsans">
          {{ dataOrder.provider.name }} {{ dataOrder.provider.package.name }}
        </p>
        <p class="text-[#66738F] text-dmsans">
          {{ dataOrder.orderNumber }}
        </p>
      </div>
    </div>
    <div class="border-t-[1px] border-[#E5E5E580] mt-4 lg:mt-5">
      <div
        class="mt-3 text-xs sm:text-sm lg:text-base font-bold text-[#363636CC] flex justify-between items-center"
      >
        <p>Harga</p>
        <p>
          {{ currencyFormat(dataOrder.provider.package.variant.grandTotal) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation';

export default {
  props: {
    dataOrder: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    currencyFormat,
  },
};
</script>

<style></style>
