<template>
  <div
    class="relative z-0 bg-gradient-to-r from-[#000000] to-[#E94949] rounded-3xl overflow-hidden"
  >
    <div class="grid grid-cols-2">
      <div class="">
        <img
          class="h-[250px] lg:h-[350px] relative z-30 -mb-2 lg:-ml-20 xl:-ml-2"
          src="images/all you can eat/banner/main.png"
          alt="no image found"
        />
        <div
          class="hidden lg:block absolute z-20 lg:left-[17rem] xl:left-[21rem] top-6"
        >
          <img
            class="w-52"
            src="images/all you can eat/banner/spoon.png"
            alt="no image found"
          />
        </div>
        <div class="hidden lg:block absolute z-10 lg:left-52 xl:left-72 top-12">
          <img
            class="w-72"
            src="images/all you can eat/banner/plate.png"
            alt="no image found"
          />
        </div>
      </div>
      <div class="text-white md:p-4 lg:p-10">
        <p class="tracking-widest text-sm lg:text-base">SEAKUN X VENDOR</p>
        <h1 class="font-bold text-4xl lg:text-5xl md:my-2 lg:my-4">
          All you can eat!
        </h1>
        <p class="text-sm lg:text-xl font-semibold tracking-wider">
          Makan bareng, lebih murah, sepuasnya!
        </p>
        <div class="flex space-x-2 my-2">
          <p class="font-semibold text-sm lg:text-base">dari</p>
          <span class="font-bold text-3xl lg:text-5xl">Rp53.000</span>
        </div>
        <Button
          class="mt-3"
          variant="secondary"
          label="CEK RESTO FAVORITMU!"
          @click="onClickAllYouCanEat"
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
    onClickAllYouCanEat() {
      this.$router.push('/all-you-can-eat');
    },
  },
};
</script>

<style></style>
