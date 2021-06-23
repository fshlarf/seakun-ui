<template>
  <div class="container pt-12 pb-8 lg:pt-16 xl:pt-24 md:pb-12">
    <div>
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-bold my-2 md:my-4 tn:text-center lg:text-left"
      >
        Cashback
      </h1>
    </div>
    <div class="flex flex-wrap items-center justify-around">
      <CashbackCoupon class="my-2" />
      <CashbackCoupon class="my-2" />
      <CashbackCoupon class="my-2" />
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
