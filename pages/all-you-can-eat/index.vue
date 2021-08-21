<template>
  <div>
    <HeaderSection />
    <DetailMenuSection />
  </div>
</template>

<script>
import HeaderSection from './views/HeaderSection.vue';
import DetailMenuSection from './views/DetailMenuSection.vue';
export default {
  components: {
    HeaderSection,
    DetailMenuSection,
  },
  layout: 'new',
};
</script>

<style></style>
