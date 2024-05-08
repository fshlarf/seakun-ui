<template>
  <div
    class="flex border-[1px] border-green-seakun py-[11px] px-[11px] md:py-6 md:pl-6 md:pr-[50px] bg-white mt-3 rounded-xl items-center"
  >
    <div class="w-full">
      <div class="">
        <div class="flex justify-between items-center">
          <img
            alt="image-product"
            :src="`/images/product/brand/${order.provider.slug}.png`"
            class="w-20"
          />
          <div
            class="h-7 flex items-center justify-center px-2 md:px-[16px] bg-[#EEF1F8] rounded-[20px]"
          >
            <p class="text-[10px] md:text-xs font-medium text-[#66738F]">
              {{ order.orderNumber }}
            </p>
          </div>
        </div>
        <div
          class="flex justify-between flex-wrap items-center w-full mt-2 md:mt-3"
        >
          <div>
            <p class="text-xs md:text-sm font-bold">
              {{ order.provider.name }} -
              {{ order.provider.package.variant.name }}
            </p>

            <p
              v-if="order.provider.package.variant.duration === 12"
              class="text-xs md:text-sm font-normal mt-2 text-gray-secondary"
            >
              {{ formatMoneyRupiah(order.payment.totalPrice) }}
              x (1 Tahun)
            </p>
            <p
              v-else
              class="text-xs md:text-sm font-normal mt-1 text-gray-secondary"
            >
              {{ formatMoneyRupiah(order.payment.totalPrice) }} x ({{
                order.provider.package.variant.duration
              }}
              Bulan)
            </p>
          </div>
        </div>
      </div>
      <div class="my-2 md:my-3 border-b border-[#E5E5E5]" />
      <div class="flex justify-between items-center">
        <p class="text-xs md:text-smfont-normal text-gray-secondary">
          Status Pembayaran
        </p>
        <div class="flex items-center gap-[2px] md:gap-2">
          <p class="text-primary font-bold text-xs md:text-sm">SUKSES</p>
          <img
            src="/images/icons/atoms/success-green.svg"
            alt="sukses"
            class="md:w-6 md:h-6 w-3 h-3"
          />
        </div>
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
  },
};
</script>
