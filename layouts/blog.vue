<template>
  <div class="main-font w-full flex flex-col min-h-screen">
    <NavbarBlog />
    <Nuxt class="flex-1" />
    <FooterBlog />
  </div>
</template>

<script>
import NavbarBlog from '~/pages/blog/views/Navbar.vue';
import FooterBlog from '~/pages/blog/views/Footer.vue';

export default {
  components: {
    NavbarBlog,
    FooterBlog,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style></style>
