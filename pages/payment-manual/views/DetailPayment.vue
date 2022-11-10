<template>
  <section>
    <Snackbar ref="snackbar" />
    <div class="payment-detail text-center tn:mt-10 md:mt-16">
      <p
        v-if="provider.toLowerCase() === 'sequrban' && detailPaymentSequrban"
        class="payment-detail__label my-3 text-xl"
      >
        Transfer DP (uang muka)
      </p>
      <p v-else class="payment-detail__label tn:my-1 md:my-3 text-xl">
        Total transfer
      </p>
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
          class="payment-detail__price flex align-items-center justify-center cursor-pointer"
          @click="clickCopyHandler('Nominal', totalPaymentDigital)"
        >
          <p
            class="my-3 text-xl mr-2 cursor-pointer"
            v-html="formatCodePayment(totalPaymentDigital)"
          ></p>
          <CopyIcon />
        </div>
      </div>

      <!-- </div> -->
      <!-- <p class="payment-detail__alert tn:my-1 md:my-2">
        Pastikan nominal sesuai hingga 3 digit terakhir
      </p> -->
      <div class="px-2">
        <WarningInfo
          class="w-full"
          text="Pastikan nominal sesuai hingga 3 digit terakhir"
        />
      </div>
    </div>
    <div class="payment-method">
      <h3 class="payment-method__title text-center font-bold mt-10">
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
import WarningInfo from '~/components/mollecules/WarningInfo.vue';
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
    WarningInfo,
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
    font-size: 16px;
    line-height: 21px;
    color: rgba(54, 54, 54, 0.5);
  }
  &__price {
    p {
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 31px;
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
      margin-top: -8px;
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
