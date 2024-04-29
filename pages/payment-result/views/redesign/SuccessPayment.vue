<template>
  <div class="flex flex-col md:flex-row gap-x-6 w-full">
    <section class="w-full relative">
      <PromoSection addClass="''" classImg="h-[170px]" />
      <section
        class="bg-[#E2FCF6] px-[33px] py-3 flex justify-between items-center gap-3 rounded-t-xl"
      >
        <div>
          <p class="font-extrabold text-[24px] text-primary">Terima Kasih!</p>
          <p class="text-sm text-gray-secondary max-w-[450px]">
            Konfirmasi pembayaranmu telah berhasil. Admin akan segera
            menghubungi untuk memberikan detail pesananmu.
          </p>
        </div>
        <img
          src="/images/payment-result/thankyou.webp"
          alt="thankyou"
          class="w-[136px] h-[109px]"
        />
      </section>
      <section class="bg-[#F6FFFD] px-[33px] py-4 rounded-b-xl">
        <div>
          <p class="font-bold text-lg">Detail Pesanan</p>
          <div v-for="(detailOrder, id) in dataOrder" :key="id">
            <template v-if="detailOrder.provider.slug === 'sekurban'">
              <SekurbanOrderCard :sekurban="detailOrder" />
            </template>
            <template v-else-if="detailOrder.provider.slug === 'zap'">
              <ZapOrderCard :zap="detailOrder" />
            </template>
            <template v-else>
              <OrderCard :order="detailOrder" />
            </template>
          </div>
        </div>
        <div class="px-3">
          <div class="mt-3">
            <div class="flex justify-between items-center text-sm md:text-base">
              <p>Biaya Langganan</p>
              <p class="font-bold">{{ currencyFormat(totalPrice) }}</p>
            </div>
            <div class="flex justify-between items-center text-sm md:text-base">
              <p>Biaya Transfer & Tax</p>
              <p class="font-bold">{{ currencyFormat(serviceFee) }}</p>
            </div>
          </div>
          <hr class="mt-3" />
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <p>Total Pembayaran</p>
              <p class="font-bold text-[18px]">
                {{ currencyFormat(totalTransfer) }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="dataOrder.length > 0 && dataOrder[0].provider.slug !== 'sekurban'"
      >
        <p class="tn:mt-4 md:mt-6 lg:mt-8">
          Mohon menunggu 1 x 24 jam, jika melewati rentang waktu tersebut dan
          pesanan kamu belum diproses, harap hubungi admin via whatsapp
          <a
            class="text-blue-500"
            href="https://api.whatsapp.com/send?phone=6282124852235"
            >082124852235</a
          >
        </p>
      </section>

      <Button
        class="w-full bg-green-seakun text-white tn:mt-5 md:mt-6 py-[12px] rounded-2xl"
        label="Kembali ke beranda"
        @click="toHomePage()"
      />
    </section>
    <section class="min-w-[368px]">
      <div>
        <p class="text-sm md:text-base font-bold text-gray-secondary">
          Mau Kirim TIP Untuk Seakun?
        </p>
        <img
          class="cursor-pointer w-[328px] h-[109px] md:w-[368px] md:h-[120px] rounded-lg mt-3"
          src="/images/general-gift/send-tip.webp"
          alt="thr banner"
          @click="toTipPage"
        />
      </div>
    </section>
  </div>
  <!-- <div class="w-full mx-auto tn:pt-6 md:pt-12 tn:-mb-4 md:mb-0">
    <img
      class="thank-you w-full tn:hidden md:block cursor-pointer -mt-12"
      src="/images/general-gift/thankyou.png"
      alt="thr banner"
      @click="toTipPage"
    />

    <div
      class="md:rounded-3xl md:shadow-md tn:px-3 md:px-8 lg:px-16 md:py-8 w-full md:mt-4"
    >
      <img
        class="w-full md:hidden tn:mb-6 cursor-pointer"
        src="/images/general-gift/thankyou-mobile.png"
        alt="thr banner"
        @click="toTipPage"
      />

      

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
            >Program Patungan Qurban Seakun x Kitabisa x Ecoqurban</span
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
            <template v-else-if="detailOrder.provider.slug === 'zap'">
              <ZapOrderCard :zap="detailOrder" />
            </template>
            <template v-else>
              <OrderCard :order="detailOrder" />
            </template>
          </div>
        </div>
        <div class="px-3">
          <div class="mt-3">
            <div class="flex justify-between items-center text-sm md:text-base">
              <p>Biaya Langganan</p>
              <p class="font-bold">{{ currencyFormat(totalPrice) }}</p>
            </div>
            <div class="flex justify-between items-center text-sm md:text-base">
              <p>Biaya Transfer & Tax</p>
              <p class="font-bold">{{ currencyFormat(serviceFee) }}</p>
            </div>
          </div>
          <hr class="mt-3" />
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <p>Total Pembayaran</p>
              <p class="font-bold text-[18px]">
                {{ currencyFormat(totalTransfer) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div> -->
</template>

<script>
import Button from '~/components/atoms/Button';
import OrderCard from '../OrderCard.vue';

import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';
import PromoSection from '~/components/organisms/PromoSection';

export default {
  name: 'thankyou-page',
  layout: 'new',
  props: {
    dataOrder: {
      type: Array,
      default: () => [],
    },
    totalPrice: {
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
  computed: {
    totalTransfer() {
      return this.totalPrice + this.serviceFee;
    },
    serviceFee() {
      let fee = 0;
      if (this.totalPrice > 0) {
        fee = this.totalPrice <= 65000 ? 500 : 1000;
      }
      return fee;
    },
  },
  components: {
    Button,
    OrderCard,
    PromoSection,
  },
  methods: {
    toHomePage() {
      this.$router.push('/');
    },
    toSekurbanPage() {
      this.$router.push('/sekurban');
    },
    toTipPage() {
      this.$router.push('/tip');
    },
  },
};
</script>
