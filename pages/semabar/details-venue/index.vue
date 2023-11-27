<template>
  <div>
    <Hero />
    <TableDetails />
    <FooterSemabar />
  </div>
</template>

<script>
import Hero from './views/Hero.vue';
import TableDetails from './views/TableDetails.vue';
import FooterSemabar from '~/components/mollecules/FooterSemabar.vue';
export default {
  components: {
    Hero,
    TableDetails,
    FooterSemabar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
