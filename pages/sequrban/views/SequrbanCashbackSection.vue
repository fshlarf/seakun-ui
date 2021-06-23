<template>
  <div class="container tn:pt-10 lg:pt-20">
    <div>
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-bold my-2 md:my-4 tn:text-center lg:text-left"
      >
        Cashback
      </h1>
    </div>
    <div
      class="flex tn:flex-wrap xl:flex-nowrap gap-5 items-center justify-around"
    >
      <CashbackCoupon class="lg:my-2" />
      <CashbackCoupon class="lg:my-2" />
      <CashbackCoupon class="lg:my-2" />
    </div>
  </div>
</template>

<script>
import CashbackCoupon from '~/components/mollecules/CashbackCoupon.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    CashbackCoupon,
    Button,
  },
};
</script>

<style></style>
