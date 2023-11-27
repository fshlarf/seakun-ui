<template>
  <div class="lg:pt-10 w-full">
    <div
      class="tn:w-full lg:w-[780px] px-4 mx-auto md:px-[75px] lg:pb-20 lg:rounded-3xl lg:shadow-2xl"
    >
      <div class="col">
        <div class="">
          <img
            src="/images/thankyou/thank-you.png"
            alt="pre-order registration success"
            style="margin: 0 auto"
          />
        </div>
        <div v-if="dataDetailOrder.loading" class="text-center">
          <p class="font-bold shimmer w-full md:my-2"></p>
          <p class="font-bold shimmer w-full md:my-2"></p>
          <p class="font-bold shimmer w-2/3 md:my-2"></p>

          <ProductHighLightLoading />
        </div>
        <div v-else>
          <p
            class="text-center text-[#2d2d2d] opacity-80 tn:text-sm md:text-base"
          >
            Terima kasih telah melakukan pendaftaran. <br />
            Paket ini adalah paket Pre-Order dimana akun akan dibuat setelah
            member dalam satu grup telah terkumpul
            {{ member }} orang.
            <nuxt-link
              class="underline font-bold text-blue-500"
              to="/info/pre-order"
              target="_blank"
              >Baca ketentuan pre-order</nuxt-link
            >. Pembayaran akan dilakukan setelah satu grup full dan akun
            berhasil dibuat.
          </p>

          <div class="w-full tn:my-6 md:my-8 lg:my-12 md:px-6">
            <OrderCard :order-data="dataDetailOrder.data" />
          </div>

          <p
            class="text-center text-[#2d2d2d] opacity-80 tn:text-sm md:text-base"
          >
            Lakukan konfirmasi ulang bahwa kamu fix berkomitmen untuk ikut
            pre-order layanan patungan {{ provider }} di Seakun dengan cara klik
            tombol di bawah. Atau kamu bisa klik link yang sudah dikirimkan ke
            whatsapp kamu. Konfirmasi ini bertujuan untuk memasukkan nama dan
            data diri kamu pada grup yang available secara sistematis.
          </p>
        </div>

        <div class="w-full tn:mt-8 md:mt-12 md:px-16">
          <Button
            class="w-full bg-green-seakun text-white py-3"
            label="Konfirmasi ikut pre-order"
            :disabled="dataDetailOrder.loading"
            @click="confirm()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderCard from '../views/order-card';
import Button from '~/components/atoms/Button';
import { mapGetters, mapActions } from 'vuex';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';

export default {
  name: 'PreOrderPage',
  layout: 'new',
  components: {
    OrderCard,
    Button,
    ProductHighLightLoading,
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
  },
};
</script>

<style lang="scss" scoped></style>
