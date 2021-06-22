<template>
  <div>
    <Navbar />
    <HeaderSection />
    <SequrbanIntroductionSection />
    <SequrbanOrderFlowSection />
    <SequrbanQnaSection />
    <!-- <HeaderSection />
    <IntroductionSection />
    <PartnershipSection />
    <ProductSection />
    <UserTypeSection />
    <OrderFlowSection />
    <TestimonySection />
    <UserGroupSection />
    <BenefitSection />
    <QnaSection /> -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import SequrbanIntroductionSection from '~/components/organisms/SequrbanIntroductionSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import ProductSection from '~/components/organisms/ProductSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import SequrbanOrderFlowSection from '~/components/organisms/SequrbanOrderFlowSection';
import TestimonySection from '~/components/organisms/TestimonySection';
import UserGroupSection from '~/components/organisms/UserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import SequrbanQnaSection from '~/components/organisms/SequrbanQnaSection';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    Navbar,
    HeaderSection,
    SequrbanIntroductionSection,
    PartnershipSection,
    ProductSection,
    UserTypeSection,
    SequrbanOrderFlowSection,
    TestimonySection,
    UserGroupSection,
    BenefitSection,
    SequrbanQnaSection,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
