<template>
  <div
    class="bg-[#05241C] rounded-t-xl w-full h-11 sm:h-[60px] lg:h-[80px] bg-cover flex items-center"
    :style="`background-image: url('${srcImg}')`"
  >
    <div class="cursor-pointer -ml-4 hidden md:block" @click="$router.back()">
      <img src="/images/order-details/back.svg" alt="back" class="w-8 h-8" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    providerSlug: {
      typeof: String,
      default: '',
    },
  },
  computed: {
    srcImg() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        return `/images/order-details/banner/${this.providerSlug}.webp`;
      } else
        return `/images/order-details/banner/mobile/${this.providerSlug}.webp`;
    },
  },
};
</script>
