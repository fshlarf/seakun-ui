<template>
  <main class="mt-8 md:mt-0">
    <OrderDetailsLoading v-if="isLoading" />
    <div
      class="bg-white rounded-xl pb-10"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
      v-else
    >
      <HeaderDetails
        :providerSlug="dataOrderDetails.packageVariant.providerSlug"
        :packageVariant="dataOrderDetails.packageVariant"
      />
      <main class="px-6">
        <div class="mt-5 space-y-5">
          <div>
            <OderDetailsZap
              :order-details="dataOrderDetails"
              v-if="dataOrderDetails.packageVariant.providerSlug == 'zap'"
            />
            <OrderDetails :order-details="dataOrderDetails" v-else />
          </div>
          <div
            v-if="
              dataOrderDetails.status.value !== 'Waiting For Follow-up' &&
              dataOrderDetails.status.value !== 'Registered' &&
              dataOrderDetails.status.value !== 'Waiting For Confirmation'
            "
          >
            <information :details="dataOrderDetails" />
          </div>
          <BannerWrapper :status="dataOrderDetails.status" />
        </div>

        <div
          class="mt-8"
          v-if="
            dataOrderDetails.status.value == 'Registered' ||
            dataOrderDetails.status.value == 'Pending'
          "
        >
          <PaymentButton :orderDetails="dataOrderDetails" />
        </div>
      </main>
    </div>
  </main>
</template>

<script>
import OrderService from '~/services/OrderServices';
import HeaderDetails from './components/header-details.vue';
import information from './components/information.vue';
import OrderDetails from './components/order-details.vue';
import OderDetailsZap from './components/order-details-zap.vue';
import OrderDetailsLoading from './components/order-details-loading.vue';
import BannerWrapper from './components/banner/banner-wrapper.vue';
import PaymentButton from './components/payment-button.vue';

export default {
  layout: 'profile',
  components: {
    HeaderDetails,
    OrderDetails,
    information,
    BannerWrapper,
    OrderDetailsLoading,
    PaymentButton,
    OderDetailsZap,
  },
  data() {
    return {
      OrderService,
      isLoading: true,
      dataOrderDetails: null,
    };
  },
  mounted() {
    this.OrderService = new OrderService(this);

    const { uid } = this.$route.query;
    if (uid) {
      this.getOrderDetails(uid);
    }
  },
  methods: {
    async getOrderDetails(uid) {
      this.isLoading = true;
      const { OrderService } = this;
      try {
        const fetchGetOrderDetail = await OrderService.getPackageOrderDetails(
          uid
        );
        if (fetchGetOrderDetail) {
          this.dataOrderDetails = fetchGetOrderDetail.data.data;
        }
      } catch (error) {}
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
