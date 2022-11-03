<template>
  <div class="w-full h-full rounded-2xl bg-pink-setitip p-8 text-center">
    <div>
      <img
        class="w-2/3 mx-auto"
        src="/images/setitip/header/banner.png"
        alt="setitip"
      />
    </div>
    <h2 class="text-sm text-secondary font-semibold mt-3">
      Setitip, <span class="text-primary">Nebeng Kartu Kredit</span> by
      Seakun.id
    </h2>
    <p class="text-secondary font-bold my-2">
      Beli <span class="text-primary">dan</span> nikmati produk
      <span class="text-primary">atau</span> layanan
      <span class="text-primary">apapun dari</span> seluruh dunia
      <span class="text-primary">tanpa</span> kartu kredit
    </p>
    <Button
      variant="third"
      label="Lihat selengkapnya"
      class="text-sm"
      @click="toSetitipPage"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
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
