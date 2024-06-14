<template>
  <div
    class="container-about-us"
    :style="`margin-top: ${navbarHeight}`"
    id="about-seakun"
  >
    Hero Section
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHeight: null,
    };
  },
  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.getNavbarHeight());
    }
  },
  methods: {
    getNavbarHeight() {
      const navbar = document.getElementById('navbar-about-us');
      if (navbar) {
        this.navbarHeight = `${navbar.offsetHeight}px`;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
