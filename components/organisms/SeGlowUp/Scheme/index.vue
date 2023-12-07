<template>
  <div
    class="pt-[30px] wrapper-scheme bg-cover pb-[35px] md:pb-[45px] lg:pb-[69px]"
    id="price-scheme-seglowup"
  >
    <div class="w-full text-center text-[#2A5446] text-nunito">
      <h1 class="font-[800] text-base md:text-xl lg:text-[30px]">
        Contoh Skema Harga
      </h1>
      <p
        class="text-sm md:text-base lg:text-lg pt-1 md:pt-2 leading-normal mx-auto max-w-[271px] md:max-w-full"
      >
        Berikut ini contoh skema harga untuk salah satu layanan SeGlowUp
      </p>
    </div>
    <div class="w-full px-[1rem] md:px-0">
      <div
        class="bg-white p-5 w-full md:w-max mx-auto rounded-[10px] md:rounded-[12px] md:min-w-[430px] mt-8"
        style="box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);

    Show 4 more colors
    "
      >
        <section
          class="border bg-[#EEFDFA] border-[#D9FCF2] rounded-[6px] text-center"
        >
          <p
            class="text-[#08A081] text-sm md:text-base leading-[44px] md:py-3 font-bold"
          >
            Paket ZAP Series Rp1.249K
          </p>
        </section>
        <section
          class="text-xs md:text-sm lg:text-base text-gray-secondary space-y-1 md:space-y-2 lg:space-y-3 mt-3 leading-normal"
        >
          <div class="flex items-center justify-between">
            <p>Jumlah Treatment</p>
            <p>32x</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Jumlah Member</p>
            <p>4x</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Jumlah Treatment Per Member</p>
            <p>8x</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Harga 32x Treatment</p>
            <p>Rp39.968.000</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Diskon Patungan</p>
            <p>Rp5.995.200</p>
          </div>
          <div class="flex items-start justify-between">
            <div>
              <p>Harga Per Member 8x Treatment</p>
              <p>(Rp33.972.800 ÷ 4)</p>
            </div>
            <p>Rp8.493.200</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Diskon Patungan</p>
            <p>Rp1.498.800</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Biaya Admin Seakun</p>
            <p>Rp75.000</p>
          </div>
          <div class="flex items-center justify-between font-bold">
            <p>Harga Patungan Per Member</p>
            <p class="text-[#08A081]">Rp8.569.000</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
@media (min-width: 1024px) {
  .wrapper-scheme {
    background-image: url('/images/seglowup/background/scheme.png');
  }
}
.wrapper-scheme {
  background-image: url('/images/seglowup/background/scheme-mobile.webp');
}
</style>
