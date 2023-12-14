<template>
  <div class="p-4 w-full min-h-screen bg-[#F4F7F9]">
    <img
      class="w-[100px] h-[25px]] mx-auto"
      src="/images/navbar/brand_seakun.svg"
      alt="brand seakun"
    />
    <div
      class="w-full mt-5 sm:max-w-[570px] mx-auto bg-white p-5 md:p-6 space-y-5 md:space-y-7 lg:space-y-9 rounded-[10px]"
    >
      <div>
        <img
          src="/images/seglowup/order/waiting-list-group.webp"
          alt="waiting list"
          class="w-[140px] h-[120px] md:w-[200px] md:h-[174px] lg:w-[250px] lg:h-[214px] mx-auto"
        />
        <div class="pt-4 text-center w-full">
          <p
            class="text-base md:text-xl lg:text-[28px] font-bold text-[#08A081]"
          >
            Hai, Clara!
          </p>
          <div
            class="text-xs md:text-sm text-main text-center w-full mt-2 md:mt-4"
          >
            <section
              class="max-w-[266px] sm:max-w-[470px] md:max-w-[434px] mx-auto space-y-2 md:space-y-4"
            >
              <p>
                Kamu berhasil masuk waiting list Group Patungan ZAP Series 299RB
              </p>
              <p>
                Jangan khawatir. Kamu akan mendapatkan pemberitahuan ketika grup
                sudah full member. 1 grup terdiri dari 4 member, kamu dapat
                meakukan pembayaran dan pihak Seakun akan segera memproses
                pesanan kamu.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="text-center">
        <Button
          class="w-full bg-[#08A081] text-white !rounded-lg h-[42px] md:h-[48px] text-sm font-bold"
          >Beli Produk Lainnya</Button
        >
      </div>
      <div class="text-center text-main text-xs">
        <p class="max-w-[266px] sm:max-w-[470px] md:max-w-[434px] mx-auto">
          E-mail ini dibuat otomatis, mohon tidak membalas. Jika ada kendala,
          silakan hubungi <span class="text-[#08A081]">Admin Seakun</span>.
        </p>
      </div>
    </div>
    <p
      class="text-[#08A081] leading-[165%] text-center py-5 text-xs md:text-sm lg:text-base"
    >
      Copyright © 2023 Seakun.id
    </p>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
