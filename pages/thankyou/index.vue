<template>
  <div
    class="thankyou max-w-2xl w-full mx-auto tn:pt-6 md:pt-12 tn:-mb-4 md:mb-0"
  >
    <img
      class="w-full tn:hidden md:block cursor-pointer -mt-12"
      src="/images/general-gift/thankyou.png"
      alt="thr banner"
      @click="toTipPage"
    />
    <!-- <img
      @click="toSekurbanPage"
      src="/images/thankyou/sequrban-banner-website.png"
      alt="sequrban banner"
      class="cursor-pointer tn:hidden md:block"
    /> -->
    <div
      class="thankyou-container md:rounded-3xl md:shadow-md tn:px-3 md:px-8 md:py-8 w-full md:pt-7 md:mt-7"
    >
      <!-- <img
        @click="toSekurbanPage"
        src="/images/thankyou/sequrban-banner-mobile.png"
        alt="sequrban banner"
        class="cursor-pointer md:hidden w-full mb-7"
      /> -->
      <img
        class="w-full md:hidden tn:mb-6 cursor-pointer"
        src="/images/general-gift/thankyou-mobile.png"
        alt="thr banner"
        @click="toTipPage"
      />
      <template v-if="!isLoading">
        <template
          v-if="
            orderData.length > 0 && orderData[0].provider.slug === 'sekurban'
          "
        >
          <img
            class="w-6/12 mx-auto"
            src="/images/sekurban/thankyou.png"
            alt="pembayaran sukses"
          />
        </template>
        <template v-else>
          <img
            class="w-6/12 mx-auto"
            src="/images/thank-you-new.png"
            alt="pembayaran sukses"
          />
        </template>
      </template>
      <div v-if="!isLoading" class="text-center tn:px-4 md:px-12 tn:mb-4">
        <h3 class="font-bold text-3xl tn:mt-4 text-center">Terima Kasih!</h3>
        <p
          v-if="
            orderData.length > 0 && orderData[0].provider.slug === 'sekurban'
          "
          class="text-center md:text-lg tn:mt-2 text-gray-500"
        >
          Konfirmasi pembayaranmu telah berhasil. Terimakasih sudah mengikuti
          <span class="font-bold"
            >Program Patungan Qurban Seakun x Kitabisa x Ecoqurban</span
          >. Untuk informasi tentang jadwal pelaksanaan proses qurban, akan
          diinformasikan mendekati hari H (Idul Adha).
        </p>
        <p v-else class="text-center md:text-lg tn:mt-4 text-gray-500">
          Konfirmasi pembayaranmu telah berhasil. Admin akan segera menghubungi
          via email untuk memberikan detail pesananmu.
        </p>
      </div>

      <ProductHighLightLoading v-if="isLoading" />
      <div v-else v-for="(order, index) in orderData" :key="index">
        <template v-if="order.provider.slug === 'sekurban'">
          <SekurbanOrderCard :sekurban="order" />
        </template>
        <template v-else>
          <OrderCard
            :orderData="orderData"
            :order="order"
            :index="index"
            :expiredAt="true"
          />
        </template>
      </div>

      <p class="tn:my-1 md:my-2 text-center tn:mt-8 md:mt-10 text-gray-500">
        Total transfer
      </p>
      <div class="text-center">
        <p class="tn:text-2xl md:text-3xl font-semibold">
          {{ currencyFormat(dataDetailOrder.transferAmount) }}
        </p>
      </div>

      <div
        v-if="!isLoading"
        class="detail-order rounded-2xl shadow-md bg-white tn:px-4 md:px-8 md:mx-8 tn:my-8 tn:py-4"
      >
        <div class="border-b-2 border-gray-200 tn:pb-1 md:pb-3 tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Metode Pembayaran</p>
          <div
            v-if="dataDetailOrder.paymentBankFrom === 'lainnya'"
            class="md:mt-2"
          >
            <p class="font-bold text-lg">Bank Transfer Manual</p>
          </div>
          <div
            v-else
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">Bank Transfer Manual</p>
            <img
              v-if="dataDetailOrder.paymentBankFrom"
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16"
              @onerror="onErrorImageBank()"
              :src="`images/payment/${setNameBank(
                dataDetailOrder.paymentBankFrom
              )}.png`"
            />
          </div>
        </div>

        <div class="tn:mt-4 md:mt-5">
          <p class="text-lg text-gray-400">Nama Rekening</p>
          <p class="font-bold text-lg md:mt-2">
            {{ dataDetailOrder.paymentHolder }}
          </p>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Bank Tujuan</p>
          <div
            class="tn:grid tn:grid-cols-5 tn:justify-between tn:items-center md:mt-2 relative"
          >
            <p class="font-bold text-lg tn:col-span-3">
              {{ dataDetailOrder.destinationBank }} a.n
              {{ dataDetailOrder.destinationHolderName }}
            </p>
            <img
              v-if="dataDetailOrder.paymentBankTo"
              class="tn:col-span-2 absolute bottom-0 right-0 tn:w-1/3 tn:h-auto md:w-auto md:h-16"
              @onerror="onErrorImageBank()"
              :src="`images/payment/${setNameBank(
                dataDetailOrder.paymentBankTo
              )}.png`"
            />
          </div>
        </div>

        <div class="tn:mt-3 md:mt-4">
          <p class="text-lg text-gray-400">Tanggal Pembayaran</p>
          <p class="font-bold text-lg md:mt-2">
            {{ dataDetailOrder.paymentDate }}
          </p>
        </div>
      </div>

      <div v-else class="tn:px-4 md:px-8 md:mx-8 tn:mt-8 tn:py-4">
        <CardShimmerVertical />
      </div>

      <div
        v-if="orderData.length > 0 && orderData[0].provider.slug !== 'sekurban'"
      >
        <p class="tn:text-center md:text-left md:text-lg text-gray-500">
          Pesanan akan diproses maksimal 1x24 jam. Hubungi Admin melalui
          whatsapp
          <a
            class="text-blue-500"
            href="https://api.whatsapp.com/send?phone=6282124852235"
            >082124852235</a
          >
        </p>
      </div>
      <Button
        class="w-full bg-green-seakun text-white tn:mt-3 tn:py-3"
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
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import OrderCard from '~/components/mollecules/OrderCard.vue';
import SekurbanOrderCard from '~/components/mollecules/SekurbanOrderCard.vue';
import OrderService from '~/services/OrderServices.js';
import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';

export default {
  name: 'thankyou-page',
  layout: 'new',
  data() {
    return {
      OrderService,
      currencyFormat,
      moment,
      isLoading: false,
      orderUids: '',
      orderData: [],
      dataDetailOrder: {
        transferAmount: '',
        paymentHolder: '',
        paymentBankFrom: '',
        paymentBankTo: '',
        destinationBank: '',
        destinationHolderName: '',
        paymentDate: '',
      },
      dataProduct: {
        provider: '',
        packageName: '',
        grandTotal: 0,
        totalMonth: 0,
        payment: 0,
        orderNumber: '',
      },
    };
  },
  components: {
    Button,
    CardShimmer,
    CardShimmerVertical,
    ProductHighLightLoading,
    OrderCard,
    SekurbanOrderCard,
  },
  mounted() {
    this.OrderService = new OrderService(this);
    const { order_uid, customer_uid } = this.$router.history.current.query;
    this.orderUids = order_uid;
    this.getDetailOrder(order_uid, customer_uid);
  },
  methods: {
    toTipPage() {
      this.$router.push('/tip');
    },
    toSekurbanPage() {
      this.$router.push('/sekurban');
    },
    setNameBank(bank) {
      switch (bank) {
        case 'digibank / dbs':
          return 'digibank';
        case 'keb hana / line bank':
          return 'keb hana';
        case 'syariah indonesia / bsi':
          return 'bsi';
        default:
          return bank;
      }
    },
    async getDetailOrder(orderUid, customerUid) {
      this.isLoading = true;
      const { OrderService } = this;
      try {
        const fetchDataOrder = await OrderService.getMultipleOrder(
          orderUid,
          customerUid
        );
        if (fetchDataOrder.data) {
          const dataResult = fetchDataOrder.data.data;
          this.orderData = dataResult;
          const firstOrder = dataResult[0];

          this.dataDetailOrder = {
            paymentHolder: firstOrder.payment.paymentFromName,
            destinationBank: firstOrder.payment.paymentToBank,
            paymentBankFrom: firstOrder.payment.paymentFromBank.toLowerCase(),
            paymentBankTo: firstOrder.payment.paymentToBank.toLowerCase(),
            destinationHolderName: firstOrder.payment.paymentToName,
            transferAmount: firstOrder.payment.transferAmount,
            orderNumber: firstOrder.orderNumber,
            paymentDate: moment
              .unix(firstOrder.payment.paymentDate)
              .locale('id')
              .format('D MMMM YYYY'),
          };

          this.dataProduct = {
            provider: firstOrder.provider.slug,
            packageName: `${firstOrder.provider.name} - ${firstOrder.provider.package.variant.name}`,
            grandTotal: firstOrder.payment.totalPrice,
            totalMonth: firstOrder.provider.package.variant.duration,
            payment: firstOrder.payment.payment,
            orderNumber: firstOrder.orderNumber,
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
    getLinkWhatsapp() {
      const orderNumber = this.dataDetailOrder.orderNumber;
      const name = this.dataDetailOrder.paymentHolder;
      const packageName = this.dataProduct.packageName;

      return `https://api.whatsapp.com/send/?phone=6282124852&text=
        Halo+saya+sudah+melakukan+pesanan+dan+pembayaran%0A%0A*No+Order:*+${orderNumber}%0A*Nama:*+${name}%0A*Pesanan:*+${packageName}&app_absent=0`;
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
