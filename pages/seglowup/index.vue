<template>
  <div>
    <NavbarSeGlowUp />
    <HeaderSeGlowUp />
    <SeGlowUpScheme />
    <OrderFlowSeGlowUp />
    <SeGlowUpServiceSection />
    <TestimonySeGlowUp />
    <QnaSection />
    <Footer />
  </div>
</template>

<script>
import NavbarSeGlowUp from '~/components/mollecules/NavbarSeGlowUp';
import HeaderSeGlowUp from '~/components/organisms/HeaderSection/Seglowup';
import SeGlowUpScheme from '~/components/organisms/SeGlowUp/Scheme';
import OrderFlowSeGlowUp from '~/components/organisms/SeGlowUp/OrderFlow';
import SeGlowUpServiceSection from '~/components/organisms/ServiceSection/Seglowup';
import TestimonySeGlowUp from '~/components/organisms/TestimonySection/Seglowup';
import QnaSection from '~/components/organisms/QnaSection/Seglowup';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    NavbarSeGlowUp,
    HeaderSeGlowUp,
    SeGlowUpScheme,
    OrderFlowSeGlowUp,
    SeGlowUpServiceSection,
    TestimonySeGlowUp,
    QnaSection,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
