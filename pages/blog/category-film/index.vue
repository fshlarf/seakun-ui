<template>
  <div>
    <Navbar />
    <CarouselSection />
    <ReviewSection />
    <RecommendationSection />
    <OthersSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarSeakunBlog.vue';
import CarouselSection from './views/CarouselSection.vue';
import ReviewSection from './views/ReviewSection.vue';
import RecommendationSection from './views/RecommendationSection.vue';
import OthersSection from './views/OthersSection.vue';
import Footer from '~/components/mollecules/FooterSeakunBlog.vue';

export default {
  components: {
    Navbar,
    CarouselSection,
    ReviewSection,
    RecommendationSection,
    OthersSection,
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
