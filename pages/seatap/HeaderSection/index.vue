<template>
  <div class="relative z-0 lg:h-[900px]">
    <div class="grid tn:grid-cols-1 md:grid-cols-2 z-0">
      <div
        class="lg:pt-[229px] lg:pb-[339px] lg:ml-auto lg:pr-[136px] tn:pt-10 tn:ml-10 tn:pr-16"
      >
        <h1
          class="lg:w-[424px] lg:text-[53px] tn:text-[35px] font-bold text-[#417465]"
        >
          Temukan <br />
          Teman Tinggal Bareng di Seatap
        </h1>
        <p
          class="lg:w-[414px] lg:pt-[24px] lg:text-lg tn:text-xs tn:w-[300px] text-[#66738F]"
        >
          Memudahkan kamu mencari teman patungan untuk nyewa kontrakan atau
          kamar kos
        </p>
        <div id="btn" class="space-x-[16px] pt-[24px]">
          <Button
            label="Mulai Cari"
            class="w-auto bg-[#417465] px-4 text-sm text-white rounded-sm"
          />
          <Button
            label="Tentang Seatap"
            class="lg:w-auto text-sm border-[#417465] rounded-sm"
            add-class="text-[#417465]"
          />
        </div>
        <div class="flex gap-[39px]">
          <div class="pt-[108px]">
            <h1 class="text-[32px] text-[#417465] font-bold">100+</h1>
            <p class="lg:text-lg tn:text-sm text-[#66738F]">Online User</p>
          </div>
          <div class="pt-[108px]">
            <h1 class="text-[32px] text-[#417465] font-bold">20k+</h1>
            <p class="lg:text-lg tn:text-xs text-[#66738F]">Lorem Ipsum</p>
          </div>
          <div class="pt-[108px]">
            <h1 class="text-[32px] text-[#417465] font-bold">150+</h1>
            <p class="lg:text-lg tn:text-xs text-[#66738F]">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div class="relative mr-auto">
        <img
          src="/images/seatap/bg-header-seatap.png"
          alt="header image"
          class="lg:h-[900px]"
        />
        <div
          class="absolute lg:lg:top-[390px] lg:right-[41px] lg:w-[264px] lg:h-[96px] tn:w-[165px] tn:h-[48px] tn:top-52 tn:right-5 rounded-lg bg-white flex gap-2 items-center"
        >
          <p
            class="lg:w-[64px] lg:h-[64px] tn:w-[32px] bg-[#FFDCB2] ml-4 rounded-[4px]"
          >
            <img src="/images/seatap/icon/lokasi.svg" alt="icon maps" />
          </p>
          <p id="btn" class="lg:text-2xl tn:text-xs text-[#444444]">
            Lokasi Terbaik
          </p>
        </div>
        <div
          class="absolute lg:top-[486px] lg:right-[460px] 2xl:right-[490px] lg:w-[316px] lg:h-[96px] tn:w-[175px] tn:h-[48px] tn:top-64 tn:right-[300px] rounded-lg bg-white flex gap-2 items-center"
        >
          <p
            class="lg:w-[64px] lg:h-[64px] tn:w-[32px] bg-[#E9FAF5] ml-4 rounded-[4px] p-2"
          >
            <img src="/images/seatap/icon/price.svg" alt="icon price" />
          </p>
          <p id="btn" class="lg:text-2xl tn:text-xs text-[#444444]">
            Harga Lebih Murah
          </p>
        </div>
        <div
          class="absolute lg:top-[744px] lg:right-[192px] lg:w-[284px] lg:h-[96px] tn:w-[165px] tn:h-[48px] tn:top-[430px] tn:right-28 rounded-lg bg-white flex gap-2 items-center"
        >
          <p
            class="lg:w-[64px] lg:h-[64px] tn:w-[32px] bg-[#A4EAF9] ml-4 rounded-[4px] p-2"
          >
            <img src="/images/seatap/icon/users.svg" alt="icon users" />
          </p>
          <p id="btn" class="lg:text-2xl tn:text-xs text-[#444444]">
            Teman Sekamar
          </p>
        </div>
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

<style>
#btn {
  font-family: 'DM Sans', sans-serif !important;
}
</style>
