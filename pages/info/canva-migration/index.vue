<template>
  <div>
    <NavbarBlank
      className="!bg-[#ffffff]  border-b border-[#F2F5FA]"
      classContainer="container-seakun-blog"
    />
    <main class="min-h-screen mt-[75px] sm:mt-24 w-full">
      <IntroBanner />
      <LatestPrice />
      <PriceChanges />
      <OptionInformation />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from './../../../components/mollecules/NavbarBlank.vue';
import IntroBanner from './components/IntroBanner.vue';
import LatestPrice from './components/LatestPrice.vue';
import PriceChanges from './components/PriceChanges.vue';
import OptionInformation from './components/OptionInformation.vue';
import Footer from './../../../components/mollecules/FooterSemabar.vue';
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