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
        <div class="mb-8 md:mb-5">
          <div
            class="text-xs md:text-sm font-bold bg-[#C0F5EA] text-primary py-1 lg:py-1.5 px-2 lg:px-3 inline-block rounded-lg"
          >
            Rincian Biaya
          </div>
          <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-1 md:mb-3">
            Biaya Patungan Sapi Qurban
          </h2>
          <p class="text-xs md:text-sm font-normal leading-[22px]">
            Berikut ini rincian biaya sapi qurban pada program yang diadakan
            oleh Seakun, Kitabisa dan Ecoqurban.
          </p>
        </div>
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
                >Rp1.757.142</span
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
                >Rpxxxxxx</span
              >
            </div>
          </div>
          <button class="bg-primary rounded-lg py-3 px-4 w-full mt-4 lg:mt-6">
            <div
              class="flex justify-between text-white font-bold text-xs md:text-sm lg:text-base"
            >
              <p>Total Biaya Per orang</p>
              <p>Rpxxxxxx</p>
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
export default {};
</script>

<style>
.bg-desc {
  background: rgba(70, 195, 163, 0.4);
}
</style>
