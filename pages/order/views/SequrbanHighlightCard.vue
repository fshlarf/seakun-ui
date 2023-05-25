<template>
  <div class="bg-white shadow-md mt-2 rounded-md items-center">
    <div class="tn:px-3 tn:py-3 md:px-4 md:py-4 flex space-x-2 items-center">
      <div class="w-[95px] h-[81px] rounded-[8px] overflow-hidden">
        <img
          class="min-w-full min-h-full object-cover object-center"
          src="/images/sequrban/cow/cow-1.jpg"
          alt="product sequrban"
        />
      </div>
      <div class="space-y-1">
        <p class="md:text-lg tn:text-sm font-bold">
          Sequrban (Seakun x Kitabisa)
        </p>
        <p class="md:text-lg tn:text-sm">Sapi Jawa</p>
        <p class="md:text-lg tn:text-sm">
          {{ currencyFormat(sequrban.variants[0].grandTotal) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      sequrban: 'getProviderSequrban',
    }),
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style></style>
