<template>
  <div class="pt-8">
    <div class="container-payment max-w-2xl w-full mx-auto px-4">
      <OrderDetail :isLoading="isLoadingPayment" :orderDetail="detailOrder" />
      <OrderList :isLoading="isLoadingPayment" :orderData="orderData" />
      <DetailPayment
        :is-loading="isLoadingPayment"
        :provider="provider"
        :paymentSeakunList="paymentSeakunList.data"
        :paymentSeakunListLoading="paymentSeakunList.loading"
        :total-payment-digital="totalPayment"
        :detail-payment-sequrban="detailPaymentSequrban"
      />
      <div class="tn:text-sm md:text-base md:mx-4 tn:mt-4 md:mt-8">
        <p class="tn:mb-2 md:mb-4">
          Segera <span class="font-bold">upload bukti pembayaran</span> kamu
          agar orderan dapat segera diproses oleh Admin Seakun.
        </p>
        <p>
          <span class="font-bold">Catatan:</span> Dengan melakukan pembayaran
          menggunakan metode manual, pengguna setuju untuk membayar total biaya
          berlangganan ditambah dengan kode unik. Selengkapnya dapat dibaca pada
          <nuxt-link
            class="text-blue-400 font-semibold"
            to="/terms-of-use"
            target="_blank"
            >Syarat dan Ketentuan</nuxt-link
          >
          Seakun.id
        </p>
      </div>
      <div class="tn:mt-4 md:mt-8 md:mx-4 mb-4 text-center">
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
      detailPaymentSequrban: {},
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
    if (provider === 'sequrban') {
      this.getPaymentSequrban();
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
</style>
