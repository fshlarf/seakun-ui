<template>
  <div>
    <div class="payment-order w-auto tn:mt-4 md:mt-8 box-border px-2">
      <div>
        <p class="title text-center text-lg px-2">
          Segera lakukan pembayaran agar Seakun dapat memproses voucher.
        </p>
      </div>

      <AyceProductHighlight
        :variant="detailVariantAyce"
        :total-person="totalPerson"
        :grand-total="total"
      />
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import AyceProductHighlight from './AyceProductHighlight.vue';

export default {
  name: 'headerPayment',
  components: {
    AyceProductHighlight,
    ProductHighLightLoading,
  },
  props: {
    detailVariantAyce: {
      type: Object,
      default: () => {},
    },
    total: {
      type: String | Number,
      default: null,
    },
    totalPerson: {
      type: String | Number,
      default: null,
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style lang="scss" scoped></style>
