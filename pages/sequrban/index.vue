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
    <Footer />
  </div>
</template>

<script>
import Navbar2 from '~/components/mollecules/Navbar2';
import SequrbanHeaderSection from '~/components/organisms/SequrbanHeaderSection';
import SequrbanIntroductionSection from '~/components/organisms/SequrbanIntroductionSection';
import SequrbanCashbackSection from '~/components/organisms/SequrbanCashbackSection';
import SequrbanProductSection from '~/components/organisms/SequrbanProductSection';
import SequrbanOrderFlowSection from '~/components/organisms/SequrbanOrderFlowSection';
import SequrbanUserGroupSection from '~/components/organisms/SequrbanUserGroupSection';
import SequrbanQnaSection from '~/components/organisms/SequrbanQnaSection';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    Navbar2,
    SequrbanHeaderSection,
    SequrbanIntroductionSection,
    SequrbanCashbackSection,
    SequrbanProductSection,
    SequrbanOrderFlowSection,
    SequrbanUserGroupSection,
    SequrbanQnaSection,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
