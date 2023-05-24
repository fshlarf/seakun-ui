<template>
  <div id="sequrban-page">
    <Navbar />
    <HeaderSection />
    <ProductBackgroundSection />
    <QuoteSection />
    <ProductDetailSection />
    <PricingSection />
    <OrderFlowSection />
    <DocumentationSection />
    <CtaBannerSection />
    <TestimonySection />
    <FaqSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import HeaderSection from './views/HeaderSection.vue';
import ProductBackgroundSection from './views/ProductBackgroundSection.vue';
import QuoteSection from './views/QuoteSection.vue';
import ProductDetailSection from './views/ProductDetailSection.vue';
import PricingSection from './views/PricingSection.vue';
import OrderFlowSection from './views/OrderFlowSection.vue';
import DocumentationSection from './views/DocumentationSection.vue';
import CtaBannerSection from './views/CtaBannerSection.vue';
import TestimonySection from './views/TestimonySection.vue';
import FaqSection from './views/FaqSection.vue';
import Footer from '~/components/mollecules/Footer.vue';

export default {
  components: {
    Navbar,
    HeaderSection,
    ProductBackgroundSection,
    QuoteSection,
    ProductDetailSection,
    PricingSection,
    OrderFlowSection,
    DocumentationSection,
    CtaBannerSection,
    TestimonySection,
    FaqSection,
    Footer,
  },
};
</script>

<style>
#sequrban-page {
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
