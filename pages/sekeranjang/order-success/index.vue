<template>
  <div>
    <Navbar />
    <div class="max-w-[632px] mx-auto tn:px-4 tn:pt-20 md:pt-28 tn:pb-14">
      <img
        class="w-[238px] mx-auto"
        src="/images/sekeranjang/success-order.png"
        alt="order success"
      />
      <div v-if="dataDetailProduct.loading">
        <div class="max-w-[450px] mx-auto tn:mt-3 space-y-1">
          <div class="shimmer h-6 w-full"></div>
          <div class="flex justify-center">
            <div class="shimmer h-6 w-1/2"></div>
          </div>
        </div>
        <div class="tn:mt-5 max-w-[450px] mx-auto">
          <div class="shimmer w-full"></div>
          <div class="shimmer w-full"></div>
          <div class="flex justify-center">
            <div class="shimmer w-1/2"></div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1
          v-if="dataDetailProduct.data"
          class="text-[24px] font-bold text-center tn:mt-3 max-w-[450px] mx-auto"
        >
          Terimakasih telah melakukan pesanan untuk produk
          {{ dataDetailProduct.data.name }}.
        </h1>
        <p
          v-if="dataDetailProduct.data && dataDetailProduct.data.promoType"
          class="text-center tn:mt-5"
        >
          Di mana pada produk ini skemanya adalah
          {{ dataDetailProduct.data.promoType.value }}. Dalam satu grup terdiri
          dari {{ dataDetailProduct.data.quota }} orang. Harap menunggu, kamu
          akan dihubungi admin untuk proses berikutnya.
        </p>
      </div>
      <p class="text-center tn:mt-5">
        Share produk ini di media sosialmu <br />
        agar membantu kami menemukan teman patunganmu.
      </p>

      <div
        class="tn:w-full md:w-[540px] mx-auto rounded-md overflow-hidden border-2 border-[#A0A3BD] flex justify-between tn:mt-4"
      >
        <div
          class="hide-scrollbar w-full overscroll-auto overflow-x-auto tn:py-4 tn:pl-4"
        >
          <div class="min-w-max h-full flex-none">
            <p class="text-[#A0A3BD] w-full h-full">
              {{ productUrl }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="w-4 h-full"></div>
          <div
            class="bg-primary w-[80px] h-full flex justify-center items-center cursor-pointer"
            @click="clickCopyHandler('Link produk', productUrl)"
          >
            <img
              class="w-[20px] h-[20px]"
              src="/images/icons/atoms/copy.svg"
              alt="copy link"
            />
          </div>
        </div>
      </div>

      <div class="tn:mt-5 flex justify-between items-center w-[306px] mx-auto">
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/facebook.svg"
          alt="facebook icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/instagram.svg"
          alt="instagram icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/whatsapp.svg"
          alt="whatsapp icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/telegram.svg"
          alt="telegram icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/email.svg"
          alt="email icon"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import Footer from '../views/Footer.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      productUrl: '',
    };
  },
  computed: {
    ...mapGetters({
      productUid: 'sekeranjang/getProductUid',
      dataDetailProduct: 'sekeranjang/getDetailProduct',
    }),
  },
  mounted() {
    const domain = window.location.origin;
    const { product_id, order_id } = this.$router.history.current.query;
    this.productUrl = `${domain}/sekeranjang/product-detail?product_id=${product_id}&order_id=${order_id}`;
    if (Object.keys(this.dataDetailProduct.data).length === 0) {
      this.setProductUid(product_id);
      this.getProductDetail(product_id);
    }
  },
  methods: {
    ...mapActions({
      setProductUid: 'sekeranjang/setProductUid',
      getProductDetail: 'sekeranjang/fetchDetailProduct',
    }),
    clickCopyHandler(name, value) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(
          () => {
            this.$alert.show({
              status: 'success',
              message: `${name} berhasil disalin`,
            });
          },
          (err) => console.log(err)
        );
      } else {
        this.fallbackCopyText(name, value);
      }
    },
    fallbackCopyText(name, value) {
      let textArea = document.createElement('textarea');
      textArea.value = value;

      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successful = document.execCommand('copy');
        if (successful) {
          this.$alert.show({
            status: 'success',
            message: `${name} berhasil disalin`,
          });
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    },
  },
};
</script>

<style>
.test {
  background-color: #f7f7f7;
}
</style>
