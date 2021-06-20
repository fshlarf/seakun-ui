<template>
  <div class="relative z-0">
    <div class="w-full absolute -z-30 top-0">
      <img class="w-full" src="/images/header-bg.svg" alt="Image not found" />
    </div>
    <div
      class="tn:hidden md:block w-full h-full container absolute -z-20 tn:top-16 lg:top-24 right-0 left-0 mx-auto justify-center"
    >
      <img
        class="w-full mx-auto self-center"
        src="/images/header-middle.svg"
        alt="Image not found"
      />
    </div>
    <div class=""></div>
    <div class="container pt-16 px-12 w-full md:hidden relative z-0">
      <img
        class="w-full"
        src="/images/header-mobile.svg"
        alt="Image not found"
      />
    </div>
    <div
      class="container relative z-0 tn:pt-8 tn:px-8 md:pt-8 lg:pt-12 xl:pt-4"
    >
      <div
        class="tn:text-center md:text-left md:grid md:grid-cols-2 md:justify-between md:items-center md:ml-12 lg::ml-24 xl:ml-28 md:-mr-8 xl:-mr-16"
      >
        <div class="">
          <div
            class="tn:hidden md:block h-1 rounded-full bg-white w-10 my-2"
          ></div>
          <span class="tn:text-3xl md:text-2xl font-bold my-4">Seakun.id</span>
          <p
            class="tn:text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold md:text-white xl:my-6"
          >
            Berlangganan bersama lebih
            <span class="text-secondary">praktis, legal, aman</span> dan
            <span class="text-secondary">murah.</span>
          </p>
          <div class="mt-2">
            <Button
              variant="third"
              label="Daftar sekarang"
              class="font-bold my-2"
            />
          </div>
        </div>
        <div class="tn:hidden md:block w-full">
          <img
            class="w-full -right-8"
            src="/images/header-main.svg"
            alt="Image not found"
          />
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
