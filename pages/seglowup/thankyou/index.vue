<template>
  <div class="thankyou-page-seglowup">
    <NavbarBlank
      class-name="hidden md:block !bg-white md:border-b border-[#F2F5FA] h-[66px]"
    />
    <nuxt-link to="/" class="md:hidden absolute top-5 left-5">
      <img
        class="w-[90px]"
        src="/images/brand-seakun/seakun-green.svg"
        alt="seakun"
      />
    </nuxt-link>
    <div
      class="w-full md:hidden bg-[#CBFFF5] pt-[47px] pb-[75px] flex justify-center items-center -mb-[80px]"
    >
      <img
        src="/images/seglowup/thankyou.webp"
        alt="terima kasih"
        class="w-[190px]"
      />
    </div>
    <div class="md:mt-[66px] mb-8 lg:mb-[200px]">
      <div class="md:pt-[50px] lg:pt-[68px] px-5 md:px-0">
        <div
          class="relative left-1/2 -translate-x-1/2 max-w-[658px] space-y-[24px] p-4 md:p-0 rounded-[6px] shadow-md md:shadow-none bg-white md:bg-transparent"
        >
          <section
            class="text-xs sm:text-sm lg:text-base text-[#2D2D2DCC] flex justify-between gap-[4px] items-center md:bg-[#E9FEFA] rounded-[10px] md:p-2"
          >
            <div class="md:p-3">
              <p class="text-primary text-sm lg:text-[20px] font-bold">
                Terima kasih telah mendaftar!
              </p>
              <p class="mt-1 lg:mt-2">
                Paket ini adalah Paket Pre-Order, akan diproses setelah grup
                terkumpul 4 orang. Pembayaran dilakukan setelah grup full dan
                data berhasil diproses.
                <nuxt-link
                  class="text-[#0090DF] font-semibold"
                  to="/info/pre-order"
                  >Baca ketentuan pre-order</nuxt-link
                >.
              </p>
            </div>
            <div class="!shrink-0 hidden md:block md:pr-2">
              <img
                src="/images/seglowup/thankyou.webp"
                alt="terima kasih"
                class="w-[130px] xl:w-[160px]"
              />
            </div>
          </section>
          <SeglowupShimmerCard v-if="dataDetailOrder.loading" />
          <SeglowupOrderCard
            class="text-dmsans"
            v-else
            :data-order="dataDetailOrder.data"
          />
          <section>
            <p class="text-[#2D2D2DCC] text-xs sm:text-sm lg:text-base">
              Konfirmasi patungan pre-order ZAP
              <span v-if="!dataDetailOrder.loading">{{
                dataDetailOrder.data.provider.package.name
              }}</span>
              di SeGlowUp dengan mengklik tombol atau menggunakan link yang
              sudah dikirimkan ke WhatsAppmu. Tujuannya agar nama dan data
              dirimu masuk ke dalam grup secara sistematis.
            </p>
          </section>
          <section class="text-center md:text-left">
            <Button
              @click="confirm"
              class="bg-[#08A081] text-white py-2 px-4 lg:py-3 !rounded-[6px] md:!rounded-lg text-base font-bold"
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
