<template>
  <div class="relative z-0">
    <div
      class="w-full h-full container absolute -z-20 tn:top-16 lg:top-24 right-0 left-0 mx-auto justify-center"
    >
      <img
        class="w-full mx-auto self-center"
        src="/images/header-middle.svg"
        alt="Image not found"
      />
    </div>
    <div class="container relative z-0 md:pt-8 lg:pt-8 xl:pt-15">
      <div
        class="md:text-left md:grid md:grid-cols-2 md:justify-between md:items-center md:ml-12 lg::ml-24 xl:ml-20 md:-mr-8 xl:-mr-16"
      >
        <div class="">
          <div class="flex gap-2">
            <div
              class="h-1 rounded-full bg-white w-8 my-2 cursor-pointer"
            ></div>
            <div
              class="h-1 rounded-full bg-gray-300 w-8 my-2 cursor-pointer"
              @click="$emit('nextSlide')"
            ></div>
          </div>
          <span class="md:text-2xl font-bold my-4">Seakun.id</span>
          <p
            class="md:text-xl lg:text-3xl xl:text-5xl font-bold md:text-white xl:my-6"
          >
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
        <div class="w-full">
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
