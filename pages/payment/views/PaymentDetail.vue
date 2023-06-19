<template>
  <div>
    <div v-if="isLoading" class="text-center mt-4">
      <p class="shimmer w-7/12"></p>
      <p class="shimmer w-6/12"></p>
      <p class="shimmer w-9/12"></p>
    </div>
    <div
      v-else
      class="flex flex-column md:mt-8 md:py-6 tn:mt-5 tn:py-5 font-bold items-center bg-[#E9FAF5] bg-opacity-50 border-[1px] border-[#8DCABE] border-opacity-10 rounded-[10px]"
    >
      <p class="md:text-base tn:text-xs">Total bayar</p>
      <div class="payment-detail__price flex cursor-pointer">
        <p
          class="md:text-[28px] tn:text-base font-bold text-green-seakun md:mt-3 tn:mt-1"
          v-html="formatCodePayment(paymentTotal)"
        ></p>
      </div>
    </div>
    <div class="md:mt-9 tn:mt-5">
      <p class="md:text-xl tn:text-xs font-bold">Pilih Tipe Pembayaran</p>
      <div
        class="grid grid-cols-2 gap-[24px] md:mt-4 tn:mt-2 w-auto sm:h-[172px] tn:h-20 cursor-pointer"
      >
        <div
          @click="onClickMethod(1)"
          class="relative hover:border-[#00B5D4] hover:text-[#00B5D4] hover:font-bold text-[#66738F] border-gray-300 border-[1px] rounded-2xl"
        >
          <div
            class="absolute sm:top-[13px] sm:right-[13px] tn:top-[6px] tn:right-[6px]"
          >
            <CheckedPaymentOtomatis
              v-show="chosedMethod === 1"
              class="sm:w-auto tn:w-[11px]"
            />
            <UncheckBox
              v-show="chosedMethod === 0 || chosedMethod === 2"
              class="sm:w-auto tn:w-[11px]"
            />
          </div>
          <div
            class="absolute sm:top-[43px] tn:top-3 sm:left-[26px] tn:left-[11px] z-10 w-auto"
          >
            <img
              src="/images/product/brand/payment/payment-otomatis/icon-payment.png"
              alt="icon-payment-otomatis"
              class="sm:w-auto tn:w-7"
            />

            <p class="pt-2 sm:text-base tn:text-xs">Pembayaran otomatis</p>
          </div>
          <img
            src="/images/product/brand/payment/payment-otomatis/vektor-1.svg"
            class="absolute top-0 left-0 z-0 sm:w-auto tn:w-[52px]"
            alt=""
          />
          <img
            src="/images/product/brand/payment/payment-otomatis/vektor-2.svg"
            class="absolute bottom-0 left-0 sm:w-auto tn:w-[44px]"
            alt=""
          />
          <img
            src="/images/product/brand/payment/payment-otomatis/vektor-3.svg"
            class="absolute bottom-0 right-0 sm:w-auto tn:w-[26px]"
            alt=""
          />
        </div>
        <div
          @click="onClickMethod(2)"
          class="relative border-gray-300 hover:border-[#FFC801] hover:text-[#FFC801] hover:font-bold text-[#66738F] border-[1px] rounded-2xl"
        >
          <div
            class="absolute sm:top-[13px] sm:right-[13px] tn:top-[6px] tn:right-[6px]"
          >
            <CheckedPaymentManual
              v-show="chosedMethod === 2"
              class="sm:w-auto tn:w-[11px]"
            />
            <UncheckBox
              v-show="chosedMethod === 0 || chosedMethod === 1"
              class="sm:w-auto tn:w-[11px]"
            />
          </div>
          <div class="absolute sm:top-[43px] tn:top-3 left-[26px] z-10">
            <img
              src="/images/product/brand/payment/payment-manual/icon-payment.png"
              alt="icon-payment-manual"
              class="sm:w-auto tn:w-7"
            />
            <p class="pt-2 sm:text-base tn:text-xs">Transfer manual</p>
          </div>
          <img
            src="/images/product/brand/payment/payment-manual/vektor-1.svg"
            class="absolute top-0 left-0 z-0 sm:w-auto tn:w-[52px]"
            alt=""
          />
          <img
            src="/images/product/brand/payment/payment-manual/vektor-2.svg"
            class="absolute bottom-0 left-0 sm:w-auto tn:w-[44px]"
            alt=""
          />
          <img
            src="/images/product/brand/payment/payment-manual/vektor-3.svg"
            class="absolute bottom-0 right-0 sm:w-auto tn:w-[26px]"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      v-show="chosedMethod === 2"
      class="box-info flex-1 rounded-md md:py-[53px] tn:py-3 mt-[14.5px]"
    >
      <div class="sm:px-3 tn:px-0">
        <img class="mx-auto" src="/images/payment/manual-payment.png" />

        <!-- <img
          class="mx-auto w-full"
          src="/images/payment/new/manual-payment.png"
        /> -->
      </div>
      <div class="flex gap-[10px] mb-2 mt-5 md:mx-2 tn:mx-4">
        <div><CheckBox class="sm:w-auto tn:w-[15px]" /></div>
        <div>
          <p class="sm:text-base tn:text-xs font-normal tn:mt-1 sm:mt-0">
            Transfer manual ke Bank BCA, Mandiri dan jenius
          </p>
        </div>
      </div>
      <div class="flex gap-[10px] md:mx-2 tn:mx-4">
        <div><CheckBox class="sm:w-auto tn:w-[15px]" /></div>
        <div>
          <p class="sm:text-base tn:text-xs font-normal tn:mt-1 sm:mt-0">
            Konfirmasi pembayaran manual (upload bukti transfer di website)
          </p>
        </div>
      </div>
    </div>
    <div
      v-show="chosedMethod === 1"
      class="box-info flex-1 rounded-md md:py-[53px] tn:py-3 mt-[14.5px]"
    >
      <div class="px-3">
        <img
          class="mx-auto md:block tn:hidden"
          src="/images/payment/new/otomatis-payment.png"
        />
        <img class="w-full md:hidden" src="/images/payment/auto-payment.png" />
      </div>
      <div class="flex gap-[10px] md:mt-4 tn:mt-10 md:mx-2 tn:mx-4">
        <div>
          <CheckBox class="sm:w-auto tn:w-[15px]" />
        </div>
        <div>
          <p class="sm:text-base tn:text-xs font-normal tn:mt-1 sm:mt-0">
            QRIS, E-Wallet, berlaku disemua durasi berlangganan
          </p>
        </div>
      </div>
      <div class="flex gap-[10px] mt-2 md:mx-2 tn:mx-4">
        <div>
          <CheckBox class="sm:w-auto tn:w-[15px]" />
        </div>
        <div>
          <p class="sm:text-base tn:text-xs font-normal tn:mt-1 sm:mt-0">
            Virtual Account dan Retail hanya berlaku untuk durasi di atas 3
            bulan berlangganan
          </p>
        </div>
      </div>
      <div class="flex gap-[10px] mt-2 md:mx-2 tn:mx-4">
        <div>
          <CheckBox class="sm:w-auto tn:w-[15px]" />
        </div>
        <div>
          <p class="sm:text-base tn:text-xs font-normal tn:mt-1 sm:mt-0">
            Konfirmasi pembayaran otomatis
          </p>
        </div>
      </div>
    </div>

    <Button
      @click="onClickPayment(chosedMethod)"
      label="Bayar"
      variant="primary"
      class="w-full md:text-base tn:text-sm text-white font-bold py-2 tn:my-8 md:my-[50px]"
      :disabled="chosedMethod === 0"
    />

    <!-- <Button
      v-if="chosedMethod === 2"
      @click="onClickManual"
      label="Bayar"
      class="w-full bg-green-seakun text-base text-white font-bold py-2 my-5"
    />
    <Button
      v-if="chosedMethod === 0"
      label="Bayar"
      class="w-full bg-green-seakun bg-opacity-50 text-base text-white font-bold py-2 my-5"
    /> -->
  </div>
