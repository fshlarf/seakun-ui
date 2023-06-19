<template>
  <div class="md:py-[91px]">
    <div class="thankyou lg:max-w-[850px] md:max-w-2xl w-full mx-auto">
      <!-- <img
      class="w-full tn:hidden md:block cursor-pointer"
      src="/images/ramadan-gift/thankyou2.webp"
      alt="thr banner"
      @click="toThrPage"
    /> -->
      <div
        class="thankyou-container md:rounded-3xl md:shadow-md md:px-[50px] tn:px-4 w-full tn:pt-[28px] md:pt-[82px]"
      >
        <!-- <img
        class="w-full md:hidden tn:mb-6 cursor-pointer"
        src="/images/ramadan-gift/thankyou-mobile.webp"
        alt="thr banner"
        @click="toThrPage"
      /> -->
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
              class="md:w-44 tn:w-[120px] mx-auto"
              src="/images/thank-you-new.png"
              alt="pembayaran sukses"
            />
          </template>
        </template>
        <div v-if="!isLoading" class="text-center tn:px-4">
          <h3
            v-if="
              orderData.length > 0 && orderData[0].provider.slug === 'sekurban'
            "
            class="font-bold md:text-[32px] tn:text-sm text-center tn:mt-4 tn:mb-1 md:mt-9 md:mb-4"
          >
            Terima kasih!
          </h3>
          <h3
            v-else
            class="font-bold md:text-3xl tn:text-sm tn:mt-4 tn:mb-1 text-center md:mt-9 md:mb-4"
          >
            Thankyou!
          </h3>
          <p
            v-if="
              orderData.length > 0 && orderData[0].provider.slug === 'sekurban'
            "
            class="text-center md:text-lg tn:text-xs tn:mb-6 md:mb-9 text-[#2D2D2D] text-opacity-50"
          >
            Konfirmasi pembayaranmu telah berhasil. Admin akan segera
            menghubungi untuk memberikan detail pesananmu.
          </p>
          <p
            v-else
            class="text-center md:text-lg tn:text-xs text-gray-500 tn:mb-6 md:mb-9"
          >
            Konfirmasi pembayaranmu telah berhasil. Admin akan segera
            menghubungi untuk memberikan detail pesananmu.
          </p>
        </div>

        <div
          v-if="
            orderData.length > 1 && orderData[0].provider.slug !== 'sekurban'
          "
          class="flex-1 flex-column md:mb-9 tn:mb-6 p-3 rounded-lg border-l-4 border-green-seakun bg-[#F4FDFA] bg-opacity-50"
        >
          <p class="md:text-xl tn:text-xs font-bold">Detail Pemesan</p>
          <div
            class="md:my-4 tn:my-[9px] border-b border-[#8DCABE] border-opacity-20"
          />
          <div class="flex gap-2 items-center">
            <img
              src="/images/product/brand/order/icon/user.svg"
              alt="icon-user"
            />
            <p class="md:text-base tn:text-xs font-bold">
              {{ orderData[1].customerName }}
            </p>
          </div>
          <div class="flex gap-2 items-center my-2">
            <img
              src="/images/product/brand/order/icon/phone.svg"
              alt="icon-phone"
            />

            <p class="md:text-base tn:text-xs font-normal">
              +{{ orderData[0].customerPhone }}
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <img
              src="/images/product/brand/order/icon/email.svg"
              alt="icon-email"
            />

            <p class="md:text-base tn:text-xs font-normal">
              {{ orderData[1].customerEmail }}
            </p>
          </div>
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

        <div
          class="bg-[#E9FAF5] bg-opacity-50 py-[21px] md:mt-9 tn:mt-6 rounded-[10px]"
        >
          <p
            class="md:pb-3 tn:pb-1 text-center font-semibold md:text-base tn:text-xs"
          >
            Total transfer
          </p>
          <div class="text-center text-[#8DCABE]">
            <p class="tn:text-base md:text-[32px] font-semibold">
              {{ currencyFormat(dataDetailOrder.transferAmount) }}
            </p>
          </div>
        </div>

        <div
          v-if="!isLoading"
          class="detail-order rounded-[10px] bg-[#FCFFFE] tn:px-4 md:px-8 tn:py-3 md:py-[25px] md:mt-9 tn:mt-6"
        >
          <div
            class="relative border-b-[1px] border-[#E5E5E5] border-opacity-50 tn:pb-3"
          >
            <p class="md:text-base tn:text-xs text-gray-400 tn:pb-2">
              Metode Pembayaran
            </p>
            <div
              v-if="dataDetailOrder.paymentBankFrom === 'lainnya'"
              class="md:mt-0"
            >
              <p class="font-bold md:text-base tn:text-xs">
                Bank Transfer Manual
              </p>
            </div>
            <div v-else class="tn:flex tn:justify-between tn:items-center">
              <p class="font-bold md:text-base tn:text-xs">
                Bank Transfer Manual
              </p>
              <img
                v-if="dataDetailOrder.paymentBankFrom"
                class="absolute bottom-0 right-0 tn:w-1/3 tn:h-auto sm:w-auto sm:h-16"
                @onerror="onErrorImageBank()"
                :src="`images/payment/${setNameBank(
                  dataDetailOrder.paymentBankFrom
                )}.png`"
              />
            </div>
          </div>

          <div class="tn:mt-3 md:mt-5">
            <p class="md:text-base tn:text-xs text-gray-400">Nama Rekening</p>
            <p class="font-bold md:text-base tn:text-xs mt-2">
              {{ dataDetailOrder.paymentHolder }}
            </p>
          </div>

          <div class="tn:mt-[9px] md:mt-[13px]">
            <p class="md:text-base tn:text-xs text-gray-400">Bank Tujuan</p>
            <div
              class="tn:flex tn:justify-between tn:items-center mt-2 relative"
            >
              <p class="font-bold md:text-base tn:text-xs">
                {{ dataDetailOrder.destinationBank }} a.n
                {{ dataDetailOrder.destinationHolderName }}
              </p>
              <img
                v-if="dataDetailOrder.paymentBankTo"
                class="absolute bottom-0 right-0 tn:w-1/3 tn:h-auto sm:w-auto sm:h-16"
                @onerror="onErrorImageBank()"
                :src="`images/payment/${setNameBank(
                  dataDetailOrder.paymentBankTo
                )}.png`"
              />
            </div>
          </div>

          <div class="tn:mt-[9px] md:mt-[13px]">
            <p class="md:text-base tn:text-xs text-gray-400">
              Tanggal Pembayaran
            </p>
            <p class="font-bold md:text-base tn:text-xs mt-2">
              {{ dataDetailOrder.paymentDate }}
            </p>
          </div>
        </div>

        <div v-else class="tn:px-4 md:px-8 md:mx-8 tn:mt-8 tn:py-4">
          <CardShimmerVertical />
        </div>

        <div
          class="flex gap-[9px] tn:text-xs md:text-base md:font-semibold tn:my-6 md:my-9 bg-[#FFC801] bg-opacity-10 rounded-[10px] md:py-[17px] md:pl-[17px] md:pr-[45px] tn:py-[11px] tn:pl-[11px] tn:pr-[11px]"
        >
          <div class="md:mt-1">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 12.5166C9.23644 12.5166 9.43449 12.4366 9.59449 12.2766C9.75449 12.1166 9.83422 11.9188 9.83366 11.6833V8.34994C9.83366 8.11382 9.75366 7.91577 9.59366 7.75577C9.43366 7.59577 9.23588 7.51605 9.00033 7.5166C8.76422 7.5166 8.56616 7.5966 8.40616 7.7566C8.24616 7.9166 8.16644 8.11438 8.16699 8.34994V11.6833C8.16699 11.9194 8.24699 12.1174 8.40699 12.2774C8.56699 12.4374 8.76477 12.5172 9.00033 12.5166ZM9.00033 5.84994C9.23644 5.84994 9.43449 5.76994 9.59449 5.60994C9.75449 5.44994 9.83422 5.25216 9.83366 5.0166C9.83366 4.78049 9.75366 4.58244 9.59366 4.42244C9.43366 4.26244 9.23588 4.18271 9.00033 4.18327C8.76422 4.18327 8.56616 4.26327 8.40616 4.42327C8.24616 4.58327 8.16644 4.78105 8.16699 5.0166C8.16699 5.25271 8.24699 5.45077 8.40699 5.61077C8.56699 5.77077 8.76477 5.85049 9.00033 5.84994ZM9.00033 16.6833C7.84755 16.6833 6.76422 16.4644 5.75033 16.0266C4.73644 15.5888 3.85449 14.9952 3.10449 14.2458C2.35449 13.4958 1.76088 12.6138 1.32366 11.5999C0.886437 10.586 0.667548 9.50271 0.666992 8.34994C0.666992 7.19716 0.885881 6.11382 1.32366 5.09994C1.76144 4.08605 2.35505 3.2041 3.10449 2.4541C3.85449 1.7041 4.73644 1.11049 5.75033 0.673268C6.76422 0.236046 7.84755 0.0171571 9.00033 0.0166016C10.1531 0.0166016 11.2364 0.235491 12.2503 0.673268C13.2642 1.11105 14.1462 1.70466 14.8962 2.4541C15.6462 3.2041 16.24 4.08605 16.6778 5.09994C17.1156 6.11382 17.3342 7.19716 17.3337 8.34994C17.3337 9.50271 17.1148 10.586 16.677 11.5999C16.2392 12.6138 15.6456 13.4958 14.8962 14.2458C14.1462 14.9958 13.2642 15.5897 12.2503 16.0274C11.2364 16.4652 10.1531 16.6838 9.00033 16.6833ZM9.00033 15.0166C10.8614 15.0166 12.4378 14.3708 13.7295 13.0791C15.0212 11.7874 15.667 10.211 15.667 8.34994C15.667 6.48882 15.0212 4.91244 13.7295 3.62077C12.4378 2.3291 10.8614 1.68327 9.00033 1.68327C7.13921 1.68327 5.56283 2.3291 4.27116 3.62077C2.97949 4.91244 2.33366 6.48882 2.33366 8.34994C2.33366 10.211 2.97949 11.7874 4.27116 13.0791C5.56283 14.3708 7.13921 15.0166 9.00033 15.0166Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <p class="tn:mb-2">
              Mohon menunggu 1 x 24 jam, jika melewati rentang waktu tersebut
              dan pesanan kamu belum diproses, harap hubungi admin via whatsapp
              <a
                class="text-[#2895FF]"
                target="_blank"
                :href="getLinkWhatsapp()"
                >+6282124852232.</a
              >
            </p>
          </div>
        </div>
        <!-- <div
          v-if="
            orderData.length > 0 && orderData[0].provider.slug !== 'sekurban'
          "
        > 
          <p class="tn:text-center md:text-left md:text-lg text-gray-500">
            Pesanan akan diproses maksimal 1x24 jam. Hubungi Admin melalui
            Whatsapp di nomor
            <a class="text-primary" target="_blank" :href="getLinkWhatsapp()"
              >+6282124852232</a
            >
            jika pesanan kamu belum diproses di batas waktu proses pesanan.
          </p>
        </div> -->
        <Button
          class="w-full bg-green-seakun text-white tn:py-3 mb-[82px]"
          label="Kembali ke beranda"
          @click="toHomePage()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import CardShimmer from '~/components/mollecules/CardShimmer';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import OrderCard from './views/OrderCard.vue';
// import OrderCard from '~/components/mollecules/OrderCard.vue';
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
    // toThrPage() {
    //   this.$router.push('/thr');
    // },
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

      return `https://api.whatsapp.com/send/?phone=6282124852232&text=
        Halo+saya+sudah+melakukan+pesanan+dan+pembayaran%0A%0A*No+Order:*+${orderNumber}%0A*Nama:*+${name}%0A*Pesanan:*+${packageName}&app_absent=0`;
    },
  },
};
</script>

<style lang="scss">
.thankyou-container {
  background: white;
  // backdrop-filter: blur(90px);
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  font-family: 'DM Sans', sans-serif !important;
  /* Note: backdrop-filter has minimal browser support */
  /* Note: backdrop-filter has minimal browser support */
}
</style>
