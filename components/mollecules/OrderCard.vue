<template>
  <div
    class="order-card border-[1px] md:mt-5 border-green-s bg-white rounded-xl"
    :class="`${order.checked ? 'tn:border-primary' : 'tn:border-gray-400'}`"
  >
    <div v-if="orderData.length > 1 && checkedBox" class="relative">
      <svg
        width="92"
        height="52"
        viewBox="0 0 92 52"
        class="absolute top-0 left-0 z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-3 51.5C29.603 51.5 92 30.76 92 0.5H7C1.47715 0.5 -3 4.97715 -3 10.5V51.5Z"
          fill="#8DCABE"
          fill-opacity="0.05"
        />
      </svg>
      <img
        src="/images/product/brand/order/icon/particle-card.svg"
        alt="icon-email"
        class="absolute top-2 right-1"
      />
      <div class="flex justify-between bg-[#D9D9D9] rounded-t-[10px] px-[29px]">
        <div class="flex gap-6">
          <div @click="onChecked(order)" class="md:mt-7 md:mb-[29.5px]">
            <CheckedBox v-if="order.checked && !order.disable" />
            <DisableCheckbox v-else-if="order.disable" />
            <UncheckBox v-else />
          </div>
          <div class="md:mt-7 md:mb-[29.5px] text-[#8DCABE] font-semibold">
            {{ order.orderNumber }}
          </div>
        </div>
        <div class="md:mt-[19.5px]">
          <Button
            v-if="buttonChangeDuration"
            label="Ubah Durasi"
            @click="changeDuration"
            class="bg-green-seakun md:text-base tn:text-xs text-white py-2"
            :disabled="!order.checked"
          />
        </div>
      </div>
      <div class="flex justify-between items-center px-[29px] md:mt-[17px]">
        <div>
          <div class="flex gap-2 items-center">
            <img
              src="/images/product/brand/order/icon/email.svg"
              alt="icon-email"
            />
            <p class="md:text-base tn:text-xs text-[#4BAC99]">
              {{ order.customerEmail }}
            </p>
          </div>
          <div class="flex gap-2 items-center md:mt-1">
            <img
              src="/images/product/brand/order/icon/phone.svg"
              alt="icon-phone"
            />
            <p class="md:text-base tn:text-xs text-[#4BAC99]">
              {{ order.customerPhone }}
            </p>
          </div>
        </div>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15.877C10.2833 15.877 10.521 15.781 10.713 15.589C10.905 15.397 11.0007 15.1596 11 14.877V10.877C11 10.5936 10.904 10.356 10.712 10.164C10.52 9.97195 10.2827 9.87629 10 9.87695C9.71667 9.87695 9.479 9.97295 9.287 10.165C9.095 10.357 8.99933 10.5943 9 10.877V14.877C9 15.1603 9.096 15.398 9.288 15.59C9.48 15.782 9.71733 15.8776 10 15.877ZM10 7.87695C10.2833 7.87695 10.521 7.78095 10.713 7.58895C10.905 7.39695 11.0007 7.15962 11 6.87695C11 6.59362 10.904 6.35595 10.712 6.16395C10.52 5.97195 10.2827 5.87629 10 5.87695C9.71667 5.87695 9.479 5.97295 9.287 6.16495C9.095 6.35695 8.99933 6.59429 9 6.87695C9 7.16029 9.096 7.39795 9.288 7.58995C9.48 7.78195 9.71733 7.87762 10 7.87695ZM10 20.877C8.61667 20.877 7.31667 20.6143 6.1 20.089C4.88333 19.5636 3.825 18.8513 2.925 17.952C2.025 17.052 1.31267 15.9936 0.788 14.777C0.263333 13.5603 0.000666667 12.2603 0 10.877C0 9.49362 0.262667 8.19362 0.788 6.97695C1.31333 5.76029 2.02567 4.70195 2.925 3.80195C3.825 2.90195 4.88333 2.18962 6.1 1.66495C7.31667 1.14029 8.61667 0.87762 10 0.876953C11.3833 0.876953 12.6833 1.13962 13.9 1.66495C15.1167 2.19029 16.175 2.90262 17.075 3.80195C17.975 4.70195 18.6877 5.76029 19.213 6.97695C19.7383 8.19362 20.0007 9.49362 20 10.877C20 12.2603 19.7373 13.5603 19.212 14.777C18.6867 15.9936 17.9743 17.052 17.075 17.952C16.175 18.852 15.1167 19.5646 13.9 20.09C12.6833 20.6153 11.3833 20.8776 10 20.877ZM10 18.877C12.2333 18.877 14.125 18.102 15.675 16.552C17.225 15.002 18 13.1103 18 10.877C18 8.64362 17.225 6.75195 15.675 5.20195C14.125 3.65195 12.2333 2.87695 10 2.87695C7.76667 2.87695 5.875 3.65195 4.325 5.20195C2.775 6.75195 2 8.64362 2 10.877C2 13.1103 2.775 15.002 4.325 16.552C5.875 18.102 7.76667 18.877 10 18.877Z"
            fill="#00B5D4"
          />
        </svg>
      </div>
      <hr class="md:my-[21px] border-[#8DCABE ] md:mx-[21.5px] tn:mx-[17px]" />
      <div class="flex justify-between px-[29px]">
        <div>
          <div class="flex gap-[9px] items-center">
            <img
              src="/images/product/brand/order/icon/provider-name.svg"
              alt="icon-name"
            />
            <p class="md:text-base tn:text-xs text-[#2D2D2D] font-semibold">
              {{ order.provider.name }}
            </p>
          </div>
          <div class="flex gap-[9px] items-center md:mt-2">
            <img
              src="/images/product/brand/order/icon/provider-duration.svg"
              alt="icon-duration"
            />
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
          </div>
          <div class="flex gap-[9px] items-center md:mt-2">
            <img
              src="/images/product/brand/order/icon/warning.svg"
              alt="icon-warning"
            />
            <p
              v-if="!expiredAt && order.expiredAt"
              class="tn:text-sm md:text-base font-normal text-[#FE4752]"
            >
              Expired: {{ moment.unix(order.expiredAt).format('DD MMM YYYY') }}
            </p>
          </div>
        </div>
        <div>
          <img
            alt="image-product"
            :src="`/images/product/brand/order/${order.provider.slug}.png`"
            class="tn:w-full sm:w-[164px] tn:h-[105px] sm:h-[94px]"
          />
        </div>
      </div>
    </div>
    <div
      v-else
      class="sm:flex sm:space-x-4 items-center md:mt-6 tn:mt-[14.5px] md:mx-[21.5px] tn:mx-[17px] tn:mb-[14.5px]"
    >
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
        <Button
          v-if="buttonChangeDuration"
          label="Ubah Durasi"
          @click="changeDuration"
          class="absolute sm:top-0 tn:top-2 right-0 bg-green-seakun md:text-base tn:text-xs text-white py-2 self-end"
          :disabled="!order.checked"
        />
      </div>
    </div>
    <div
      class="tn:mt-2 md:mt-5 md:mb-3 tn:mb-2 border-b border-[#E5E5E5] md:mx-[21.5px] tn:mx-[17px]"
    />
    <div
      class="flex justify-between items-center md:mx-[21.5px] tn:mx-[17px] tn:mb-[14.5px]"
    >
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
