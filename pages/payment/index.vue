<template>
  <div>
    <Header />
    <div class="payment">
      <transition name="slide-fade">
        <div v-if="showSnackBar" id="snackbar">
          <!-- <span style="text-align: end" @click="showSnackBar = false"
            >&times;</span
          > -->
          <i class="fa fa-check-circle-o"></i>
          <p>Berhasil disalin</p>
        </div>
      </transition>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="payment__img">
              <img class="img-pay" src="/images/thank-you.png" alt="Image not found" />
            </div>
            <h3 class="payment__header-h3">Thank You!</h3>
            <p v-html="setWordingInformation(provider, packetId)"></p>
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
                <div class="col box-title">Metode Pembayaran</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">Bank Transfer</div>
              </div>
              <!-- <div class="row mt-1">
                <div class="col box-title">Bank Tujuan</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">Mandiri</div>
              </div>
              <div class="row mt-1">
                <div class="col box-title">Nomor Rekening</div>
                <div class="col col-lg-1">:</div>
                <div
                  id="noRek"
                  class="col box-item-noRek"
                  @click="handleCopyRekening"
                >
                  1150046427383 &nbsp;&nbsp;
                  <i class="fa fa-copy"></i>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col box-title">Nama Rekening</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">PT. Seakun Global</div>
              </div>
              <div class="row mt-1">
                <div class="col box-title">Total Pembayaran</div>
                <div class="col col-lg-1">:</div>
                <div class="col box-item">{{ formatMoneyRupiah(total) }}</div>
              </div> -->
            </div>
            <div style="margin:40px 0px;color:#787878;line-height:24px;text-align:center;">
              <p style="font-weight: 600;margin-bottom: -6px">Transfer ke</p>
              <img class="mandiri" src="http://1.bp.blogspot.com/-zkv5u5OGPEM/VKOWnIRRKBI/AAAAAAAAA7E/ovxa4ZW3I0o/w1200-h630-p-k-no-nu/Logo%2BBank%2BMandiri.png" alt="mandiri" >
              <p style="font-weight: 400;margin-top: 0px; margin-bottom: 0px; font-weight: 600;">PT. Seakun Global </p>
              <div class="flex" @click="handleCopyRekening(1150046427383)" style="color:#8DCABE; cursor: pointer; justify-content: center; margin-top: 12px">
                <span style="font-weight: 800;font-size:18px;">1150046427383</span>
                <i class="fa fa-copy" style="margin-left: 6px"></i>
              </div>
              <p style="margin-top: 18px; margin-bottom: 18px">atau</p>
              <img class="bca" src="https://3.bp.blogspot.com/-aQnHc_0H_Ak/WurNoOMpyMI/AAAAAAAAALg/PZMlfA2tvsshjtf9z8ynOdLZjFxN3u7kQCLcBGAs/s1600/logo%2Bbca.png" alt="mandiri" >
              <p style="font-weight: 400;margin-top: 6px; margin-bottom: 0px; font-weight: 600;">PT. Seakun Global </p>
              <div class="flex" @click="handleCopyRekening(7660777738)" style="color:#8DCABE; cursor: pointer; justify-content: center; margin-top: 12px">
                <span style="font-weight: 800;font-size:18px;">7660777738</span>
                <i class="fa fa-copy" style="margin-left: 6px"></i>
              </div>
              <p style="margin-bottom: 0px; font-weight: 700;">Nominal Pembayaran</p>
              <div class="flex" @click="handleCopyNominal(total)" style="color:#8DCABE; cursor: pointer; justify-content: center; margin-top: 12px">
                <span style="font-weight: 800;font-size:18px;">{{ formatMoneyRupiah(total) }}</span>
                <i class="fa fa-copy" style="margin-left: 6px"></i>
              </div>
            </div>
            <p>
              <i
                ><span class="bold">Note:</span> Untuk alternatif pembayaran
                <span class="bold"
                  >E-Wallet (Gopay, OVO, Dana, dan LinkAja)</span
                >, dapat langsung menghubungi
                <a href="https://api.whatsapp.com/send?phone=6282124852227"
                  >Whatsapp</a
                >
                admin Seakun.id</i
              >
            </p>
            <p>
              Setelah melakukan pembayaran,
              <br />kirimkan bukti pembayaran ke Whatsapp Seakun.id
              <a href="https://api.whatsapp.com/send?phone=6282124852227"
                >+6282124852227.</a
              >
              <br />
              Jika <b>kamu ingin membayar sekaligus</b> untuk
              <b>3 bulan kedepan</b>, silahkan konfirmasi total pembayaran
              terlebih dahulu ke Admin.
            </p>
            <p>
              Proses yang dilakukan sekitar 10 menit sampai paling lama 120
              menit setelah bukti pembayaran dikirimkan ke whatsapp Seakun.id.
              <br />
              Mohon ditunggu karena proses payment ke provider butuh waktu
              beberapa menit dan butuh verifikasi data.
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
import Header from '~/components/mollecules/Header';
import Footer from '~/components/mollecules/Footer';

