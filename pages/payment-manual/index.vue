<template>
  <div>
    <div class="p-2 bg-checkout mt-[-3px]">
      <p class="text-base text-[#417465] font-bold text-center">
        Ini halaman terakhir dari proses orderanmu. Pastikan semua sudah benar,
        ya. :)
      </p>
    </div>
    <div class="container-payment max-w-2xl w-full mx-auto mt-20 px-4">
      <OrderDetail :isLoading="isLoadingPayment" :orderDetail="detailOrder" />
      <OrderList :isLoading="isLoadingPayment" :orderData="orderData" />
      <DetailPayment
        :is-loading="isLoadingPayment"
        :provider="provider"
        :package-id="packetId"
        :paymentSeakunList="paymentSeakunList.data"
        :paymentSeakunListLoading="paymentSeakunList.loading"
        :detail-payment-digital="detailPaymentDigital"
        :detail-payment-sequrban="detailPaymentSequrban"
      />
      <div class="tn:mt-4 md:mt-8 tn:mx-3 md:mx-4 mb-4 text-center">
        <Button
          v-if="type !== 1"
          class="w-full bg-green-seakun text-white py-2"
          label="Konfirmasi Pembayaran"
          :disabled="isLoadingPayment"
          @click="onClickConfirm('sequrban')"
        />
        <Button
          v-else
          class="w-full bg-green-seakun text-white py-2"
          label="Upload Bukti Pembayaran"
          :disabled="isLoadingPayment"
          @click="onClickConfirm('digital')"
        />
      </div>
    </div>

    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import axios from 'axios';
import MasterService from '~/services/MasterServices.js';
import OrderService from '~/services/OrderServices.js';
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Button from '~/components/atoms/Button';
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import DetailPayment from './views/DetailPayment.vue';
import HeaderPayment from './views/HeaderPayment.vue';
import WarningInfo from '~/components/mollecules/WarningInfo';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import OrderDetail from './views/OrderDetail.vue';
import OrderList from './views/OrderList.vue';
import {
  currencyFormat,
  capitalizeFirstLetter,
  fullDate,
} from '~/helpers/word-transformation.js';
import moment from 'moment';

