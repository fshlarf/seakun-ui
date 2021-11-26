<template>
  <div>
    <Navbar />
    <HeaderSection />
    <IntroductionSection />
    <PartnershipSection />
    <WhatsappNoticeBanner />
    <HightlightSection />
    <ProductSection />
    <UserTypeSection />
    <OrderFlowSection />
    <TestimonySection />
    <UserGroupSection />
    <BenefitSection />
    <QnaSection />
    <Footer />
    <!-- <WhatsappNoticeModal /> -->
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import IntroductionSection from '~/components/organisms/IntroductionSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import HightlightSection from '~/components/organisms/HightlightSection';
import ProductSection from '~/components/organisms/ProductSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import OrderFlowSection from '~/components/organisms/OrderFlowSection';
import TestimonySection from '~/components/organisms/TestimonySection';
import UserGroupSection from '~/components/organisms/UserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import QnaSection from '~/components/organisms/QnaSection';
import Footer from '~/components/mollecules/Footer';
import WhatsappNoticeModal from '~/components/organisms/WhatsappNoticeModal';
import WhatsappNoticeBanner from '~/components/organisms/WhatsappNoticeBanner';

export default {
  components: {
    Navbar,
    HeaderSection,
    IntroductionSection,
    PartnershipSection,
    HightlightSection,
    ProductSection,
    UserTypeSection,
    OrderFlowSection,
    TestimonySection,
    UserGroupSection,
    BenefitSection,
    QnaSection,
    Footer,
    WhatsappNoticeModal,
    WhatsappNoticeBanner,
  },
};
</script>

<style lang="scss" scoped></style>