</template>
<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import CheckBox from '~/assets/images/icon/checkbox-new.svg?inline';
import CheckedPaymentManual from '~/assets/images/icon/payment/CheckBox-manual.svg?inline';
import CheckedPaymentOtomatis from '~/assets/images/icon/payment/CheckBox-otomatis.svg?inline';
import UncheckBox from '~/assets/images/icon/payment/UncheckBox.svg?inline';
import Button from '~/components/atoms/Button';

export default {
  name: 'PaymentDetail',
  components: {
    CheckBox,
    CheckedPaymentManual,
    CheckedPaymentOtomatis,
    UncheckBox,
    Button,
  },
  data: () => ({
    currencyFormat,
  }),
  props: {
    paymentTotal: {
      type: Number,
      default: 0,
    },
    chosedMethod: {
      type: Number,
      default: 0,
    },
    dataPaymentMethod: {
      type: Array,
      default: () => [
        'qris',
        'ovo',
        'dana',
        'shopee pay',
        'link aja',
        'bca',
        'mandiri',
        'bni',
        'bri',
        'permata',
        'jenius',
        'alfamart',
      ],
    },
    // copyNominal: {
    //   type: Function,
    // },
    isLoading: {
      type: Boolean,
      default: false,
    },
    // onClickOtomatis: {
    //   type: Function,
    //   default: () => {},
    // },
    // onClickManual: {
    //   type: Function,
    //   default: () => {},
    // },
  },
  methods: {
    formatCodePayment(value) {
      if (value) {
        const currency = this.currencyFormat(value);
        return currency;
      }
      return '-';
    },
    onClickPayment(method) {
      this.$emit('onClickPayment', method);
    },
    onClickMethod(method) {
      this.$emit('onClickMethod', method);
    },
  },
};
</script>
<style lang="scss" scoped>
.payment-detail {
  &__price {
    svg {
      width: 14px;
      height: auto;
      display: inline-block;
      fill: #8dcabe;
      margin-top: -4px;
      margin-left: 12px;
      cursor: pointer;
    }
  }
}
.box-info {
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
}
</style>
