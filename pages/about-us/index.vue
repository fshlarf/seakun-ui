<template>
  <div>
    <Navbar />
    <Intro />
    <SeakunJourney />
    <SeakunTeams />
    <SeakunCostumers />
    <ServiceComingSoon />
    <SupportSeakun />
    <Footer classContainer="!container-about-us" />
  </div>
</template>

<script>
import Navbar from '~/components/about-us/Navbar.vue';
import Intro from '~/components/about-us/section/Intro.vue';
import SeakunJourney from '~/components/about-us/section/SeakunJourney.vue';
import SeakunTeams from '~/components/about-us/section/SeakunTeams.vue';
import SeakunCostumers from '~/components/about-us/section/SeakunCostumers.vue';
import ServiceComingSoon from '~/components/about-us/section/ServiceComingSoon.vue';
import SupportSeakun from '~/components/about-us/section/SupportSeakun.vue';
import Footer from '~/components/mollecules/Footer.vue';

export default {
  components: {
    Navbar,
    Intro,
    SeakunJourney,
    SeakunTeams,
    SeakunCostumers,
    ServiceComingSoon,
    SupportSeakun,
    Footer,
  },
  // created() {
  //   this.$router.push('/');
  // },
};
</script>

<style lang="scss" scoped></style>
