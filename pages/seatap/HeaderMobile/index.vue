<template>
  <div class="relative mx-auto">
    <img
      src="/images/seatap/bg-header-seatap.png"
      alt="header image"
      class="w-full"
    />
    <div
      class="absolute top-[133px] right-[26px] w-[132px] h-[48px] rounded-lg bg-white flex gap-2 items-center"
    >
      <p class="w-[32px] h-[32px] bg-[#FFDCB2] ml-2 rounded-[4px]">
        <img src="/images/seatap/icon/lokasi.svg" alt="icon maps" />
      </p>
      <p id="btn" class="text-xs text-[#444444]">Lokasi Terbaik</p>
    </div>
    <div
      class="absolute top-[208px] left-[24px] w-[142px] h-[48px] rounded-lg bg-white flex gap-2 items-center"
    >
      <p class="w-[32px] h-[32px] bg-[#E9FAF5] ml-2 rounded-[4px]">
        <img src="/images/seatap/icon/price.svg" alt="icon price" />
      </p>
      <p id="btn" class="text-xs text-[#444444]">Harga Termurah</p>
    </div>
    <div
      class="absolute top-[382px] right-[28px] w-[165px] h-[48px] rounded-lg bg-white flex gap-2 items-center"
    >
      <p class="w-[32px] h-[32px] bg-[#A4EAF9] ml-2 rounded-[4px]">
        <img src="/images/seatap/icon/users.svg" alt="icon users" />
      </p>
      <p id="btn" class="text-xs text-[#444444]">Lingkungan Nyaman</p>
    </div>
    <div class="px-6">
      <h1 class="pt-[19px] font-bold text-[#417465] text-[48px]">
        Temukan <br />
        teman seatap bersama kami
      </h1>
      <p class="py-6 text-lg text-[#66738F]">
        Memudahkan kamu mencari teman patungan kontrakan atau kamar kos
      </p>
      <Button
        id="btn"
        label="Mulai Cari"
        class="w-full bg-[#417465] py-3 text-xl text-white rounded-sm"
      />
      <Button
        id="btn"
        label="Tentang Seatap"
        class="w-full text-xl py-3 border-[#417465] rounded-sm mt-4"
        add-class="text-[#417465]"
      />
      <div class="flex gap-[18px] justify-center mt-[65px] mb-[72px]">
        <div class="">
          <h1 class="text-[32px] text-[#417465] font-bold">100+</h1>
          <p class="text-lg text-[#66738F]">Online User</p>
        </div>
        <div class="">
          <h1 class="text-[32px] text-[#417465] font-bold">20k+</h1>
          <p class="text-lg text-[#66738F]">Lorem Ipsum</p>
        </div>
        <div class="">
          <h1 class="text-[32px] text-[#417465] font-bold">150+</h1>
          <p class="text-lg text-[#66738F]">Lorem Ipsum</p>
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
