<template>
  <div id="detail-product">
    <Navbar />
    <ProductDetail />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import Footer from '../views/Footer.vue';
import ProductDetail from './views/ProductDetail';
export default {
  components: {
    Navbar,
    Footer,
    ProductDetail,
  },
};
</script>

<style>
#detail-product {
  font-family: 'DM Sans', sans-serif !important;
  font-weight: 400 !important;
}
</style>
