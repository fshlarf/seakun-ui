<template>
  <div class="lg:pt-10 w-full">
    <div
      class="tn:w-full lg:w-[780px] mx-auto tn:px-4 md:px-20 tn:pb-8 md:pb-12 xl:pb-16 lg:rounded-3xl lg:shadow-2xl bg-box"
    >
      <div v-if="confirmStatus === 0">
        <div
          class="w-full flex justify-center text-primary opacity-50 tn:pb-6 tn:pt-20"
        >
          <i class="fa fa-circle-o-notch fa-spin fa-5x mx-auto"></i>
        </div>
        <h3
          class="text-center tn:text-2xl md:text-3xl font-bold tn:mb-3 md:mb-6"
        >
          Harap Menunggu...
        </h3>
        <p
          v-if="orderType === 'user-host'"
          class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
        >
          Harap menunggu, kamu sedang melakukan konfirmasi ke sistem Seakun
          bahwa kamu sudah komitmen untuk menjadi User Host {{ provider }}.
          Harap tidak menutup browser sebelum proses selesai.
        </p>
        <p
          v-else
          class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
        >
          Harap menunggu, kamu sedang melakukan konfirmasi ke sistem Seakun
          bahwa kamu sudah komitmen untuk ikut pre-order. Harap tidak menutup
          browser sebelum proses selesai.
        </p>
      </div>

      <div v-else-if="confirmStatus === 1">
        <div class="tn:pb-4 tn:pt-14">
          <img
            src="/images/thankyou/confirm-success.png"
            alt="confirm success"
            style="margin: 0 auto"
          />
        </div>
        <h3
          class="text-center tn:text-2xl md:text-3xl font-bold tn:mb-3 md:mb-6"
        >
          Konfirmasi Berhasil!
        </h3>
        <p
          v-if="orderType === 'user-host'"
          class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
        >
          Kamu sudah terkonfirmasi <b>fix</b> menjadi
          <b>User Host {{ provider }}</b> di Seakun.id dengan nomor order
          <b>{{ orderNumber }}</b
          >. Dalam <b>waktu 1 x 24 jam</b> kamu akan dihubungi admin Seakun
          untuk memandu kamu melanjutkan proses pendaftaran akun dan/atau
          pembayaran ke provider terkait.
        </p>
        <p
          v-else
          class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
        >
          Kamu sudah terkonfirmasi <b>fix</b> ikut pre order layanan
          {{ provider }} di Seakun.id dengan nomor order <b>{{ orderNumber }}</b
          >. Kamu akan diberitahukan oleh admin Seakun apabila grup pre-order
          sudah terisi penuh untuk melakukan pembayaran.
        </p>
        <div class="tn:mt-4 md:mt-8 text-center">
          <p class="font-semibold tn:text-sm md:text-base">
            Sedang mengalihkan ke whatsapp Seakun...
          </p>
          <p class="tn:text-xl md:text-2xl font-bold">{{ countdown }}</p>
        </div>
      </div>

      <div v-else>
        <div class="tn:pb-4 tn:pt-10">
          <img
            src="/images/thankyou/already-confirm.png"
            alt="already confirmed"
            style="margin: 0 auto"
          />
        </div>
        <h3
          class="text-center tn:text-2xl md:text-3xl font-bold tn:mb-3 md:mb-6"
        >
          Ooops...
        </h3>
        <p
          v-if="orderType === 'user-host'"
          class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
        >
          Kamu sudah melakukan konfirmasi sebagai User Host. Nama dan data diri
          kamu sudah dimasukkan ke dalam available grup sebagi User Host. Kamu
          akan dihubungi Admin Seakun dalam waktu 1 x 24 jam.
        </p>
        <p
          v-else
          class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
        >
          Kamu sudah melakukan konfirmasi ikut Pre-Order. Nama dan data diri
          kamu sudah dimasukkan ke dalam available grup. Mohon menunggu sampai
          grup terisi penuh ya, kamu akan segera dihubungi Admin Seakun.
        </p>
        <div class="w-full tn:mt-8 md:mt-12 md:px-12">
          <Button
            class="w-full bg-green-seakun text-white py-3 font-bold"
            label="Patungan layanan lain yuk!"
            @click="toHomePage"
          />
        </div>
      </div>
    </div>
    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import OrderService from '~/services/OrderServices.js';
import Button from '~/components/atoms/Button';
import Snackbar from '~/components/mollecules/Snackbar.vue';

