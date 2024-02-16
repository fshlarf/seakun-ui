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
    packageVariant: {
      typeof: Object,
      default: () => {},
    },
  },
  computed: {
    srcImg() {
      const screenWidth = window.innerWidth;
      if (this.packageVariant && this.providerSlug === 'zap') {
        const variantZap = this.formatZap(this.packageVariant.name);
        console.log({ variantZap });
        if (screenWidth >= 1024) {
          return `/images/order-details/banner/${variantZap}.webp`;
        } else return `/images/order-details/banner/mobile/${variantZap}.webp`;
      } else {
        if (screenWidth >= 1024) {
          return `/images/order-details/banner/${this.providerSlug}.webp`;
        } else
          return `/images/order-details/banner/mobile/${this.providerSlug}.webp`;
      }
    },
  },
  methods: {
    formatZap(input) {
      const match = input.match(/Series (\d+)K/i);
      if (match) {
        const formattedValue = match[1];
        return `zap-${formattedValue.toLowerCase()}k`;
      } else {
        return input;
      }
    },
  },
};
</script>
