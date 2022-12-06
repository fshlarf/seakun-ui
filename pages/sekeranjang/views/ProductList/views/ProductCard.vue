<template>
  <div
    role="button"
    class="tn:w-[170px] md:w-[190px] rounded-lg shadow-md overflow-hidden bg-white"
    @click="$emit('onClickProduct', product.uid)"
  >
    <div class="w-full h-[160px] bg-black overflow-hidden relative">
      <img
        v-if="product.thumbnail"
        class="min-w-[100%] min-h-[100%] object-cover object-center"
        :src="product.thumbnail"
        alt="product image"
      />
      <div v-if="!isAvailable" class="expired-bg"></div>
      <div v-if="!isAvailable" class="expired-label">Masa promo berakhir</div>
    </div>
    <div class="tn:p-[10px]">
      <p
        v-if="isAvailable"
        class="font-medium text-[#00B5D4] text-[12px] bg-[#EBFCFF] tn:py-1 tn:px-3 rounded-full max-w-max"
      >
        {{ product.promoType }}
      </p>
      <p
        v-else
        class="font-medium text-white text-[12px] bg-red-500 tn:py-1 tn:px-3 rounded-full max-w-max"
      >
        Expired
      </p>
      <p
        :title="product.name"
        class="font-bold tn:mt-1 leading-5 break-all two-lines overflow-hidden"
      >
        {{ product.name }}
      </p>
      <p class="text-[10px] font-bold leading-4 tn:mt-2">Harga Patungan</p>
      <p class="font-bold leading-6 tn:-mt-1">
        {{ currencyFormat(product.finalPrice) }}
      </p>
      <p class="text-[10px] font-bold leading-4 tn:mt-2 text-[#474747]">
        Harga Normal
      </p>
      <p class="text-[10px] font-bold leading-4 tn:-mt-1 text-[#474747]">
        {{ currencyFormat(product.price) }}
      </p>
      <p class="text-[12px] text-[#A0A3BD] tn:mt-2">
        Slot untuk <span class="font-semibold">{{ product.quota }} orang</span>
      </p>
      <hr class="tn:mb-2 tn:mt-1" />
      <div class="flex items-center space-x-1">
        <p
          class="tn:p-1 rounded bg-[#FFF2F2] text-[#BA0000] text-[10px] font-bold"
        >
          Hemat hingga
        </p>
        <p class="text-[#66738F] font-bold text-[11px]">
          {{ currencyFormat(product.price - product.finalPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '../../../../../helpers';
import moment from 'moment';
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isAvailable() {
      let available;
      if (
        this.product.promoEndAt === 0 ||
        (this.product.promoEndAt !== 0 &&
          moment().unix() < this.product.promoEndAt)
      ) {
        available = true;
      } else {
        available = false;
      }
      return available;
    },
  },
  methods: {
    currencyFormat,
  },
};
</script>

<style>
.two-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.expired-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  color: white;
}
.expired-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: black;
  opacity: 0.7;
  width: 100%;
  height: 100%;
}
</style>
