<template>
  <div>
    <Navbar />
    <IntroSection />
    <ProductBackgroundSection />
    <ProductDetailSection />
    <PricingSection />
    <BenefitSection />
    <QuoteSection />
    <OrderFlowSection />
    <DocumentationSection />
    <TestimonySection />
    <FaqSection />
    <CtaBannerSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import IntroSection from './views/IntroSection.vue';
import ProductBackgroundSection from './views/ProductBackgroundSection.vue';
import ProductDetailSection from './views/ProductDetailSection.vue';
import PricingSection from './views/PricingSection.vue';
import BenefitSection from './views/BenefitSection.vue';
import QuoteSection from './views/QuoteSection.vue';
import OrderFlowSection from './views/OrderFlowSection.vue';
import DocumentationSection from './views/DocumentationSection.vue';
import TestimonySection from './views/TestimonySection.vue';
import FaqSection from './views/FaqSection.vue';
import Footer from '~/components/mollecules/Footer.vue';
import CtaBannerSection from './views/CtaBannerSection.vue';

export default {
  components: {
    Navbar,
    IntroSection,
    ProductBackgroundSection,
    ProductDetailSection,
    PricingSection,
    BenefitSection,
    QuoteSection,
    OrderFlowSection,
    DocumentationSection,
    TestimonySection,
    FaqSection,
    CtaBannerSection,
    Footer
  },
  data() {
    
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
