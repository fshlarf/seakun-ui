<template>
  <div
    class="relative z-0 tn:mt-20 tn:py-12 md:py-24 lg:py-28 xl:py-40 bg-wave"
  >
    <div
      class="tn:hidden md:block w-full h-[40px] bg-wave-white absolute top-0 z-20"
    ></div>
    <div class="relative z-10">
      <h1
        class="tn:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center"
      >
        Alur Pesanan
      </h1>
      <p
        class="tn:px-4 text-center text-[#A0A3BD] max-w-[730px] mx-auto tn:mt-3 md:mt-4"
      >
        Secara ringkas Alur Pesanan produk Sekeranjang mulai dari pilih barang
        favoritmu, lakukan pemesanan, selesaikan pembayaran hingga terima
        barang.
      </p>
      <div
        class="tn:px-6 tn:w-full md:w-[430px] md:mx-auto lg:w-full tn:space-y-6 lg:space-y-0 lg:flex tn:justify-center lg:space-x-4 lg:items-center tn:mt-8 md:mt-12"
      >
        <div
          class="tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"
        >
          <img
            class="lg:mx-auto w-[34px]"
            src="/images/sekeranjang/order flow/step-1.svg"
            alt="step 1"
          />
          <div>
            <p class="text-secondary font-semibold">Pilih Barang</p>
            <p class="text-[#474747]">Pilih barang yang kamu inginkan</p>
          </div>
        </div>
        <div class="tn:hidden md:flex">
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div
          class="tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"
        >
          <img
            class="lg:mx-auto w-[34px]"
            src="/images/sekeranjang/order flow/step-2.svg"
            alt="step 2"
          />
          <div>
            <p class="text-secondary font-semibold">Daftar</p>
            <p class="text-[#474747]">
              Daftarkan data diri untuk proses lebih lanjut
            </p>
          </div>
        </div>
        <div class="tn:hidden md:flex">
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div
          class="tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"
        >
          <img
            class="lg:mx-auto w-[34px]"
            src="/images/sekeranjang/order flow/step-3.svg"
            alt="step 3"
          />
          <div>
            <p class="text-secondary font-semibold">Menunggu</p>
            <p class="text-[#474747]">Menunggu grup belanja bareng full</p>
          </div>
        </div>
        <div class="tn:hidden md:flex">
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div
          class="tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"
        >
          <img
            class="lg:mx-auto w-[34px]"
            src="/images/sekeranjang/order flow/step-4.svg"
            alt="step 4"
          />
          <div>
            <p class="text-secondary font-semibold">Bayar</p>
            <p class="text-[#474747]">Melakukan pembayaran barang</p>
          </div>
        </div>
        <div class="tn:hidden md:flex">
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div
          class="tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"
        >
          <img
            class="lg:mx-auto w-[34px]"
            src="/images/sekeranjang/order flow/step-5.svg"
            alt="step 5"
          />
          <div>
            <p class="text-secondary font-semibold">Terima Barang</p>
            <p class="text-[#474747]">Konfirmasi barang sudah diterima</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-wave-white {
  background-color: #ffffff;
  clip-path: ellipse(54% 100% at 50% 0%);
}
.bg-wave {
  background-color: #efefef;
}

@media only screen and (min-width: 500px) {
  .bg-wave {
    clip-path: ellipse(129% 100% at 50% 0%);
  }
}
</style>
