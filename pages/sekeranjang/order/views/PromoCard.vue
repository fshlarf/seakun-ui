<template>
  <div>
    <div
      v-if="!isLoading"
      class="rounded-xl shadow-md tn:p-5 tn:mt-4 bg-white space-y-2"
    >
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-start">
        <p class="font-bold">Periode promo</p>
        <p
          class="font-medium md:col-span-2"
          v-if="product.promoStartAt && product.promoEndAt"
        >
          {{ toLocalDate(product.promoStartAt) }} -
          {{ toLocalDate(product.promoEndAt) }}
        </p>
        <p
          class="font-medium md:col-span-2"
          v-else-if="!product.promoStartAt && product.promoEndAt"
        >
          Sampai {{ toLocalDate(product.promoEndAt) }}
        </p>
        <p class="font-medium md:col-span-2" v-else>-</p>
      </div>
      <div
        class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-start overflow-hidden"
      >
        <p class="font-bold">Link website</p>
        <a
          :href="product.productUrl"
          target="_blank"
          class="font-medium md:col-span-2 text-primary break-all one-line"
          v-if="product.productUrl"
        >
          {{ product.productUrl }}
        </a>
        <p v-else class="font-medium md:col-span-2">-</p>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-start">
        <p class="font-bold">Jenis promo</p>
        <p v-if="product.promoType" class="font-medium md:col-span-2">
          {{ product.promoType.value }}
        </p>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-start">
        <p class="font-bold">Jumlah member</p>
        <p class="font-medium md:col-span-2">{{ product.quota }} Orang</p>
      </div>
    </div>

    <div v-else class="rounded-xl shadow-md tn:p-5 tn:mt-4 bg-white space-y-2">
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-center">
        <p class="text-[18px] font-bold">Periode promo</p>
        <div class="shimmer w-1/2 h-4 md:col-span-2"></div>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-center">
        <p class="font-bold">Link website</p>
        <div class="shimmer w-3/4 h-4 md:col-span-2"></div>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-center">
        <p class="font-bold">Detail promo</p>
        <div class="shimmer w-3/4 h-4 md:col-span-2"></div>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 md:gap-5 md:items-center">
        <p class="font-bold">Jumlah member</p>
        <div class="shimmer w-1/3 h-4 md:col-span-2"></div>
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
