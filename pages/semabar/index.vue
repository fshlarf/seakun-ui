<template>
  <div>
    <NavbarSemabar class="z-50" />
    <HeaderSemabar />
    <BenefitSemabar />
    <ServiceSemabar />
    <FlowSemabar />
    <TestimonySemabar />
    <QnaSemabar />
    <FooterSemabar />
    <THRChallengeVue
      :isShow="$store.state.isShowPopupTHRChallenge"
      @handleClose="
        $store.commit(
          'setShowPopupTHRChallenge',
          !$store.state.isShowPopupTHRChallenge
        )
      "
    />
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
import THRChallengeVue from '../../components/organisms/ThrChallenge/ModalPopup/THRChallenge.vue';

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
    THRChallengeVue,
  },
};
</script>
<style lang="scss" scoped></style>