export default {
  name: 'ConfirmPage',
  layout: 'new',
  components: {
    Button,
    Snackbar,
  },
  data() {
    return {
      OrderService,
      orderType: '',
      provider: '',
      orderNumber: '',
      slug: '',
      dataDetailOrder: {},
      countdown: 7,
      confirmStatus: 0,
    };
  },
  watch: {
    countdown(val) {
      if (val === 0) {
        this.confirm();
      }
    },
  },
  mounted() {
    this.OrderService = new OrderService(this);
    const { order_uid, customer_uid } = this.$router.history.current.query;
    if (order_uid && customer_uid) {
      this.getOrderDetail(order_uid, customer_uid);
    }
  },
  methods: {
    getPaymentProcess(slug) {
      switch (slug.toLowerCase()) {
        case 'netflix':
        case 'disney-hotstar':
          return 'pendaftaran akun dan pembayaran';
          break;
        case 'youtube':
        case 'google-one':
          return 'pendaftaran';
          break;
        case 'apple-one':
        case 'apple-one-premier':
        case 'apple-tv':
          return 'pembayaran';
          break;
        default:
          return 'pembayaran';
      }
    },
    confirm() {
      const { provider, orderNumber, dataDetailOrder, slug } = this;
      let message;
      if (this.orderType == 'pre-order') {
        message = `Halo Admin, saya ${dataDetailOrder.customerName} dengan nomor order ${orderNumber} sudah konfirmasi fix ikut Pre Order ${provider}. Saya tunggu ya follow up dari admin Seakun apabila grup pre order sudah full, terimakasih.`;
      } else {
        message = `Halo Admin, saya ${
          dataDetailOrder.customerName
        } dengan nomor order ${orderNumber} sudah konfirmasi ikut menjadi User Host ${provider}. Saya tunggu selama 1 x 24 jam ya agar dipandu dalam proses ${this.getPaymentProcess(
          slug
        )} ke ${provider}, terimakasih.`;
      }
      window.location.href = `https://api.whatsapp.com/send?phone=6282124852232&text=${encodeURIComponent(
        message
      )}`;
    },
    async getOrderDetail(orderUid, customerUid) {
      const { OrderService } = this;

      try {
        const fetchOrderDetail = await OrderService.getDetailOrder(
          orderUid,
          customerUid
        );
        if (fetchOrderDetail.data) {
          this.dataDetailOrder = fetchOrderDetail.data.data;
          this.orderNumber = this.dataDetailOrder.orderNumber;
          this.provider = this.dataDetailOrder.provider.name;
          this.slug = this.dataDetailOrder.provider.slug;
          if (this.dataDetailOrder.provider.package.isPO) {
            this.orderType = 'pre-order';
          } else if (this.dataDetailOrder.provider.package.isHost) {
            this.orderType = 'user-host';
          }
          this.updateOrderNotes(orderUid, customerUid);
        } else {
          throw new Error(fetchOrderDetail);
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
            4000
          );
        }
        console.log(error);
      }
    },
    async updateOrderNotes(orderUid, customerUid) {
      const { OrderService } = this;
      const payload = {
        orderUid: orderUid,
        customerUid: customerUid,
        notes:
          this.orderType === 'pre-order'
            ? 'Fix ikut pre-order - confirmed by system'
            : 'Fix menjadi user host - confirmed by system',
      };

      try {
        const fetchUpdateNotes = await OrderService.updateOrderNotes(payload);
        if (fetchUpdateNotes.data) {
          this.confirmStatus = 1;
          setInterval(() => {
            if (this.countdown > 0) {
              this.countdown--;
            }
          }, 1000);
        } else {
          throw new Error(fetchUpdateNotes);
        }
      } catch (error) {
        if (error.response?.status == 422) {
          this.confirmStatus = 2;
        }
        console.log(error);
      }
    },
    formatMoneyRupiah(num) {
      return num && num > 0
        ? `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        : 'Rp0';
    },
    toHomePage() {
      this.$router.push('/#provider');
    },
  },
};
</script>

<style lang="scss" scoped>
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

.bg-box {
  background-color: rgb(252, 254, 254);
}
@media (max-width: 800px) {
  #snackbar {
    position: absolute !important;
    max-width: 200px !important;
    left: 30% !important;
    top: 60% !important;
    margin-left: 0px !important;
  }
}
</style>
