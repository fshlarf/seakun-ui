<template>
  <div class="thankyou max-w-2xl w-full mx-auto py-4">
    <div
      class="thankyou-container md:rounded-3xl md:shadow-md tn:px-3 md:px-8 md:py-8 w-full pt-4"
    >
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

      <div
        class="detail-order rounded-2xl shadow-md bg-white tn:px-4 md:px-8 md:mx-8 mt-8 py-4"
      >
        <div class="">
          <p class="text-lg text-gray-400">Nama Rekening</p>
          <p class="font-bold text-lg md:mt-2">{{ paymentHolder }}</p>
        </div>
        <div class="border-b-2 border-gray-200 tn:pb-1 md:pb-3 tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Metode Pembayaran</p>
          <div v-if="paymentBankFrom === 'lainnya'" class="md:mt-2">
            <p class="font-bold text-lg">Bank Transfer Manual</p>
          </div>
          <div
            v-else
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">Bank Transfer Manual</p>
            <img
              v-if="paymentBankFrom"
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16"
              @onerror="onErrorImageBank()"
              :src="`images/payment/${setNameBank(paymentBankFrom)}.png`"
            />
          </div>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Bank Tujuan</p>
          <div
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">
              {{ destinationBank }} a.n PT. Seakun Global
            </p>
            <img
              v-if="paymentBankTo"
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16"
              @onerror="onErrorImageBank()"
              :src="`images/payment/${setNameBank(paymentBankTo)}.png`"
            />
          </div>
        </div>
      </div>
      <div class="">
        <p class="tn:text-center md:text-left text-lg mt-8 text-gray-500">
          Mohon menunggu 10-20 menit. Jika melewati rentang waktu tersebut dan
          pesanan kamu belum di proses, harap hubungi admin via whatsapp
          <a
            class="text-primary"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6282124852227"
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
export default {
  name: 'thankyou-page',
  layout: 'navigationBlank',
  data() {
    return {
      paymentHolder: '',
      paymentBankFrom: '',
      paymentBankTo: '',
      destinationBank: '',
    };
  },
  components: {
    Button,
  },
  mounted() {
    const { holder, to, from } = this.$router.history.current.query;
    this.paymentHolder = holder;
    this.destinationBank = to;
    this.paymentBankFrom = from.toLowerCase();
    this.paymentBankTo = to.toLowerCase();
  },
  methods: {
    setNameBank(bank) {
      switch (bank) {
        case 'digibank / dbs':
          return 'digibank';
          break;
        case 'keb hana / line bank':
          return 'keb hana';
          break;
        case 'syariah indonesia / bsi':
          return 'bsi';
          break;
        default:
          return bank;
      }
    },
    toHomePage() {
      this.$router.push('/');
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
