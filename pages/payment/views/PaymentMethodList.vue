<template>
  <div class="payment-method__options flex flex-wrap justify-center my-3">
    <div
      v-for="(payment, index) in PaymentMethodList"
      :key="index"
      class="payment-options bg-white shadow-md w-[45%] tn:rounded-xl md:rounded-lg tn:p-3 md:p-6 tn:m-1 md:m-2 flex flex-column justify-center items-center text-center"
    >
      <img
        :src="`/images/payment/${payment.bank.toLowerCase()}.png`"
        class="w-8/12 my-2"
      />
      <p
        class="tn:mt-2 md:mt-4 payment-options__norek tn:text-xs md:text-base font-bold"
        @click="
          $emit('clickCopyHandler', 'Rekening', payment.bankAccountNumber)
        "
      >
        {{ payment.bankAccountNumber }}
        <span class="ml-1">
          <CopyIcon
            @click="
              $emit('clickCopyHandler', 'Rekening', payment.bankAccountNumber)
            "
        /></span>
      </p>
      <p class="my-1 payment-options__account-name tn:text-xs md:text-base">
        {{ payment.bankAccountName }}
      </p>
    </div>
  </div>
</template>

<script>
import CopyIcon from '~/assets/images/icon/copy.svg?inline';

export default {
  name: 'PaymentMethod',
  components: {
    CopyIcon,
  },
  props: {
    PaymentMethodList: {
      type: Array,
      default: () => [],
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
    font-weight: 700;
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
