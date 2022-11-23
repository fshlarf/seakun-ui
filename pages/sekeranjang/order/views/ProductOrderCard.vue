<template>
  <div class="rounded-xl shadow-md tn:p-5 tn:mt-4 bg-white">
    <div v-if="!isLoading">
      <div class="flex space-x-4 items-start">
        <div class="rounded-lg bg-gray-200 w-[64px] h-[64px] overflow-hidden">
          <img
            v-if="product.images && product.images.length > 0"
            class="object-cover-center"
            :src="product.images[0].popFile"
            alt="product image"
          />
        </div>
        <div class="tn:max-w-[75%] md:max-w-[85%]">
          <p class="text-[12px] text-[#66738F]">
            {{ product.brand }}
          </p>
          <p class="font-bold two-lines overflow-hidden">{{ product.name }}</p>
          <p v-if="product.promoType" class="text-[12px]">
            {{ product.promoType.value }}
          </p>
        </div>
      </div>
      <hr class="tn:mt-3" />
      <div class="tn:mt-3 space-y-2">
        <div class="flex justify-between items-center">
          <p class="font-medium">Total Harga</p>
          <div class="flex space-x-3 items-center">
            <p class="font-bold">
              {{ currencyFormat(product.finalPrice) }}
            </p>
            <svg
              v-if="!isShowPriceDetail"
              class="w-4 h-4 cursor-pointer"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
              stroke="gray"
              stroke-width="2"
              @click="isShowPriceDetail = !isShowPriceDetail"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
            <svg
              v-else
              class="w-4 h-4 cursor-pointer"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
              stroke="gray"
              stroke-width="2"
              @click="isShowPriceDetail = !isShowPriceDetail"
            >
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                      l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                      C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              />
            </svg>
          </div>
        </div>
        <div v-if="isShowPriceDetail" class="space-y-2">
          <div class="flex justify-between items-center">
            <p class="text-[15px] font-medium">Harga asli produk</p>
            <p class="text-[14px] font-medium">
              {{ currencyFormat(product.price) }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-[15px] font-medium">Harga patungan</p>
            <p class="text-[14px] font-medium">
              {{ currencyFormat(product.jointPrice) }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-[15px] font-medium">Biaya admin</p>
            <p class="text-[14px] font-medium">
              {{ currencyFormat(product.adminFee) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="flex space-x-4 items-center">
        <div class="shimmer rounded-lg bg-gray-200 w-[64px] h-[64px]"></div>
        <div>
          <div class="shimmer block h-3 w-28"></div>
          <br />
          <div class="shimmer block h-4 w-56"></div>
          <br />
          <div class="shimmer block h-4 w-40"></div>
        </div>
      </div>
      <hr class="tn:mt-3" />
      <div class="flex justify-between tn:mt-3">
        <div class="shimmer h-4 w-1/3"></div>
        <div class="shimmer h-4 w-1/4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '../../../../helpers';
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isShowPriceDetail: false,
    };
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
</style>
