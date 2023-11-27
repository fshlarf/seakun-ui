<template>
  <div>
    <NavbarSemabar />
    <HeaderSemabar />
    <BenefitSemabar />
    <ServiceSemabar />
    <FlowSemabar />
    <TestimonySemabar />
    <QnaSemabar />
    <FooterSemabar />
  </div>
</template>

<script>
import NavbarSemabar from '~/components/mollecules/NavbarSemabar.vue';
import HeaderSemabar from '~/components/organisms/HeaderSection/Semabar/index.vue';
import BenefitSemabar from '~/components/organisms/BenefitSection/Semabar/index.vue';
import ServiceSemabar from '~/components/organisms/ServiceSection/Semabar/index.vue';
import FlowSemabar from '~/components/organisms/FlowSemabarSection/index.vue';
import TestimonySemabar from '../../components/organisms/TestimonySection/Semabar/index.vue';
import QnaSemabar from '~/components/organisms/QnaSection/Semabar/index.vue';
import FooterSemabar from '~/components/mollecules/FooterSemabar';

export default {
  components: {
    NavbarSemabar,
    HeaderSemabar,
    BenefitSemabar,
    ServiceSemabar,
    FlowSemabar,
    QnaSemabar,
    TestimonySemabar,
    FooterSemabar,
  },
};
</script>

<style lang="scss" scoped></style>
