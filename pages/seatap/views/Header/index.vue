<template>
  <div class="tn:w-full relative z-0">
    <div
      class="!container relative tn:grid tn:grid-cols-1 md:grid-cols-2 tn:gap-6 tn:items-center tn:z-20 tn:pt-20 md:pt-24 xl:pt-64 tn:px-8 lg:px-10 xl:px-2"
    >
      <div class="tn:px-8 md:px-4 xl:px-0 w-424px">
        <h1 class="text-5xl font-bold text-[#417465]">
          Temukan <br />
          Teman Tinggal Bareng di Seatap
        </h1>
        <p class="text-18px mt-4 text-[#66738F] xl:tracking-wide xl:leading-8">
          Memudahkan kamu mencari teman patungan untuk nyewa kontrakan atau
          kamar kos
        </p>
        <Button
          label="Mulai Cari"
          class="w-auto bg-[#417465] px-4 text-sm text-white"
        />
        <Button
          label="Tentang Seatap"
          class="w-auto text-sm border-[#417465]"
          add-class="text-[#417465]"
        />
      </div>
      <div class="tn:px-3 md:px-0">
        <img
          class="tn:w-full"
          src="/images/seatap/bg-header-seatap.png"
          alt="header image"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';

export default {
  components: {
    Button,
  },
};
</script>
