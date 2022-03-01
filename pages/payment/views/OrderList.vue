<template>
  <div>
    <ProductHighLightLoading v-if="isLoading" />
    <div v-else>
      <div
        v-for="(order, index) in orderData"
        :key="index"
        class="border-[1px] border-green-seakun flex p-3 bg-white mt-4 rounded-xl items-center"
      >
        <div @click="$emit('onChecked',order, index)" v-if="orderData.length > 1" class="cursor-pointer">
          <CheckedBox v-if="order.checked && !order.disable" />
          <DisableCheckbox v-else-if="order.disable" />
          <UncheckBox v-else />
        </div>
        <div class="flex flex-column ml-3 w-full">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
              <div class="w-20 mr-4">
                <img
                  alt="image-product"
                  :src="`/images/product/brand/${order.provider.slug}.png`"
                />
              </div>
              <div>
                <p class="text-base font-bold">{{ order.provider.name }}</p>
                <p class="text-base font-bold">{{ order.orderNumber }}</p>
                <p
                  v-if="order.provider.package.variant.duration === 12"
                  class="text-base font-normal mt-1 opacity-80"
                >
                  {{
                    formatMoneyRupiah(order.provider.package.variant.price)
                  }}
                  x (1 Tahun)
                </p>
                <p v-else class="text-base font-normal mt-1 opacity-80">
                  {{ formatMoneyRupiah(order.payment.totalPrice) }} x (1 Bulan)
                </p>
                <p
                  v-if="order.payment.paymentDate !== 0"
                  class="text-base font-normal mt-1 opacity-80"
                >
                  Exp: 06 Mar 2022
                </p>
              </div>
            </div>
            <Button
              label="Ubah Durasi"
              @click="$emit('changeDuration', order)"
              class="bg-green-seakun text-base text-white font-bold py-2 self-end"
              :disabled="!order.checked"
            />
          </div>
          <div class="my-3 border-b border-[#E5E5E5]" />
          <div class="flex flex-row justify-between items-center">
            <p class="text-base font-normal opacity-50">Biaya Langganan</p>
            <p class="text-base font-bold">
              {{ formatMoneyRupiah(order.payment.totalPrice) }}
            </p>
          </div>
        </div>
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
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';

export default {
  name: 'OrderList',
  components: {
    CheckedBox,
    Button,
    UncheckBox,
    DisableCheckbox,
    ProductHighLightLoading,
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
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    changeDuration() {
      this.$emit('changeDuration');
    },
  },
};
</script>
