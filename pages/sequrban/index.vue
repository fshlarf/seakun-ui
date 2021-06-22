<template>
  <div>
    <Navbar2 />
    <SequrbanHeaderSection />
    <SequrbanIntroductionSection />
    <SequrbanCashbackSection />
    <SequrbanOrderFlowSection />
    <SequrbanProductSection />
    <SequrbanUserGroupSection />
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
import Navbar2 from '~/components/mollecules/Navbar2';
import SequrbanHeaderSection from '~/components/organisms/SequrbanHeaderSection';
import SequrbanIntroductionSection from '~/components/organisms/SequrbanIntroductionSection';
import SequrbanCashbackSection from '~/components/organisms/SequrbanCashbackSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import SequrbanProductSection from '~/components/organisms/SequrbanProductSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import SequrbanOrderFlowSection from '~/components/organisms/SequrbanOrderFlowSection';
import TestimonySection from '~/components/organisms/TestimonySection';
import SequrbanUserGroupSection from '~/components/organisms/SequrbanUserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import SequrbanQnaSection from '~/components/organisms/SequrbanQnaSection';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    Navbar2,
    SequrbanHeaderSection,
    SequrbanIntroductionSection,
    SequrbanCashbackSection,
    PartnershipSection,
    SequrbanProductSection,
    UserTypeSection,
    SequrbanOrderFlowSection,
    TestimonySection,
    SequrbanUserGroupSection,
    BenefitSection,
    SequrbanQnaSection,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
