<template>
  <div>
    <HeaderSection />
    <DetailMenuSection />
    <OrderFlowSection />
    <QnaSection />
  </div>
</template>

<script>
import HeaderSection from './views/HeaderSection.vue';
import DetailMenuSection from './views/DetailMenuSection.vue';
import OrderFlowSection from './views/OrderFlowSection.vue';
import QnaSection from './views/QnaSection.vue';
export default {
  components: {
    HeaderSection,
    DetailMenuSection,
    OrderFlowSection,
    QnaSection,
  },
  layout: 'new',
};
</script>

<style></style>
