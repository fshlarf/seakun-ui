<template>
  <div>
    <SuccessPayment
      v-if="result == 'true'"
      :data-order="dataOrders"
      :total-transfer="totalTransfer"
      @onClick="toHomePage()"
    />
    <FailedPayment v-else />
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
    isLoadingDataOrder: false,
    totalTransfer: null,
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
