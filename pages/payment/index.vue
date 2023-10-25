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
        @selectMethod="onSelectPaymentMethod"
      />
      <!-- <PaymentDetail
        :isLoading="isLoadingPayment"
        :paymentTotal="totalPayment"
      /> -->

      <div class="mt-[24px] md:mt-[28px]">
        <h2 class="font-bold text-sm md:text-[20px]">Rincian Pembayaran</h2>
        <div class="mt-2 md:mt-4 text-sm md:text-base">
          <div class="flex justify-between items-center">
            <p>Biaya Langganan</p>
            <p class="font-medium">{{ currencyFormat(totalPrice) }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p>Biaya Layanan</p>
            <p class="font-medium">{{ currencyFormat(serviceFee) }}</p>
          </div>
          <hr class="my-[8px] md:my-[12px]" />
          <div class="flex justify-between items-center">
            <p class="text-sm md:text-[20px] font-bold">Total Bayar</p>
            <p class="font-bold text-[#00BA88] md:text-[24px]">
              {{ currencyFormat(totalPayment) }}
            </p>
          </div>
        </div>
      </div>

      <Button
        label="Bayar"
        class="w-full bg-green-seakun text-base text-white font-bold py-3 my-5"
        @click="createInvoice"
        :isLoading="isLoadingPaymentButton"
      />
    </div>
    <Snackbar ref="snackbar" />
    <ModalDuration
      :orderData="pickedOrder"
      :durationData="dataVariants"
      :showModal="isShowModalDuration"
      @onClose="OpenCloseModalDuration"
      @pickDuration="pickDuration"
      :isLoading="isLoadingVariant"
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
import Snackbar from '~/components/mollecules/Snackbar.vue';
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
    Snackbar,
    OrderList,
    ModalDuration,
    ModalPayment,
    ModalPriceScheme,
    WarningPriceChange,
  },
  data() {
    return {
      providerList,
      priceChangeList,
      OrderService,
      MasterService,
      PaymentService,
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
        },
        {
          code: 'OVO',
          slug: 'ovo',
        },
        {
          code: 'DANA',
          slug: 'dana',
        },
        {
          code: 'SHOPEEPAY',
          slug: 'shopeepay',
        },
        {
          code: 'LINKAJA',
          slug: 'linkaja',
        },
        {
          code: 'ALFAMART',
          slug: 'alfamart',
        },
        {
          code: 'BNI',
          slug: 'bni',
        },
        {
          code: 'BRI',
          slug: 'bri',
        },
        {
          code: 'MANDIRI',
          slug: 'mandiri',
        },
        {
          code: 'PERMATA',
          slug: 'permata',
        },
      ],
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
  },
  mounted() {
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
    if (this.type === 1) {
      this.getPaymentDigital(order_uid, customer_uid);
    }
  },
  methods: {
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

          // calculate service fee
          this.calculateServiceFee();
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
        if (error.response?.status == 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan dan sedang diproses `,
            className: '',
            color: 'bg-red-400',
            duration: 4000,
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
      this.totalPrice = total;
      this.orderData = copyArray;
      this.calculateServiceFee();
    },
    async pickDuration(item) {
      this.OpenCloseModalDuration();
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
          await this.getPaymentDigital(this.orderUid, this.customerUid);
        }
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
      }
    },
    async createInvoice() {
      this.isLoadingPaymentButton = true;
      const { PaymentService } = this;
      const orders = this.orderData
        .filter((item) => item.checked)
        .map((item) => ({
          orderUid: item.orderUid,
          packageVariantUid: item.provider.package.variant.uid,
        }));
      const payload = {
        customerUid: this.customerUid,
        totalAmount: this.totalPayment,
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
          console.log(JSON.stringify(error, null, 2));
        }
      } while (counter < 3);
      if (counter === 3) {
        this.isLoadingPaymentButton = false;
        this.$refs.snackbar.showSnackbar({
          message: `Terjadi kesalahan. Harap coba kembali`,
          className: '',
          color: 'bg-red-400',
          duration: 6000,
        });
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
      this.OpenCloseModalDuration();
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
              if (variant.duration === 1) {
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
    OpenCloseModalDuration() {
      this.isShowModalDuration = !this.isShowModalDuration;
    },
    OpenCloseModalPayment() {
      this.isShowModalPayment = !this.isShowModalPayment;
    },
    currencyFormat,
  },
};
</script>
