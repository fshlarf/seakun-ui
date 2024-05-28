<template>
  <div>
    <div v-if="isLoadingDataOrder" class="flex justify-center py-80 z-10">
      <div
        class="w-full flex justify-center text-primary opacity-50 tn:pb-6 tn:pt-20"
      >
        <i class="fa-solid fa-circle-notch fa-spin fa-5x mx-auto"></i>
      </div>
    </div>

    <SuccessPayment
      v-else-if="result"
      :data-order="dataOrders"
      :total-price="totalTransfer"
      :transfer-amount="transferAmount"
      @onClick="toHomePage()"
    />

    <FailedPayment :order="mainOrder" v-else />
  </div>
</template>
<script>
import OrderService from '~/services/OrderServices.js';
import SuccessPayment from './views/SuccessPayment.vue';
import FailedPayment from './views/FailedPayment.vue';
import Article from './views/Article.vue';

export default {
  name: 'PaymentResult',
  // layout: 'new',
  layout: 'PaymentResult',
  components: {
    SuccessPayment,
    FailedPayment,
    Article,
  },
  data: () => ({
    OrderService,
    result: false,
    dataOrders: [],
    isLoadingDataOrder: true,
    totalTransfer: null,
    transferAmount: null,
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
            this.transferAmount += el.payment.transferAmount;
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
<style></style>
