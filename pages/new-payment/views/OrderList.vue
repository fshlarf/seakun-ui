<template>
  <div>
    <div
      v-for="(order, index) in orderData"
      :key="index"
      class="border-[1px] border-green-seakun flex p-3 bg-white mt-4 rounded-xl items-center"
    >
      <div class="cursor-pointer">
        <CheckedBox v-if="order.checked && !order.disable" />
        <DisableCheckbox v-else-if="order.disable" />
        <UncheckBox v-else/>
      </div>
      <div class="flex flex-column ml-3 w-full">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-center">
            <div class="w-20 mr-4">
              <img alt="image-product" :src="imageProduct" />
            </div>
            <div>
              <p class="text-base font-bold">{{ order.name }}</p>
              <p class="text-base font-bold">{{order.order_id}}</p>
              <p class="text-base font-normal mt-1 opacity-80">
                {{ formatMoneyRupiah(productPrice) }} x (1 Bulan)
              </p>
              <p class="text-base font-normal mt-1 opacity-80">
                Exp: 06 Mar 2022
              </p>
            </div>
          </div>
          <Button
            label="Ubah Durasi"
            @click="changeDuration"
            class="bg-green-seakun text-base text-white font-bold py-2 self-end"
          />
        </div>
        <div class="my-3 border-b border-[#E5E5E5]" />
        <div class="flex flex-row justify-between items-center">
          <p class="text-base font-normal opacity-50">Biaya Langganan</p>
          <p class="text-base font-bold">
            {{ formatMoneyRupiah(subcriptionFee) }}
          </p>
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

export default {
  name: 'OrderList',
  components: {
    CheckedBox,
    Button,
    UncheckBox,
    DisableCheckbox
  },
  data: () => ({
    orderData: [{
        id:1,
        name:'Netflix - User Regular',
        order_id: 'ORD562562',
        disable:true,
        checked:true
    },{
        id:2,
        name:'Spotify - User Regular',
        order_id: 'ORD136533',
        disable:false,
        checked:true
    },{
        id:3,
        name:'Netflix - User Regular',
        order_id: 'ORD562562',
        disable:false,
        checked:false
    }],
  }),
  props: {
    imageProduct: {
      type: String,
      default: null,
    },
    productName: {
      type: String,
      default: 'Netflix - User Regular',
    },
    productPrice: {
      type: Number,
      default: 53000,
    },
    subcriptionFee: {
      type: Number,
      default: 53000,
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    changeDuration(){
        this.$emit('changeDuration')
    }
  },
};
</script>
