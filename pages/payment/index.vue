<template>
  <div>
    <div class="container-payment max-w-2xl w-full mx-auto mt-20">
      <HeaderPayment
        :provider="provider"
        :detailPayment="detailPayment"
        :packageId="packetId"
        :packageName="packet"
        :total="total"
      />
      <DetailPayment
        :provider="provider"
        :packageId="packetId"
        :detailPayment="detailPayment"
      />
      <div class="tos-alert px-4 mt-4 text-lg">
        <p>
          Setelah melakukan pembayaran, lakukan konfirmasi pesanan agar pesanan
          kamu dapat diproses oleh Seakun.id. Mohon menunggu 10 - 20 menit. jika
          melewati rentang waktu tersebut dan pesanan kamu belum diproses, harap
          hubungi admin via whatsapp
          <span class="text-green-seakun"> +6282124852227 </span>.
        </p>
      </div>
      <div class="mt-8 mx-4 mb-4">
        <Button
          class="w-full bg-green-seakun text-white"
          label="Konfirmasi Pembayaran"
          @click="onClickConfirm"
        />
      </div>
      <!-- <div class="row">
          <div class="col">
            <div class="flex justify-center">
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
              </div> -->
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
      <!-- </div>
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
              <div class="flex" @click="handleCopyNominal(totafl)" style="color:#8DCABE; cursor: pointer; justify-content: center; margin-top: 12px">
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
        </div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Button from '~/components/atoms/Button';
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import DetailPayment from './views/DetailPayment.vue';
import HeaderPayment from './views/HeaderPayment.vue';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    NavbarBlank,
    CopyIcon,
    Button,
    HeaderPayment,
    DetailPayment,
    Footer,
  },
  layout: 'navigationBlank',
  data() {
    return {
      provider: '',
      packet: '',
      packetId: null,
      total: null,
      showSnackBar: false,
      type:'',
      duration:'',
      vouchersData: [],
      detailPayment: {
        loading: false,
        data: {},
      },
      selectedToPayment: '',
    };
  },
  created() {
    const { provider } = this.$router.history.current.query;
    if (provider) {
      this.provider = provider;
    }
    this.getPaymentDetail();
    this.getVouchersData();
  },
  methods: {
    getPaymentDetail() {
      const {
        provider,
        packet_id,
        voucher,
        type,
        duration,
      } = this.$router.history.current.query;
      this.detailPayment = {
        ...this.detailPayment,
        loading: true,
      };
      axios
        .get(
          `https://seakun-packet-api-v2.herokuapp.com/${provider.toLowerCase()}/${packet_id}`
        )
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            this.detailPayment = {
              ...this.DetailPayment,
              data,
              loading: false,
            };

            if(type == 'digital'){
              if(data.prices?.length > 0) {
                const indexDuration = data.prices?.findIndex(price => price.month == duration)
                if(indexDuration >= 0 ){
                  this.detailPayment = {
                    ...this.detailPayment,
                    data : {
                      ...this.detailPayment.data,
                      grandTotal : data.prices[indexDuration]?.price,
                      totalMonth : data.prices[indexDuration]?.month
                    }
                  }
                }
              }
            }
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
    onClickConfirm() {
      const {
        provider,
        packet_id,
        email,
        whatsapp,
        holder,
      } = this.$router.history.current.query;
      this.$router.push(
        `/payment-confirmation?provider=${provider}&packet_id=${packet_id}&email=${email}&whatsapp=${whatsapp}&holder=${holder ? holder : ''}&nominal=${this.detailPayment?.data?.grandTotal}`
      );
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
}
</style>
