<template>
  <div
    class="thankyou max-w-2xl w-full mx-auto tn:pt-6 md:pt-12 tn:-mb-4 md:mb-0"
  >
    <img
      class="w-full tn:hidden md:block cursor-pointer -mt-12"
      src="/images/general-gift/thankyou.png"
      alt="thr banner"
      @click="toTipPage"
    />
    <!-- <img
      @click="toSekurbanPage"
      src="/images/thankyou/sequrban-banner-website.png"
      alt="sequrban banner"
      class="cursor-pointer tn:hidden md:block"
    /> -->
    <div
      class="md:rounded-3xl md:shadow-md tn:px-3 md:px-8 lg:px-16 md:py-8 w-full md:mt-4"
    >
      <!-- <img
        @click="toSekurbanPage"
        src="/images/thankyou/sequrban-banner-mobile.png"
        alt="sequrban banner"
        class="cursor-pointer md:hidden w-full mb-7"
      /> -->
      <img
        class="w-full md:hidden tn:mb-6 cursor-pointer"
        src="/images/general-gift/thankyou-mobile.png"
        alt="thr banner"
        @click="toTipPage"
      />
      <!-- <template v-if="!isLoading"> -->
      <template
        v-if="dataOrder.length > 0 && dataOrder[0].provider.slug === 'sekurban'"
      >
        <img
          class="w-6/12 mx-auto"
          src="/images/sekurban-new/thankyou.png"
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
        <h3 class="font-bold text-3xl tn:mt-8 text-center">Terima Kasih!</h3>
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

        <div v-if="dataOrder[0].provider.slug === 'sekurban'" class="px-3">
          <div class="mt-3">
            <div
              v-if="transferAmount == 946000"
              class="flex justify-between items-center text-sm md:text-base"
            >
              <p>Biaya Cicilan Pertama</p>
              <p class="font-bold">
                {{ currencyFormat(transferAmount - serviceFee) }}
              </p>
            </div>
            <div
              v-else
              class="flex justify-between items-center text-sm md:text-base"
            >
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
                {{ currencyFormat(transferAmount) }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="px-3">
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

      <div
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
      </div>
      <div v-else>
        <div
          class="mt-4 bg-[#E9FCF8] px-3 md:px-4 py-3 md:py-[11px] flex items-start gap-2 md:gap-3 rounded-lg border border-[#D6F5EF]"
        >
          <img
            src="/images/illustration/installment-payment.webp"
            alt="intallment"
            class="w-[50px] h-[37px] hidden md:block"
          />
          <img
            src="/images/icons/atoms/exclamation-mark-symbol.svg"
            alt="warning"
            class="w-4 h-4 md:hidden"
          />
          <p class="text-xs text-[#417465]">
            Kamu telah memilih pembayaran dengan cicilan dua kali. Pembayaran
            kedua harus dibayarkan paling lambat tanggal 5 Juni 2024.
          </p>
        </div>
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
import OrderCard from './OrderCardOld.vue';
import SekurbanOrderCard from '~/components/mollecules/SekurbanOrderCard.vue';
import ZapOrderCard from '~/components/mollecules/ZapOrderCard.vue';
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
    totalPrice: {
      type: Number,
      default: null,
    },
    transferAmount: {
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
    SekurbanOrderCard,
    ZapOrderCard,
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