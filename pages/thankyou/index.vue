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
      <div class="text-center tn:px-4 md:px-12">
        <h3 class="font-bold text-3xl mt-4 text-center">Thankyou!</h3>
        <p class="text-center md:text-lg mt-4 text-gray-500">
          Konfirmasi pembayaranmu telah berhasil. Admin akan segera menghubungi
          untuk memberikan detail pesananmu.
        </p>
      </div>

      <div class="mt-8">
        <ProductHighLight
          :provider="dataProduct.provider"
          :isLoading="isLoading"
          :packageName="dataProduct.packageName"
          :grandTotal="dataProduct.grandTotal"
          :totalMonth="dataProduct.totalMonth"
        />
      </div>

      <p class="tn:my-1 md:my-2 text-center tn:mt-8 md:mt-10 text-gray-500">
        Total transfer
      </p>
      <div class="text-center">
        <p class="tn:text-2xl md:text-3xl font-semibold">
          {{ currencyFormat(transferAmount) }}
        </p>
      </div>

      <div
        class="detail-order rounded-2xl shadow-md bg-white tn:px-4 md:px-8 md:mx-8 mt-8 py-4"
      >
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

        <div class="tn:mt-4 md:mt-5">
          <p class="text-lg text-gray-400">Nama Rekening</p>
          <p class="font-bold text-lg md:mt-2">{{ paymentHolder }}</p>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Bank Tujuan</p>
          <div
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">
              {{ destinationBank }} a.n {{ destinationHolderName }}
            </p>
            <img
              v-if="paymentBankTo"
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16"
              @onerror="onErrorImageBank()"
              :src="`images/payment/${setNameBank(paymentBankTo)}.png`"
            />
          </div>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Tanggal Pembayaran</p>
          <p class="font-bold text-lg md:mt-2">
            {{ paymentDate }}
          </p>
        </div>
      </div>
      <div class="">
        <p class="tn:text-center md:text-left md:text-lg mt-8 text-gray-500">
          Mohon menunggu 1x30 menit. Jika melewati rentang waktu tersebut dan
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
import ProductHighLight from '~/components/mollecules/ProductHighLight.vue';
import OrderService from '~/services/OrderServices.js';
import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';
export default {
  name: 'thankyou-page',
  layout: 'navigationBlank',
  data() {
    return {
      OrderService,
      currencyFormat,
      moment,
      transferAmount: '',
      paymentHolder: '',
      paymentBankFrom: '',
      paymentBankTo: '',
      destinationBank: '',
      destinationHolderName: '',
      paymentDate: '',
      isLoading: false,
      dataDetailOrder: {},
      dataProduct: {
        provider: '',
        packageName: '',
        grandTotal: 0,
        totalMonth: 0,
        payment: 0,
      },
    };
  },
  components: {
    Button,
    ProductHighLight,
  },
  mounted() {
    this.OrderService = new OrderService(this);
    const { order_uid, customer_uid } = this.$router.history.current.query;

    this.getDetailOrder(order_uid, customer_uid);
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
    async getDetailOrder(orderUid, customerUid) {
      const { OrderService } = this;
      this.isLoading = true;
      try {
        const fetchDataOrder = await OrderService.getDetailOrder(
          orderUid,
          customerUid
        );
        if (fetchDataOrder.data) {
          const dataResult = fetchDataOrder.data.data;
          this.dataDetailOrder = dataResult;
          this.paymentHolder = this.dataDetailOrder.payment.paymentFromName;
          this.destinationBank = this.dataDetailOrder.payment.paymentToBank;
          this.paymentBankFrom = this.dataDetailOrder.payment.paymentFromBank.toLowerCase();
          this.paymentBankTo = this.dataDetailOrder.payment.paymentToBank.toLowerCase();
          this.destinationHolderName = this.dataDetailOrder.payment.paymentToName;
          this.transferAmount = this.dataDetailOrder.payment.transferAmount;
          this.paymentDate = moment(this.dataDetailOrder.payment.paymentDate)
            .locale('id')
            .format('D MMMM YYYY');

          this.dataProduct = {
            provider: this.dataDetailOrder.provider.slug,
            packageName: this.dataDetailOrder.provider.package.variant.name,
            grandTotal: this.dataDetailOrder.payment.totalPrice,
            totalMonth: this.dataDetailOrder.provider.package.variant.duration,
            payment: this.dataDetailOrder.payment.payment,
          };
        } else {
          throw new Error(fetchDataOrder);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
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
