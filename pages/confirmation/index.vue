<template>
  <div class="lg:pt-10 w-full">
    <div
      class="tn:w-full lg:w-[780px] mx-auto tn:px-4 md:px-20 lg:pb-20 lg:rounded-3xl lg:shadow-2xl bg-box"
    >
      <div v-if="!isConfirm" class="tn:pt-8 lg:pt-20">
        <div class="w-full flex justify-center text-primary opacity-50 mb-6">
          <i class="fa fa-circle-o-notch fa-spin fa-5x mx-auto"></i>
        </div>
        <h3
          class="text-center tn:text-2xl md:text-3xl font-bold tn:mb-3 md:mb-6"
        >
          Harap Menunggu...
        </h3>
        <p class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base">
          Harap menunggu, kamu sedang melakukan konfirmasi ke sistem Seakun
          bahwa kamu sudah komitmen untuk ikut pre-order. Konfirmasi ini
          bertujuan untuk memasukkan nama dan data diri kamu pada grup yang
          available secara sistematis. Harap tidak menutup browser sebelum
          proses selesai.
        </p>
      </div>

      <div v-else class="">
        <div class="my-6">
          <img
            src="/images/thankyou/confirm-success.png"
            alt="Image not found"
            style="margin: 0 auto"
          />
        </div>
        <h3
          class="text-center tn:text-2xl md:text-3xl font-bold tn:mb-3 md:mb-6"
        >
          Konfirmasi Berhasil!
        </h3>
        <p class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base">
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
    </div>
    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import OrderService from '~/services/OrderServices.js';
import Button from '~/components/atoms/Button';
import Snackbar from '~/components/mollecules/Snackbar.vue';

export default {
  name: 'PreOrderPage',
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
      dataDetailOrder: {},
      countdown: 7,
      isConfirm: false,
    };
  },
  watch: {
    countdown(val) {
      if (val === 0) {
        this.confirm();
      }
    },
    isConfirm(val) {
      if (val === true) {
        setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          }
        }, 1000);
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
    confirm() {
      const { provider, orderNumber } = this;
      let message;
      if (this.orderType == 'pre-order') {
        message = `Halo, saya fix ikut pre-order grup ${provider} ya. \r\nNomor order: *${orderNumber}* \r\nTerima kasih`;
      } else {
        message = `Halo, saya fix mendaftar sebagai User Host ${provider} ya. \r\nNomor order: *${orderNumber}* \r\nTerima kasih`;
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
            3000
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
          this.isConfirm = true;
        } else {
          throw new Error(fetchUpdateNotes);
        }
      } catch (error) {
        if (error.response?.status == 422) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Sudah Terkonfirmasi. Tidak Perlu Konfirmasi Ulang`,
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
    formatMoneyRupiah(num) {
      return num && num > 0
        ? `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        : 'Rp0';
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
