<template>
  <div id="sequrban-page">
    <Navbar />
    <HeaderSection />
    <ProductBackgroundSection />
    <QuoteSection />
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import HeaderSection from './views/HeaderSection.vue';
import ProductBackgroundSection from './views/ProductBackgroundSection.vue';
import QuoteSection from './views/QuoteSection.vue';

export default {
  components: {
    Navbar,
    HeaderSection,
    ProductBackgroundSection,
    QuoteSection,
  },
};
</script>

<style>
#sequrban-page {
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
