<template>
  <section>
    <Snackbar ref="snackbar" />
    <div class="payment-detail text-center mt-16">
      <p class="payment-detail__label text-gray-500 font-semibold my-3">
        Total transfer
      </p>

      <div class="total-payment flex align-items-center justify-center">
        <div
          class="payment-detail__price flex align-items-center justify-center"
          @click="clickCopyHandler('Nominal', detailPayment)"
        >
          <p
            class="my-3 text-xl mr-2 cursor-pointer"
            v-html="formatCodePayment(detailPayment)"
          ></p>
          <CopyIcon />
        </div>
      </div>
    </div>
    <div class="payment-method">
      <h3 class="payment-method__title text-center font-bold mt-6">
        Transfer Ke
      </h3>
      <PaymentMethodList
        :PaymentMethodList="paymetnMethod"
        @clickCopyHandler="clickCopyHandler"
      />
    </div>
  </section>
</template>

<script>
import PaymentMethodList from './PaymentMethodList.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'DetailPayment',
  components: {
    Snackbar,
    CopyIcon,
    PaymentMethodList,
  },
  props: {
    detailPayment: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    currencyFormat,
    paymetnMethod: [
      {
        name: 'mandiri',
        accountNumber: '1150046427383',
        accountName: 'PT. Seakun Global',
      },
      {
        name: 'bca',
        accountNumber: '7660777738',
        accountName: 'PT. Seakun Global',
      },
      {
        name: 'gopay',
        accountNumber: '085774642738',
        accountName: 'Seakun ID / Eka Pusna',
      },
      // {
      //   name: 'ovo',
      //   accountNumber: '085774642738',
      //   accountName: 'Seakun ID / Eka Pusna',
      // },
      {
        name: 'link-aja',
        accountNumber: '085774642738',
        accountName: 'Seakun ID / Eka Pusna',
      },
      {
        name: 'dana',
        accountNumber: '085774642738',
        accountName: 'Seakun ID / Eka Pusna',
      },
    ],
  }),
  methods: {
    clickCopyHandler(name, value) {
      navigator.clipboard.writeText(value).then(
        () => {
          this.$refs.snackbar.showSnackbar({
            message: `${name} berhasil dicopy`,
            className: '',
          });
        },
        (err) => console.log(err)
      );
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
}
</style>
