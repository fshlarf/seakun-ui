<template>
  <div class="tn:w-full relative z-0">
    <img
      class="tn:hidden md:block tn:w-full tn:absolute tn:z-0 tn:top-0 tn:right-0"
      src="/images/sekeranjang/bg-header.png"
      alt="background header"
    />
    <img
      class="tn:w-full tn:absolute tn:z-0 tn:top-0 md:hidden"
      src="/images/sekeranjang/bg-header-mobile.png"
      alt="background header"
    />
    <div
      class="!container relative tn:grid tn:grid-cols-1 md:grid-cols-2 tn:gap-6 tn:items-center tn:z-20 tn:pt-20 md:pt-24 xl:pt-64 tn:px-8 lg:px-10 xl:px-2"
    >
      <div class="tn:px-8 md:px-4 xl:px-0">
        <h1 class="tn:text-[36px] md:text-[40px] lg:text-[56px] font-bold">
          Sekeranjang
        </h1>
        <h2
          class="tn:text-[20px] md:text-[28px] lg:text-[40px] text-[#474747] tn:mt-1 md:mt-2 lg:mt-4"
        >
          Belanja bareng di
          <span class="text-secondary font-bold">seakun.id</span>!
        </h2>
        <p
          class="tn:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] tn:mt-4 lg:mt-8 text-[#A0A3BD] xl:tracking-wide xl:leading-8"
        >
          Temukan barang favoritmu dengan harga jauh lebih murah dari harga
          normal dengan konsep beli barang secara bersama untuk mendapatkan
          diskon lebih banyak.
        </p>
      </div>
      <div class="tn:px-3 md:px-0">
        <img
          class="tn:w-full"
          src="/images/sekeranjang/header-illustration.png"
          alt="header illustration"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: 'DM Sans', sans-serif !important;
}
</style>
