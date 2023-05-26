<template>
  <div>
    <NavbarBlank />
    <SequrbanHeaderSection />
    <SequrbanIntroductionSection />
    <!-- <SequrbanCashbackSection /> -->
    <SequrbanOrderFlowSection />
    <SequrbanProductSection />
    <!-- <SequrbanUserGroupSection /> -->
    <SequrbanQnaSection />
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import SequrbanHeaderSection from './views/SequrbanHeaderSection';
import SequrbanIntroductionSection from './views/SequrbanIntroductionSection';
import SequrbanCashbackSection from './views/SequrbanCashbackSection';
import SequrbanProductSection from './views/SequrbanProductSection';
import SequrbanOrderFlowSection from './views/SequrbanOrderFlowSection';
import SequrbanUserGroupSection from './views/SequrbanUserGroupSection';
import SequrbanQnaSection from './views/SequrbanQnaSection';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    NavbarBlank,
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
