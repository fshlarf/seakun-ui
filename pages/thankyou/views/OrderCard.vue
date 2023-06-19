<template>
  <div
    class="order-card border-[1px] border-[#8DCABE] bg-white rounded-xl md:mb-5 tn:mb-4"
  >
    <div v-if="orderData.length > 1" class="relative">
      <div
        class="flex items-center absolute md:top-[23px] md:right-7 tn:top-3 tn:right-4 z-20 bg-[#E8F4F2] tn:w-[92px] tn:h-[30px] md:w-[110px] md:h-[41px] md:py-[13.5px] md:px-[19px] tn:py-2 tn:px-[10px] border-[#8DCABE] border-opacity-25 border-[1px] md:rounded-[10px] tn:rounded-md"
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
      <svg
        width="39"
        height="27"
        viewBox="0 0 92 52"
        class="absolute top-0 left-0 z-10 md:hidden"
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
        src="/images/product/brand/order/icon/particle-card-mobile.svg"
        alt="particle card"
        class="absolute z-0 top-[10px] right-1 md:hidden"
      />
      <div
        class="bg-[#8DCABE] bg-opacity-5 rounded-t-xl pt-[15px] pb-[17px] h-14 px-4 mb-[14px] md:hidden z-0"
      >
        <p class="text-[#4BAC99] text-sm font-semibold md:hidden">
          {{ order.orderNumber }}
        </p>
      </div>
      <div
        class="flex justify-between items-center md:pt-5 md:pl-[34px] tn:pl-4 tn:pr-4"
      >
        <div>
          <div class="flex gap-2 items-center md:mt-0 tn:mt-[5px]">
            <img
              src="/images/product/brand/order/icon/email.svg"
              alt="icon-email"
            />
            <p class="md:text-base tn:text-xs text-[#4BAC99]">
              {{ order.customerEmail }}
            </p>
          </div>
          <div class="flex gap-2 items-center md:mt-1 tn:mt-[5px]">
            <img
              src="/images/product/brand/order/icon/phone.svg"
              alt="icon-phone"
            />
            <p class="md:text-base tn:text-xs text-[#4BAC99]">
              +{{ order.customerPhone }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="tn:mt-[10px] md:mt-[17px] md:mb-4 tn:mb-3 border-b border-[#8DCABE] border-opacity-20 md:ml-[34px] md:mr-7 tn:ml-[14px] tn:mr-[14px]"
      />
      <div class="flex justify-between md:pl-[34px] md:pr-7 tn:pl-4 tn:pr-4">
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
          <div class="flex gap-[9px] items-center mt-1 tn:hidden md:block">
            <img
              src="/images/product/brand/order/icon/id-number.svg"
              alt="icon id number "
              class="tn:hidden md:block"
            />
            <p
              class="tn:text-xs md:text-base text-[#2D2D2D] font-semibold tn:hidden md:block"
            >
              {{ order.orderNumber }}
            </p>
          </div>
          <div class="flex gap-[9px] items-center mt-1">
            <img
              src="/images/product/brand/order/icon/provider-duration.svg"
              alt="icon-duration"
            />
            <p
              v-if="order.provider.package.variant.duration === 12"
              class="tn:text-xs md:text-base font-normal mt-1 opacity-80"
            >
              {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
              / (1 Tahun)
            </p>
            <p
              v-else
              class="tn:text-xs md:text-base font-normal mt-1 opacity-80"
            >
              {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
              / ({{ order.provider.package.variant.duration }}
              Bulan)
            </p>
          </div>
        </div>
        <div>
          <img
            alt="image-product"
            :src="`/images/product/brand/order/${order.provider.slug}.png`"
            class="tn:w-[110px] md:w-[155px]"
          />
        </div>
      </div>
      <div
        class="tn:mt-3 md:mt-[17px] md:mb-3 tn:mb-2 border-b border-[#8DCABE] border-opacity-20 md:ml-[34px] md:mr-7 tn:ml-[14px] tn:mr-[14px]"
      />
      <div
        class="flex justify-between items-center md:pl-8 md:pr-[29px] md:pb-3 tn:pl-4 tn:pr-[19px] tn:pb-[13px]"
      >
        <p class="md:text-base tn:text-xs font-normal opacity-50">
          Biaya Langganan
        </p>
        <p class="md:text-base tn:text-xs font-bold">
          {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
        </p>
      </div>
    </div>
    <div v-else>
      <div
        class="sm:flex sm:space-x-4 items-center md:pt-6 md:px-[22px] tn:px-[17px] tn:pt-[14px]"
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
            class="flex items-center absolute sm:top-0 tn:top-2 right-0 bg-[#8DCABE] bg-opacity-20 tn:w-[92px] tn:h-[30px] md:w-[110px] md:h-[41px] py-[13.5px] px-[19px] border-[#8DCABE] border-opacity-25 border-[1px] md:rounded-[10px] tn:rounded"
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

      <div
        class="tn:mt-[11px] md:mt-5 md:mb-3 tn:mb-3 border-b border-[#8DCABE] border-opacity-20 md:ml-[34px] md:mr-7 tn:ml-[17px] tn:mr-[17px]"
      />
      <div
        class="flex justify-between items-center md:px-5 md:pb-6 tn:px-[17px] tn:pb-4"
      >
        <p class="md:text-base tn:text-xs font-normal opacity-50">
          Biaya Langganan
        </p>
        <p class="md:text-base tn:text-xs font-bold">
          {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
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
