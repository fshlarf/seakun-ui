<template>
  <div id="head" class="relative">
    <div
      class="absolute top-0 left-0 z-0 w-full tn:h-[411px] xl:h-[520px]"
    ></div>
    <div class="px-[24px] md:!container pt-20 md:pt-28 lg:pt-36 relative z-20">
      <div
        class="w-full rounded-2xl bg-[#BCEAE1] flex tn:flex-col md:flex-row md:justify-between md:items-end tn:py-8 md:p-0"
      >
        <div
          class="pt-[10px] md:py-[32px] lg:py-[42px] tn:px-[24px] md:pl-[40px] lg:pl-[63px] md:pr-0 md:w-[620px] lg:w-[610px] tn:order-2 md:order-1"
        >
          <h1
            class="font-extrabold text-base md:text-xl lg:text-[30px] text-[#2A5446] xl:leading-[44px] tn:text-center md:text-left"
          >
            <span class="whitespace-nowrap">Semabar (Seakun Main Bareng)</span
            ><br class="sm:hidden" />
            <span>Bermain, Olahraga Bersama-Sama</span>
          </h1>
          <p
            class="text-dark-green text-xs md:text-sm lg:text-[18px] tn:mt-3 tn:text-center md:text-left leading-normal"
          >
            Cari teman main bareng untuk olahraga dan game favoritmu dengan
            mudah, dan aman lewat Seakun Main Bareng.
          </p>
          <Button
            variant="gradient-dark"
            label="Lihat Layanan"
            class="tn:mt-6 xl:mt-12 tn:w-full md:w-auto"
            add-class="text-[24px] font-bold"
            @click="onClickOrder"
          />
        </div>
        <div class="tn:px-[27px] md:px-0 md:pr-[42px] tn:order-1 md:order-2">
          <img
            class="md:w-[450px] lg:w-[445px] mx-auto"
            src="/images/semabar/header/banner.svg"
            alt="seakun"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  data() {
    return {};
  },

  methods: {
    onClickOrder() {
      const penggunaSection = document.getElementById('provider-semabar');
      penggunaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  },
};
</script>

<style>
#head {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
