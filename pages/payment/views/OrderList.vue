<template>
  <div>
    <ProductHighLightLoading v-if="isLoading" />
    <div v-else>
      <p class="md:text-lg tn:text-sm font-bold md:mt-8 tn:mt-5">
        Detail Pesanan
      </p>
      <div
        v-if="orderData.length > 1"
        class="flex gap-[13px] tn:text-xs md:text-sm bg-[#FFC801] bg-opacity-10 rounded-[10px] md:mt-5 md:py-[16px] md:pl-[17px] md:pr-[30px] tn:py-[11px] tn:pl-[11px] tn:pr-[11px]"
      >
        <div class="md:mt-1">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00033 12.5166C9.23644 12.5166 9.43449 12.4366 9.59449 12.2766C9.75449 12.1166 9.83422 11.9188 9.83366 11.6833V8.34994C9.83366 8.11382 9.75366 7.91577 9.59366 7.75577C9.43366 7.59577 9.23588 7.51605 9.00033 7.5166C8.76422 7.5166 8.56616 7.5966 8.40616 7.7566C8.24616 7.9166 8.16644 8.11438 8.16699 8.34994V11.6833C8.16699 11.9194 8.24699 12.1174 8.40699 12.2774C8.56699 12.4374 8.76477 12.5172 9.00033 12.5166ZM9.00033 5.84994C9.23644 5.84994 9.43449 5.76994 9.59449 5.60994C9.75449 5.44994 9.83422 5.25216 9.83366 5.0166C9.83366 4.78049 9.75366 4.58244 9.59366 4.42244C9.43366 4.26244 9.23588 4.18271 9.00033 4.18327C8.76422 4.18327 8.56616 4.26327 8.40616 4.42327C8.24616 4.58327 8.16644 4.78105 8.16699 5.0166C8.16699 5.25271 8.24699 5.45077 8.40699 5.61077C8.56699 5.77077 8.76477 5.85049 9.00033 5.84994ZM9.00033 16.6833C7.84755 16.6833 6.76422 16.4644 5.75033 16.0266C4.73644 15.5888 3.85449 14.9952 3.10449 14.2458C2.35449 13.4958 1.76088 12.6138 1.32366 11.5999C0.886437 10.586 0.667548 9.50271 0.666992 8.34994C0.666992 7.19716 0.885881 6.11382 1.32366 5.09994C1.76144 4.08605 2.35505 3.2041 3.10449 2.4541C3.85449 1.7041 4.73644 1.11049 5.75033 0.673268C6.76422 0.236046 7.84755 0.0171571 9.00033 0.0166016C10.1531 0.0166016 11.2364 0.235491 12.2503 0.673268C13.2642 1.11105 14.1462 1.70466 14.8962 2.4541C15.6462 3.2041 16.24 4.08605 16.6778 5.09994C17.1156 6.11382 17.3342 7.19716 17.3337 8.34994C17.3337 9.50271 17.1148 10.586 16.677 11.5999C16.2392 12.6138 15.6456 13.4958 14.8962 14.2458C14.1462 14.9958 13.2642 15.5897 12.2503 16.0274C11.2364 16.4652 10.1531 16.6838 9.00033 16.6833ZM9.00033 15.0166C10.8614 15.0166 12.4378 14.3708 13.7295 13.0791C15.0212 11.7874 15.667 10.211 15.667 8.34994C15.667 6.48882 15.0212 4.91244 13.7295 3.62077C12.4378 2.3291 10.8614 1.68327 9.00033 1.68327C7.13921 1.68327 5.56283 2.3291 4.27116 3.62077C2.97949 4.91244 2.33366 6.48882 2.33366 8.34994C2.33366 10.211 2.97949 11.7874 4.27116 13.0791C5.56283 14.3708 7.13921 15.0166 9.00033 15.0166Z"
              fill="black"
            />
          </svg>
        </div>
        <div>
          <p class="text-base font-normal">
            Sekali bayar untuk banyak pesanan. Pilih pesanan yang lain yang
            ingin kamu perpanjang masa berlangganannya.
            <span class="font-bold">Total bayar</span> adalah biaya total untuk
            semua pesanan yang <span class="font-bold">kamu pilih</span> untuk
            dibayar.
          </p>
        </div>
      </div>
      <!-- <p v-if="orderData.length > 1" class="text-base font-normal mt-2">
        Sekali bayar untuk banyak pesanan. Pilih pesanan yang lain yang ingin
        kamu perpanjang masa berlangganannya.  
        <span class="font-bold">Total bayar</span> adalah biaya total untuk
        semua pesanan yang <span class="font-bold">kamu pilih</span> untuk
        dibayar.
      </p> -->
      <div v-for="(order, index) in orderData" :key="index">
        <template v-if="order.provider.slug === 'sekurban'">
          <SekurbanOrderCard :sekurban="order" />
        </template>
        <template v-else>
          <OrderCard
            :orderData="orderData"
            :order="order"
            :index="index"
            :checkedBox="true"
            :buttonChangeDuration="true"
            @changeDuration="$emit('changeDuration', order)"
            @onChecked="$emit('onChecked', order, index)"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import OrderCard from '~/components/mollecules/OrderCard.vue';
import SekurbanOrderCard from '~/components/mollecules/SekurbanOrderCard.vue';

export default {
  name: 'OrderList',
  components: {
    ProductHighLightLoading,
    OrderCard,
    SekurbanOrderCard,
  },
  props: {
    orderData: {
      type: Array,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    changeDuration: Function,
  },
};
</script>
