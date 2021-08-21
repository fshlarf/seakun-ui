<template>
  <div>
    <HeaderSection />
    <DetailMenuSection />
    <OrderFlowSection />
  </div>
</template>

<script>
import HeaderSection from './views/HeaderSection.vue';
import DetailMenuSection from './views/DetailMenuSection.vue';
import OrderFlowSection from './views/OrderFlowSection.vue';
export default {
  components: {
    HeaderSection,
    DetailMenuSection,
    OrderFlowSection,
  },
  layout: 'new',
};
</script>

<style></style>