export default {
  components: {
    NavbarBlank,
    CopyIcon,
    Button,
    HeaderPayment,
    DetailPayment,
    WarningInfo,
    Snackbar,
    ButtonDrop,
    DropDownPricesListSubcribe,
    OrderDetail,
    OrderList,
  },
  layout: 'new',
  data() {
    return {
      MasterService,
      OrderService,
      currencyFormat,
      provider: '',
      packet: '',
      packetId: null,
      total: null,
      showSnackBar: false,
      type: 0,
      vouchersData: [],
      isLoadingPayment: false,
      detailPaymentDigital: {
        name: '',
        price: 0,
        payment: 0,
        duration: 0,
        orderNumber: '',
      },
      orderData: [],
      detailPaymentSequrban: {},
      activeSeakunPayment: ['Jenius', 'BCA', 'Mandiri'],
      paymentSeakunList: {
        data: [],
        loading: true,
      },
      longSubcribe: {
        variantUid: '',
        name: 'Pilih Masa Berlangganan',
        month: 0,
        price: 0,
        payment: 0,
        grandTotal: 0,
      },
      detailOrder: {
        name: '',
        phone: '',
        email: '',
      },
      totalPayment: 0,
      isShowPriceList: false,
      dataVariants: [],
      orderUid: '',
      customerUid: '',
      variantUid: '',
      packageUid: '',
      additionalOrder: '',
      isLoadingVariant: false,
      moment,
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    this.OrderService = new OrderService(this);
    const {
      provider,
      type,
      order_uid,
      customer_uid,
      additionalOrder,
    } = this.$router.history.current.query;
    this.orderUid = order_uid;
    this.customerUid = customer_uid;
    this.type = parseInt(type);
    this.provider = provider;
    this.additionalOrder = additionalOrder;
    if (this.type === 1) {
      this.getSeakunPayment();
      this.getPaymentDigital(order_uid, customer_uid, additionalOrder);
    }
    if (provider === 'sequrban') {
      this.getPaymentSequrban();
    }
    this.getVouchersData();
  },
  computed: {
    contentWarning() {
      const { provider, holder, duration } = this.$router.history.current.query;
      let text = `Atas Nama ${holder}, berlangganan ${provider}, selama ${duration} bulan`;
      return `Setelah melakukan pembayaran, kirimkan bukti pembayaran ke Whatsapp Seakun.id <a target="_blank" href="https://wa.me/6282124852232?text=${text}">+6282124852232</a>`;
    },
    confirmationWhatsapp() {
      const { provider, holder, duration } = this.$router.history.current.query;
      let text = `Atas Nama ${holder}, berlangganan ${provider}, selama ${duration} bulan`;
      return `https://wa.me/6282124852232?text=${text}`;
    },
  },
  methods: {
    async getSeakunPayment() {
      const { MasterService } = this;
      this.paymentSeakunList = {
        ...this.paymentSeakunList,
        loading: true,
      };
      try {
        const fetchSeakunPayment = await MasterService.getSeakunPayment(
          this.paramSeakunPayment
        );
        if (fetchSeakunPayment.data) {
          const dataResult = fetchSeakunPayment.data.data;
          const activePayment = [];
          dataResult.forEach((element) => {
            if (this.activeSeakunPayment.includes(element.bank)) {
              activePayment.push(element);
            }
          });
          this.paymentSeakunList = {
            loading: false,
            data: activePayment,
          };
        } else {
          throw new Error(fetchSeakunPayment);
        }
      } catch (error) {
        console.log(error);
      }
      this.paymentSeakunList = {
        ...this.paymentSeakunList,
        loading: false,
      };
    },
    async getDetailVariant(uid) {
      this.isLoadingPayment = true;
      const { MasterService } = this;
      try {
        const fetchDetailVariant = await MasterService.getVariantByPackageUid(
          uid
        );
        if (fetchDetailVariant.data) {
          const { data } = fetchDetailVariant.data;
          this.dataVariants = data;

          const variantSelected = this.dataVariants.find(
            (variant) => this.variantUid == variant.uid
          );

          if (variantSelected) {
            const rupiah = currencyFormat(variantSelected.grandTotal);
            this.longSubcribe = {
              variantUid: variantSelected.uid,
              name: `${
                variantSelected.duration === 12
                  ? `1 tahun ( ${rupiah} )`
                  : `${variantSelected.duration} bulan ( ${rupiah} )`
              } `,
              month: variantSelected.duration,
              price: variantSelected.price,
              grandTotal: variantSelected.grandTotal,
            };
          } else {
            const rupiah = currencyFormat(this.dataVariants[0].grandTotal);
            this.longSubcribe = {
              variantUid: this.dataVariants[0].uid,
              name: `${
                this.dataVariants[0].duration === 12
                  ? `1 tahun ( ${rupiah} )`
                  : `${this.dataVariants[0].duration} bulan ( ${rupiah} )`
              } `,
              month: this.dataVariants[0].duration,
              price: this.dataVariants[0].price,
              grandTotal: this.dataVariants[0].grandTotal,
            };
          }
        } else {
          throw new Error(fetchDetailVariant);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingPayment = false;
    },
    async getPaymentDigital(orderUid, customerUid, additionalOrder) {
      const { OrderService } = this;
      this.isLoadingPayment = true;
      try {
        const fetchPayment = await OrderService.getPaymentConfirmation(
          orderUid,
          customerUid,
          additionalOrder
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
            },
          ];
          if (moreOrder && moreOrder.length > 0) {
            const moreData = moreOrder.map(({ ...res }) => ({
              ...res,
            }));
            let orders = [...newOrder, ...moreData];
            this.orderData = orders;
            let total = 0;
            for (let i = 0; i < orders.length; i++) {
              total += orders[i].payment.payment;
            }
            this.detailPaymentDigital = {
              name: `${dataResult.provider.name} - ${dataResult.provider.package.variant.name}`,
              price: dataResult.payment.totalPrice,
              payment: total,
              duration: dataResult.provider.package.variant.duration,
              orderNumber: dataResult.orderNumber,
            };
          } else {
            this.orderData = newOrder;
            this.detailPaymentDigital = {
              name: `${dataResult.provider.name} - ${dataResult.provider.package.variant.name}`,
              price: dataResult.payment.totalPrice,
              payment: rest.payment.payment,
              duration: dataResult.provider.package.variant.duration,
              orderNumber: dataResult.orderNumber,
            };
          }
          this.setOrderToLocalStorage(dataResult);
          this.provider = dataResult.provider.slug;
          this.packageUid = dataResult.provider.package.uid;
          this.variantUid = dataResult.provider.package.variant.uid;
          await this.getDetailVariant(this.packageUid);
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
    getPaymentSequrban() {
      const { packet_id, voucher } = this.$router.history.current.query;
      this.isLoadingPayment = true;
      axios
        .get(`https://seakun-packet-api-v2.herokuapp.com/sequrban/${packet_id}`)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            this.detailPaymentSequrban = data;
            this.isLoadingPayment = false;
            this.packet = data.name;
            this.packetId = data.id;
            if (voucher) {
              setTimeout(() => {
                this.checkValidVoucher(this.vouchersData, data, voucher);
              }, 500);
            } else {
              this.total = data.grandTotal;
            }
          }
        })
        .catch((err) => console.log(err));
    },
    async onClickItemPrice(item) {
      this.isShowPriceList = false;
      this.isLoadingPayment = true;
      this.paymentSeakunList.loading = true;
      this.variantUid = item.uid;

      const { OrderService } = this;
      const payload = {
        orderUid: this.orderUid,
        customerUid: this.customerUid,
        packageVariantUid: this.variantUid,
      };
      try {
        const fetchChangeVariant = await OrderService.changePackageVariant(
          payload
        );
        if (fetchChangeVariant.data) {
          await this.getPaymentDigital(this.orderUid, this.customerUid);
        }
        this.isLoadingPayment = false;
        this.paymentSeakunList.loading = false;
      } catch (err) {
        console.log(err);
      }
    },
    setOrderToLocalStorage(dataOrder) {
      try {
        const datOrderLocalStorage = localStorage['swo']
          ? JSON.parse(localStorage['swo'])
          : null;
        if (datOrderLocalStorage) {
          ///if order exist in localstorage
          if (dataOrder.order_uid === datOrderLocalStorage.order_uid) {
            return;
          }
        }

        localStorage.setItem(
          'swo',
          JSON.stringify({ ...dataOrder, createdAt: moment().unix() })
        );
      } catch (error) {
        console.log(error);
      }
    },
    getVouchersData() {
      const { SEAKUN_PACKAGE_API } = this;
      axios
        .get(`${SEAKUN_PACKAGE_API}/vouchers`)
        .then((res) => {
          this.vouchersData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkValidVoucher(vouchersData, dataPacket, voucher) {
      let validateArray = [];
      vouchersData.map((e) => {
        e.voucher_code == voucher.toLowerCase() && e.active
          ? validateArray.push(1)
          : validateArray.push(0);
      });
      validateArray.sort().reverse();
      validateArray[0] == 1
        ? (this.total = dataPacket.voucherGrandTotal)
        : (this.total = dataPacket.grandTotal);
    },
    onClickConfirm(productType) {
      if (productType === 'sequrban') {
        const {
          provider,
          packet_id,
          email,
          whatsapp,
          holder,
        } = this.$router.history.current.query;
        this.$router.push(
          `/payment-confirmation?provider=${provider}&packet_id=${packet_id}&email=${email}&whatsapp=${whatsapp}&holder=${
            holder ? holder : ''
          }&nominal=${this.detailPaymentSequrban.downPayment}`
        );
      } else if (productType === 'digital') {
        const { customer_uid, order_uid, additionalOrder } = this.$router.history.current.query;
        this.$router.push(
          `/payment-confirmation?order_uid=${order_uid}&customer_uid=${customer_uid}&additionalOrder=${additionalOrder}`
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-sm {
  min-width: 640px;
  max-width: 640px;
}
.payment {
  padding: 60px 40px 50px !important;
  .box {
    border: 1px solid #86d0c1;
    border-radius: 4px;
    padding: 16px;
    margin-left: 250px !important;
    margin-right: 250px !important;
  }
  .col {
    text-align: center;

    &.box {
      &-title {
        text-align: left;
        font-weight: 700;
      }
      &-item {
        text-align: left;
        &-noRek {
          cursor: pointer;
          text-align: left;
          &:hover {
            color: #86d0c1;
          }
        }
      }
    }
    p {
      margin: 0 auto;
      max-width: 600px;
      margin-top: 30px;
      margin-bottom: 40px;
    }
    a {
      font-weight: 700;
      color: #2895ff;
    }
  }
  .container {
    max-width: 1120px !important;
    font-weight: 500 !important;
    margin: 0 auto !important;
  }
  &__img {
    img {
      width: 40rem;
    }
  }
  .row {
    padding: 0px 8px !important;
  }
}
</style>
