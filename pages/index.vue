<template>
  <div>
    <Navbar />
    <HeaderSection />
    <IntroductionSection />
    <PartnershipSection />
    <!-- <WhatsappNoticeBanner /> -->
    <SeakunHelpBanner />
    <ProductSection />
    <CompanyPartnerSection />
    <UserTypeSection />
    <OrderFlowSection />
    <PaymentSection />
    <TestimonySectionTwitter />
    <UserGroupSection />
    <BenefitSection />
    <QnaSection />
    <WarningOrder />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import IntroductionSection from '~/components/organisms/IntroductionSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import ProductSection from '~/components/organisms/ProductSection';
import CompanyPartnerSection from '~/components/organisms/CompanyPartnerSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import OrderFlowSection from '~/components/organisms/OrderFlowSection';
import PaymentSection from '~/components/organisms/PaymentSection';
import TestimonySectionTwitter from '~/components/organisms/TestimonySectionTwitter';
import UserGroupSection from '~/components/organisms/UserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import QnaSection from '~/components/organisms/QnaSection';
import WarningOrder from '~/components/organisms/WarningOrder';
import Footer from '~/components/mollecules/Footer';
import WhatsappNoticeBanner from '~/components/organisms/WhatsappNoticeBanner';
import SeakunHelpBanner from '~/components/organisms/SeakunHelpBanner';

export default {
  components: {
    Navbar,
    HeaderSection,
    IntroductionSection,
    PartnershipSection,
    ProductSection,
    CompanyPartnerSection,
    UserTypeSection,
    OrderFlowSection,
    PaymentSection,
    TestimonySectionTwitter,
    UserGroupSection,
    BenefitSection,
    QnaSection,
    WarningOrder,
    Footer,
    WhatsappNoticeBanner,
    SeakunHelpBanner,
  },
  // beforeMount() {
  //   this.$router.push('/info/maintenance');
  // },
};
</script>

<style lang="scss" scoped></style>
