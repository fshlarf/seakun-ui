<template>
  <div class="md:py-[91px]">
    <div
      class="tn:w-full lg:w-[780px] mx-auto tn:px-4 md:px-20 tn:pb-8 md:pb-12 xl:pb-16 lg:rounded-3xl lg:shadow-2xl bg-box"
    >
      <div v-if="waitingListConfirmation.loading">
        <div
          class="w-full flex justify-center text-primary opacity-50 tn:pb-6 tn:pt-20"
        >
          <i class="fa-solid fa-circle-notch fa-spin fa-5x mx-auto"></i>
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
          bahwa kamu sudah komitmen untuk menjadi User Host. Harap tidak menutup
          browser sebelum proses selesai.
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

      <transition name="slide-up">
        <div
          v-if="
            !waitingListConfirmation.loading &&
            waitingListConfirmation.status === 1
          "
        >
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
            <b>User Host {{ dataOrder.provider }}</b> di Seakun.id dengan nomor
            order <b>{{ dataOrder.orderNumber }}</b
            >. Dalam <b>waktu 1 x 24 jam</b> kamu akan dihubungi admin Seakun
            untuk memandu kamu melanjutkan proses pendaftaran akun dan/atau
            pembayaran ke provider terkait.
          </p>
          <p
            v-else
            class="text-[#2d2d2d] opacity-80 tn:text-sm md:text-base text-center"
          >
            Kamu sudah terkonfirmasi <b>fix</b> ikut pre order layanan
            {{ dataOrder.provider }} di Seakun.id dengan nomor order
            <b>{{ dataOrder.orderNumber }}</b
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
      </transition>

      <transition name="slide-up">
        <div
          v-if="
            !waitingListConfirmation.loading &&
            waitingListConfirmation.status === 2
          "
        >
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
            Kamu sudah melakukan konfirmasi sebagai User Host. Nama dan data
            diri kamu sudah dimasukkan ke dalam available grup sebagai User
            Host. Kamu akan dihubungi Admin Seakun dalam waktu 1 x 24 jam.
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
      </transition>
    </div>
    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ConfirmPage',
  layout: 'new',
  components: {
    Button,
    Snackbar,
  },
  data() {
    return {
      countdown: 7,
      orderType: '',
    };
  },
  watch: {
    waitingListConfirmation(val) {
      if (val.status === 1) {
        setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          }
        }, 1000);
      }
    },
    countdown(val) {
      if (val === 0) {
        this.confirm();
      }
    },
  },
  computed: {
    ...mapGetters({
      dataDetailOrder: 'getDetailOrder',
      waitingListConfirmation: 'getWatingListConfirmation',
    }),
    dataOrder() {
      const order = {
        provider: this.dataDetailOrder.data.provider.name,
        orderNumber: this.dataDetailOrder.data.orderNumber,
        slug: this.dataDetailOrder.data.provider.slug,
        customerName: this.dataDetailOrder.data.customerName,
      };
      return order;
    },
  },
  created() {
    this.resetConfirmation();
  },
  mounted() {
    const {
      type,
      order_uid,
      customer_uid,
    } = this.$router.history.current.query;
    this.orderType = type;
    if (order_uid && customer_uid) {
      this.processConfirmation(order_uid, customer_uid);
    }
  },
  methods: {
    ...mapActions({
      getDetailOrder: 'getDetailOrder',
      updateOrderNotes: 'updateOrderNotes',
      resetConfirmation: 'resetConfirmation',
    }),
    async processConfirmation(orderUid, customerUid) {
      if (!this.dataDetailOrder.data.uid) {
        await this.getDetailOrder(orderUid, customerUid);
      }
      this.confirmWaitingList(orderUid, customerUid);
    },
    confirm() {
      const { provider, orderNumber, customerName } = this.dataOrder;
      let message;
      if (this.orderType == 'pre-order') {
        message = `Halo Admin, saya ${customerName} dengan nomor order ${orderNumber} sudah konfirmasi fix ikut Pre Order ${provider}. Saya tunggu ya follow up dari admin Seakun apabila grup pre order sudah full, terimakasih.`;
      } else {
        message = `Halo Admin, saya ${customerName} dengan nomor order ${orderNumber} sudah konfirmasi ikut menjadi User Host ${provider}. Saya tunggu selama 1 x 24 jam ya agar dipandu dalam proses selanjutnya, terimakasih.`;
      }
      window.location.href = `https://api.whatsapp.com/send?phone=6282124852232&text=${encodeURIComponent(
        message
      )}`;
    },
    async confirmWaitingList(orderUid, customerUid) {
      const payload = {
        orderUid: orderUid,
        customerUid: customerUid,
        notes:
          this.orderType === 'pre-order'
            ? 'Fix ikut pre-order - confirmed by system'
            : 'Fix menjadi user host - confirmed by system',
      };
      this.updateOrderNotes(payload);
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
.slide-up-enter-active {
  transition: all 0.3s ease;
}
.slide-up-enter {
  transform: translateY(-20vh);
  opacity: 0;
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
