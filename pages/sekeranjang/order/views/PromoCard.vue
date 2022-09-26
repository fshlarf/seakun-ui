<template>
  <div>
    <div
      v-if="!isLoading"
      class="rounded-xl shadow-md tn:p-5 tn:mt-4 bg-white space-y-2"
    >
      <div class="grid grid-cols-3 gap-5 items-start">
        <p class="text-[18px] font-bold">Periode promo</p>
        <p
          class="font-medium col-span-2"
          v-if="product.promoStartAt && product.promoEndAt"
        >
          {{ toLocalDate(product.promoStartAt) }} -
          {{ toLocalDate(product.promoEndAt) }}
        </p>
        <p
          class="font-medium col-span-2"
          v-else-if="!product.promoStartAt && product.promoEndAt"
        >
          Sampai {{ toLocalDate(product.promoEndAt) }}
        </p>
        <p class="font-medium col-span-2" v-else>-</p>
      </div>
      <div class="grid grid-cols-3 gap-5 items-start">
        <p class="font-bold">Link website</p>
        <p class="font-medium col-span-2">
          {{ product.productUrl }}
        </p>
      </div>
      <div class="grid grid-cols-3 gap-5 items-start">
        <p class="font-bold">Detail promo</p>
        <p class="font-medium col-span-2">
          {{ product.promoType }}
        </p>
      </div>
      <div class="grid grid-cols-3 gap-5 items-start">
        <p class="font-bold">Jumlah member</p>
        <p class="font-medium col-span-2">{{ product.quota }} Orang</p>
      </div>
    </div>

    <div v-else class="rounded-xl shadow-md tn:p-5 tn:mt-4 bg-white space-y-2">
      <div class="grid grid-cols-3 gap-5 items-center">
        <p class="text-[18px] font-bold">Periode promo</p>
        <div class="shimmer w-1/2 h-4 col-span-2"></div>
      </div>
      <div class="grid grid-cols-3 gap-5 items-center">
        <p class="font-bold">Link website</p>
        <div class="shimmer w-3/4 h-4 col-span-2"></div>
      </div>
      <div class="grid grid-cols-3 gap-5 items-center">
        <p class="font-bold">Detail promo</p>
        <div class="shimmer w-3/4 h-4 col-span-2"></div>
      </div>
      <div class="grid grid-cols-3 gap-5 items-center">
        <p class="font-bold">Jumlah member</p>
        <div class="shimmer w-1/3 h-4 col-span-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      moment,
    };
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toLocalDate(date) {
      return moment.unix(date).locale('id').format('D MMMM YYYY');
    },
  },
};
</script>

<style></style>
