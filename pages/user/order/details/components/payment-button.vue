<template>
  <div
    class="flex justify-center md:justify-end fixed md:static bottom-0 bg-white md:bg-none py-3 px-6 md:px-0 md:py-0 right-0 left-0 clear-shadow rounded-lg"
    style="box-shadow: 0px 0px 4px rgba(102, 115, 143, 0.25)"
  >
    <nuxt-link
      :to="paymentLink"
      class="md:w-max w-full flex justify-center items-center text-white min-w-[210px] bg-primary text-base font-bold h-11 lg:h-12 rounded-lg"
      >{{
        orderDetails.status.value == 'Pending'
          ? 'Perpanjang Sekarang'
          : 'Bayar Sekarang'
      }}</nuxt-link
    >
  </div>
</template>

<script>
import {
  capitalizeFirstLetter,
  unixToIndonesianShortDate,
} from '~/helpers/word-transformation.js';

export default {
  props: {
    orderDetails: {
      typeof: Object,
      default: () => {},
    },
  },
  computed: {
    paymentLink() {
      const url = this.orderDetails.redirectUrl;
      const startIndex = url.indexOf('/payment');
      return url.substring(startIndex);
    },
  },
  methods: {
    capitalizeFirstLetter,
    unixToIndonesianShortDate,
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .clear-shadow {
    box-shadow: none !important;
  }
}
</style>
