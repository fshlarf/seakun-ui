<template>
  <div>
    <Navbar />
    <HeaderDesktsop class="hidden md:block" />
    <HeaderMobile class="md:hidden tn:block" />
    <About />
    <OrderFlow />
    <Product />
    <ProductSubmit />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import HeaderDesktsop from './HeaderSection';
import HeaderMobile from './HeaderMobile';
import About from './AboutSection';
import OrderFlow from './OrderFlowSection';
import Product from './ProductList';
import ProductSubmit from './ProductSubmitSection';
import Footer from './FooterSection';

export default {
  components: {
    Navbar,
    HeaderDesktsop,
    HeaderMobile,
    About,
    OrderFlow,
    Product,
    ProductSubmit,
    Footer,
  },
};
</script>
