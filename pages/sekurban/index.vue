<template>
  <div>
    <Navbar />
    <IntroSection />
    <ProductBackgroundSection />
    <ProductDetailSection @onClickOrder="onClickOrder" />
    <PricingSection @onClickOrder="onClickOrder" />
    <BenefitSection />
    <QuoteSection />
    <OrderFlowSection />
    <DocumentationSection />
    <TestimonySection />
    <FaqSection />
    <CtaBannerSection @onClickOrder="onClickOrder" />
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
import { mapActions, mapGetters } from 'vuex';

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
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      providerSekurban: 'getProviderSekurban',
    }),
  },
  mounted() {
    if (!this.providerSekurban.uid) {
      this.fetchProviderSekurban();
    }
  },
  methods: {
    ...mapActions({
      fetchProviderSekurban: 'fetchProviderSekurban',
      createOrder: 'createOrder',
    }),
    onClickOrder() {
      const sekurban = this.providerSekurban;
      const customerUid = this.$cookies.get('customerUid');
      if (customerUid) {
        const payload = {
          packageVariantUid: sekurban.variants[0].uid,
          ispreorder: sekurban.variants[0].isPo === 1,
          userhost: sekurban.variants[0].isHost === 1,
        };
        this.createOrder(payload);
      } else {
        this.$alert.show({
          status: 'error',
          duration: 4000,
          message: 'Harap login untuk memesan',
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
  },
};
</script>

<style>
#sekurban-page {
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
