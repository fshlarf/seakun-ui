<template>
  <div class="thankyou max-w-2xl w-full mx-auto pt-4 tn:-mb-4 md:mb-0">
    <div
      class="thankyou-container md:rounded-3xl md:shadow-md tn:px-3 md:px-8 md:py-8 w-full pt-4"
    >
      <img
        class="w-6/12 mx-auto"
        src="/images/thank-you-new.png"
        alt="Image not found"
      />
      <div class="text-center tn:px-4 md:px-12">
        <h3 class="font-bold text-3xl mt-4 text-center">Thankyou!</h3>
        <p class="text-center md:text-lg mt-4 text-gray-500">
          Konfirmasi pembayaranmu telah berhasil. Admin akan segera menghubungi
          untuk memberikan detail pesananmu.
        </p>
      </div>

      <div v-if="!isLoading" class="mt-8">
        <ProductHighLight
        />
      </div>
      <div v-else class="mt-8">
        <CardShimmer />
      </div>

      <p class="tn:my-1 md:my-2 text-center tn:mt-8 md:mt-10 text-gray-500">
        Total transfer
      </p>
      <div class="text-center">
        <p class="tn:text-2xl md:text-3xl font-semibold">
          {{ currencyFormat(120000) }}
        </p>
      </div>

      <div
        v-if="!isLoading"
        class="detail-order rounded-2xl shadow-md bg-white tn:px-4 md:px-8 md:mx-8 mt-8 py-4"
      >
        <div class="border-b-2 border-gray-200 tn:pb-1 md:pb-3 tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Metode Pembayaran</p>
          <div
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">Bank Transfer Manual</p>
            <img
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16"
              @onerror="onErrorImageBank()"
              src="/images/payment/bni.png"
            />
          </div>
        </div>

        <div class="tn:mt-4 md:mt-5">
          <p class="text-lg text-gray-400">Nama Rekening</p>
          <p class="font-bold text-lg md:mt-2">
            Ibnu Hazar
          </p>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Bank Tujuan</p>
          <div
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">
              Bank Mandiri a.n PT. Seakun Global
            </p>
            <img
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16 "
              @onerror="onErrorImageBank()"
              src="/images/payment/mandiri.png"
            />
          </div>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Tanggal Pembayaran</p>
          <p class="font-bold text-lg md:mt-2">
            1 September 2021
          </p>
        </div>
      </div>

      <div v-else class="tn:px-4 md:px-8 md:mx-8 mt-8 py-4">
        <CardShimmerVertical />
      </div>

      <div class="">
        <p class="tn:text-center md:text-left md:text-lg mt-8 text-gray-500">
          Untuk proses yang lebih cepat, harap konfirmasi ulang melalui Whatsapp
          dengan klik nomor berikut
          <a class="text-primary" target="_blank"
            >+6282124852227</a
          >
        </p>
      </div>
      <Button
        class="w-full bg-green-seakun text-white mt-3 py-2"
        label="Kembali ke beranda"
        @click="toHomePage()"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import CardShimmer from '~/components/mollecules/CardShimmer';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import ProductHighLight from './views/ProductHighLight.vue';
import { currencyFormat } from '~/helpers/word-transformation.js';
export default {
  name: 'thankyou-page',
  layout: 'new',
  data() {
    return {
      currencyFormat,
      isLoading: false,
    };
  },
  components: {
    Button,
    CardShimmer,
    CardShimmerVertical,
    ProductHighLight,
  },
  mounted() {
  },
  methods: {
    toHomePage() {
      this.$router.push('/');
    },
    formatCodePayment(value) {
      if (value) {
        const currency = this.currencyFormat(value);
        const startTotal = currency.substring(0, currency.length - 3);
        const lastCode = currency.substring(
          currency.length - 3,
          currency.length
        );
        return `${startTotal}<span class="text-green-seakun">${lastCode}</span>`;
      }
      return '-';
    },
  },
};
</script>

<style lang="scss">
.thankyou-container {
  background: rgba(254, 254, 254, 0.55);
  backdrop-filter: blur(90px);
  /* Note: backdrop-filter has minimal browser support */
  /* Note: backdrop-filter has minimal browser support */
}
</style>
