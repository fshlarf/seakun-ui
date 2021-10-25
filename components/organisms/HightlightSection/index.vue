<template>
  <div class="container tn:mt-16 md:mt-14 tn:pt-8 md:pt-14 lg:pt-24">
    <div class="px-2">
      <h1 class="tn:text-xl md:text-2xl tn:mb-4 font-bold">
        Hightlight hari ini
      </h1>
    </div>
    <div>
      <BannerAllYouCanEat />
    </div>
  </div>
</template>

<script>
import BannerAllYouCanEat from '~/components/mollecules/BannerAllYouCanEat';
export default {
  components: {
    BannerAllYouCanEat,
  },
};
</script>

<style></style>
