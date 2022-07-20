<template>
  <div class="">
    <Header />
    <Content />
    <Faq />
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Content from './views/Content.vue';
import Faq from './views/Faq.vue';
export default {
  layout: 'new',
  components: {
    Header,
    Content,
    Faq,
  },
};
</script>

<style></style>
