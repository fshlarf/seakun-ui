<template>
  <div class="container-seakun-blog">
    <div
      v-if="!bannerSrc"
      class="w-full h-[180px] sm:h-[200px] animate-pulse bg-slate-200 rounded-[10px] sm:rounded-xl"
    ></div>
    <img
      v-else
      :src="bannerSrc"
      alt="banner"
      class="w-full rounded-[10px] sm:rounded-xl"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerSrc: '',
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 430) {
        this.bannerSrc =
          '/images/canva-migration/intro-banner/banner-mobile.webp';
      } else
        this.bannerSrc = '/images/canva-migration/intro-banner/banner.webp';
    },
  },
};
</script>