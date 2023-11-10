<template>
  <div
    class="border-[1px] border-green-s p-3 bg-white mt-4 rounded-xl"
    :class="`${order.checked ? 'tn:border-primary' : 'tn:border-gray-400'}`"
  >
    <div class="flex justify-between items-center">
      <div class="flex space-x-4 items-center">
        <div
          @click="onChecked(order)"
          v-if="orderData.length > 1 && checkedBox"
          class="cursor-pointer flex items-center"
        >
          <CheckedBox v-if="order.checked && !order.disable" />
          <DisableCheckbox v-else-if="order.disable" />
          <UncheckBox v-else />
        </div>
        <div class="max-w-[100px]">
          <img
            alt="image-product"
            :src="`/images/product/brand/${order.provider.slug}.png`"
          />
        </div>
      </div>
      <Button
        v-if="buttonChangeDuration"
        label="Ubah Durasi"
        @click="changeDuration"
        class="bg-green-seakun text-base text-white font-bold p-2 self-end"
        :disabled="!order.checked"
      />
    </div>
    <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" />
    <div class="tn:text-sm md:text-base text-secondary">
      <p>{{ order.customerEmail }}</p>
      <p>{{ order.customerPhone }}</p>
    </div>
    <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" />
    <div class="flex flex-column w-full tn:mt-2">
      <div class="">
        <div class="flex justify-between flex-wrap items-center w-full">
          <div>
            <p class="tn:text-sm md:text-base font-bold">
              {{ order.provider.name }}
            </p>
            <p class="tn:text-sm md:text-base font-bold">
              {{ order.orderNumber }}
            </p>
            <p
              v-if="order.provider.package.variant.duration === 12"
              class="tn:text-sm md:text-base font-normal mt-1 opacity-80"
            >
              {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
              / (1 Tahun)
            </p>
            <p
              v-else
              class="tn:text-sm md:text-base font-normal mt-1 opacity-80"
            >
              {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
              / ({{ order.provider.package.variant.duration }}
              Bulan)
            </p>
            <p
              v-if="!expiredAt && order.expiredAt"
              class="tn:text-sm md:text-base font-normal opacity-80"
            >
              Expired: {{ moment.unix(order.expiredAt).format('DD MMM YYYY') }}
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="tn:my-2 md:my-3 border-b border-[#E5E5E5]" />
      <div class="flex justify-between items-center">
        <p class="text-base font-normal opacity-50">Biaya Langganan</p>
        <p class="text-base font-bold">
          {{ formatMoneyRupiah(order.provider.package.variant.grandTotal) }}
        </p>
      </div> -->
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
    order: {
      type: Object,
      default: {},
    },
    orderData: {
      type: Array,
      default: [],
    },
    checkedBox: {
      type: Boolean,
      default: false,
    },
    buttonChangeDuration: {
      type: Boolean,
      default: false,
    },
    expiredAt: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    onChecked(order) {
      if (!order.disable) {
        this.$emit('onChecked');
      }
    },
    changeDuration() {
      this.$emit('changeDuration');
    },
  },
};
</script>
