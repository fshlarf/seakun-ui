<template>
  <div>
    <div
      class="tn:hidden md:grid relative z-0 bg-pink-setitip grid grid-cols-2 gap-3 items-center rounded-3xl md:mt-14 xl:mt-16"
    >
      <div class="text-secondary md:pl-12 lg:pl-16 py-8">
        <h1 class="md:text-xl lg:text-2xl xl:text-3xl font-bold">
          Setitip, <span class="font-normal">Nebeng Kartu Kredit</span>
        </h1>
        <p
          class="md:text-base lg:text-xl xl:text-2xl md:my-5 xl:my-8 text-secondary"
        >
          Dengan layanan
          <span class="font-bold">Nebeng Kartu Kredit Seakun</span>, Kamu bisa
          membeli dan menikmati apapun dari seluruh dunia dengan
          <span class="font-bold">Mudah, Cepat</span> dan
          <span class="font-bold">Aman</span>.
        </p>
        <Button
          label="Lihat Selengkapnya"
          variant="primary"
          shape="pill"
          add-class="md:text-base tn:py-2 md:py-3 px-4 font-bold tn:flex md:block justify-center"
          @click="toSetitipPage"
        />
      </div>
      <img
        src="/images/setitip/header/banner.png"
        alt="banner header"
        class="mx-auto tn:w-2/3 md:w-[90%] tn:order-1 md:order-2"
      />
    </div>

    <div class="md:hidden px-3">
      <div class="w-full rounded-3xl bg-pink-setitip p-8 mt-10">
        <div>
          <img
            class="w-3/4 mx-auto"
            src="/images/setitip/header/banner.png"
            alt="use seakun cc with setitip"
          />
        </div>
        <h2 class="text-xl text-secondary font-bold mt-3">
          Setitip, <span class="font-normal">Nebeng Kartu Kredit</span>
        </h2>
        <p class="text-secondary text-sm my-3">
          Dengan layanan
          <span class="font-bold">Nebeng Kartu Kredit Seakun</span>, Kamu bisa
          membeli dan menikmati apapun dari seluruh dunia dengan
          <span class="font-bold">Mudah, Cepat</span> dan
          <span class="font-bold">Aman</span>.
        </p>
        <Button
          variant="primary"
          label="Lihat selengkapnya"
          class="w-full"
          @click="toSetitipPage"
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
  methods: {
    toSetitipPage() {
      this.$router.push('/setitip');
    },
  },
};
</script>

<style></style>
