<template>
  <div class="payment">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="payment__img flex justify-center">
            <img src="/images/thank-you.png" alt="Image not found" />
          </div>
          <h3 class="payment-thankyou text-2xl font-bold mt-10 text-center">
            Thank You!
          </h3>

          <p>
            User Host adalah program Seakun.id untuk memberikan kewenangan ke
            user untuk melakukan administrasi ke provider tertentu. Administrasi
            tersebut bisa berupa pendaftaran atau melakukan payment ke provider
            tersebut.
          </p>

          <p>
            Terima kasih telah melakukan pendaftaran.
            <br />Karena kamu terdaftar sebagai User Host, Admin Seakun.id akan
            memandu kamu untuk melakukan proses
            {{ setWordingHost(provider) }}
            ke {{ setNameProvider(provider) }}.
          </p>
          <p>
            <a href="/info/user-host" target="_blank">
              <i>Baca ketentuan User Host selengkapnya</i>
            </a>
          </p>
          <div class="box text-left">
            <div class="grid grid-cols-12">
              <div class="ml-1 col-span-4 font-bold">Provider</div>
              <div class="">:</div>
              <div class="col-span-7">{{ setNameProvider(provider) }}</div>
            </div>
            <div class="grid grid-cols-12 mt-1">
              <div class="ml-1 col-span-4 font-bold">Paket</div>
              <div class="">:</div>
              <div class="col-span-7">{{ packet }}</div>
            </div>
            <div class="grid grid-cols-12 mt-1">
              <div class="ml-1 col-span-4 font-bold">Harga</div>
              <div class="">:</div>
              <div class="col-span-7">{{ formatMoneyRupiah(total) }}</div>
            </div>
          </div>
          <p>
            Pastikan nomor Whatsapp kamu aktif, kamu akan dihubungi oleh Admin
            melalui Whatsapp untuk proses selanjutnya.
            <br />
            <br />Hubungi Admin di
            <a href="https://api.whatsapp.com/send?phone=6282124852232"
              >+6282124852232</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OrderService from '~/services/OrderServices.js';
import { setNameProvider } from '~/helpers/word-transformation.js';
import { SEAKUN_PACKAGE_API } from '~/constants/api.js';

export default {
  name: 'UserHostPage',
  layout: 'new',
  data() {
    return {
      OrderService,
      provider: '',
      packet: '',
      packetId: null,
      total: '',
      vouchersData: [],
      setNameProvider,
      SEAKUN_PACKAGE_API
    };
  },
  mounted() {
    this.OrderService = new OrderService(this);
    const {
      type,
      order_uid,
      customer_uid,
    } = this.$router.history.current.query;
    if (order_uid && customer_uid) {
      this.getPaymentDigital(order_uid, customer_uid);
    }
    this.getVouchersData();
  },
  methods: {
    async getPaymentDigital(orderUid, customerUid) {
      const { OrderService } = this;

      try {
        const fetchPayment = await OrderService.getPaymentConfirmation(
          orderUid,
          customerUid
        );
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          this.packet = dataResult.provider.package.variant.name;
          this.total = dataResult.payment.totalPrice;
          this.provider = dataResult.provider.slug;
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
        if (error.response?.status == 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan `,
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
    formatMoneyRupiah(num) {
      if (num) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
      } else if (num == 0) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
      }
    },
    setWordingHost(provider) {
      if (provider.toLowerCase() === 'youtube') {
        return 'pendaftaran menggunakan nomor ponsel yang kamu miliki';
      } else if (provider.toLowerCase() === 'netflix') {
        return 'payment';
      } else if (provider.toLowerCase() === 'apple-one') {
        return 'verifikasi Apple ID';
      } else {
        return 'payment';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.payment {
  padding: 30px 40px 10px !important;

  .container {
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  }
  .box {
    border: 1px solid #86d0c1;
    border-radius: 4px;
    padding: 16px;
    max-width: 29rem;
    margin: 0 auto;
  }
  .col {
    text-align: center;
    h3 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
      font-weight: 700;
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
  #snackbar {
    background-color: #daeeef;
    color: #2f524b;
    text-align: center;
    border-radius: 4px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    top: 100px;
    font-size: 17px;
    margin: 0 auto;
    max-width: 600px;
    left: 65%;
    margin-left: -300px;
    font-weight: 400;
    display: grid;
    button {
      margin-top: 0px !important;
      margin-bottom: 10px !important;
    }
    span {
      font-size: 28px;
      font-weight: 700;
      cursor: pointer;
      padding: 0px 12px;
    }
  }
}
@media (max-width: 800px) {
  #snackbar {
    position: absolute !important;
    max-width: 200px !important;
    left: 30% !important;
    top: 60% !important;
    margin-left: 0px !important;
  }
  .payment {
    padding: 0 !important;
    margin-bottom: -3rem;
    // margin-top: 18px;
    Ï &__img {
      text-align: center;
      margin-top: 20px;
    }
    &__header {
      &-h3 {
        font-size: 22px;
        margin-top: 16px;
      }
    }
    img {
      width: 330px !important;
      margin: 16px auto;
    }
    h2 {
      font-size: 20px;
    }
    .box {
      font-size: 13px;
    }
  }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
  .container {
    display: contents !important;
  }
}
</style>
