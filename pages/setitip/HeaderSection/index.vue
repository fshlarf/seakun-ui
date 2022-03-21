<template>
  <div class="relative z-0">
    <div class="absolute z-10 bg-pink w-full">
      <img
        class="object-cover tn:h-[550px] md:h-[420px] lg:h-[520px] xl:h-auto xl:w-full"
        src="/images/setitip/header/background.png"
        alt="background header"
      />
    </div>
    <div
      class="container relative grid tn:grid-cols-1 md:grid-cols-2 tn:gap-3 md:gap-16 z-40 tn:py-24 md:py-24 xl:py-32 items-center"
    >
      <div class="text-secondary tn:order-2 md:order-1 tn:px-3 md:px-0">
        <h1 class="tn:text-2xl md:3xl xl:text-4xl font-semibold">
          <span class="font-bold">Setitip,</span> Nebeng Kartu Kredit
        </h1>
        <h3 class="tn:text-lg md:text-xl xl:text-2xl">
          by <span class="font-bold">Seakun.id</span>
        </h3>
        <p
          class="tn:text-sm md:text-base xl:text-2xl font-normal tn:my-3 md:my-5 xl:my-8"
        >
          Dengan layanan
          <span class="font-bold">Nebeng Kartu Kredit Seakun</span>, Kamu bisa
          membeli dan menikmati apapun dari seluruh dunia dengan
          <span class="font-bold">Mudah, Cepat</span> dan
          <span class="font-bold">Aman</span>.
        </p>
        <Button
          label="Daftar Sekarang"
          variant="primary"
          shape="pill"
          add-class="tn:text-sm md:text-base tn:py-2 md:py-3 px-4 font-bold tn:flex md:block justify-center tn:mx-auto md:mx-0"
          @click="toOrderPage"
        />
      </div>
      <img
        src="/images/setitip/header/banner.png"
        alt="banner header"
        class="mx-auto tn:w-2/3 md:w-full tn:order-1 md:order-2"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
export default {
  components: {
    Button,
  },
  methods: {
    toOrderPage() {
      this.$router.push('/setitip/order');
    },
  },
};
</script>

<style>
@media only screen and (max-width: 1024px) {
  .bg-pink {
    left: 50%;
    transform: translateX(-50%);
  }
}
@media only screen and (min-width: 1600px) {
  .bg-pink {
    margin-top: -10rem;
  }
}
</style>
