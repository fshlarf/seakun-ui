<template>
  <div
    id="donatur-card"
    class="tn:w-[300px] xl:w-full rounded-xl bg-white p-[20px] transition duration-500 cursor-pointer text-gray-secondary h-full"
    @click="$emit('onClickDonaturCard', donaturData)"
  >
    <p class="text-sm md:text-base">{{ donaturData.name }}</p>
    <div class="text-[20px] font-bold mt-3 text-[#08A081]">
      <p v-if="donaturData.isHideNominal == 1">Rp XXX.XXX</p>
      <p v-else>
        {{ currencyFormat(donaturData.nominal) }}
      </p>
    </div>
    <div class="mt-5 md:mt-8">
      <img src="/images/icons/atoms/quote.svg" alt="quote icon" />
      <p
        class="text-[14px] leading-[20px] mt-3 two-lines overflow-hidden line-clamp-2"
      >
        {{ donaturData.message }}
      </p>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
export default {
  props: {
    donaturData: {
      type: Object,
      default: () => {},
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    currencyFormat,
  },
};
</script>

<style>
#donatur-card:hover {
  transform: scale(1.05);
}
</style>
