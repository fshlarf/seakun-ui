<template>
  <div>
    <HeaderDetailsVenue />
    <TableDetails />
    <FooterSemabar />
  </div>
</template>

<script>
import HeaderDetailsVenue from './views/HeaderDetailsVenue.vue';
import TableDetails from './views/TableDetails.vue';
import FooterSemabar from '~/components/mollecules/FooterSemabar.vue';
export default {
  components: {
    HeaderDetailsVenue,
    TableDetails,
    FooterSemabar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
