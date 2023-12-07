<template>
  <div class="thankyou-page-seglowup">
    <NavbarBlank class-name="!bg-white border-b border-[#F2F5FA] h-[66px]" />
    <div class="mt-[66px] mb-8 lg:mb-[200px]">
      <div class="pt-8 md:pt-[50px] lg:pt-[68px] px-5 md:px-0">
        <div
          class="bg-white p-4 lg:p-9 relative left-1/2 -translate-x-1/2 rounded-[15px] max-w-[660px] space-y-8 md:space-y-9"
          style="box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08)"
        >
          <img
            src="/images/seglowup/order/thankyou.webp"
            alt="thankyou"
            class="w-[180px] h-[138px] md:w-[250px] md:h-[180px] lg:w-[300px] lg:h-[231px] mx-auto"
          />
          <section
            class="text-xs sm:text-sm lg:text-base text-[#2D2D2DCC] tracking-[0.16px]"
          >
            <p class="text-center">Terima kasih telah melakukan pendaftaran.</p>
            <p class="text-center">
              Paket ini adalah paket Pre-Order dimana data member akan diproses
              setelah member dalam satu grup telah terkumpul 4 orang.
              <span class="text-[#0194F3] underline font-bold cursor-pointer">
                Baca ketentuan pre-order</span
              >. Pembayaran akan dilakukan setelah satu grup full dan data
              berhasil diproses.
            </p>
          </section>
          <SeglowupShimmerCard v-if="dataDetailOrder.loading" />
          <SeglowupOrderCard v-else :data-order="dataDetailOrder.data" />
          <section>
            <p
              class="tracking-[0.16px] text-[#2D2D2DCC] text-center text-xs sm:text-sm lg:text-base"
            >
              Lakukan konfirmasi ulang bahwa kamu fix berkomitmen untuk ikut
              pre-order layanan patungan ZAP
              <span v-if="!dataDetailOrder.loading">{{
                dataDetailOrder.data.provider.package.name
              }}</span>
              di SeGlowUp dengan cara klik tombol di bawah. Atau kamu bisa klik
              link yang sudah dikirimkan ke whatsapp kamu. Konfirmasi ini
              bertujuan untuk memasukkan nama dan data diri kamu pada grup yang
              available secara sistematis.
            </p>
          </section>
          <section class="text-center px-2 xl:px-4">
            <Button
              @click="confirm"
              class="bg-[#08A081] text-white h-[44px] md:h-[56px] rounded-lg w-full text-base font-bold"
              >Konfirmasi ikut pre-order</Button
            >
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from '~/components/mollecules/NavbarBlank.vue';
import Footer from '~/components/mollecules/Footer.vue';
import Button from '~/components/atoms/Button.vue';
import SeglowupOrderCard from './views/order-card.vue';
import SeglowupShimmerCard from './views/shimmer-card.vue';
import { mapGetters, mapActions } from 'vuex';
import { currencyFormat } from '~/helpers/word-transformation';

export default {
  components: {
    NavbarBlank,
    Button,
    Footer,
    SeglowupOrderCard,
    SeglowupShimmerCard,
  },
  computed: {
    ...mapGetters({
      dataDetailOrder: 'getDetailOrder',
    }),
    provider() {
      return this.dataDetailOrder.data.provider.name;
    },
    member() {
      return this.dataDetailOrder.data.member;
    },
  },
  mounted() {
    const { order_uid, customer_uid } = this.$router.history.current.query;
    if (order_uid && customer_uid) {
      this.getDetailOrder(order_uid, customer_uid);
    }
  },
  methods: {
    ...mapActions({
      getDetailOrder: 'getDetailOrder',
    }),
    confirm() {
      const { order_uid, customer_uid } = this.$router.history.current.query;
      this.$router.push(
        `/confirmation?type=pre-order&order_uid=${order_uid}&customer_uid=${customer_uid}`
      );
    },
    currencyFormat,
  },
};
</script>

<style lang="scss" scoped>
.thankyou-page-seglowup {
  font-family: 'Nunito Sans', sans-serif;
}
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>
