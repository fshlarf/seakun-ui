<template>
  <div class="md:py-[91px]">
    <div
      class="box-payment lg:max-w-[850px] md:max-w-2xl w-full mx-auto md:px-[50px] tn:px-4 md:py-[68px] tn:py-[27px] md:rounded-[20px]"
    >
      <OrderDetail :isLoading="isLoadingPayment" :orderDetail="detailOrder" />
      <OrderList :isLoading="isLoadingPayment" :orderData="orderData" />
      <DetailPayment
        :is-loading="isLoadingPayment"
        :provider="provider"
        :paymentSeakunList="paymentSeakunList.data"
        :paymentSeakunListLoading="paymentSeakunList.loading"
        :total-payment-digital="totalPayment"
        :detail-payment-sekurban="detailPaymentSekurban"
      />
      <div
        class="flex gap-[9px] tn:text-xs md:text-sm tn:mt-6 md:mt-9 bg-[#FFC801] bg-opacity-10 rounded-[10px] md:py-[17px] md:pl-[17px] md:pr-[45px] tn:py-[11px] tn:pl-[11px] tn:pr-[11px]"
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
          <p class="tn:mb-2 md:mb-4">
            Segera <span class="font-bold">upload bukti pembayaran</span> kamu
            agar orderan dapat segera diproses.
          </p>
          <p class="md:text-justify md:pr-5">
            Dengan melakukan pembayaran menggunakan metode manual, pengguna
            setuju untuk membayar total biaya berlangganan ditambah dengan kode
            unik.Selengkapnya dapat dibaca pada
            <nuxt-link
              class="text-blue-400 underline"
              to="/terms-of-use"
              target="_blank"
              >Syarat dan Ketentuan</nuxt-link
            >
            Seakun.id
          </p>
        </div>
      </div>
      <div class="tn:mt-4 md:mt-8 mb-4 text-center">
        <Button
          v-if="type !== 1"
          class="w-full bg-green-seakun text-white py-2"
          label="Konfirmasi Pembayaran"
          :disabled="isLoadingPayment"
          @click="onClickConfirm('sekurban')"
        />
        <Button
          v-else
          class="w-full bg-green-seakun text-white py-2"
          label="Bayar"
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
import Snackbar from '~/components/mollecules/Snackbar.vue';
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
    DetailPayment,
    Snackbar,
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
      orderData: [],
      detailPaymentSekurban: {},
      activeSeakunPayment: ['Jenius', 'BCA', 'Mandiri'],
      paymentSeakunList: {
        data: [],
        loading: true,
      },
      detailOrder: {
        name: '',
        phone: '',
        email: '',
      },
      totalPayment: 0,
      orderUids: '',
      orderUid: '',
      customerUid: '',
      additionalOrder: '',
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
    } = this.$router.history.current.query;
    this.orderUids = order_uid;
    this.customerUid = customer_uid;
    this.type = parseInt(type);
    this.provider = provider;
    if (this.type === 1) {
      this.getSeakunPayment();
      this.getdataCustomer(order_uid, customer_uid);
      this.getDataOrderDigital(order_uid);
    }
    if (provider === 'sekurban') {
      this.getPaymentSekurban();
    }
    this.getVouchersData();
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
    async getdataCustomer(orderUid, customerUid) {
      const { OrderService } = this;
      this.isLoadingPayment = true;
      const newArr = orderUid.split(',');
      this.orderUid = newArr[0];
      const moreOrderUid = [];
      if (newArr.length > 1) {
        newArr.forEach((order) => {
          if (order !== this.orderUid) {
            moreOrderUid.push(order);
          }
        });
      }
      this.additionalOrder = moreOrderUid;
      try {
        const fetchPayment = await OrderService.getDetailOrder(
          this.orderUid,
          customerUid
        );
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          this.detailOrder = {
            name: dataResult.customerName,
            phone: '+' + dataResult.customerPhone,
            email: dataResult.customerEmail,
          };
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
    async getDataOrderDigital(orderUid) {
      const { OrderService } = this;
      this.isLoadingPayment = true;
      try {
        const fetchPayment = await OrderService.getMultipleOrder(orderUid);
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          this.orderData = dataResult;
          let totalPrice = 0;
          const uniqueCode = dataResult[0].payment.uniqueCode;
          dataResult.forEach((item) => {
            totalPrice = totalPrice + item.provider.package.variant.grandTotal;
          });
          this.totalPayment = totalPrice + uniqueCode;
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
    getPaymentSekurban() {
      const { packet_id, voucher } = this.$router.history.current.query;
      this.isLoadingPayment = true;
      axios
        .get(`https://seakun-packet-api-v2.herokuapp.com/sekurban/${packet_id}`)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            this.detailPaymentSekurban = data;
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
      if (productType === 'sekurban') {
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
          }&nominal=${this.detailPaymentSekurban.downPayment}`
        );
      } else if (productType === 'digital') {
        this.$router.push(
          `/payment-confirmation?order_uid=${this.orderUid}&customer_uid=${this.customerUid}&additionalOrder=${this.additionalOrder}`
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
.box-payment {
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  font-family: 'DM Sans', sans-serif !important;
}
</style>
