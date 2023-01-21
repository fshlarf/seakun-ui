<template>
  <div
    class="relative z-0 bg-[#8DCABE] rounded-3xl overflow-visible mb-20 md:w-full xl:w-[70rem] md:py-8 lg:py-4 xl:py-0"
  >
    <div
      class="md:text-left md:grid md:grid-cols-2 md:justify-between md:items-center md:ml-12 lg::ml-24 xl:ml-20 md:-mr-8 xl:-mr-16"
    >
      <div class="">
        <p
          class="md:text-xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold md:text-white lg:my-2 xl:my-6"
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
      <div class="w-full -mt-14 -mb-14">
        <img
          class=""
          src="/images/banner/header.svg"
          alt="subscribe with seakun"
        />
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
