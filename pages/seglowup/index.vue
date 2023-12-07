<template>
  <div>
    <NavbarSeGlowUp />
    <HeaderSeGlowUp />
    <SeGlowUpScheme />
    <OrderFlowSeGlowUp />
  </div>
</template>

<script>
import NavbarSeGlowUp from '~/components/mollecules/NavbarSeglowup.vue';
import HeaderSeGlowUp from '~/components/organisms/HeaderSection/Seglowup';
import SeGlowUpScheme from '~/components/organisms/SeGlowUp/Scheme';
import OrderFlowSeGlowUp from '~/components/organisms/SeGlowUp/OrderFlow';
export default {
  components: {
    NavbarSeGlowUp,
    HeaderSeGlowUp,
    SeGlowUpScheme,
    OrderFlowSeGlowUp,
  },
};
</script>

<style lang="scss" scoped></style>
