<template>
  <div class="flex flex-col justify-center md:flex-row gap-x-6 w-full pb-10">
    <section class="w-full relative max-w-[728px]">
      <PromoBanner
        addClass="''"
        classImg="md:!h-[170px] !h-[116px]"
        radioClass="!mt-2 md:!mt-3"
      />

      <section
        class="bg-[#E2FCF6] px-[33px] py-3 flex md:flex-row flex-col-reverse justify-between items-center gap-3 rounded-t-xl md:mt-4 mt-[100px]"
      >
        <div class="text-center md:text-left">
          <p class="font-extrabold text-base md:text-[24px] text-primary">
            Terima Kasih!
          </p>
          <p
            class="text-xs md:text-sm text-gray-secondary max-w-[2820px] md:max-w-[450px] pt-1 md:pt-2"
          >
            Konfirmasi pembayaranmu telah berhasil. Admin akan segera
            menghubungi untuk memberikan detail pesananmu.
          </p>
        </div>
        <img
          src="/images/payment-result/thankyou.webp"
          alt="thankyou"
          class="w-[122px] md:w-[136px] h-[109px] -mt-24 -mb-2 md:mb-0 md:mt-0"
        />
      </section>
      <section
        class="bg-[#F6FFFD] border border-[#E2FCF6] px-3 md:px-[33px] py-[9px] md:py-4 rounded-b-xl"
      >
        <div>
          <p class="font-bold text-sm md:text-lg">Detail Pesanan</p>
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
          <div class="mt-4 md:mt-5 space-y-3 md:space-y-[14px]">
            <div
              v-if="transferAmount == 946000"
              class="flex justify-between items-center text-xs md:text-sm text-gray-secondary"
            >
              <p>Biaya Cicilan Pertama</p>
              <p>
                {{ currencyFormat(transferAmount - serviceFee) }}
              </p>
            </div>
            <div
              v-else
              class="flex justify-between items-center text-xs md:text-sm text-gray-secondary"
            >
              <p>Biaya Langganan</p>
              <p>{{ currencyFormat(totalPrice) }}</p>
            </div>
            <div class="flex justify-between items-center text-sm md:text-base">
              <p>Biaya Transfer & Tax</p>
              <p>{{ currencyFormat(serviceFee) }}</p>
            </div>
          </div>
          <hr class="mt-3" />
          <div class="mt-4">
            <div class="flex items-center justify-between font-bold">
              <p>Total Pembayaran</p>
              <p class="text-primary">
                {{ currencyFormat(transferAmount) }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="px-3">
          <div class="mt-4 md:mt-5 space-y-3 md:space-y-[14px]">
            <div
              class="flex justify-between items-center text-xs md:text-sm text-gray-secondary"
            >
              <p>Biaya Langganan</p>
              <p>{{ currencyFormat(totalPrice) }}</p>
            </div>
            <div
              class="flex justify-between items-center text-xs md:text-sm text-gray-secondary"
            >
              <p>Biaya Transfer & Tax</p>
              <p>{{ currencyFormat(serviceFee) }}</p>
            </div>
          </div>
          <hr class="mt-2 md:mt-3" />
          <div class="mt-2 md:mt-4">
            <div
              class="flex justify-between items-center text-xs md:text-sm text-gray-secondary font-bold"
            >
              <p>Total Pembayaran</p>
              <p class="text-primary">
                {{ currencyFormat(totalTransfer) }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div>
          <div class="mt-4 md:mt-5 space-y-3 md:space-y-[14px]">
            <div
              class="flex justify-between items-center text-sm md:text-sm text-gray-secondary"
            >
              <p>Biaya Langganan</p>
              <p>{{ currencyFormat(totalPrice) }}</p>
            </div>
            <div
              class="flex justify-between items-center text-sm md:text-sm text-gray-secondary"
            >
              <p>Biaya Transfer & Tax</p>
              <p>{{ currencyFormat(serviceFee) }}</p>
            </div>
          </div>
          <hr class="mt-2 md:mt-3" />
          <div class="mt-2 md:mt-4">
            <div class="flex items-center justify-between font-bold text-sm">
              <p class="text-gray-secondary">Total Pembayaran</p>
              <p class="text-primary">
                {{ currencyFormat(totalTransfer) }}
              </p>
            </div>
          </div>
        </div> -->
      </section>
      <section
        v-if="dataOrder.length > 0 && dataOrder[0].provider.slug !== 'sekurban'"
      >
        <div
          class="bg-[#FFC801]/10 border border-[#F9F0CE] rounded-lg p-[7px] md:p-3 text-xs md:text-sm flex items-start gap-1 md:gap-2 mt-5"
        >
          <img
            src="/images/icons/atoms/info-rounded-black.svg"
            alt="info"
            class="w-[16px] h-[16px] md:w-6 md:h-6"
          />
          <section>
            <p>
              <span class="font-bold"> Mohon menunggu 1 x 24 jam. </span>
              Jika melewati rentang waktu tersebut dan pesanan kamu belum
              diproses, harap hubungi admin via whatsapp
              <a
                class="text-blue-500"
                href="https://api.whatsapp.com/send?phone=6282124852235"
                >082124852235</a
              >
            </p>
          </section>
        </div>
      </section>

      <div
        v-else-if="
          dataOrder.length > 0 &&
          dataOrder[0].provider.slug == 'sekurban' &&
          transferAmount == 946000
        "
      >
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
        class="w-full bg-green-seakun text-white tn:mt-5 md:mt-6 py-[15px] md:py-[20px] rounded-2xl"
        label="Kembali ke beranda"
        @click="toHomePage()"
      />
      <hr class="border-[#E9EDEC] my-8" />
      <!--start banner tip temporary -->
      <div>
        <p class="text-sm md:text-base font-bold text-gray-secondary">
          Mau Kirim TIP Untuk Seakun?
        </p>
        <img
          class="cursor-pointer min-w-full md:w-[368px] rounded-lg mt-3"
          :class="bannerTIPWidth"
          src="/images/general-gift/send-tip.webp"
          alt="thr banner"
          @click="toTipPage"
        />
      </div>
      <!-- end banner tip temporary -->
    </section>

    <!-- Hide sidebar -->
    <!-- <section class="min-w-[368px]">
      <div>
        <p class="text-sm md:text-base font-bold text-gray-secondary">
          Mau Kirim TIP Untuk Seakun?
        </p>
        <img
          class="cursor-pointer w-[368px] h-[109px] md:w-[368px] md:h-[120px] rounded-lg mt-3"
          src="/images/general-gift/send-tip.webp"
          alt="thr banner"
          @click="toTipPage"
        />
      </div>
      <Article />
    </section> -->
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import OrderCard from './OrderCard.vue';

import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';
import Article from './Article.vue';
import PromoBanner from './PromoBanner.vue';
import ZapOrderCard from '../../../components/mollecules/ZapOrderCard.vue';
import SekurbanOrderCard from '../../../components/mollecules/SekurbanOrderCard.vue';
export default {
  name: 'thankyou-page',
  components: {
    Button,
    OrderCard,
    PromoBanner,
    Article,
    SekurbanOrderCard,
    ZapOrderCard,
  },
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
      bannerTIPWidth: '',
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
  mounted() {
    this.handleBannerTIPWidth();
    window.addEventListener('resize', this.handleBannerTIPWidth);
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
    handleBannerTIPWidth() {
      if (process.client) {
        if (window.innerWidth < 425) {
          this.bannerTIPWidth = 'h-[109px]';
        } else if (window.innerWidth < 600) {
          this.bannerTIPWidth = 'h-[150px]';
        } else if (window.innerWidth < 1024) {
          this.bannerTIPWidth = 'h-[180px]';
        } else this.bannerTIPWidth = 'h-[190px]';
      }
    },
  },
};
</script>
