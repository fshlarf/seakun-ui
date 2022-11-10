<template>
  <div>
    <div v-if="!isLoading">
      <div class="flex justify-between items-end tn:px-5">
        <div class="max-w-[70%]">
          <p
            v-if="product && product.sekeranjang"
            class="text-[#A0A3BD] text-[20px] font-medium"
          >
            {{ product.sekeranjang.productBrand }}
          </p>
          <h1 class="text-[44px] font-bold">{{ product.name }}</h1>
        </div>
        <div>
          <p class="text-[32px] font-bold text-right">
            {{ currencyFormat(product.finalPrice) }}
          </p>
          <div class="flex items-center space-x-3 tn:mt-2">
            <p
              class="text-[#BA0000] font-bold text-[18px] bg-[#FFF2F2] tn:px-2 rounded-sm"
            >
              Hemat hingga
            </p>
            <p class="text-[21px]">
              {{ currencyFormat(product.price - product.finalPrice) }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="product.photos"
        class="grid grid-cols-2 items-center gap-4 h-[448px] rounded-bl-3xl rounded-br-3xl overflow-hidden tn:mt-4"
      >
        <div class="w-full h-full overflow-hidden">
          <img
            class="min-w-[100%] min-h-[100%] object-cover object-center"
            :src="product.photos[0].popFile"
            alt="product thumbnail"
          />
        </div>
        <div class="w-full grid grid-cols-2 items-center gap-4">
          <div class="w-full h-[216px] bg-gray-300 overflow-hidden">
            <img
              v-if="product.photos[1]"
              class="min-w-[100%] min-h-[100%] object-cover object-center"
              :src="product.photos[1].popFile"
              alt="product photo"
            />
          </div>
          <div class="w-full h-[216px] bg-gray-300 overflow-hidden">
            <img
              v-if="product.photos[2]"
              class="min-w-[100%] min-h-[100%] object-cover object-center"
              :src="product.photos[2].popFile"
              alt="product photo"
            />
          </div>
          <div class="w-full h-[216px] bg-gray-300 overflow-hidden">
            <img
              v-if="product.photos[3]"
              class="min-w-[100%] min-h-[100%] object-cover object-center"
              :src="product.photos[3].popFile"
              alt="product photo"
            />
          </div>
          <div class="w-full h-[216px] bg-gray-300 overflow-hidden">
            <img
              v-if="product.photos[4]"
              class="min-w-[100%] min-h-[100%] object-cover object-center"
              :src="product.photos[4].popFile"
              alt="product photo"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div
        class="grid grid-cols-2 items-center gap-4 h-[448px] rounded-bl-3xl rounded-br-3xl overflow-hidden tn:mt-4"
      >
        <div class="w-full h-full overflow-hidden shimmer"></div>
        <div class="w-full grid grid-cols-2 items-center gap-4">
          <div
            class="shimmer w-full h-[216px] bg-gray-300 overflow-hidden"
          ></div>
          <div
            class="shimmer w-full h-[216px] bg-gray-300 overflow-hidden"
          ></div>
          <div
            class="shimmer w-full h-[216px] bg-gray-300 overflow-hidden"
          ></div>
          <div
            class="shimmer w-full h-[216px] bg-gray-300 overflow-hidden"
          ></div>
        </div>
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
  methods: {
    currencyFormat,
  },
};
</script>

<style></style>
