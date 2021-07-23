<template>
  <div class="thankyou max-w-2xl w-full mx-auto mt-10 py-4">
    <div class="thankyou-container shadow-md px-4 pb-10 w-full mt-10 pt-4">
      <img
        class="w-6/12 mx-auto"
        src="/images/thank-you-new.png"
        alt="Image not found"
      />
      <div class="thankyou-wording text-center px-12">
        <h3 class="font-bold text-3xl mt-4 text-center">Thankyou!</h3>
        <p class="text-center text-lg mt-4 text-gray-500">
          Konfirmasi pembayaranmu telah berhasil. Admin akan segera menghubungi
          untuk memberikan detail pesananmu.
        </p>
      </div>
      <div class="detail-order bg-white px-12 mt-12 py-4">
        <div class="border-b-2 border-gray-200 pb-3">
          <p class="text-lg text-gray-400">Metode Pembayaran</p>
          <div class="flex justify-between items-center mt-2" v-if="bankImage">
            <p class="font-bold text-lg">Bank Transfer Manual</p>
            <img class="w-3/12" @onerror="onErrorImageBank()" :src="`images/payment/${bankImage}.png`" />
          </div>
            <div class="flex justify-between items-center mt-2" v-else>
            <p class="font-bold text-lg">Bank Transfer Manual - <span class="capitalize">{{paymentBank}}</span></p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-lg text-gray-400">Bank Tujuan</p>
          <p class="font-bold text-lg mt-2">
            {{ destinationBank }} a.n PT. Seakun Global
          </p>
        </div>
        <div class="mt-4">
          <p class="text-lg text-gray-400">Nama Rekening</p>
          <p class="font-bold text-lg mt-2">{{ paymentHolder }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thankyou-page',
  layout: 'navigationBlank',
  data() {
    return {
      paymentHolder: '',
      paymentBank: '',
      destinationBank: '',
      paymentImage: '',
      availableImagePayment : [
        'dana',
        'bca',
        'bri',
        'gopay',
        'link-aja',
        'mandiri',
        'ovo'
      ]
    };
  },
  mounted() {
    const { holder, to, from } = this.$router.history.current.query;
    this.paymentHolder = holder;
    this.destinationBank = to;
    this.paymentBank = from.toLowerCase();
    this.bankImage = this.availableImagePayment.find((bank)=> bank == this.paymentBank )
  },
};
</script>

<style lang="scss">
.thankyou-container {
  background: rgba(254, 254, 254, 0.55);
  backdrop-filter: blur(90px);
  /* Note: backdrop-filter has minimal browser support */
/* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
}
.detail-order {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
</style>
