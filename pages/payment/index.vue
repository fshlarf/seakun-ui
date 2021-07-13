<template>
  <div>
    <div class="container-payment max-w-2xl w-full mx-auto mt-20">
      <div class="payment-illustration flex justify-center w-full">
        <img
          class="w-9/12 mx-auto"
          src="/images/thank-you.png"
          alt="Image not found"
        />
      </div>
      <h3
        class="payment-thankyou md:text-3xl tn:text-3xl font-bold mt-10 text-center"
      >
        Thank You!
      </h3>
      <HeaderPayment
        :is-loading="isLoadingPayment"
        :provider="provider"
        :detail-payment-digital="detailPaymentDigital"
        :detail-payment-sequrban="detailPaymentSequrban"
        :package-id="packetId"
        :package-name="packet"
        :total="total"
      />
      <!-- <div v-if="type === 'digital'" class="px-4 text-lg mt-4 -mb-4">
        <WarningInfo :text="contentWarning" />
      </div> -->
      <DetailPayment
        :is-loading="isLoadingPayment"
        :provider="provider"
        :package-id="packetId"
        :paymentSeakunList="paymentSeakunList.data"
        :paymentSeakunListLoading="paymentSeakunList.loading"
        :detail-payment-digital="detailPaymentDigital"
        :detail-payment-sequrban="detailPaymentSequrban"
      />
      <div class="tos-alert px-4 mt-4 text-lg">
        <p>
          Setelah melakukan pembayaran, lakukan konfirmasi pesanan agar pesanan
          kamu dapat diproses oleh Seakun.id. Mohon menunggu 10 - 60 menit. jika
          melewati rentang waktu tersebut dan pesanan kamu belum diproses, harap
          hubungi admin via whatsapp
          <a
            class="text-primary"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6282124852227"
            >+6282124852227</a
          >
        </p>
      </div>
      <div class="mt-8 mx-4 mb-4 text-center">
        <Button
          v-if="type !== 'digital'"
          class="w-full bg-green-seakun text-white"
          label="Konfirmasi Pembayaran"
          @click="onClickConfirm('sequrban')"
        />
        <Button
          v-else
          class="w-full bg-green-seakun text-white"
          label="Konfirmasi Pembayaran"
          @click="onClickConfirm('digital')"
        />
      </div>
    </div>
    <Footer />
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
import Footer from '~/components/mollecules/Footer';
import WarningInfo from '~/components/mollecules/WarningInfo';

export default {
  components: {
    NavbarBlank,
    CopyIcon,
    Button,
    HeaderPayment,
    DetailPayment,
    Footer,
    WarningInfo,
  },
  layout: 'navigationBlank',
  data() {
    return {
      MasterService,
      provider: '',
      packet: '',
      packetId: null,
      total: null,
      showSnackBar: false,
      type: '',
      vouchersData: [],
      isLoadingPayment: false,
      detailPaymentDigital: {
        name: '',
        price: 0,
        payment: 0,
        duration: 0,
      },
      detailPaymentSequrban: {},
      paymentSeakunList: {
        data: [],
        loading: true,
      },
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
    this.type = type;
    this.provider = provider;
    if (type === 'digital') {
      this.getSeakunPayment();
      this.getPaymentDigital(order_uid, customer_uid);
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
      return `Setelah melakukan pembayaran, kirimkan bukti pembayaran ke Whatsapp Seakun.id <a target="_blank" href="https://wa.me/6282124852227?text=${text}">+6282124852227</a>`;
    },
    confirmationWhatsapp() {
      const { provider, holder, duration } = this.$router.history.current.query;
      let text = `Atas Nama ${holder}, berlangganan ${provider}, selama ${duration} bulan`;
      return `https://wa.me/6282124852227?text=${text}`;
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
          this.paymentSeakunList = {
            loading: false,
            data: dataResult,
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
    async getPaymentDigital(orderUid, customerUid) {
      const { OrderService } = this;
      this.isLoadingPayment = true;

      try {
        const fetchPayment = await OrderService.getPaymentConfirmation(
          orderUid,
          customerUid
        );
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          this.detailPaymentDigital = {
            name: dataResult.provider.package.variant.name,
            price: dataResult.payment.totalPrice,
            payment: dataResult.payment.payment,
            duration: dataResult.provider.package.variant.duration,
          };
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
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
    getVouchersData() {
      axios
        .get('https://seakun-packet-api-v2.herokuapp.com/vouchers')
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
        const { customer_uid, order_uid } = this.$router.history.current.query;
        this.$router.push(
          `/payment-confirmation?order_uid=${order_uid}&customer_uid=${customer_uid}`
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
