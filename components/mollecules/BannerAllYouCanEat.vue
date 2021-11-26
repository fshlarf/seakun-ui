<template>
  <div
    class="relative z-0 bg-gradient-to-r from-[#000000] to-[#E94949] rounded-3xl overflow-hidden"
  >
    <div class="grid tn:grid-cols-8 md:grid-cols-2">
      <div class="tn:col-span-3 md:col-span-1">
        <img
          class="tn:w-60 md:w-full md:h-[250px] lg:h-[350px] max-w-max relative z-30 -mb-2 tn:-ml-36 md:-ml-14 lg:-ml-20 xl:-ml-2"
          src="images/all you can eat/banner/main.png"
          alt="no image found"
        />
        <div
          class="absolute z-20 tn:left-4 md:left-[11rem] lg:left-[17rem] xl:left-[21rem] tn:top-2 md:top-2 lg:top-6"
        >
          <img
            class="tn:w-28 md:w-40 lg:w-52"
            src="images/all you can eat/banner/spoon.png"
            alt="no image found"
          />
        </div>
        <div
          class="absolute z-10 md:left-32 lg:left-52 xl:left-72 tn:top-5 md:top-4 lg:top-12"
        >
          <img
            class="tn:w-36 md:w-56 lg:w-72"
            src="images/all you can eat/banner/plate.png"
            alt="no image found"
          />
        </div>
      </div>
      <div class="text-white tn:p-3 md:p-4 lg:p-10 tn:col-span-5 md:col-span-1">
        <p class="tracking-widest tn:text-[9px] md:text-sm lg:text-base">
          SEAKUN X VENDOR
        </p>
        <h1
          class="font-bold tn:text-[20px] md:text-4xl lg:text-5xl tn:my-2 lg:my-4"
        >
          All you can eat!
        </h1>
        <p
          class="tn:text-[10px] md:text-sm lg:text-xl font-semibold tracking-wider"
        >
          Makan bareng, lebih murah, sepuasnya!
        </p>
        <div class="flex space-x-2 my-2">
          <p class="font-semibold tn:text-[10px] md:text-sm lg:text-base">
            dari
          </p>
          <span class="font-bold tn:text-[20px] md:text-3xl lg:text-5xl"
            >Rp53.000</span
          >
        </div>
        <Button
          class="md:mt-3 tn:text-[9px] md:text-base tn:w-full md:w-auto tn:rounded-3xl"
          variant="forth"
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
