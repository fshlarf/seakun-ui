<template>
  <div class="shadow-md tn:py-3 md:py-4 px-4 bg-white rounded-xl">
    <div class="w-full">
      <div class="flex tn:space-x-4 md:space-x-6 items-center">
        <div class="tn:w-20 md:w-24">
          <img
            class="mx-auto"
            alt="image-product"
            :src="`/images/product/brand/${order.slug}.png`"
          />
        </div>
        <div class="md:space-y-1 text-base">
          <p class="tn:text-sm md:text-base font-bold">
            {{ order.providerName }} -
            {{ order.variant }}
          </p>
          <p class="tn:text-sm md:text-base font-bold">
            {{ order.orderNumber }}
          </p>
        </div>
      </div>
      <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" />
      <div class="flex justify-between items-center text-[#363636] opacity-80">
        <p class="tn:text-sm md:text-base font-bold">Harga</p>
        <p class="tn:text-sm md:text-base font-bold">
          {{ currencyFormat(order.totalPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import DisableCheckbox from '~/assets/images/icon/disable-checkbox.svg?inline';
import Button from '~/components/atoms/Button';
export default {
  name: 'OrderCard',
  components: {
    CheckedBox,
    UncheckBox,
    DisableCheckbox,
    Button,
  },
  props: {
    orderData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    order() {
      const data = {
        slug: this.orderData.provider.slug,
        orderNumber: this.orderData.orderNumber,
        providerName: this.orderData.provider.name,
        variant: this.orderData.provider.package.variant.name,
        totalPrice: this.orderData.payment.totalPrice,
      };
      return data;
    },
  },
  methods: {
    currencyFormat,
  },
};
</script>
