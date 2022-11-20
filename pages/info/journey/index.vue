<template>
  <div>
    <Header />
    <Journey />
    <SeakunTeam />
    <ComingProducts />
    <Donation />
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Journey from './views/Journey.vue';
import SeakunTeam from './views/SeakunTeam.vue';
import ComingProducts from './views/ComingProducts.vue';
import Donation from './views/Donation.vue';
export default {
  layout: 'new',
  components: {
    Header,
    Journey,
    SeakunTeam,
    ComingProducts,
    Donation,
  },
};
</script>

<style></style>
