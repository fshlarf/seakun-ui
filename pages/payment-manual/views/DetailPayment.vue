<template>
  <section>
    <Snackbar ref="snackbar" />
    <div
      class="payment-detail text-center tn:mt-6 md:mt-9 bg-[#E9FAF5] bg-opacity-50 rounded-[10px] py-6"
    >
      <p
        v-if="provider.toLowerCase() === 'sequrban' && detailPaymentSequrban"
        class="payment-detail__label my-3 text-xl"
      >
        Transfer DP (uang muka)
      </p>
      <p v-else class="md:text-base tn:text-xs font-bold">Total bayar</p>
      <div class="total-payment flex align-items-center justify-center">
        <div
          v-if="isLoading"
          class="payment-detail__price flex align-items-center justify-center"
        >
          <p class="shimmer w-6/12"></p>
        </div>
        <div
          v-else-if="
            provider.toLowerCase() === 'sequrban' && detailPaymentSequrban
          "
          class="payment-detail__price flex align-items-center justify-center"
          @click="
            clickCopyHandler('Nominal', detailPaymentSequrban.downPayment)
          "
        >
          <p
            class="my-3 text-xl mr-2 cursor-pointer"
            v-html="formatCodePayment(detailPaymentSequrban.downPayment)"
          ></p>
          <CopyIcon />
        </div>
        <div
          v-else
          class="payment-detail__price flex align-items-center cursor-pointer"
          @click="clickCopyHandler('Nominal', totalPaymentDigital)"
        >
          <p
            class="md:text-xl tn:text-base mr-2 cursor-pointer md:my-3 tn:my-[9.5px]"
            v-html="formatCodePayment(totalPaymentDigital)"
          ></p>
          <CopyIcon />
        </div>
      </div>
      <!-- WarningInfo -->
      <div
        class="bg-red-100 rounded-xl py-[9.5px] sm:mx-[100px] lg:mx-[177px] px-2 tn:mx-[14px] border-[#FE4752] border-opacity-20 border-[1px]"
      >
        <div class="flex justify-center gap-[9px]">
          <div class="md:w-auto tn:w-4">
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.50008 5.09952V8.09952M8.50008 11.0995H8.50758M7.21758 1.24452L0.865077 11.8495C0.734103 12.0763 0.664802 12.3335 0.664068 12.5954C0.663335 12.8573 0.731195 13.1149 0.860897 13.3424C0.990598 13.57 1.17762 13.7596 1.40336 13.8924C1.62909 14.0252 1.88568 14.0966 2.14758 14.0995H14.8526C15.1145 14.0966 15.3711 14.0252 15.5968 13.8924C15.8225 13.7596 16.0096 13.57 16.1393 13.3424C16.269 13.1149 16.3368 12.8573 16.3361 12.5954C16.3354 12.3335 16.2661 12.0763 16.1351 11.8495L9.78258 1.24452C9.64887 1.0241 9.46062 0.841858 9.23597 0.715382C9.01133 0.588905 8.75788 0.522461 8.50008 0.522461C8.24228 0.522461 7.98882 0.588905 7.76418 0.715382C7.53954 0.841858 7.35128 1.0241 7.21758 1.24452Z"
                stroke="#FE4752"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="text-xs text-[#FE4752]">
            Pastikan nominal sesuai hingga 3 digit terakhir
          </div>
        </div>
      </div>
    </div>
    <div class="payment-method">
      <h3 class="payment-method__title text-center font-bold md:mt-9 tn:mt-6">
        Transfer Ke
      </h3>
      <div v-if="provider.toLowerCase() === 'sequrban'">
        <PaymentMethodList
          :PaymentMethodList="paymentMethodSekurban"
          @clickCopyHandler="clickCopyHandler"
        />
      </div>
      <div v-else>
        <PaymentMethodList
          v-if="!paymentSeakunListLoading"
          :PaymentMethodList="
            paymentSeakunList.length > 0 ? paymentSeakunList : paymetnMethod
          "
          @clickCopyHandler="clickCopyHandler"
        />
        <PaymentMethodListLoading v-else />
      </div>
    </div>
  </section>
