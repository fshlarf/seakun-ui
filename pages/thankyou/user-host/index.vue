<template>
  <div class="lg:pt-10 w-full">
    <div
      class="tn:w-full lg:w-[780px] mx-auto md:px-[75px] lg:pb-20 lg:rounded-3xl lg:shadow-2xl"
    >
      <div class="col">
        <div class="">
          <img
            src="/images/thankyou/thank-you.png"
            alt="Image not found"
            style="margin: 0 auto"
          />
        </div>
        <p
          class="text-center font-bold text-[#2d2d2d] opacity-80 tn:text-sm md:text-base"
        >
          User Host adalah program Seakun.id untuk memberikan kewenangan ke user
          untuk melakukan administrasi ke provider tertentu. Administrasi
          tersebut bisa berupa pendaftaran atau melakukan payment ke provider
          tersebut.
          <nuxt-link
            class="underline font-bold text-blue-500"
            to="/info/user-host"
            target="_blank"
            >Baca ketentuan User Host</nuxt-link
          >.
        </p>
        <p
          class="text-center font-bold text-[#2d2d2d] opacity-80 tn:text-sm md:text-base tn:mt-4 lg:mt-8"
        >
          Terima kasih telah melakukan pendaftaran. <br />
          Karena kamu terdaftar sebagai User Host, Admin Seakun.id akan memandu
          kamu untuk melakukan proses pendaftaran dan pembayaran ke
          {{ provider }}.
        </p>

        <div class="w-full tn:my-6 md:my-8 lg:my-12 md:px-6">
          <OrderCard :order-data="dataDetailOrder" />
        </div>

        <p
          class="text-center font-bold text-[#2d2d2d] opacity-80 tn:text-sm md:text-base"
        >
          Apabila kamu setuju menjadi User Host, lakukan konfirmasi bahwa kamu
          setuju menjadi user host dengan klik tombol di bawah. Atau kamu bisa
          klik link yang sudah dikirimkan ke whatsapp kamu.
        </p>
        <div class="w-full tn:mt-8 md:mt-12 md:px-16">
          <Button
            class="w-full bg-green-seakun text-white py-3"
            label="Konfirmasi ikut sebagai User Host"
            @click="confirm()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderService from '~/services/OrderServices.js';
import OrderCard from '../views/order-card';
import Button from '~/components/atoms/button';

export default {
  name: 'PreOrderPage',
  layout: 'new',
  components: {
    OrderCard,
    Button,
  },
  data() {
    return {
      OrderService,
      provider: '',
      orderNumber: '',
      slug: '',
      dataDetailOrder: {},
    };
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
      const { order_uid, customer_uid } = this.$router.history.current.query;
      this.$router.push(
        `/confirmation?order_uid=${order_uid}&customer_uid=${customer_uid}`
      );
    },
    setNumberMember(slug) {
      switch (slug.toLowerCase()) {
        case 'canva':
        case 'iqiyi':
          return '4';
          break;
        case 'gramedia-digital':
        case 'vidio':
        case 'disney-hotstar':
          return '2';
          break;
        case 'wattpad':
        case 'amazon-prime':
          return '3';
          break;
        case 'nord-vpn':
          return '6';
          break;
        case 'google-one':
          return '5';
          break;
        default:
          return '5';
      }
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
}
</style>
