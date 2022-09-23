<template>
  <div
    role="button"
    class="w-[190px] rounded-lg shadow-md overflow-hidden"
    @click="$emit('onClickProduct', product.uid)"
  >
    <div class="h-[160px] bg-[#8DCABE] overflow-hidden">
      <img
        v-if="product.productThumbnail"
        class="min-w-[100%] min-h-[100%] object-cover object-center"
        :src="product.productThumbnail"
        alt="product image"
      />
    </div>
    <div class="tn:p-[10px]">
      <p
        class="font-medium text-[#00B5D4] text-[12px] bg-[#EBFCFF] tn:py-1 tn:px-3 rounded-full max-w-max"
      >
        {{ product.promoType }}
      </p>
      <p :title="product.name" class="font-bold tn:mt-1 leading-5 break-all">
        {{ productName }}
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
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    productName() {
      if (this.product.name && this.product.name.length > 41) {
        return this.product.name.slice(0, 40) + '...';
      } else {
        return this.product.name;
      }
    },
  },
  methods: {
    currencyFormat,
  },
};
</script>

<style></style>