export default {
  component: {
    Header: Header,
    Footer: Footer,
  },
  data() {
    return {
      provider: '',
      packet: '',
      packetId: null,
      total: '-',
      showSnackBar: false,
      vouchersData: [],
    };
  },
  mounted() {
    this.getPaymentDetail();
    this.getVouchersData();
  },
  methods: {
    setWordingInformation(provider, packetId) {
      if (provider.toLowerCase() == 'netflix') {
        if (packetId == 2) {
          return 'Segera lakukan pembayaran agar Seakun.id bisa \
                        langsung mengalokasikan kamu pada grup Netflix yang available, \
                        mencarikan teman berlangganan dan memproses akun Netflix untuk kamu. \
                        <b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.';
        } else if (packetId == 1) {
          return 'Karena kamu terdaftar sebagai User Host, admin Seakun.id akan memandu kamu untuk melakukan proses payment ke Netflix. \
                        <a href="https://seakun.id/info/user-host"> Baca ketentuan User Host</a>.\
                        <br/><br/>Segera lakukan pembayaran agar Seakun.id bisa \
                        langsung <b>mengalokasikan kamu pada grup Netflix yang available</b>, \
                        <b>mencarikan teman berlangganan</b>, <b>memandu kamu untuk melakukan proses payment ke Netflix</b> dan <b>memproses akun Netflix</b>. \
                        <br/><br/><b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.';
        } else {
          return 'Segera lakukan pembayaran agar Seakun.id dapat \
                        langsung memproses akun Netflix untuk kamu. \
                        <b>Informasi Akun</b>, <b>Password</b> dan Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.';
        }
      } else if (provider.toLowerCase() == 'spotify') {
        if (packetId == 1) {
          return 'Segera lakukan pembayaran agar Seakun.id dapat \
                        langsung mengirimkan <b>Link invitation</b> plan paket Grup Spotify.\
                        <b>Link invitation</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.';
        }
      }
    },
    handleCopyRekening(norek) {
      const text = norek;

      navigator.clipboard.writeText(text).then(
        () => {
          this.showSnackBar = true;
          setTimeout(() => {
            this.showSnackBar = false;
          }, 2000);
        },
        (err) => console.log(err)
      );
    },
    handleCopyNominal(nominal) {
      const text = nominal;

      navigator.clipboard.writeText(text).then(
        () => {
          this.showSnackBar = true;
          setTimeout(() => {
            this.showSnackBar = false;
          }, 2000);
        },
        (err) => console.log(err)
      );
    },
    formatMoneyRupiah(num) {
      if (num) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
      } else if (num == 0) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
      }
    },
    getPaymentDetail() {
      const {
        provider,
        packet_id,
        voucher,
      } = this.$router.history.current.query;
      this.provider = provider;
      axios
        .get(
          `https://seakun-packet-api-v1.herokuapp.com/${provider.toLowerCase()}/${packet_id}`
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
    border-radius: 25px;
    padding: 8px 16px;
    position: fixed;
    z-index: 1;
    top: 100px;
    font-size: 17px;
    margin: 0 auto;
    max-width: 600px;
    left: 65%;
    margin-left: -300px;
    font-weight: 700 !important;
    button {
      margin-top: 0px !important;
      // margin-bottom: 10px !important;
    }
    span {
      font-size: 28px;
      cursor: pointer;
      padding: 0px 12px;
    }
  }
}
.bold {
  font-weight: 800;
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
    .img-pay {
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
  .mandiri {
    width: 100px !important;
  }
  .bca {
    width: 100px !important;
  }
}
.mandiri {
  width: 100px;
}
.bca {
  width: 100px;
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
  .container {
    display: contents !important;
  }
}
</style>
