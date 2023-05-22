<template>
  <div
    id="bg"
    class="lg:container lg:py-[58px] lg:px-[139px] tn:py-[96px] tn:px-[44px]"
  >
    <div
      id="backdrop"
      class="container h-auto w-full lg:py-12 tn:py-[79px] mx-auto text-center tn:px-4"
    >
      <h1 class="lg:text-3xl tn:text-2xl text-[#4C4C4D] font-bold">
        Daftarkan tempat kamu di Seatap-seakun?
      </h1>
      <p class="my-6 md:text-lg tn:text-xs tn:px-1 lg:px-[219px] md:px-28">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus.
      </p>
      <button
        class="w-[160px] h-[50px] bg-[#417465] rounded-[4px] text-white text-xl text-center"
      >
        Daftar
      </button>
    </div>
  </div>
</template>
<style scoped>
#bg {
  background-image: url('/images/seatap/bg-order-section.png');
}
#backdrop {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 20px;
}

@media (max-width: 500px) {
  #bg {
    background-position: 660px 0px;
    background-size: cover;
  }
}
</style>
