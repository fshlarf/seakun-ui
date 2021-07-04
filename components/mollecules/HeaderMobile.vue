<template>
  <div>
    <div class="container pt-24 px-12 w-full relative z-0">
      <img
        class="w-full"
        src="/images/header-mobile.svg"
        alt="Image not found"
      />
    </div>
    <div class="container relative z-0 tn:pt-8 tn:px-8">
      <div class="tn:text-center">
        <div class="">
          <span class="tn:text-3xl">Seakun.id</span>
          <p class="tn:text-lg font-bold">
            Berlangganan bersama lebih
            <span class="text-secondary">praktis, legal, aman</span> dan
            <span class="text-secondary">murah.</span>
          </p>
          <div class="mt-2">
            <Button
              variant="third"
              label="Pesan Sekarang"
              class="font-bold my-2"
              @click="$emit('onClickOrder')"
            />
          </div>
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
};
</script>

<style></style>
