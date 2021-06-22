<template>
  <div class="">
    <div class="flex gap-0 place-items-stretch items-stretch items-center">
      <div
        class="coupon flex gap-4 justify-around items-center bg-primary w-80 py-4 px-4 rounded-l-xl"
      >
        <div>
          <p class="font-bold text-secondary">CASHBACK</p>
          <p class="text-xl font-bold">Rp200.000</p>
          <p class="text-xs">Pembelian 20 Juni - 4 Juli</p>
        </div>
        <div>
          <Button size="sm" label="Pesan" variant="third" class="py-2 px-3" />
        </div>
      </div>
      <div>
        <img src="/images/sequrban/coupon-tail.svg" alt="" />
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
.coupon {
  background-image: linear-gradient(to right, #9bd3c9, #e3f3f0, #9bd3c9);
}
</style>
