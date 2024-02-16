<template>
  <div>
    <h3
      class="text-sm md:text-base font-semibold lg:font-bold text-green-seakun-secondary-dark"
    >
      Detail Pesanan
    </h3>
    <div class="border border-[#00BA884D] mt-3 rounded-[10px]">
      <header
        class="border-b-[1px] flex items-center justify-between p-3 md:px-5 md:py-[9px] bg-[#F6FFFD] rounded-t-[10px] bg-contain bg-right bg-no-repeat"
        :style="{ backgroundImage: `url('${maskCardBackground}')` }"
      >
        <div class="text-xs md:text-sm">
          <p class="text-[#66738F]">No Pesanan:</p>
          <h3
            class="font-bold"
            :class="
              orderDetails.status === 'Cancel' ||
              orderDetails.status === 'Refund'
                ? 'text-[#474747]'
                : 'text-green-seakun-secondary-dark'
            "
          >
            {{ orderDetails.orderNumber }}
          </h3>
        </div>

        <div
          class="text-xs md:text-sm font-bold border-[1px] text-center rounded-full h-8 flex items-center justify-center"
          :class="statusClass"
        >
          <p class="px-3 lg:px-4">
            {{ convertStatusOrderName(orderDetails.status.value) }}
          </p>
        </div>
      </header>
      <div class="p-3 md:p-5 md:pb-4">
        <div class="flex justify-between items-center">
          <div>
            <section class="flex gap-2 items-center text-sm font-bold">
              <img
                :src="[
                  orderDetails.status.value === 'Cancel' ||
                  orderDetails.status.value === 'Refund'
                    ? '/images/icon/product.svg'
                    : '/images/icon/product-active.svg',
                ]"
                alt="product"
              />
              <h3>
                {{ orderDetails.packageVariant.providerName }}
                <span>
                  (

                  {{ orderDetails.package.name }}
                  )
                </span>
              </h3>
            </section>
            <section class="flex gap-2 items-center text-xs md:text-sm mt-2">
              <img
                :src="[
                  orderDetails.status.value === 'Cancel' ||
                  orderDetails.status.value === 'Refund'
                    ? '/images/icon/price-tag.svg'
                    : '/images/icon/price-tag-active.svg',
                ]"
                alt="product"
              />
              <p class="text-xs md:text-sm text-[#363636]">
                {{ currencyFormat(orderDetails.packageVariant.grandTotal) }} /{{
                  orderDetails.packageVariant.duration
                }}
                Bulan
              </p>
            </section>
          </div>
          <div
            v-if="orderDetails.packageVariant.providerSlug !== 'sekurban'"
            ref="bgProvider"
            class="border-[1px] p-3 rounded-[6px] w-[52px] lg:w-[118px] h-[47px] flex justify-center items-center"
          >
            <img
              ref="image"
              :src="brandImage"
              alt="brand"
              class=""
              @load="getColorPalette"
            />
          </div>
        </div>
        <div
          v-if="
            orderDetails.status.value == 'Registered' ||
            orderDetails.status.value == 'Pending'
          "
        >
          <hr class="mt-4" />
          <div
            class="pt-2 flex justify-between items-center text-[#66738F] text-[12px] lg:text-sm"
          >
            <p v-if="orderDetails.status.value == 'Registered'">
              Tgl Pesan :
              {{ unixToIndonesianShortDate(orderDetails.createdAt) }}
            </p>
            <p v-else-if="orderDetails.status.value == 'Pending'">
              Tgl Expired :
              {{ unixToIndonesianShortDate(orderDetails.expiredAt) }}
            </p>
          </div>
        </div>
        <div
          v-if="orderDetails.status.value == 'Active'"
          class="text-xs lg:text-sm text-[#66738F]"
        >
          <hr class="mt-4 mb-3" />
          <p>
            Tgl Expired :
            {{ unixToIndonesianShortDate(orderDetails.expiredAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers';
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
    statusClass() {
      switch (this.orderDetails.status.value) {
        case 'Waiting For Follow-up':
          return 'text-[#E8B90E] bg-[#FDF7E5] border-[#FCF1CC]';
        case 'Registered':
          return 'text-[#00BA88] bg-[#DFFBF3] border-[#DFFBF3]';
        case 'Waiting For Confirmation':
          return 'text-[#08A081] bg-[#D8FAF3] border-[#D6FFF7]';
        case 'Active':
          return 'text-[#02BB20] bg-[#DFFBF3] border-[#DFFBF3]';
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
    maskCardBackground() {
      if (process.client) {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768) {
          return '/images/background/mask-card-order.png';
        } else {
          return '/images/background/mask-card-order-mobile.png';
        }
      }
      return '/images/background/default-image.png';
    },
    brandImage() {
      if (process.client) {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
          return `/images/product/brand/${this.orderDetails.packageVariant.providerSlug}.png`;
        } else
          return `/images/icons/${this.orderDetails.packageVariant.providerSlug}.svg`;
      }
      return `/images/product/brand/${this.orderDetails.packageVariant.providerSlug}.png`;
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
    currencyFormat,
    capitalizeFirstLetter,
    unixToIndonesianShortDate,
  },
};
</script>

<style lang="scss" scoped>
.bg-mask-group {
  background-image: url('/images/background/mask-group-card-order.png');
}
</style>
