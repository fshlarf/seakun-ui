<template>
  <div class="flex">
    <div class="ml-[160px] mr-[136px] mt-[134px]">
      <h1 class="w-[424px] text-[53px] font-bold text-[#417465]">
        Temukan <br />
        Teman Tinggal Bareng di Seatap
      </h1>
      <p class="text-lg pt-6 text-[#66738F]">
        Memudahkan kamu mencari teman patungan untuk nyewa kontrakan atau kamar
        kos
      </p>
      <div class="pt-6">
        <Button
          label="Mulai Cari"
          class="w-auto bg-[#417465] px-4 text-sm text-white rounded-sm"
        />
        <Button
          label="Tentang Seatap"
          class="w-auto text-sm border-[#417465] rounded-sm"
          add-class="text-[#417465]"
        />
      </div>
      <div class="flex gap-[39px] pt-[108px]">
        <div>
          <h1 class="text-[32px] text-[#417465] font-bold">100+</h1>
          <p class="text-lg text-[#66738F]">Online User</p>
        </div>
        <div>
          <h1 class="text-[32px] text-[#417465] font-bold">20k+</h1>
          <p class="text-lg text-[#66738F]">Lorem Ipsum</p>
        </div>
        <div>
          <h1 class="text-[32px] text-[#417465] font-bold">150+</h1>
          <p class="text-lg text-[#66738F]">Lorem Ipsum</p>
        </div>
      </div>
    </div>
    <div class="w-[720px] h-[900px]">
      <img src="/images/seatap/bg-header-seatap.png" alt="header image" />
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
