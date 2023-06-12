<template>
  <div
    class="md:border-[#8DCABE] md:border-[2px] rounded-[15px] md:bg-[#E9FAF5] md:bg-opacity-80 tn:shadow-sm items-center"
  >
    <div
      class="tn:pl-3 tn:pr-0 tn:py-3 md:pl-4 md:pr-8 md:py-4 flex md:space-x-4 tn:space-x-3 items-center"
    >
      <div class="w-[95px] rounded-[8px] overflow-hidden">
        <img
          class="object-cover object-center"
          src="/images/sekurban/cow/cow-new.png"
          alt="product sekurban"
        />
      </div>
      <div class="md:flex md:justify-between md:items-center w-full">
        <div>
          <p class="md:text-base tn:text-xs font-bold">
            Sequrban (Seakun x Kitabisa)
          </p>
          <p class="md:text-base tn:text-xs tn:py-1 md:py-0">
            Sapi Kupang / Bali
          </p>
        </div>
        <div>
          <p
            class="md:text-2xl tn:text-xs md:text-[#417465] tn:text-[#2F2A32] font-bold"
          >
            {{ currencyFormat(sekurban.variants[0].grandTotal) }}
          </p>
        </div>
      </div>
      <!-- <div class="space-y-1">
        <p class="md:text-lg tn:text-sm font-bold">
          Sekurban (Seakun x Kitabisa)
        </p>
        <p class="md:text-lg tn:text-sm">Sapi Kupang / Bali</p>
        <p class="md:text-lg tn:text-sm">
          {{ currencyFormat(sekurban.variants[0].grandTotal) }}
        </p>
      </div> -->
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
      sekurban: 'getProviderSekurban',
    }),
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style>
.order-detail {
  border: 2px solid #8dcabe;
  box-shadow: 0px 2px 8px rgba(25, 33, 39, 0.05);
  border-radius: 15px;
}
</style>
