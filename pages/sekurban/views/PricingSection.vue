<template>
  <div class="bg-[#F3FFFD]">
    <div
      id="pricing-sekurban"
      class="container-sekurban-new lg:mb-5 flex flex-col lg:flex-row lg:justify-between items-end"
    >
      <div class="hidden lg:block w-1/4">
        <img src="/images/sekurban-new/illustrations/cow-1.png" width="300px" />
      </div>
      <div
        class="w-full lg:w-2/4 text-center mx-0 lg:mx-20 my-[41.5px] md:my-[44px] lg:my-[44px]"
      >
        <div class="mb-[10px] md:mb-4">
          <div
            class="text-xs md:text-sm font-bold bg-[#C0F5EA] text-primary py-1 lg:py-1.5 px-2 lg:px-3 inline-block rounded-lg"
          >
            Rincian Biaya
          </div>
          <h2
            class="text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-1 md:mb-3"
          >
            Biaya Patungan Sapi Qurban
          </h2>
          <p class="text-xs md:text-sm font-normal leading-[22px]">
            Berikut ini rincian biaya sapi qurban pada program yang diadakan
            oleh Seakun, Kitabisa dan Ecoqurban.
          </p>
        </div>
        <section class="mb-4 md:mb-5">
          <img
            src="/images/illustration/labels-can-pay-twice.webp"
            alt="installment-payment"
            class="w-[200px] h-[46px] md:w-[261px] md:h-[59px] mx-auto"
          />
        </section>
        <div class="bg-[#D7FCF2] rounded-xl border-2 border-primary p-3 lg:p-4">
          <div class="flex flex-col gap-1 lg:gap-3">
            <div class="flex justify-between items-center">
              <div class="flex gap-2 items-center">
                <img
                  src="/images/sekurban-new/icons/wallet.svg"
                  class="w-5 h-5"
                />
                <span
                  class="text-xs md:text-sm lg:text-base font-bold text-main"
                  >Harga Sapi</span
                >
              </div>
              <span class="text-xs md:text-sm lg:text-base font-bold text-main"
                >Rp12.300.000</span
              >
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-2 items-center">
                <img
                  src="/images/sekurban-new/icons/person.svg"
                  class="w-5 h-5"
                />
                <span
                  class="text-xs md:text-sm lg:text-base font-bold text-main"
                  >Harga Per orang (7 orang)</span
                >
              </div>
              <span class="text-xs md:text-sm lg:text-base font-bold text-main"
                >Rp1.757.143</span
              >
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-2 items-center">
                <img
                  src="/images/sekurban-new/icons/price-tag.svg"
                  class="w-5 h-5"
                />
                <span
                  class="text-xs md:text-sm lg:text-base font-bold text-main"
                  >Biaya Admin Seakun</span
                >
              </div>
              <span class="text-xs md:text-sm lg:text-base font-bold text-main"
                >Rp132.857</span
              >
            </div>
          </div>
          <button
            class="bg-primary rounded-lg py-3 px-4 w-full mt-4 lg:mt-6 text-white font-bold text-xs md:text-sm lg:text-base"
            @click="$emit('onClickOrder')"
            :disabled="
              isLoadingProviderSekurban || isLoadingOrder || !isSekurbanOpen
            "
          >
            <div class="" v-if="isLoadingProviderSekurban || isLoadingOrder">
              <div>
                <i class="fa-solid fa-circle-notch fa-spin"></i>
                Loading...
              </div>
            </div>
            <div class="flex justify-between" v-else>
              <p>Total Biaya Per orang</p>
              <p>Rp1.890.000</p>
            </div>
          </button>
        </div>
      </div>
      <div class="hidden lg:block w-1/4">
        <img src="/images/sekurban-new/illustrations/cow-2.png" width="300px" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  data() {
    return {
      isSekurbanOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      isLoadingProviderSekurban: 'getIsLoadingProviderSekurban',
      isLoadingOrder: 'getLoadingCreateOrder',
    }),
  },
};
</script>

<style lang="scss" scoped>
.bg-desc {
  background: rgba(70, 195, 163, 0.4);
}
button:disabled {
  border: 1px solid #a9e0d5 !important;
  background-color: #a9e0d5 !important;
  color: #ffffff !important;
}
button:hover:disabled {
  border: 1px solid #a9e0d5 !important;
  background-color: #a9e0d5 !important;
  color: #ffffff !important;
}
.fa {
  margin-left: -12px;
  margin-right: 8px;
}
</style>
