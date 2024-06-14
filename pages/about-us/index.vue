<template>
  <div class="space-y-10">
    <Navbar />
    <Hero />
    <SeakunJourney />
    <SeakunTeams />
    <ServiceComingSoon />
    <TipService />
    <Footer classContainer="!container-about-us" />
  </div>
</template>

<script>
import Navbar from '~/components/about-us/Navbar.vue';
import Hero from '~/components/about-us/section/Hero.vue';
import SeakunJourney from '~/components/about-us/section/SeakunJourney.vue';
import SeakunTeams from '~/components/about-us/section/SeakunTeams.vue';
import ServiceComingSoon from '~/components/about-us/section/ServiceComingSoon.vue';
import SupportSeakun from '~/components/about-us/section/SupportSeakun.vue';
import Footer from '~/components/mollecules/Footer.vue';

export default {
  components: {
    Navbar,
    Hero,
    SeakunJourney,
    SeakunTeams,
    ServiceComingSoon,
    SupportSeakun,
    Footer,
  },
  created() {
    this.$router.push('/');
  },
};
</script>

<style lang="scss" scoped></style>
