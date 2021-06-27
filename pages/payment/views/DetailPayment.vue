<template>
  <section>
    <Snackbar ref="snackbar" />
    <div class="payment-detail text-center mt-16">
      <p
        v-if="provider.toLowerCase() === 'sequrban'"
        class="payment-detail__label my-3 text-xl"
      >
        Transfer DP (uang muka)
      </p>
      <p v-else class="payment-detail__label my-3 text-xl">Total transfer</p>
      <div class="payment-detail__price flex align-items-center justify-center">
        <p v-if="detailPayment.loading" class="shimmer w-6/12"></p>
        <p
          v-else-if="provider.toLowerCase() === 'sequrban'"
          class="my-3 text-xl mr-2 cursor-pointer"
          @click="clickCopyHandler('Nominal', detailPayment.data.downPayment)"
          v-html="formatCodePayment(detailPayment.data.downPayment)"
        ></p>
        <p
          v-else
          class="my-3 text-xl mr-2 cursor-pointer"
          @click="clickCopyHandler('Nominal', detailPayment.data.grandTotal)"
          v-html="formatCodePayment(detailPayment.data.grandTotal)"
        ></p>
        <CopyIcon
          @click="clickCopyHandler('Nominal', detailPayment.data.downPayment)"
        />
      </div>
      <p class="payment-detail__alert my-3">
        Pastikan nominal sesuai hingga 3 digit terakhir
      </p>
    </div>
    <div class="payment-method">
      <h3 class="payment-method__title text-center text-bold mt-6">
        Transfer Ke
      </h3>
      <div
        v-if="provider.toLowerCase() === 'sequrban'"
        class="payment-method__options grid grid-cols-2 gap-1 px-4 py-6"
      >
        <div
          v-for="(payment, index) in paymentMethodSekurban"
          :key="index"
          class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center"
        >
          <img
            :src="`/images/payment/${payment.name}.png`"
            class="w-8/12 my-2"
          />
          <p
            class="mt-4 payment-options__norek text-sm font-bold"
            @click="clickCopyHandler('Rekening', '1150046427383')"
          >
            {{ payment.accountNumber }}
            <span class="ml-1">
              <CopyIcon @click="clickCopyHandler('Rekening', '1150046427383')"
            /></span>
          </p>
          <p class="my-1 payment-options__account-name text-sm">
            {{ payment.accountName }}
          </p>
        </div>
      </div>
      <div
        v-else
        class="payment-method__options grid grid-cols-2 gap-1 px-4 py-6"
      >
        <div
          v-for="(payment, index) in paymetnMethod"
          :key="index"
          class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center"
        >
          <img
            :src="`/images/payment/${payment.name}.png`"
            class="w-8/12 my-2"
          />
          <p
            class="mt-4 payment-options__norek text-sm font-bold"
            @click="clickCopyHandler('Rekening', '1150046427383')"
          >
            {{ payment.accountNumber }}
            <span class="ml-1">
              <CopyIcon @click="clickCopyHandler('Rekening', '1150046427383')"
            /></span>
          </p>
          <p class="my-1 payment-options__account-name text-sm">
            {{ payment.accountName }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Snackbar from '~/components/mollecules/Snackbar.vue';
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'DetailPayment',
  components: {
    Snackbar,
    CopyIcon,
  },
  props: {
    provider: {
      type: String,
      default: '',
    },
    packageId: {
      type: Number,
      default: null,
    },
    packageName: {
      type: String,
      default: '',
    },
    total: {
      type: String | Number,
      default: null,
    },
    detailPayment: {
      type: Object,
      default: () => ({
        loading: false,
        data: {},
      }),
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
      {
        name: 'ovo',
        accountNumber: '085774642738',
        accountName: 'Seakun ID / Eka Pusna',
      },
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
    paymentMethodSekurban: [
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
    font-weight: 600;
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
