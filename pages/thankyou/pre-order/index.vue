<template>
  <div>
    <Header />
    <div class="payment">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="payment__img">
              <img src="/images/thank-you.png" alt="Image not found" />
            </div>
            <h3 class="payment__header-h3">Thank You!</h3>
            <p>
              Terima kasih telah melakukan pendaftaran.
              <br />Paket ini adalah paket Pre-Order dimana akun akan dibuat
              setelah member dalam satu grup telah terkumpul
              {{ setNumberMember(provider) }} orang.
            </p>
            <div class="box">
              <div class="row">
                <div class="col box-title">Provider</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">{{ provider }}</div>
              </div>
              <div class="row mt-1">
                <div class="col box-title">Paket</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">{{ packet }}</div>
              </div>
              <div class="row mt-1">
                <div class="col box-title">Harga</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">{{ formatMoneyRupiah(total) }}</div>
              </div>
            </div>
            <p>
              <a href="/info/pre-order" target="_blank">
                <i>Baca ketentuan Pre-Order selengkapnya</i>
              </a>
            </p>
            <p>
              Pembayaran akan dilakukan setelah satu grup full dan akun berhasil
              dibuat.
              <br />
              <br />
              Pastikan nomor Whatsapp kamu aktif, kamu akan dihubungi oleh Admin
              melalui Whatsapp untuk proses selanjutnya.
              <br />Hubungi Admin
              <a href="https://api.whatsapp.com/send?phone=6282124852227"
                >+6282124852227</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '~/components/mollecules/Header.vue';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      provider: '',
      packet: '',
      total: '',
    };
  },
  mounted() {
    this.getDataPacket();
    this.getVouchersData();
  },
  methods: {
    setNumberMember(provider) {
      switch (provider.toLowerCase()) {
        case 'canva':
          return '9'
          break;
        case 'gramedia':
          return '2'
          break;
        case 'disney-hotstar':
          return '2'
          break;
        default:
          return '5'
      }
    },
    getDataPacket() {
      const {
        provider,
        packet_id,
        voucher,
      } = this.$router.history.current.query;
      this.provider = provider.toLowerCase() === 'disney+ hotstar' ? 'disney-hotstar' : provider.toLowerCase();
      axios
        .get(
          `https://seakun-packet-api-v1.herokuapp.com/${this.provider}/${packet_id}`
        )
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
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
        .get('https://seakun-packet-api-v1.herokuapp.com/vouchers')
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
      return num && num > 0
        ? `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        : 'Rp0';
    },
  },
};
</script>

<style lang="scss" scoped>
.payment {
  padding: 100px 40px 50px !important;
  background: #e5e5e5;

  .container {
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  }
  .box {
    border: 1px solid #86d0c1;
    border-radius: 4px;
    padding: 16px;
    max-width: 26rem;
    margin: 0 auto;
  }
  .col {
    text-align: center;

    &.box {
      &-title {
        text-align: left;
        font-weight: 700;
        max-width: 7rem;
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
    padding: 50px 0px 0px !important;
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
      margin-left: 0px !important;
      margin-right: 0px !important;
      font-size: 13px;
    }
    .col-lg-1 {
      max-width: 10px;
    }
  }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
  .container {
    display: contents !important;
  }
}
</style>
