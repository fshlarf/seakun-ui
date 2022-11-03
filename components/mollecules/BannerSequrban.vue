<template>
  <div class="relative z-0">
    <div
      class="w-full h-full container absolute -z-20 tn:top-16 lg:top-24 right-0 left-0 mx-auto justify-center"
    >
      <img
        class="w-full mx-auto self-center"
        src="/images/banner-sequrban.png"
        alt="berlangganan sequrban"
      />
    </div>
    <div class="container relative z-0 md:pt-24 lg:pt-36 xl:pt-32">
      <div
        class="md:text-left md:w-7/12 lg:w-3/5 md:ml-12 lg::ml-24 xl:ml-20 md:-mr-8 xl:-mr-12"
      >
        <div class="">
          <div class="flex gap-2">
            <div
              class="h-1 rounded-full bg-gray-300 w-8 my-2 cursor-pointer"
              @click="$emit('previousSlide')"
            ></div>
            <div
              class="h-1 rounded-full bg-white w-8 my-2 cursor-pointer"
            ></div>
          </div>
          <div class="md:text-2xl text-secondary font-bold">
            Sequrban,<span class="text-white"> Seakun x Wadiqibas</span>
          </div>
          <p
            class="md:text-xl lg:text-4xl xl:text-5xl font-bold md:text-white lg:my-2 xl:my-6"
          >
            Berqurban sapi bersama <span class="text-secondary">Sequrban</span>.
            Patungan <span class="text-secondary">lebih murah</span>, dan
            <span class="text-secondary">pasti amanah.</span>
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
