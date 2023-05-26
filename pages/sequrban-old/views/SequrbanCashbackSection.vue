<template>
  <div class="container tn:pt-10 lg:pt-20">
    <div>
      <h1
        class="text-2xl md:text-xl lg:text-2xl font-bold my-2 md:my-4 tn:text-center lg:text-left"
      >
        Cashback
      </h1>
    </div>
    <div class="scroll-coupon overflow-x-auto">
      <div class="flex gap-5 items-center">
        <CashbackCoupon class="lg:my-2" />
        <CashbackCoupon class="lg:my-2" />
        <CashbackCoupon class="lg:my-2" />
      </div>
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

<style lang="scss" scoped>
.scroll-coupon::-webkit-scrollbar {
  display: none;
}
.scroll-coupon {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
