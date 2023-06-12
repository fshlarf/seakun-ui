<template>
  <div
    class="order-card border-[1px] border-green-s md:pt-6 md:px-[21.5px] tn:pt-[14.5px] tn:px-[17px] tn:pb-[14.5px] bg-white rounded-xl"
    :class="`${order.checked ? 'tn:border-primary' : 'tn:border-gray-400'}`"
  >
    <div class="items-center">
      <div class="sm:flex sm:space-x-4 items-center">
        <div
          @click="onChecked(order)"
          v-if="orderData.length > 1 && checkedBox"
          class="cursor-pointer flex items-center"
        >
          <CheckedBox v-if="order.checked && !order.disable" />
          <DisableCheckbox v-else-if="order.disable" />
          <UncheckBox v-else />
        </div>
        <div class="">
          <img
            alt="image-product"
            :src="`/images/product/brand/order/${order.provider.slug}.png`"
            class="tn:w-full sm:w-[164px] tn:h-[105px] sm:h-[94px]"
          />
        </div>
        <div class="relative w-full">
          <div class="flex gap-1 items-center">
            <p class="tn:text-sm sm:text-base font-bold tn:pt-2 sm:pt-0">
              {{ order.provider.name }}
            </p>
            <p
              class="md:text-sm tn:hidden sm:block text-[#00B5D4] font-bold bg-[#00B5D4] bg-opacity-5 rounded-[10px] w-auto px-[9px] py-[6px]"
            >
              {{ order.provider.package.variant.name }}
            </p>
          </div>
          <p class="tn:text-sm sm:text-base font-bold sm:mt-2 tn:mt-1">
            {{ order.orderNumber }}
          </p>
          <p
            v-if="order.provider.package.variant.duration === 12"
            class="tn:text-sm sm:text-base font-normal sm:mt-2 tn:mt-1 opacity-80"
          >
            {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
            / (1 Tahun)
          </p>
          <p
            v-else
            class="tn:text-sm sm:text-base font-normal sm:mt-2 tn:mt-1 opacity-80"
          >
            {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
            / ({{ order.provider.package.variant.duration }}
            Bulan)
          </p>
          <p
            v-if="!expiredAt && order.expiredAt"
            class="tn:text-sm sm:text-base font-normal opacity-80"
          >
            Expired: {{ moment.unix(order.expiredAt).format('DD MMM YYYY') }}
          </p>
          <div
            class="flex items-center absolute sm:top-0 tn:top-2 right-0 bg-[#8DCABE] bg-opacity-20 py-[13.5px] px-[19px] border-[#8DCABE] border-opacity-25 border-[1px] rounded-[10px]"
          >
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6607 0.907378C13.8482 1.09491 13.9535 1.34921 13.9535 1.61438C13.9535 1.87954 13.8482 2.13385 13.6607 2.32138L6.1654 9.81671C6.06634 9.91579 5.94875 9.99438 5.81932 10.048C5.68989 10.1016 5.55116 10.1292 5.41106 10.1292C5.27097 10.1292 5.13224 10.1016 5.00281 10.048C4.87338 9.99438 4.75578 9.91579 4.65673 9.81671L0.93273 6.09338C0.837219 6.00113 0.761037 5.89079 0.708628 5.76878C0.656219 5.64678 0.628633 5.51556 0.627479 5.38278C0.626325 5.25 0.651627 5.11832 0.701908 4.99542C0.752189 4.87253 0.826442 4.76087 0.920335 4.66698C1.01423 4.57309 1.12588 4.49884 1.24878 4.44856C1.37167 4.39827 1.50335 4.37297 1.63613 4.37413C1.76891 4.37528 1.90013 4.40287 2.02213 4.45528C2.14414 4.50768 2.25448 4.58387 2.34673 4.67938L5.41073 7.74338L12.2461 0.907378C12.3389 0.814451 12.4492 0.740734 12.5706 0.69044C12.6919 0.640145 12.822 0.614258 12.9534 0.614258C13.0848 0.614258 13.2149 0.640145 13.3362 0.69044C13.4576 0.740734 13.5679 0.814451 13.6607 0.907378Z"
                fill="#8DCABE"
              />
            </svg>
            <p class="md:text-sm tn:text-xs text-[#8DCABE] pl-[6px]">Sukses</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tn:mt-2 md:mt-5 md:mb-3 tn:mb-2 border-b border-[#E5E5E5]" />
    <div class="flex justify-between items-center">
      <p class="md:text-base tn:text-xs font-normal opacity-50">
        Biaya Langganan
      </p>
      <p class="md:text-base tn:text-xs font-bold">
        {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
      </p>
    </div>
    <!-- <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" /> -->
    <!-- <div class="tn:text-sm md:text-base font-semibold text-secondary">
        <p>{{ order.customerEmail }}</p>
        <p>{{ order.customerPhone }}</p>
      </div> -->
    <!-- <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" /> -->
    <!-- <div class="flex flex-column w-full tn:mt-2">
        <div class="">
          <div class="flex justify-between flex-wrap items-center w-full">
            <div>
              <p class="tn:text-sm md:text-base font-bold">
                {{ order.provider.name }}
              </p>
              <p class="tn:text-sm md:text-base font-bold">
                {{ order.orderNumber }}
              </p>
              <p
                v-if="order.provider.package.variant.duration === 12"
                class="tn:text-sm md:text-base font-normal mt-1 opacity-80"
              >
                {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
                / (1 Tahun)
              </p>
              <p
                v-else
                class="tn:text-sm md:text-base font-normal mt-1 opacity-80"
              >
                {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
                / ({{ order.provider.package.variant.duration }}
                Bulan)
              </p>
              <p
                v-if="!expiredAt && order.expiredAt"
                class="tn:text-sm md:text-base font-normal opacity-80"
              >
                Expired: {{ moment.unix(order.expiredAt).format('DD MMM YYYY') }}
              </p>
            </div>
          </div>
        </div>
        <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" />
        <div class="flex justify-between items-center">
          <p class="text-base font-normal opacity-50">Biaya Langganan</p>
          <p class="text-base font-bold">
            {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
          </p>
        </div>
      </div> -->
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
  data() {
    return {
      moment,
    };
  },
  props: {
    order: {
      type: Object,
      default: {},
    },
    orderData: {
      type: Array,
      default: [],
    },
    checkedBox: {
      type: Boolean,
      default: false,
    },
    buttonChangeDuration: {
      type: Boolean,
      default: false,
    },
    expiredAt: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    onChecked(order) {
      if (!order.disable) {
        this.$emit('onChecked');
      }
    },
    changeDuration() {
      this.$emit('changeDuration');
    },
  },
};
</script>

<style>
.order-card {
  font-family: 'DM Sans', sans-serif !important;
}
</style>
