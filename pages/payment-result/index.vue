<template>
  <div>
    <div v-if="isLoadingDataOrder" class="flex justify-center py-80 z-10">
      <div class="spinner-border text-primary opacity-50"></div>
    </div>
    <SuccessPayment
      v-else-if="result == 'true'"
      :data-order="dataOrders"
      :total-price="totalTransfer"
      @onClick="toHomePage()"
    />
    <FailedPayment :order="mainOrder" v-else />
  </div>
</template>
<script>
import OrderService from '~/services/OrderServices.js';
import SuccessPayment from './views/SuccessPayment.vue';
import FailedPayment from './views/FailedPayment.vue';

export default {
  name: 'PaymentResult',
  layout: 'new',
  components: {
    SuccessPayment,
    FailedPayment,
  },
  data: () => ({
    OrderService,
    result: false,
    dataOrders: [],
    isLoadingDataOrder: true,
    totalTransfer: null,
    mainOrder: {},
  }),
  mounted() {
    this.OrderService = new OrderService(this);
    const { success, orderUids } = this.$router.history.current.query;
    this.result = success;
    localStorage.removeItem('swo');
    this.getDetailOrderAutomatic(orderUids);
  },
  methods: {
    async getDetailOrderAutomatic(orderUids) {
      const { OrderService } = this;
      this.isLoadingDataOrder = true;
      try {
        const fetchDetailOrder = await OrderService.getMultipleOrder(orderUids);
        if (fetchDetailOrder.data) {
          const dataResult = fetchDetailOrder.data.data;
          this.dataOrders = dataResult;
          let total = 0;
          dataResult.forEach((el) => {
            total = total + el.payment.totalPrice;
          });
          this.totalTransfer = total;
          this.mainOrder = this.dataOrders[0];
        } else {
          throw new Error(fetchDetailOrder);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingDataOrder = false;
    },
    toHomePage() {
      this.$router.push('/');
    },
  },
};
</script>
<style>
.spinner-border {
  display: flex;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 0.5em solid currentColor;
  border-right-color: transparent;
}
</style>
