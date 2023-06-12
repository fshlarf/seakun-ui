<template>
  <div
    class="payment-method__options flex md:flex-nowrap tn:flex-wrap lg:gap-5 tn:gap-3 justify-center md:mt-6 tn:mt-3"
  >
    <div
      v-for="(payment, index) in PaymentMethodList"
      :key="index"
      class="payment-options md:max-w-[237px] tn:w-full lg:pl-[33px] md:pl-3 tn:pl-5 lg:pr-2 md:pr-0 tn:pr-2 tn:rounded-xl md:rounded-lg flex md:flex-wrap tn:flex-nowrap items-center bg-opacity-50 border-[1px] border-black"
      :class="`${
        payment.bank === 'Mandiri'
          ? 'bg-[#FEFDE0] border-[#FAF8D7]'
          : payment.bank === 'BCA'
          ? 'bg-[#D6EAFF] border-[#D3E9FF]'
          : 'bg-[#CAFFFC] border-[#C3F4F2]'
      }`"
    >
      <img
        :src="`/images/payment/new/${payment.bank.toLowerCase()}.png`"
        class="md:mt-[17px] md:h-[34px]"
      />
      <div class="tn:pl-11 md:pl-0">
        <p
          class="tn:mt-[30.5px] md:mt-4 payment-options__norek tn:text-xs md:text-xl font-bold"
          @click="
            $emit('clickCopyHandler', 'Rekening', payment.bankAccountNumber)
          "
        >
          {{ payment.bankAccountNumber }}
          <span>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              :class="`${
                payment.bank === 'Mandiri'
                  ? 'fill-[#F2D499]'
                  : payment.bank === 'BCA'
                  ? 'fill-[#85B9EE]'
                  : 'fill-[#73CCE8]'
              }`"
              xmlns="http://www.w3.org/2000/svg"
              @click="
                $emit('clickCopyHandler', 'Rekening', payment.bankAccountNumber)
              "
            >
              <path
                d="M8.83379 13.5167H2.16712C1.80984 13.5291 1.46344 13.3927 1.21065 13.1399C0.957856 12.8871 0.821371 12.5407 0.833787 12.1834V5.51673C0.821371 5.15945 0.957856 4.81305 1.21065 4.56026C1.46344 4.30747 1.80984 4.17098 2.16712 4.1834H4.83379V1.51673C4.82137 1.15945 4.95786 0.813045 5.21065 0.560255C5.46344 0.307465 5.80984 0.17098 6.16712 0.183396H12.8338C13.1911 0.17098 13.5375 0.307465 13.7903 0.560255C14.0431 0.813045 14.1795 1.15945 14.1671 1.51673V8.1834C14.1793 8.54062 14.0428 8.88691 13.79 9.13965C13.5373 9.3924 13.191 9.52894 12.8338 9.51673H10.1671V12.1834C10.1793 12.5406 10.0428 12.8869 9.79004 13.1397C9.5373 13.3924 9.19101 13.5289 8.83379 13.5167ZM2.16712 5.51673V12.1834H8.83379V9.51673H6.16712C5.80989 9.52894 5.46361 9.3924 5.21087 9.13965C4.95812 8.88691 4.82157 8.54062 4.83379 8.1834V5.51673H2.16712ZM6.16712 1.51673V8.1834H12.8338V1.51673H6.16712Z"
              />
            </svg>

            <!-- <CopyIcon
              @click="
                $emit('clickCopyHandler', 'Rekening', payment.bankAccountNumber)
              "
          /> -->
          </span>
        </p>
        <p
          class="md:mb-[14px] tn:mb-[30.5px] payment-options__account-name tn:text-xs md:text-sm text-[#2D2D2D]"
        >
          {{ payment.bankAccountName }}
        </p>
      </div>
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
      margin-top: -8px;
      cursor: pointer;
    }
  }
}
</style>
