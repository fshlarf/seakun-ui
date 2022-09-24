<template>
  <div class="w-full">
    <div v-if="product.photos && product.photos.length > 0" class="w-full">
      <div class="w-full h-[448px] overflow-hidden">
        <img
          class="object-cover-center"
          :src="product.photos[0].popFile"
          alt="first photo"
        />
      </div>
      <div class="tn:mt-4 grid grid-cols-4 gap-4">
        <div v-if="product.photos[1]" class="w-full h-[123px] overflow-hidden">
          <img
            class="object-cover-center"
            :src="product.photos[1].popFile"
            alt="second photo"
          />
        </div>
        <div v-if="product.photos[2]" class="w-full h-[123px] overflow-hidden">
          <img
            class="object-cover-center"
            :src="product.photos[2].popFile"
            alt="third photo"
          />
        </div>
        <div v-if="product.photos[3]" class="w-full h-[123px] overflow-hidden">
          <img
            class="object-cover-center"
            :src="product.photos[3].popFile"
            alt="forth photo"
          />
        </div>
        <div v-if="product.photos[4]" class="w-full h-[123px] overflow-hidden">
          <img
            class="object-cover-center"
            :src="product.photos[4].popFile"
            alt="fifth photo"
          />
        </div>
      </div>
    </div>

    <div class="rounded-2xl bg-white tn:p-7 space-y-3 tn:mt-8">
      <p class="text-[20px] font-bold">Detail Promo</p>
      <div class="grid grid-cols-3 items-start">
        <p class="text-[18px] font-bold">Periode Promo</p>
        <p class="col-span-2 text-[18px] font-medium">
          {{ toLocalDate(product.promoStartAt) }} -
          {{ toLocalDate(product.promoEndAt) }}
        </p>
      </div>
      <div class="grid grid-cols-3 items-start">
        <p class="text-[18px] font-bold">Link Website</p>
        <p class="col-span-2 text-[18px] font-medium">
          {{ product.productUrl }}
        </p>
      </div>
      <div class="grid grid-cols-3 items-start">
        <p class="text-[18px] font-bold">Detail Promo</p>
        <p class="col-span-2 text-[18px] font-medium">
          {{ product.promoType }}
        </p>
      </div>
    </div>

    <div class="rounded-2xl bg-white tn:p-7 space-y-3 tn:mt-6">
      <p class="text-[20px] font-bold">Informasi Uploader</p>
      <div class="flex items-center space-x-3">
        <div class="rounded-full bg-gray-400 w-[52px] h-[52px]"></div>
        <div>
          <p class="text-[24px] font-bold">Adyan Aqil</p>
          <p class="text-[18px]">Medan, Indonesia</p>
        </div>
      </div>
    </div>

    <div class="rounded-xl bg-[#E9FAF5] tn:p-7 tn:mt-6">
      <div class="flex items-center space-x-2">
        <img
          class="w-[21px]"
          src="/images/icons/atoms/green-alert.svg"
          alt="alert"
        />
        <p class="text-[#417465] text-[20px] font-bold">Detail Pengiriman</p>
      </div>
      <p class="font-medium text-[18px] tn:mt-1">
        Pengiriman akan didiskusikan setelah grup patungan full
      </p>
    </div>

    <div class="rounded-2xl bg-white tn:p-7 space-y-3 tn:mt-6">
      <p class="text-[20px] font-bold">Detail Harga Produk</p>
      <div class="grid grid-cols-3 items-center">
        <p class="text-[18px] font-bold">Harga asli produk</p>
        <p class="col-span-2 text-[18px] font-medium">
          {{ currencyFormat(product.price) }}
        </p>
      </div>
      <div class="grid grid-cols-3 items-center">
        <p class="text-[18px] font-bold">Harga patungan</p>
        <p class="col-span-2 text-[18px] font-medium">
          {{ currencyFormat(product.jointPrice) }}
        </p>
      </div>
      <div class="grid grid-cols-3 items-center">
        <p class="text-[18px] font-bold">Biaya Admin</p>
        <p class="col-span-2 text-[18px] font-medium">
          {{ currencyFormat(product.adminFee) }}
        </p>
      </div>
    </div>

    <div class="rounded-2xl bg-[#A0A3BD0D] tn:p-7 space-y-3 tn:mt-6">
      <p class="text-[20px] font-bold">Syarat dan Ketentuan</p>
      <ol class="text-[18px] list-decimal tn:pl-4">
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          similique?
        </li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          similique?
        </li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '../../../../helpers';
import moment from 'moment';

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      moment,
    };
  },
  methods: {
    toLocalDate(date) {
      return moment.unix(date).locale('id').format('D MMMM YYYY');
    },
    currencyFormat,
  },
};
</script>

<style></style>
