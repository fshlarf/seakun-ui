<template>
  <div
    class="bg-[#05241C] rounded-t-xl w-full h-[80px] bg-cover flex items-center"
    :style="`background-image: url(${srcImage})`"
  >
    <div class="cursor-pointer ml-6">
      <img src="/images/order-details/back.svg" alt="back" class="w-8 h-8" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcImage: '/images/product/brand/header/spotify.webp',
    };
  },
};
</script>
