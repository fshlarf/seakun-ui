<template>
  <div>
    <NavbarBlank
      className="!bg-[#ffffff]  border-b border-[#F2F5FA] -mx-4 sm:mx-0"
    />
    <main class="min-h-screen mt-[75px] sm:mt-24">
      <IntroBanner />
      <LatestPrice />
      <PriceChanges />
      <OptionInformation />
    </main>
    <div class="px-2 sm:px-0 bg-[#2D2D2D]">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavbarBlank from './../../../components/mollecules/NavbarBlank.vue';
import IntroBanner from './components/IntroBanner.vue';
import LatestPrice from './components/LatestPrice.vue';
import PriceChanges from './components/PriceChanges.vue';
import OptionInformation from './components/OptionInformation.vue';
import Footer from './../../../components/mollecules/Footer.vue';
export default {
  components: {
    NavbarBlank,
    IntroBanner,
    LatestPrice,
    PriceChanges,
    OptionInformation,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
