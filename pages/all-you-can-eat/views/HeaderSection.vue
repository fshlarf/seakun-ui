<template>
  <div class="container mb-8">
    <div class="tn:hidden md:block">
      <div
        class="w-full container absolute -z-20 tn:top-16 lg:top-24 right-0 left-0 mx-auto justify-center"
      >
        <img
          class="w-full mx-auto self-center"
          src="images/all you can eat/banner.svg"
          alt="Image not found"
        />
      </div>
      <div
        class="relative z-0 md:pt-8 lg:pt-14 xl:pt-15 grid grid-cols-2 w-full"
      >
        <div></div>
        <div class="text-white tn:pl-3 tn:pt-6 md:pt-0 md:pl-6 lg:p-10">
          <p
            class="tn:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold lg:my-2 xl:my-6"
          >
            Voyage Harris Harmoni
          </p>
          <p class="hidden md:block md:my-2 md:text-xl">Buat momen spesial untuk orang tercinta anda!</p>
          <div class="flex items-center">
            <p class="hidden md:block">dari <span class="line-through">Rp.338.000</span></p>
            <p class="hidden md:flex mt-2 ml-2 text-4xl font-bold">Rp218.000</p>
          </div>
          <div class="mt-2">
            <Button
              variant="forth"
              label="Pesan Sekarang"
              class="font-bold md:my-2 lg:w-1/2 md:py-2 tn:text-xs md:text-base"
              @click="onClickOrder"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden pt-4 px-2">
      <BannerMobile />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import BannerMobile from './BannerMobile.vue';
export default {
  components: {
    Button,
    BannerMobile,
  },
  methods: {
    onClickOrder() {
      console.log('tes');
    },
  },
};
</script>

<style></style>
