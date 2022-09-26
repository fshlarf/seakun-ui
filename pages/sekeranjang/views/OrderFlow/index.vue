<template>
  <div class="relative z-0 tn:mt-20 tn:py-40 bg-wave">
    <div class="w-full h-[40px] bg-wave-white absolute top-0 z-20"></div>
    <div class="relative z-10">
      <h1 class="text-[40px] font-bold text-center">Alur Pesanan</h1>
      <p class="text-center text-[#A0A3BD] w-[730px] mx-auto tn:mt-4">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <div
        class="tn:flex tn:justify-center tn:space-x-4 tn:items-center tn:mt-12"
      >
        <div class="text-center w-[192px] space-y-1">
          <img
            class="mx-auto"
            src="/images/sekeranjang/order flow/step-1.svg"
            alt="step 1"
          />
          <p class="text-secondary font-semibold">Pilih Barang</p>
          <p class="text-[#474747]">Pilih barang yang kamu inginkan</p>
        </div>
        <div>
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div class="text-center w-[192px] space-y-1">
          <img
            class="mx-auto"
            src="/images/sekeranjang/order flow/step-2.svg"
            alt="step 2"
          />
          <p class="text-secondary font-semibold">Daftar</p>
          <p class="text-[#474747]">
            Daftarkan data diri untuk proses lebih lanjut
          </p>
        </div>
        <div>
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div class="text-center w-[192px] space-y-1">
          <img
            class="mx-auto"
            src="/images/sekeranjang/order flow/step-3.svg"
            alt="step 3"
          />
          <p class="text-secondary font-semibold">Menunggu</p>
          <p class="text-[#474747]">Menunggu grup belanja bareng full</p>
        </div>
        <div>
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div class="text-center w-[192px] space-y-1">
          <img
            class="mx-auto"
            src="/images/sekeranjang/order flow/step-4.svg"
            alt="step 4"
          />
          <p class="text-secondary font-semibold">Bayar</p>
          <p class="text-[#474747]">Melakukan pembayaran barang</p>
        </div>
        <div>
          <img src="/images/sekeranjang/order flow/line.svg" alt="separator" />
        </div>
        <div class="text-center w-[192px] space-y-1">
          <img
            class="mx-auto"
            src="/images/sekeranjang/order flow/step-5.svg"
            alt="step 5"
          />
          <p class="text-secondary font-semibold">Terima Barang</p>
          <p class="text-[#474747]">Konfirmasi barang sudah diterima</p>
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
  clip-path: ellipse(129% 100% at 50% 0%);
}
</style>
