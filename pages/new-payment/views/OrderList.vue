<template>
  <div>
    <ProductHighLightLoading v-if="isLoading" />
    <div v-else>
      <p class="text-lg font-bold mt-8">Detail Pesanan</p>
      <p v-if="orderData.length > 1" class="text-base font-normal mt-2">
        Sekali bayar untuk banyak pesanan. Pilih pesanan yang lain yang ingin
        kamu perpanjang masa berlangganannya. <span class="font-bold">Total bayar</span> adalah biaya total
        untuk semua pesanan yang <span class="font-bold">kamu pilih</span> untuk dibayar.
      </p>
      <div v-for="(order, index) in orderData" :key="index">
        <OrderCard
          :orderData="orderData"
          :order="order"
          :index="index"
          :checkedBox="true"
          :buttonChangeDuration="true"
          @changeDuration="$emit('changeDuration', order)"
          @onChecked="$emit('onChecked', order, index)"
        />
      </div>
    </div>
  </div>
</template>
<script>
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
    changeDuration: Function,
  },
};
</script>
