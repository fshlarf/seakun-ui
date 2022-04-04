<template>
  <div class="relative z-0">
    <Navbar />
    <HeaderSection />
    <ProductSection />
    <BenefitSection />
    <TransactionSection />
    <OrderFlowSection />
    <RegisterBanner />
    <QnaSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import ProductSection from './ProductSection';
import BenefitSection from './BenefitSection';
import TransactionSection from './TransactionSection';
import OrderFlowSection from './OrderFlowSection';
import QnaSection from './QnaSection';
import RegisterBanner from './views/RegisterBanner.vue';
import Footer from '~/components/mollecules/Footer';
export default {
  components: {
    Navbar,
    HeaderSection,
    ProductSection,
    BenefitSection,
    TransactionSection,
    OrderFlowSection,
    RegisterBanner,
    QnaSection,
    Footer,
  },
};
</script>

<style></style>
