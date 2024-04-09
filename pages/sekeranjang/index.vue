<template>
  <div id="sekeranjang">
    <Navbar />
    <Header />
    <OrderFlow />
    <ProductList />
    <ProductSubmitBanner />
    <Footer />
    <THRChallengeVue
      :isShow="$store.state.isShowPopupTHRChallenge"
      @handleClose="
        $store.commit(
          'setShowPopupTHRChallenge',
          !$store.state.isShowPopupTHRChallenge
        )
      "
    />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import Header from './views/Header';
import OrderFlow from './views/OrderFlow';
import ProductList from './views/ProductList';
import ProductSubmitBanner from './views/ProductSubmitBanner';
import Footer from './views/Footer.vue';
import THRChallengeVue from '../../components/organisms/ThrChallenge/ModalPopup/THRChallenge.vue';
export default {
  components: {
    Navbar,
    Header,
    OrderFlow,
    ProductList,
    ProductSubmitBanner,
    Footer,
    THRChallengeVue,
  },
};
</script>

<style>
#sekeranjang {
  font-family: 'DM Sans', sans-serif !important;
  background-color: white;
}
</style>
