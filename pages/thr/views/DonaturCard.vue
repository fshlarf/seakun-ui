<template>
  <div
    id="donatur-card"
    class="tn:w-[300px] md:w-[256px] rounded-xl bg-white p-[20px] transition duration-500 cursor-pointer"
    @click="$emit('onClickDonaturCard', donaturData)"
  >
    <p>{{ donaturData.name }}</p>
    <div v-if="donaturData.socialMedia && donaturData.accountName">
      <a
        v-if="!donaturData.accountName.includes('*')"
        :href="`${
          donaturData.socialMedia === 'twitter'
            ? 'https://twitter.com/'
            : 'https://instagram.com/'
        }${donaturData.accountName}`"
        target="_blank"
        class="flex space-x-1 items-center text-primary"
      >
        <i :class="`fa-brands fa-${donaturData.socialMedia}`"></i>
        <p class="text-[14px]">{{ donaturData.accountName }}</p>
      </a>
      <div v-else class="flex space-x-1 items-center text-primary">
        <i :class="`fa-brands fa-${donaturData.socialMedia}`"></i>
        <p class="text-[14px]">{{ donaturData.accountName }}</p>
      </div>
    </div>
    <div v-else class="flex space-x-2 items-center text-[#D9D9D9]">
      <img src="/images/icons/atoms/link-disabled.svg" alt="no social media" />
      <p class="text-[14px]">tidak tercantum</p>
    </div>
    <p class="text-[20px] font-bold tn:mt-2 text-secondary">
      {{ currencyFormat(donaturData.nominal) }}
    </p>
    <div class="tn:mt-5">
      <img src="/images/icons/atoms/quote.svg" alt="quote icon" />
      <p class="text-[14px] leading-[20px] tn:mt-2 two-lines overflow-hidden">
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
