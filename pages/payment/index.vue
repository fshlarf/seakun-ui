<template>
  <div>
    <div class="max-w-[680px] w-full mx-auto pt-5 px-4">
      <div
        class="text-[12px] md:text-sm text-[#417465] bg-[#E9FCF8] rounded-[8px] md:font-medium flex items-center gap-[8px] p-[12px] md:px-4 md:py-0"
      >
        <img
          class="w-[50px] md:w-[115px]"
          src="/images/payment/illustration/cart.svg"
          alt="payment"
        />
        <p>
          Ini halaman terakhir dari proses orderanmu. Pastikan semua sudah
          benar, ya. :)
        </p>
      </div>
    </div>
    <div class="max-w-[680px] w-full mx-auto px-4">
      <CustomerDetail
        :isLoading="isLoadingPayment"
        :orderDetail="detailOrder"
      />
      <OrderList
        :isLoading="isLoadingPayment"
        @changeDuration="getDetailVariant"
        :orderData="orderData"
        @onChecked="onCheckedOrder"
      />
      <div v-if="isNetflixReguler" class="mt-4">
        <BannerInformationNetflix
          className="!text-sm lg:!text-base leading-5 md:leading-6"
        />
      </div>
      <div class="tn:mt-4 space-y-3">
        <WarningPriceChange
          v-for="(provider, id) in updatedProviderList"
          :key="id"
          :provider="provider"
          @click="onClickPriceScheme"
        />
      </div>
      <PaymentMethod
        :method-list="paymentMethods"
        :selected-method="selectedMethod"
        :is-allow-va="isAllowVa"
        @selectMethod="onSelectPaymentMethod"
      />

      <div class="mt-[24px] md:mt-[28px]">
        <div v-if="!isAfterJune5">
          <div v-if="orderData[0] && orderData[0].provider.slug == 'sekurban'">
            <div class="flex items-center gap-2">
              <CheckboxVue @getval="handleCheckisInstallmentPayments" />
              <p class="text-gray-secondary font-medium text-sm">
                Saya ingin melakukan cicilan
              </p>
            </div>
            <div
              class="mt-4 bg-[#E9FCF8] px-3 md:px-4 py-3 md:py-[11px] flex items-start gap-2 md:gap-3 rounded-lg border border-[#D6F5EF]"
            >
              <img
                src="/images/illustration/installment-payment.webp"
                alt="intallment"
                class="w-[50px] h-[37px] hidden md:block"
              />
              <img
                src="/images/icons/atoms/exclamation-mark-symbol.svg"
                alt="warning"
                class="w-4 h-4 md:hidden"
              />
              <p class="text-xs text-[#417465]">
                Kamu akan melakukan dua kali cicilan qurban. Berikut ini adalah
                pembayaran pertama, sedangkan pembayaran kedua harus dibayarkan
                paling lambat tanggal 5 Juni 2024.
              </p>
            </div>
            <hr class="my-7 border-[#E5E5E5]" />
          </div>
        </div>
        <h2 class="font-bold text-sm md:text-[20px]">Rincian Pembayaran</h2>
        <div class="mt-2 md:mt-4 text-sm md:text-base">
          <div class="flex justify-between items-center">
            <p>Biaya Langganan</p>
            <p class="font-medium">
              {{
                isInstallmentPayments
                  ? currencyFormat(totalPrice / 2)
                  : currencyFormat(totalPrice)
              }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p>Biaya Transaksi & Tax</p>
            <p class="font-medium">{{ currencyFormat(serviceFee) }}</p>
          </div>
          <hr class="my-[8px] md:my-[12px]" />
          <div class="flex justify-between items-center">
            <p class="text-sm md:text-[20px] font-bold">Total Bayar</p>
            <p class="font-bold text-[#00BA88] md:text-[20px]">
              {{ handleFormatTotalFee(totalPayment) }}
            </p>
          </div>
        </div>
      </div>

      <Button
        :label="isNetflixValid ? 'Bayar' : netflixOneMonthWarning"
        class="w-full bg-green-seakun text-base text-white font-bold py-3 my-5"
        @click="createInvoice"
        :isLoading="isLoadingPaymentButton"
        :disabled="!isNetflixValid"
      />
    </div>
    <ModalDuration
      :orderData="pickedOrder"
      :durationData="dataVariants"
      :showModal="isShowModalDuration"
      @onClose="toggleModalDuration"
      @pickDuration="pickDuration"
      :isLoading="isLoadingVariant"
      :isNetflixValid="isNetflixValid"
    />
    <ModalPayment
      :onClickOtomatis="createInvoice"
      :onClickManual="manualPayment"
      :showModal="isShowModalPayment"
      @onClose="OpenCloseModalPayment"
    />
    <ModalPriceScheme
      :show-modal="showModalScheme"
      :data-scheme="dataDetailProvider"
      @closeModal="closeModalScheme"
      @toSchemePage="toSchemePage"
    />
  </div>
</template>

<script>
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import Button from '~/components/atoms/Button';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import CustomerDetail from './views/OrderDetail.vue';
import PaymentDetail from './views/PaymentDetail.vue';
import PaymentMethod from './views/PaymentMethod.vue';
import OrderList from './views/OrderList.vue';
import ModalDuration from './views/ModalDuration.vue';
import ModalPayment from './views/ModalPayment.vue';
import OrderService from '~/services/OrderServices.js';
import MasterService from '~/services/MasterServices.js';
import PaymentService from '~/services/PaymentServices.js';
import { providerList } from '../../constants/price-scheme';
import { priceChangeList } from '../../constants/price-change';
import ModalPriceScheme from '~/components/mollecules/ModalPriceScheme';
import WarningPriceChange from './views/WarningPriceChange.vue';
import { currencyFormat } from '~/helpers/word-transformation';
import CheckboxVue from '../../components/atoms/Checkbox.vue';
import moment from 'moment';
import BannerInformationNetflix from '../../components/mollecules/BannerInformationNetflix.vue';

export default {
  name: 'NewPayment',
  layout: 'new',
  components: {
    ButtonDrop,
    DropDownPricesListSubcribe,
    Button,
    CustomerDetail,
    PaymentDetail,
    PaymentMethod,
    OrderList,
    ModalDuration,
    ModalPayment,
    ModalPriceScheme,
    WarningPriceChange,
    CheckboxVue,
    BannerInformationNetflix,
  },
  data() {
    return {
      providerList,
      priceChangeList,
      OrderService,
      MasterService,
      PaymentService,
      currentDate: moment(),
      isInstallmentPayments: false,
      subcriptionPeriod: {
        name: '1 Bulan (Rp53.000)',
      },
      isShowModalDuration: false,
      isShowModalPayment: false,
      dataVariants: [],
      durationData: [true, false, false],
      orderUid: '',
      customerUid: '',
      type: 0,
      provider: '',
      isLoadingPayment: false,
      isLoadingVariant: false,
      isLoadingPaymentButton: false,
      orderData: [],
      totalPayment: 0,
      totalPrice: 0,
      detailOrder: {
        name: '',
        phone: '',
        email: '',
      },
      pickedOrder: {
        variantUid: '',
        packageName: '',
        orderNumber: '',
        orderUid: '',
        customerUid: '',
        duration: null,
        isHost: null,
        isPo: null,
        status: null,
      },
      dataVariants: [],
      showModalScheme: false,
      dataDetailProvider: {
        list: {},
        slug: '',
        name: '',
      },
      serviceFee: 0,
      paymentMethod: ['QRIS'],
      selectedMethod: {
        code: 'QRIS',
        slug: 'qris',
      },
      paymentMethods: [
        {
          code: 'QRIS',
          slug: 'qris',
          isVa: false,
        },
        {
          code: 'OVO',
          slug: 'ovo',
          isVa: false,
        },
        {
          code: 'DANA',
          slug: 'dana',
          isVa: false,
        },
        {
          code: 'SHOPEEPAY',
          slug: 'shopeepay',
          isVa: false,
        },
        {
          code: 'LINKAJA',
          slug: 'linkaja',
          isVa: false,
        },
        {
          code: 'ALFAMART',
          slug: 'alfamart',
          isVa: true,
        },
        {
          code: 'BNI',
          slug: 'bni',
          isVa: true,
        },
        {
          code: 'BRI',
          slug: 'bri',
          isVa: true,
        },
        {
          code: 'MANDIRI',
          slug: 'mandiri',
          isVa: true,
        },
        {
          code: 'PERMATA',
          slug: 'permata',
          isVa: true,
        },
      ],
      isAllowVa: false,
      isNetflixReguler: false,
      isNetflixValid: true,
      netflixOneMonthWarning: 'Harap ubah durasi netflix',
    };
  },
  // beforeMount() {
  //   this.$router.push('/info/maintenance');
  // },
  computed: {
    updatedProviderList() {
      const providerSlugs = [];
      this.orderData.forEach((order) => {
        providerSlugs.push(order.provider.slug);
      });
      return this.priceChangeList.filter((provider) => {
        return providerSlugs.includes(provider.slug);
      });
    },
    isAfterJune5() {
      const june5th = moment('2024-06-05');
      return this.currentDate.isAfter(june5th);
    },
  },
  beforeDestroy() {
    window.removeEventListener('pageshow', this.handleLoadingPaymentButton);
  },
  mounted() {
    window.addEventListener('pageshow', this.handleLoadingPaymentButton);
    this.OrderService = new OrderService(this);
    this.MasterService = new MasterService(this);
    this.PaymentService = new PaymentService(this);
    const {
      provider,
      type,
      order_uid,
      customer_uid,
    } = this.$router.history.current.query;
    this.provider = provider;
    this.type = parseInt(type);
    this.orderUid = order_uid;
    this.customerUid = customer_uid;
    // if (this.type === 1) {
    // }
    this.getPaymentDigital(order_uid, customer_uid);
  },
  methods: {
    handleLoadingPaymentButton() {
      this.isLoadingPaymentButton = false;
    },
    onSelectPaymentMethod(method) {
      this.selectedMethod = method;
      this.paymentMethod = [];
      this.paymentMethod.push(method.code);
    },
    onClickPriceScheme(provider) {
      this.dataDetailProvider = {
        list: this.providerList,
        slug: provider.slug,
        name: provider.name,
      };
      this.showModalScheme = true;
    },
    closeModalScheme() {
      this.showModalScheme = false;
    },
    toSchemePage() {
      this.$router.push('/info/scheme-of-price');
    },
    async getPaymentDigital(orderUid, customerUid) {
      const { OrderService } = this;
      this.isLoadingPayment = true;

      try {
        const fetchPayment = await OrderService.getCheckoutData(
          orderUid,
          customerUid
        );
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          const { moreOrder, ...rest } = dataResult;
          this.detailOrder = {
            name: dataResult.customerName,
            phone: '+' + dataResult.customerPhone,
            email: dataResult.customerEmail,
          };
          let newOrder = [
            {
              ...rest,
              disable: true,
              checked: true,
            },
          ];
          if (moreOrder && moreOrder.length > 0) {
            const moreData = moreOrder.map(({ ...res }) => ({
              ...res,
              disable: false,
              checked: false,
            }));
            let orders = [...newOrder, ...moreData];
            if (this.orderData.length > 0) {
              const order = orders.map(({ ...res }, index) => ({
                ...res,
                disable: this.orderData[index].disable,
                checked: this.orderData[index].checked,
              }));
              this.orderData = order;
              let total = 0;
              for (let i = 0; i < order.length; i++) {
                if (order[i].checked) {
                  total += order[i].provider.package.variant.grandTotal;
                }
              }
              this.totalPrice = total;
            } else {
              this.orderData = orders;
              let total = 0;
              for (let i = 0; i < orders.length; i++) {
                if (orders[i].checked) {
                  total += orders[i].provider.package.variant.grandTotal;
                }
              }
              this.totalPrice = total;
            }
          } else {
            this.orderData = newOrder;
            this.totalPrice = rest.provider.package.variant.grandTotal;
          }

          this.checkNetflixReguler();
          this.validateNetflixOrder();

          // calculate service fee
          this.calculateServiceFee();
          this.checkAllowVa();
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
        if (error.response?.status == 404) {
          this.$alert.show({
            status: 'error',
            message:
              'Order Anda Tidak Ditemukan / Sudah Terbayarkan dan sedang diproses',
          });
          setTimeout(
            function () {
              this.$router.push('/');
            }.bind(this),
            3000
          );
        }
        console.log(error);
      }
      this.isLoadingPayment = false;
    },
    calculateServiceFee() {
      this.serviceFee = this.totalPrice <= 65000 ? 500 : 1000;
      this.totalPayment = this.totalPrice + this.serviceFee;
    },
    async onCheckedOrder(order, index) {
      const { orderData } = this;
      const copyArray = [...orderData];
      copyArray[index] = { ...copyArray[index], checked: !order.checked };
      let total = 0;
      for (let i = 0; i < copyArray.length; i++) {
        if (copyArray[i].checked) {
          total += copyArray[i].provider.package.variant.grandTotal;
        }
      }
      this.validateNetflixOrder();
      this.totalPrice = total;
      this.orderData = copyArray;
      this.calculateServiceFee();
      this.checkAllowVa();
    },
    checkAllowVa() {
      this.isAllowVa = this.orderData.some((el) => {
        return el.checked && el.provider.package.variant.duration >= 6;
      });
    },
    async pickDuration(item) {
      this.toggleModalDuration();
      this.isLoadingPayment = true;
      const { OrderService } = this;
      const payload = {
        orderUid: this.pickedOrder.orderUid,
        customerUid: this.pickedOrder.customerUid,
        packageVariantUid: item.uid,
      };
      try {
        const fetchChangeVariant = await OrderService.changePackageVariant(
          payload
        );
        if (fetchChangeVariant.data) {
          this.selectedMethod = {
            code: 'QRIS',
            slug: 'qris',
          };
          this.paymentMethod = ['QRIS'];
          await this.getPaymentDigital(this.orderUid, this.customerUid);
        }
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
      }
    },
    checkNetflixReguler() {
      const netflixOrders = this.orderData.filter(
        (item) => item.provider.slug === 'netflix'
      );
      const regulerNetflixOrders = netflixOrders.filter(
        (item) => !item.provider.package.isHost
      );
      if (regulerNetflixOrders.length > 0) {
        this.isNetflixReguler = true;
      }
    },
    validateNetflixOrder() {
      const selectedOrders = this.orderData.filter((item) => item.checked);
      const netflixOrders = selectedOrders.filter(
        (item) => item.provider.slug === 'netflix'
      );
      const regulerNetflixOrders = netflixOrders.filter(
        (item) => !item.provider.package.isHost
      );
      const hasOneMonth = regulerNetflixOrders.some(
        (item) => item.provider.package.variant.duration === 1
      );
      this.isNetflixValid = !hasOneMonth;
    },
    async createInvoice() {
      this.isLoadingPaymentButton = true;
      if (this.isInstallmentPayments) {
        const notesPayload = {
          orderUid: this.orderData[0].orderUid,
          customerUid: this.customerUid,
          notes: 'Cicilan 2x',
        };
        const isNotesUpdated = await this.updateOrderNotes(notesPayload);
        if (!isNotesUpdated) {
          this.$alert.show({
            status: 'error',
            message: 'Terjadi kesalahan. Harap coba kembali',
          });
          this.isLoadingPaymentButton = false;
          return;
        }
      }
      const { PaymentService } = this;
      const orders = this.orderData
        .filter((item) => item.checked)
        .map((item) => ({
          orderUid: item.orderUid,
          packageVariantUid: item.provider.package.variant.uid,
        }));
      const payload = {
        customerUid: this.customerUid,
        totalAmount: this.checkInstallmentPayments(this.totalPayment),
        paymentMethod: this.paymentMethod,
        serviceFee: this.serviceFee,
        order: orders,
      };

      let counter = 0;
      do {
        try {
          const fetchCreateInvoice = await PaymentService.createInvoice(
            payload
          );
          if (fetchCreateInvoice.data) {
            const dataResult = fetchCreateInvoice.data.data;
            if (dataResult) {
              counter = 5;
              window.location.href = dataResult.invoice_url;
            } else {
              counter++;
            }
          } else {
            throw new Error(fetchCreateInvoice);
          }
        } catch (error) {
          counter++;
          this.isLoadingPaymentButton = false;
          console.log(JSON.stringify(error, null, 2));
        }
      } while (counter < 3);
      if (counter === 3) {
        this.isLoadingPaymentButton = false;
        this.$alert.show({
          status: 'error',
          message: 'Terjadi kesalahan. Harap coba kembali',
        });
      }
    },
    async updateOrderNotes(payload) {
      try {
        const fetchUpdateNotes = await this.OrderService.updateOrderNotes(
          payload
        );
        if (fetchUpdateNotes.data) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    manualPayment() {
      const orders = this.orderData
        .filter((item) => item.checked)
        .map((item) => item.orderUid);
      this.$router.push({
        path: `/payment-manual`,
        query: {
          type: this.type,
          order_uid: orders.join(),
          customer_uid: this.customerUid,
        },
      });
    },
    async getDetailVariant(data) {
      this.toggleModalDuration();
      this.isLoadingVariant = true;
      const { slug } = data.provider;
      const { uid, variant } = data.provider.package;
      this.pickedOrder = {
        variantUid: variant.uid,
        packageName: slug,
        orderNumber: data.orderNumber,
        orderUid: data.orderUid,
        customerUid: data.customerUid,
        duration: data.provider.package.variant.duration,
        isHost: data.provider.package.isHost,
        isPo: data.provider.package.isPO,
        status: data.orderStatus,
      };
      const { MasterService } = this;
      try {
        const fetchDetailVariant = await MasterService.getVariantByPackageUid(
          uid
        );
        if (fetchDetailVariant.data) {
          const { data } = fetchDetailVariant.data;
          let variants = [];
          data.forEach((variant) => {
            if (variant.providerName === 'Netflix') {
              if (this.pickedOrder.isHost && variant.duration === 1) {
                variants.push(variant);
              } else if (!this.pickedOrder.isHost && variant.duration !== 1) {
                variants.push(variant);
              }
            } else {
              variants.push(variant);
            }
          });
          this.dataVariants = variants;
        } else {
          throw new Error(fetchDetailVariant);
        }
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
      this.isLoadingVariant = false;
    },
    toggleModalDuration() {
      this.isShowModalDuration = !this.isShowModalDuration;
    },
    OpenCloseModalPayment() {
      this.isShowModalPayment = !this.isShowModalPayment;
    },
    checkInstallmentPayments(amount) {
      if (this.isInstallmentPayments) {
        const fee = amount - this.serviceFee;
        const result = fee / 2;
        return result + this.serviceFee;
      } else return amount;
    },
    handleCheckisInstallmentPayments(val) {
      this.isInstallmentPayments = val;
    },
    handleFormatTotalFee(amount) {
      if (this.isInstallmentPayments) {
        const fee = amount - this.serviceFee;
        const result = fee / 2;
        return this.currencyFormat(result + this.serviceFee);
      } else return this.currencyFormat(amount);
    },
    currencyFormat,
  },
};
</script>
