<template>
  <div id="sekeranjang">
    <Navbar />
    <Header />
    <OrderFlow />
    <ProductList />
    <ProductSubmitBanner />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import Header from './views/Header';
import OrderFlow from './views/OrderFlow';
import ProductList from './views/ProductList';
import ProductSubmitBanner from './views/ProductSubmitBanner';
import Footer from './views/Footer.vue';

export default {
  components: {
    Navbar,
    Header,
    OrderFlow,
    ProductList,
    ProductSubmitBanner,
    Footer,
  },
};
</script>

<style>
#sekeranjang {
  font-family: 'DM Sans', sans-serif !important;
  background-color: white;
}
</style>
