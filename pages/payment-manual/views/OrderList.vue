<template>
  <div>
    <ProductHighLightLoading v-if="isLoading" />
    <div v-else v-for="(order, index) in orderData" :key="index">
      <OrderCard
        :orderData="orderData"
        :order="order"
        :index="index"
        @changeDuration="$emit('changeDuration', order)"
        @onChecked="$emit('onChecked', order, index)"
      />
    </div>
  </div>
</template>
<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import OrderCard from '~/components/mollecules/OrderCard.vue';

export default {
  name: 'OrderList',
  components: {
    ProductHighLightLoading,
    OrderCard,
  },
  props: {
    orderData: {
      type: Array,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    changeDuration() {
      this.$emit('changeDuration');
    },
  },
};
</script>
