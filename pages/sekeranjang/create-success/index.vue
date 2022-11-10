<template>
  <div id="create-product-success">
    <Navbar />
    <div class="max-w-[650px] mx-auto tn:pt-24 tn:px-4">
      <img
        class="w-[300px] h-[300px] mx-auto"
        src="/images/sekeranjang/waiting-review.png"
        alt="waiting review"
      />
      <h1 class="text-center tn:text-[32px] md:text-[40px] font-bold tn:mt-6">
        Pengajuan kamu sedang di review
      </h1>
      <p
        class="text-center md:text-[20px] tn:mt-4 md:mt-6 max-w-[540px] mx-auto"
      >
        Barang yang kamu ajukan sedang direview oleh admin kami. Proses ini
        memakan waktu 1x24 jam
      </p>
      <div class="w-full tn:mt-5 md:mt-12 flex justify-center">
        <Button
          add-class="w-[400px]"
          class="tn:py-4 font-bold"
          label="Kembali ke beranda"
          variant="primary"
          @click="$router.push('/sekeranjang')"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import Footer from '../views/Footer.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Navbar,
    Footer,
    Button,
  },
};
</script>

<style>
#create-product-success {
  font-family: 'DM Sans', sans-serif !important;
  font-weight: 400 !important;
}
</style>
