<template>
  <div
    class="flex border-[1px] border-green-seakun p-3 md:py-3 md:px-6 bg-white mt-3 rounded-xl items-center"
  >
    <div class="w-full">
      <div class="">
        <div class="w-20">
          <img
            alt="image-product"
            :src="`/images/product/brand/${order.provider.slug}.png`"
          />
        </div>
        <div class="flex justify-between flex-wrap items-center w-full mt-3">
          <div>
            <p class="text-sm md:text-base font-bold">
              {{ order.provider.name }} -
              {{ order.provider.package.variant.name }}
            </p>
            <p class="text-sm md:text-base font-bold">
              {{ order.orderNumber }}
            </p>
            <p
              v-if="order.provider.package.variant.duration === 12"
              class="text-sm md:text-base font-normal mt-1 opacity-80"
            >
              {{ formatMoneyRupiah(order.payment.totalPrice) }}
              x (1 Tahun)
            </p>
            <p v-else class="text-sm md:text-base font-normal mt-1 opacity-80">
              {{ formatMoneyRupiah(order.payment.totalPrice) }} x ({{
                order.provider.package.variant.duration
              }}
              Bulan)
            </p>
          </div>
        </div>
      </div>
      <div class="my-3 border-b border-[#E5E5E5]" />
      <div class="flex justify-between items-center">
        <p class="text-base font-normal opacity-50">Status Pembayaran</p>
        <p class="text-primary font-bold">SUKSES</p>
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
import moment from 'moment';
export default {
  name: 'OrderCard',
  components: {
    CheckedBox,
    UncheckBox,
    DisableCheckbox,
    Button,
  },
  // data() {
  //   return {
  //     moment,
  //   };
  // },
  props: {
    order: {
      type: Object,
      default: {},
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    // onChecked() {
    //   this.$emit('onChecked');
    // },
    // changeDuration() {
    //   this.$emit('changeDuration');
    // },
  },
};
</script>
