<template>
  <div>
    <div class="p-2 bg-checkout mt-[-3px]">
      <p class="text-base text-[#417465] font-bold text-center">
        Ini halaman terakhir dari proses orderanmu. Pastikan semua sudah benar,
        ya. :)
      </p>
    </div>
    <div class="max-w-2xl w-full mx-auto pt-5 px-4">
      <OrderDetail :isLoading="isLoadingPayment" :orderDetail="detailOrder" />
      <OrderList
        :isLoading="isLoadingPayment"
        @changeDuration="getDetailVariant"
        :orderData="orderData"
        @onChecked="onCheckedOrder"
      />
      <PaymentDetail
        :isLoading="isLoadingPayment"
        :paymentTotal="totalPayment"
      />
      <Button
        label="Bayar"
        class="w-full bg-green-seakun text-base text-white font-bold py-2 my-5"
        @click="OpenCloseModalPayment"
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
  </div>
</template>

<script>
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import Button from '~/components/atoms/Button';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import OrderDetail from './views/OrderDetail.vue';
import PaymentDetail from './views/PaymentDetail.vue';
import OrderList from './views/OrderList.vue';
import ModalDuration from './views/ModalDuration.vue';
import ModalPayment from './views/ModalPayment.vue';
import OrderService from '~/services/OrderServices.js';
import MasterService from '~/services/MasterServices.js';
import PaymentService from '~/services/PaymentServices.js';

export default {
  name: 'NewPayment',
  layout: 'new',
  components: {
    ButtonDrop,
    DropDownPricesListSubcribe,
    Button,
    OrderDetail,
    PaymentDetail,
    Snackbar,
    OrderList,
    ModalDuration,
    ModalPayment,
  },
  data() {
    return {
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
      },
      dataVariants: [],
    };
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
                  total += order[i].payment.totalPrice;
                }
              }
              this.totalPayment = total;
            } else {
              this.orderData = orders;
              let total = 0;
              for (let i = 0; i < orders.length; i++) {
                if (orders[i].checked) {
                  total += orders[i].payment.totalPrice;
                }
              }
              this.totalPayment = total;
            }
          } else {
            this.orderData = newOrder;
            this.totalPayment = rest.payment.totalPrice;
          }
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
        if (error.response?.status == 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan dan sedang diproses `,
            className: '',
            color: 'red-400',
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
    async onCheckedOrder(order, index) {
      const { orderData } = this;
      const copyArray = [...orderData];
      copyArray[index] = { ...copyArray[index], checked: !order.checked };
      let total = 0;
      for (let i = 0; i < copyArray.length; i++) {
        if (copyArray[i].checked) {
          total += copyArray[i].payment.totalPrice;
        }
      }
      this.totalPayment = total;
      this.orderData = copyArray;
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
      this.OpenCloseModalPayment();
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
        order: orders,
      };
      try {
        const fetchCreateInvoice = await PaymentService.createInvoice(payload);
        if (fetchCreateInvoice.data) {
          const dataResult = fetchCreateInvoice.data.data;
          window.location.href = dataResult.invoice_url;
        } else {
          throw new Error(fetchCreateInvoice);
        }
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
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
      };
      const { MasterService } = this;
      try {
        const fetchDetailVariant = await MasterService.getVariantByPackageUid(
          uid
        );
        if (fetchDetailVariant.data) {
          const { data } = fetchDetailVariant.data;
          this.dataVariants = data;
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
  },
};
</script>
