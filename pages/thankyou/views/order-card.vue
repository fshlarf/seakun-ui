<template>
  <div class="shadow-md tn:py-3 md:py-4 px-4 bg-white rounded-xl">
    <div class="w-full">
      <div class="flex tn:space-x-4 md:space-x-6 items-center">
        <div class="tn:w-20 md:w-24">
          <img
            class="mx-auto"
            alt="image-product"
            :src="`/images/product/brand/${slug}.png`"
          />
        </div>
        <div class="md:space-y-1 text-base">
          <p class="tn:text-sm md:text-base font-bold">
            {{ providerName }} -
            {{ variant }}
          </p>
          <p class="tn:text-sm md:text-base font-bold">
            {{ orderNumber }}
          </p>
          <p v-if="duration === 12" class="tn:text-sm md:text-base font-bold">
            1 Tahun
          </p>
          <p v-else class="tn:text-sm md:text-base font-bold">
            {{ duration }} Bulan
          </p>
        </div>
      </div>
      <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" />
      <div class="flex justify-between items-center text-[#363636] opacity-80">
        <p class="tn:text-sm md:text-base font-bold">Harga</p>
        <p class="tn:text-sm md:text-base font-bold">
          {{ formatMoneyRupiah(totalPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import DisableCheckbox from '~/assets/images/icon/disable-checkbox.svg?inline';
import Button from '~/components/atoms/Button';
import moment from 'moment';
export default {
  name: 'OrderCard',
  components: {
    CheckedBox,
    UncheckBox,
    DisableCheckbox,
    Button,
  },
  data() {
    return {
      moment,
    };
  },
  props: {
    orderData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      slug: '',
      orderNumber: '',
      providerName: '',
      variant: '',
      duration: null,
      totalPrice: null,
    };
  },
  watch: {
    orderData(val) {
      if (val) {
        this.slug = val.provider.slug;
        this.orderNumber = val.orderNumber;
        this.providerName = val.provider.name;
        this.variant = val.provider.package.variant.name;
        this.duration = val.provider.package.variant.duration;
        this.totalPrice = val.payment.totalPrice;
      }
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
  },
};
</script>
