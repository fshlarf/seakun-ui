<template>
  <div class="thankyou max-w-2xl w-full mx-auto md:pt-4 tn:-mb-4 md:mb-0">
    <!-- <img
      class="w-full tn:hidden md:block cursor-pointer"
      src="/images/ramadan-gift/thankyou2.webp"
      alt="thr banner"
      @click="toThrPage"
    /> -->
    <div
      class="md:rounded-3xl md:shadow-md tn:px-3 md:px-8 lg:px-16 md:py-8 w-full tn:pt-3 md:mt-4"
    >
      <!-- <img
        class="w-full md:hidden tn:mb-6 cursor-pointer"
        src="/images/ramadan-gift/thankyou-mobile.webp"
        alt="thr banner"
        @click="toThrPage"
      /> -->
      <!-- <template v-if="!isLoading"> -->
      <template
        v-if="dataOrder.length > 0 && dataOrder[0].provider.slug === 'sekurban'"
      >
        <img
          class="w-6/12 mx-auto"
          src="/images/sekurban/thankyou.png"
          alt="pembayaran sukses"
        />
      </template>
      <template v-else>
        <img
          class="w-6/12 mx-auto"
          src="/images/thank-you-new.png"
          alt="pembayaran sukses"
        />
      </template>

      <div class="text-center tn:px-4 md:px-12 tn:mb-4">
        <h3 class="font-bold text-3xl tn:mt-4 text-center">Terima Kasih!</h3>
        <p
          v-if="
            dataOrder.length > 0 && dataOrder[0].provider.slug === 'sekurban'
          "
          class="text-center md:text-lg tn:mt-2 text-gray-500"
        >
          Konfirmasi pembayaranmu telah berhasil. Terimakasih sudah mengikuti
          <span class="font-bold"
            >Program Patungan Qurban Seakun x Kitabisa</span
          >. Untuk informasi tentang jadwal pelaksanaan proses qurban, akan
          diinformasikan mendekati hari H (Idul Adha).
        </p>
        <p v-else class="text-center md:text-lg tn:mt-4 text-gray-500">
          Konfirmasi pembayaranmu telah berhasil. Admin akan segera menghubungi
          untuk memberikan detail pesananmu.
        </p>
      </div>

      <div
        class="tn:px-4 md:px-6 tn:py-4 md:py-8 mt-2 tn:mb-4 md:mb-6 lg:mb-8 bg-gray-50 shadow-md tn:rounded-xl md:rounded-3xl"
      >
        <div>
          <p class="font-bold text-lg">Detail Pesanan</p>
          <div v-for="(detailOrder, id) in dataOrder" :key="id">
            <template v-if="detailOrder.provider.slug === 'sekurban'">
              <SekurbanOrderCard :sekurban="detailOrder" />
            </template>
            <template v-else>
              <OrderCard :order="detailOrder" />
            </template>
          </div>
        </div>
        <div class="mt-4 md:space-y-1">
          <div class="text-center">
            <p>Total Pembayaran</p>
            <p class="font-bold text-xl">{{ currencyFormat(totalTransfer) }}</p>
          </div>
        </div>
      </div>

      <div
        v-if="orderData.length > 0 && dataOrder[0].provider.slug !== 'sekurban'"
      >
        <p class="tn:mt-4 md:mt-6 lg:mt-8">
          Mohon menunggu 1 x 24 jam, jika melewati rentang waktu tersebut dan
          pesanan kamu belum diproses, harap hubungi admin via whatsapp
          <a
            href="https://api.whatsapp.com/send/?phone=6282124852232"
            target="_blank"
            class="text-primary"
            >+6282124852232</a
          >.
        </p>
      </div>

      <Button
        class="w-full bg-green-seakun text-white tn:mt-5 md:mt-6 py-[12px] rounded-2xl"
        label="Kembali ke beranda"
        @click="toHomePage()"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import OrderCard from './OrderCard.vue';
import SekurbanOrderCard from '~/components/mollecules/SekurbanOrderCard.vue';
import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';

export default {
  name: 'thankyou-page',
  layout: 'new',
  props: {
    dataOrder: {
      type: Array,
      default: () => [],
    },
    totalTransfer: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      currencyFormat,
      moment,
    };
  },
  components: {
    Button,
    OrderCard,
    SekurbanOrderCard,
  },
  methods: {
    toHomePage() {
      this.$router.push('/');
    },
    // toThrPage() {
    //   this.$router.push('/thr');
    // },
  },
};
</script>