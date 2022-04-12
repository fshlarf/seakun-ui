<template>
  <div>
    <div
      class="relative z-40 bg-pink-setitip grid tn:grid-cols-1 md:grid-cols-2 tn:gap-3 items-center rounded-3xl"
    >
      <div class="text-secondary tn:order-2 md:order-1 tn:px-3 md:pl-16 py-8">
        <h1 class="tn:text-xs md:text-base xl:text-xl font-bold">
          Setitip, <span class="text-primary">Nebeng Kartu Kredit</span> by
          Seakun.id
        </h1>
        <p
          class="tn:text-sm md:text-xl xl:text-4xl font-extrabold tn:my-3 md:my-5 xl:my-8 text-secondary"
        >
          Beli <span class="text-primary">dan</span> nikmati produk
          <span class="text-primary">atau</span> layanan
          <span class="text-primary">apapun dari</span> seluruh dunia
          <span class="text-primary">tanpa</span> kartu kredit
        </p>
        <Button
          label="Lihat Selengkapnya"
          variant="primary"
          add-class="tn:text-sm md:text-base tn:py-2 md:py-3 px-4 font-bold tn:flex md:block justify-center tn:mx-auto md:mx-0"
          @click="toSetitipPage"
        />
      </div>
      <img
        src="/images/setitip/header/banner.png"
        alt="banner header"
        class="mx-auto tn:w-2/3 md:w-[90%] tn:order-1 md:order-2"
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
    toSetitipPage() {
      this.$router.push('/setitip');
    },
  },
};
</script>

<style></style>
