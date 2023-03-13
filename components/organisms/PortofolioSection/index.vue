<template>
  <div class="tn:pt-20 tn:pb-12 lg:pb-16 text-center bg-gradient">
    <h2 class="tn:text-[20px] md:text-[30px] xl:text-[36px] font-bold">
      Jadilah bagian dari Seakun
    </h2>
    <p
      class="tn:text-[14px] md:text-[24px] text-[#15382F] tn:w-[283px] md:w-[600px] lg:w-[928px] mx-auto font-normal tn:mt-2 lg:mt-4"
    >
      Dapatkan manfaat Patungan Berlangganan. Nikmati layanan premium dengan
      lebih hemat, aman dan legal
    </p>
    <div
      class="xl:!container grid tn:grid-cols-2 xl:grid-cols-4 tn:gap-2 md:gap-[20px] items-center tn:mt-6 lg:mt-12 tn:px-6 md:px-20 lg:px-32"
    >
      <div
        v-for="(porto, id) in portofolio"
        :key="id"
        class="w-full shadow-md rounded-[8px] bg-white tn:py-5 md:py-[32px] tn:px-[15px] md:px-[20px]"
      >
        <div class="tn:flex tn:space-x-2 md:space-x-3 items-center">
          <img
            class="tn:w-[20px] md:w-[32px]"
            :src="`/images/portofolio/${porto.icon}.svg`"
            :alt="porto.name"
          />
          <div class="text-left">
            <p
              class="tn:text-[21px] md:text-[40px] font-bold tn:-mb-1.5 md:-mb-3 !pb-0 tracking-tighter"
            >
              {{ porto.counter }}
            </p>
            <p class="tn:hidden md:block md:text-[18px]">{{ porto.name }}</p>
            <p class="tn:text-[13px] text-left md:hidden">
              {{ porto.name == 'Tingkat Kepuasan' ? 'Kepuasan' : porto.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portofolio: [
        {
          name: 'Pengguna',
          counter: '38.000+',
          icon: 'user',
        },
        {
          name: 'Transaksi',
          counter: '210.000+',
          icon: 'transaction',
        },
        {
          name: 'Layanan',
          counter: '27',
          icon: 'service',
        },
        {
          name: 'Tingkat Kepuasan',
          counter: '9/10',
          icon: 'rating',
        },
      ],
    };
  },
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(175.34deg, #ffffff 3.77%, #f2fffc 96.23%);
}
</style>
