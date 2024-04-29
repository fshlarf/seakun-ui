<template>
  <div class="main-font w-full">
    <Navbar />
    <ArticleDetailsSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarSeakunBlog.vue';
import ArticleDetailsSection from './views/ArticleDetailsSection.vue';
import Footer from '~/components/mollecules/FooterSeakunBlog.vue';

export default {
  components: {
    Navbar,
    ArticleDetailsSection,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
#sekurban-page {
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
