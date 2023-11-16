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
      class="border-b-[1px] flex items-center justify-between p-3 md:px-5 md:py-[9px]"
      :class="
        order.status.value === 'Cancel' || order.status.value === 'Refund'
          ? 'bg-[#D9D9D9]/30'
          : 'bg-[#1AB26B1A]/[5%] border-green-seakun-secondary-dark/30'
      "
    >
      <div class="text-xs md:text-sm">
        <p class="text-[#66738F]">No Pesanan:</p>
        <h3
          :class="
            order.status.value === 'Cancel' || order.status.value === 'Refund'
              ? 'text-[#474747]'
              : 'text-green-seakun-secondary-dark'
          "
          class="font-bold"
        >
          {{ order.orderNumber }}
        </h3>
      </div>
      <div
        class="text-xs md:text-sm font-bold border-[1px] text-center rounded-full"
        :class="statusClass"
      >
        <p class="py-2 px-3 lg:px-4">
          {{ convertStatusOrderName(order.status.value) }}
        </p>
      </div>
    </header>
    <div class="p-3 md:p-5 md:pb-4">
      <div class="flex justify-between items-center">
        <div>
          <section class="flex gap-2 items-center text-sm font-bold">
            <img
              :src="[
                order.status.value === 'Cancel' ||
                order.status.value === 'Refund'
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
                order.status.value === 'Cancel' ||
                order.status.value === 'Refund'
                  ? '/images/icon/price-tag.svg'
                  : '/images/icon/price-tag-active.svg',
              ]"
              alt="product"
            />
            <p class="text-xs md:text-sm text-[#363636]">
              {{ currencyFormat(order.packageVariant.grandTotal) }} /{{
                order.packageVariant.duration
              }}
              Bulan
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
      >
        <hr class="mt-4" />
        <div
          class="pt-2 flex justify-between items-center text-[#66738F] text-[12px] lg:text-sm"
        >
          <p v-if="order.status.value == 'Registered'">
            Tgl Pesan: {{ unixToIndonesianShortDate(order.createdAt) }}
          </p>
          <p v-else-if="order.status.value == 'Pending'">
            Expired: {{ unixToIndonesianShortDate(order.expiredAt) }}
          </p>
          <nuxt-link
            :to="paymentLink"
            class="text-primary xl:text-base font-bold"
            >Bayar Sekarang</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  capitalizeFirstLetter,
  currencyFormat,
  unixToIndonesianShortDate,
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
    statusClass() {
      switch (this.order.status.value) {
        case 'Waiting For Follow-up':
          return 'text-[#E8B90E] bg-[#FDF7E5] border-[#FCF1CC]';
        case 'Registered':
          return 'text-[#FA5757] bg-[#FFEBEB] border-[#FEE7E7]';
        case 'Waiting For Confirmation':
          return 'text-[#08A081] bg-[#D8FAF3] border-[#D6FFF7]';
        case 'Active':
          return 'text-[#02BB20] bg-[#E3FFE9] border-[#CEF5D6]';
        case 'Pending':
          return 'text-[#FA5757] bg-[#FFEBEB] border-[#FEE7E7]';
        case 'Cancel':
          return 'text-[#737070] bg-[#F6F5F5] border-[#F1EEEE]';
        case 'Refund':
          return 'text-[#737070] bg-[#F6F5F5] border-[#F1EEEE]';
        default:
          return '';
      }
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
    unixToIndonesianShortDate,
  },
};
</script>

<style lang="scss" scoped></style>
