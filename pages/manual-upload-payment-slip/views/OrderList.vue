<template>
  <div>
    <ProductHighLightLoading v-if="isLoading" />
    <div v-else v-for="(order, index) in orderData" :key="index">
      <template v-if="order.provider.slug === 'sekurban'">
        <SekurbanOrderCard class="tn:!mt-6" :sekurban="order" />
      </template>
      <template v-else>
        <OrderCard
          :orderData="orderData"
          :order="order"
          :index="index"
          @changeDuration="$emit('changeDuration', order)"
          @onChecked="$emit('onChecked', order, index)"
        />
      </template>
    </div>
  </div>
</template>
<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import OrderCard from '~/components/mollecules/OrderCard.vue';
import SekurbanOrderCard from '~/components/mollecules/SekurbanOrderCard.vue';

export default {
  name: 'OrderList',
  components: {
    ProductHighLightLoading,
    OrderCard,
    SekurbanOrderCard,
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
