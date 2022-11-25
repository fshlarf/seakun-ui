<template>
  <div>
    <Navbar />
    <Header />
    <Journey />
    <SeakunTeam />
    <ComingProducts />
    <Donation />
    <Footer />
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Header from './views/Header.vue';
import Journey from './views/Journey.vue';
import SeakunTeam from './views/SeakunTeam.vue';
import ComingProducts from './views/ComingProducts.vue';
import Donation from './views/Donation.vue';
import Footer from '~/components/mollecules/Footer.vue';
export default {
  components: {
    Navbar,
    Header,
    Journey,
    SeakunTeam,
    ComingProducts,
    Donation,
    Footer,
  },
};
</script>

<style></style>
