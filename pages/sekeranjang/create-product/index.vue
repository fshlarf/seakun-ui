<template>
  <div id="create-product">
    <Navbar />
    <FormProduct />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import FormProduct from './views/FormProduct';
import Footer from '../views/Footer.vue';
export default {
  components: {
    Navbar,
    FormProduct,
    Footer,
  },
};
</script>

<style>
#create-product {
  font-family: 'DM Sans', sans-serif !important;
  font-weight: 400 !important;
}
</style>
