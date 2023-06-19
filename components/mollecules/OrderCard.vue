<template>
  <div
    class="order-card border-[1px] md:mt-5 tn:mt-3 border-green-s bg-white rounded-xl"
    :class="`${order.checked ? 'tn:border-primary' : 'tn:border-gray-400'}`"
  >
    <div v-if="orderData.length > 1 && checkedBox" class="relative">
      <svg
        viewBox="0 0 92 52"
        class="absolute top-0 left-0 z-0 md:w-[92px] tn:w-10 h-auto"
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
        alt="particle card"
        class="absolute top-2 right-1 z-0 tn:hidden md:block"
      />
      <img
        src="/images/product/brand/order/icon/particle-card-mobile.svg"
        alt="particle card"
        class="absolute top-[10px] right-1 z-0 md:hidden"
      />
      <div
        class="flex justify-between bg-[#8DCABE] bg-opacity-5 rounded-t-[10px] md:pl-[32px] md:pr-[27px] tn:pl-4 tn:pr-[17px]"
      >
        <div class="flex md:gap-6 tn:gap-3">
          <div
            @click="onChecked(order)"
            class="md:mt-7 tn:mt-[15px] md:mb-[29.5px] tn:mb-[15px] z-20"
          >
            <CheckedBox v-if="order.checked && !order.disable" />
            <DisableCheckbox v-else-if="order.disable" />
            <UncheckBox v-else />
          </div>
          <div
            class="md:mt-7 tn:mt-[17px] md:mb-[29.5px] tn:mb-[17px] font-semibold"
            :class="`${order.checked ? 'text-[#4BAC99]' : 'text-[#2D2D2D]'}`"
          >
            {{ order.orderNumber }}
          </div>
        </div>
        <div class="md:mt-[19.5px] tn:mt-[11px] z-10">
          <Button
            v-if="buttonChangeDuration"
            label="Ubah Durasi"
            @click="changeDuration"
            class="bg-green-seakun md:text-base tn:text-xs text-white py-2"
            :disabled="!order.checked"
          />
        </div>
      </div>
      <div
        class="relative flex justify-between items-center md:px-[29px] md:mt-[17px] tn:px-[17px] tn:mt-[14px]"
      >
        <div>
          <div
            @click="clickInfo()"
            class="flex gap-[9px] pl-[2px] tn:pt-[6px] md:pt-0 items-center"
            :class="{
              'accordion border-[#00B5D4] border-opacity-20 tn:border-[1px] tn:border-b-0 md:border-none': showInfo,
            }"
          >
            <img
              src="/images/product/brand/order/icon/info.svg"
              alt="icon-info"
              class="cursor-pointer w-4 md:hidden"
            />
            <p class="text-xs text-[#00B5D4] md:hidden">Detail Info</p>
          </div>
          <div
            v-show="showInfo"
            class="bg-[#00B5D4] md:ml-[251px] md:absolute md:top-0 right-[26px] md:mb-3 tn:mb-2 md:py-[6px] tn:px-2 md:pl-[7px] md:pr-9 tn:py-[5px] bg-opacity-20 border-[#00B5D4] border-opacity-20 border-[1px] tn:border-t-0 md:rounded-t-lg rounded-b-lg"
          >
            <p class="md:text-right md:text-xs tn:text-[10px] text-[#00B5D4]">
              Jika kamu melakukan pesanan untuk orang lain, maka email ini
              adalah email yang berbeda dengan data detail pemesan diatas. Kamu
              bisa melakukan banyak order buat teman-teman kamu, dan juga bisa
              melakukan pembayaran buat mereka sekaligus.
            </p>
          </div>
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
              {{ order.customerPhone }}
            </p>
          </div>
        </div>
        <img
          @click="clickInfo()"
          src="/images/product/brand/order/icon/info.svg"
          alt="icon-info"
          class="absolute top-[6px] right-9 z-10 cursor-pointer tn:hidden md:block"
        />
      </div>
      <hr
        class="md:my-[21px] tn:my-3 border-[#8DCABE ] md:mx-[28px] tn:mx-[17px]"
        :class="{ 'lg:mt-8 md:mt-20': showInfo }"
      />
      <div class="flex justify-between md:px-[29px] tn:px-[17px]">
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
          <div class="flex gap-[9px] items-center md:mt-2 tn:mt-[5px]">
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
          <div class="flex gap-[9px] items-center md:mt-2 tn:mt-[5px]">
            <img
              src="/images/product/brand/order/icon/warning.svg"
              alt="icon-warning"
            />
            <p
              v-if="!expiredAt && order.expiredAt"
              class="tn:text-xs md:text-base font-normal text-[#FE4752]"
            >
              Expired: {{ moment.unix(order.expiredAt).format('DD MMM YYYY') }}
            </p>
          </div>
        </div>
        <div>
          <img
            alt="image-product"
            :src="`/images/product/brand/order/${order.provider.slug}.png`"
            class="tn:w-[120px] md:w-[164px]"
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
      class="tn:mt-[9px] md:mt-5 mb-3 border-b border-[#E5E5E5] md:mx-[21.5px] tn:mx-[17px]"
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
      showInfo: false,
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
    clickInfo() {
      this.showInfo = !this.showInfo;
    },
  },
};
</script>

<style>
.order-card {
  font-family: 'DM Sans', sans-serif !important;
}
.accordion {
  background: rgba(0, 181, 212, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 0px;
  padding-left: 8px;
}
</style>