</template>

<script>
import Snackbar from '~/components/mollecules/Snackbar.vue';
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import PaymentMethodList from './PaymentMethodList.vue';
import PaymentMethodListLoading from './PaymentMethodListLoading.vue';
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'DetailPayment',
  components: {
    Snackbar,
    CopyIcon,
    PaymentMethodList,
    PaymentMethodListLoading,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: String,
      default: '',
    },
    totalPaymentDigital: {
      type: Number,
      default: 0,
    },
    packageName: {
      type: String,
      default: '',
    },
    paymentSeakunList: {
      type: Array,
      default: () => [],
    },
    paymentSeakunListLoading: {
      type: Boolean,
      default: false,
    },
    total: {
      type: String | Number,
      default: null,
    },
    detailPaymentDigital: {
      type: Object,
      default: () => ({}),
    },
    detailPaymentSequrban: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    currencyFormat,
    paymetnMethod: [
      {
        bankName: 'mandiri',
        bankAccountNumber: '1150046427383',
        bankAccountName: 'PT. Seakun Global',
      },
      {
        bankName: 'bca',
        bankAccountNumber: '7660777738',
        bankAccountName: 'PT. Seakun Global',
      },
      // {
      //   name: 'gopay',
      //   accountNumber: '085774642738',
      //   accountName: 'Seakun ID / Eka Pusna',
      // },
      // {
      //   name: 'ovo',
      //   accountNumber: '085774642738',
      //   accountName: 'Seakun ID / Eka Pusna',
      // },
      // {
      //   name: 'link-aja',
      //   accountNumber: '085774642738',
      //   accountName: 'Seakun ID / Eka Pusna',
      // },
      // {
      //   name: 'dana',
      //   accountNumber: '085774642738',
      //   accountName: 'Seakun ID / Eka Pusna',
      // },
    ],
    paymentMethodSekurban: [
      {
        bankName: 'mandiri',
        bankAccountNumber: '1150046427383',
        bankAccountName: 'PT. Seakun Global',
      },
      {
        bankName: 'bca',
        bankAccountNumber: '7660777738',
        bankAccountName: 'PT. Seakun Global',
      },
    ],
  }),
  methods: {
    clickCopyHandler(name, value) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(
          () => {
            this.$refs.snackbar.showSnackbar({
              color: 'bg-black',
              message: `${name} berhasil disalin`,
              className: '',
            });
          },
          (err) => console.log(err)
        );
      } else {
        this.fallbackCopyText(name, value);
      }
    },
    fallbackCopyText(name, value) {
      let textArea = document.createElement('textarea');
      textArea.value = value;

      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successful = document.execCommand('copy');
        if (successful) {
          this.$refs.snackbar.showSnackbar({
            color: 'bg-black',
            message: `${name} berhasil disalin`,
            className: '',
          });
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    },
    formatCodePayment(value) {
      if (value) {
        const currency = this.currencyFormat(value);
        const startTotal = currency.substring(0, currency.length - 3);
        const lastCode = currency.substring(
          currency.length - 3,
          currency.length
        );
        return `${startTotal}<span class="text-green-seakun">${lastCode}</span>`;
      }
      return '-';
    },
  },
};
</script>
<style lang="scss" scoped>
.payment-detail {
  &__label {
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    color: rgba(54, 54, 54, 0.5);
  }
  &__price {
    p {
      font-style: normal;
      font-weight: 800;
      color: #2f2a32;
      span {
        color: #8dcabe;
      }
    }
    svg {
      width: 16px;
      height: auto;
      display: inline-block;
      fill: #8dcabe;
      cursor: pointer;
    }
  }

  &__alert {
    font-style: normal;
    // font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #363636;
  }
}
.payment-options {
  img {
    height: 60px;
    width: 120px;
    object-fit: contain;
  }
  &__norek {
    span {
      display: inline-block;
    }
    svg {
      width: 12px;
      height: auto;
      display: inline-block;
      fill: #8dcabe;
      margin-top: -8px;
      cursor: pointer;
    }
  }
}
</style>
