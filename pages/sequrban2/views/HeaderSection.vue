<template>
  <div class="tn:px-4 md:container tn:pt-20 lg:pt-28">
    <div
      class="rounded-[16px] w-full bg-gradient-sequrban tn:px-[40px] lg:px-[66px] tn:py-[24px] lg:py-[42px] grid md:grid-cols-2 tn:gap-4 lg:gap-8 items-center"
    >
      <div class="tn:order-2 md:order-1">
        <h1
          class="tn:px-4 lg:px-0 text-[#15382F] tn:text-center lg:text-left tn:text-[26px] lg:text-[48px] font-bold"
        >
          Patungan Qurban Sapi bersama
        </h1>
        <div
          class="flex items-center tn:justify-center lg:justify-start tn:space-x-2 lg:space-x-4 tn:mt-2 lg:mt-3"
        >
          <img
            class="tn:w-[117px] lg:w-[178px]"
            src="/images/sequrban/brand-seakun.png"
            alt="seakun"
          />
          <p class="tn:text-[24px] lg:text-[40px] text-secondary font-bold">
            x
          </p>
          <img
            class="tn:w-[110px] lg:w-[170px]"
            src="/images/sequrban/brand-kita-bisa.png"
            alt="kita bisa"
          />
        </div>
        <p
          class="text-white lg:font-bold tn:text-[12px] tn:leading-[20px] lg:text-[18px] tn:mt-2 lg:mt-3 tn:text-center lg:text-left"
        >
          Kini Seakun berkolaborasi dengan Kitabisa dalam rangka membantu sesama
          untuk menunaikan ibadah qurban.
        </p>
        <div class="tn:mt-4 lg:mt-8 tn:w-full lg:w-[240px] tn:px-3 lg:px-0">
          <Button
            add-class="w-full tn:text-[12px] lg:!text-[24px] font-bold !px-5 tn:!py-3 lg:!py-2"
            variant="third"
            >Lihat Layanan</Button
          >
        </div>
      </div>
      <div class="tn:order-1 md:order-2">
        <img
          class="!w-[460px]"
          src="/images/sequrban/banner-main.png"
          alt="patungan qurban"
        />
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
};
</script>

<style>
.bg-gradient-sequrban {
  background: linear-gradient(96.79deg, #a6eadc 1.13%, #98daf2 103.41%);
}
</style>
