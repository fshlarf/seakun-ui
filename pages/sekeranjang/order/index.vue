<template>
  <div id="create-product">
    <Navbar />
    <FormOrder />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import FormOrder from './views/FormOrder';
import Footer from '../views/Footer.vue';
export default {
  components: {
    Navbar,
    FormOrder,
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
