<template>
  <div
    class="rounded-[10px] overflow-hidden text-gray-secondary border"
    :class="
      order.status.value === 'Cancel' || order.status.value === 'Refund'
        ? ''
        : 'border-green-seakun-secondary-dark/30'
    "
  >
    <header
      class="border-b-[1px] flex items-center justify-between p-3 md:px-5 md:py-3"
      :class="
        order.status.value === 'Cancel' || order.status.value === 'Refund'
          ? 'bg-[#D9D9D9]/30'
          : 'bg-[#1AB26B1A]/[5%] border-green-seakun-secondary-dark/30'
      "
    >
      <h3
        :class="
          order.status.value === 'Cancel' || order.status.value === 'Refund'
            ? 'text-[#474747]'
            : 'text-green-seakun-secondary-dark'
        "
        class="text-xs md:text-sm font-bold"
      >
        {{ order.orderNumber }}
      </h3>
      <div
        class="bg-white text-xs md:text-sm font-bold border-[1px] text-center min-w-[91px] rounded-[6px]"
        :class="[
          order.status.value === 'Cancel' || order.status.value === 'Refund'
            ? 'text-gray-secondary border-gray-secondary'
            : 'text-green-seakun-secondary-dark border-green-seakun-secondary-dark',
        ]"
      >
        <p class="py-2 px-2">
          {{ convertStatusOrderName(order.status.value) }}
        </p>
      </div>
    </header>
    <div class="p-3 md:p-5 flex justify-between items-center">
      <div>
        <section class="flex gap-2 items-center text-sm font-bold">
          <img
            :src="[
              order.status.value === 'Cancel' || order.status.value === 'Refund'
                ? '/images/icon/product.svg'
                : '/images/icon/product-active.svg',
            ]"
            alt="product"
          />
          <h3>
            {{ order.packageVariant.providerName }}
          </h3>
        </section>
        <section class="flex gap-2 items-center text-xs md:text-sm mt-2">
          <img
            :src="[
              order.status.value === 'Cancel' || order.status.value === 'Refund'
                ? '/images/icon/price-tag.svg'
                : '/images/icon/price-tag-active.svg',
            ]"
            alt="product"
          />
          <p class="text-xs md:text-sm text-[#363636]">
            {{ currencyFormat(order.packageVariant.grandTotal) }} / ({{
              order.packageVariant.duration
            }}
            Bulan)
          </p>
        </section>
      </div>
      <div
        v-if="order.packageVariant.providerSlug !== 'sekurban'"
        ref="bgProvider"
        class="border-[1px] p-3 rounded-[6px] w-[118px] h-[47px] flex justify-center items-center"
      >
        <img
          ref="image"
          :src="`/images/product/brand/${order.packageVariant.providerSlug}.png`"
          alt="brand"
          class=""
          @load="getColorPalette"
        />
      </div>
    </div>
    <div
      v-if="
        order.status.value == 'Registered' || order.status.value == 'Pending'
      "
      class="border-t-[1px] py-2 px-3 md:px-5 flex justify-end items-center"
      :class="
        order.status.value === 'Cancel' || order.status.value === 'Refund'
          ? ''
          : 'border-green-seakun-secondary-dark/30'
      "
    >
      <nuxt-link
        :to="paymentLink"
        class="bg-primary text-white rounded-[5px] md:rounded-[8px] py-1 md:py-2 px-3 text-sm font-bold text-center min-w-[118px]"
        >Bayar</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import {
  capitalizeFirstLetter,
  currencyFormat,
} from '~/helpers/word-transformation.js';

export default {
  props: {
    order: {
      typeof: Object,
      default: () => {},
    },
  },
  computed: {
    paymentLink() {
      const url = this.order.redirectUrl;
      const startIndex = url.indexOf('/payment');
      return url.substring(startIndex);
    },
  },
  methods: {
    getColorPalette() {
      const image = this.$refs.image;
      const colorPalette = this.$colorThief.getColor(image); // 5 is the number of colors to generate
      const bgProvider = `rgba(${colorPalette[0]},${colorPalette[1]},${colorPalette[2]},0.05)`;
      const borderProvider = `rgba(${colorPalette[0]},${colorPalette[1]},${colorPalette[2]},0.5)`;
      const providerBox = this.$refs.bgProvider;
      providerBox.style.backgroundColor = bgProvider;
      providerBox.style.borderColor = borderProvider;
    },
    convertStatusOrderName(status) {
      switch (status) {
        case 'Waiting For Follow-up':
          return 'Pre-order';
        case 'Registered':
          return 'Menunggu Pembayaran';
        case 'Waiting For Confirmation':
          return 'Sedang Diproses';
        case 'Active':
          return 'Aktif';
        case 'Pending':
          return 'Masa Tenggang';
        case 'Cancel':
          return 'Dibatalkan';
        case 'Refund':
          return 'Refund';
        default:
          return 'Aktif';
      }
    },
    capitalizeFirstLetter,
    currencyFormat,
  },
};
</script>

<style lang="scss" scoped></style>
