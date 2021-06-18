<template>
  <div>
    <Navbar />
    <!-- <HeaderSection /> -->
    <IntroductionSection />
    <PartnershipSection />
    <ProductSection />
    <UserTypeSection />
    <OrderFlowSection />
    <TestimonySection />
    <BenefitSection />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import IntroductionSection from '~/components/organisms/IntroductionSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import ProductSection from '~/components/organisms/ProductSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import OrderFlowSection from '~/components/organisms/OrderFlowSection';
import TestimonySection from '~/components/organisms/TestimonySection';
import BenefitSection from '~/components/organisms/BenefitSection';

export default {
  components: {
    Navbar,
    HeaderSection,
    IntroductionSection,
    PartnershipSection,
    ProductSection,
    UserTypeSection,
    OrderFlowSection,
    TestimonySection,
    BenefitSection,
  },
};
</script>

<style lang="scss" scoped></style>
