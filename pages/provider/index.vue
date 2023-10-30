<template>
  <div>
    <NavbarProvider />
    <div
      class="pt-16 bg-red-200 mx-auto w-[321px] md:w-full md:container dm-sans"
    >
      tessss
      <div class="flex items-center gap-2 text-sm">
        <p>Beranda</p>
        <p>></p>
        <p>Gramedia</p>
      </div>
      <div
        class="mt-4 rounded-[10px] w-full h-[204px] overflow-hidden bg-green-200"
      ></div>

      <div class="mt-4 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <img
            class="w-[18px]"
            src="/images/icons/gramedia-digital.svg"
            alt="provider logo"
          />
          <p class="text-[18px] font-bold">Gramedia</p>
        </div>
        <div class="text-[12px] bg-[#F6F6BE] rounded-full px-3 py-1 font-bold">
          Preorder
        </div>
      </div>

      <div class="mt-[12px] flex justify-between items-center">
        <p class="text-primary font-bold">
          Rp54.500<span class="text-[#66738F] text-[12px] font-normal"
            >/bulan</span
          >
        </p>
        <div class="flex items-center gap-1">
          <p class="text-[#66738F] text-[12px]">Skema Harga</p>
          <img src="/images/icons/atoms/chevron-gray.svg" alt="chevron" />
        </div>
      </div>

      <div
        class="mt-[12px] rounded-[8px] p-[12px] border border-[#66738F80]/50"
      >
        <p class="text-[#66738F] text-[12px]">Skema Harga</p>
        <div
          v-for="(info, id) in priceScheme.informations"
          :key="id"
          class="flex items-center justify-between text-xs mt-1"
          :class="`${
            id == priceScheme.informations.length - 1 ? 'font-bold' : ''
          }`"
        >
          <p>{{ info.title }}</p>
          <p>{{ info.value }}</p>
        </div>
      </div>

      <div class="mt-4">
        <h3 class="text-sm font-medium">Pilih Paket</h3>
        <div
          class="mt-[12px] relative z-0 rounded-[5px] w-[99px] md:w-[233px] md:rounded-[8px] overflow-hidden"
        >
          <div
            class="absolute z-10 bottom-0 left-0 w-full h-[39px] md:h-[71px] px-1 flex justify-center items-center pt-3"
          >
            <p class="text-[10px] font-bold text-white">Full Premium</p>
          </div>
          <img
            class="w-full"
            src="/images/product/gramedia-digital.svg"
            alt="provider"
          />
        </div>
      </div>

      <div class="mt-4">
        <h3 class="text-sm font-medium">Pilih Durasi Berlangganan</h3>
        <div class="mt-[12px] grid grid-cols-3 gap-[12px]">
          <div
            class="rounded-[6px] h-[37px] flex justify-center items-center gap-[4px] bg-[#F6FBFA]"
          >
            <img src="/images/icons/atoms/radio-button.svg" alt="radio" />
            <p class="text-sm text-[#66738F]">1 Bulan</p>
          </div>
          <div
            class="rounded-[6px] h-[37px] flex justify-center items-center gap-[4px] bg-[#DFF6F2]"
          >
            <img
              src="/images/icons/atoms/radio-button-active.svg"
              alt="radio"
            />
            <p class="text-sm text-primary">3 Bulan</p>
          </div>
          <div
            class="rounded-[6px] h-[37px] flex justify-center items-center gap-[4px] bg-[#F6FBFA]"
          >
            <img src="/images/icons/atoms/radio-button.svg" alt="radio" />
            <p class="text-sm text-[#66738F]">6 Bulan</p>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h3 class="text-sm font-medium">Benefit</h3>
        <div class="mt-[12px] space-y-[8px]">
          <div class="flex gap-[8px] items-start">
            <img
              class="mt-[1px] w-[18px]"
              src="/images/icons/atoms/checked-green.svg"
              alt="benefit"
            />
            <p class="text-[12px] max-w-[90%]">
              120.000+ koleksi bacaan digital dari penerbit dalam dan luar
              negeri
            </p>
          </div>
          <div class="flex gap-[8px] items-start">
            <img
              class="mt-[1px] w-[18px]"
              src="/images/icons/atoms/checked-green.svg"
              alt="benefit"
            />
            <p class="text-[12px] max-w-[90%]">
              List bacaan semua kategori (fiksi, non-fiksi, anak, koran)
            </p>
          </div>
          <div class="flex gap-[8px] items-start">
            <img
              class="mt-[1px] w-[18px]"
              src="/images/icons/atoms/checked-green.svg"
              alt="benefit"
            />
            <p class="text-[12px] max-w-[90%]">
              Fitur download e-book dan membaca offline
            </p>
          </div>
          <div class="flex gap-[8px] items-start">
            <img
              class="mt-[1px] w-[18px]"
              src="/images/icons/atoms/checked-green.svg"
              alt="benefit"
            />
            <p class="text-[12px] max-w-[90%]">
              Sharing dengan 2 orang (termasuk kamu)
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4"></div>
    </div>
  </div>
</template>

<script>
import NavbarProvider from '~/components/mollecules/NavbarProvider.vue';
import { providerList } from '~/constants/price-scheme';
import { currencyFormat } from '~/helpers/word-transformation';

export default {
  components: {
    NavbarProvider,
  },
  data() {
    return {
      providerSlug: 'gramedia-digital',
      priceScheme: {},
      providerList,
    };
  },
  mounted() {
    const { provider } = this.$route.query;
    this.providerSlug = provider;
    console.log(this.providerSlug);
    this.priceScheme = this.providerList.find((el) => {
      return el.slug === this.providerSlug;
    });
    console.log(this.priceScheme);
  },
  methods: {
    currencyFormat,
  },
};
</script>

<style>
.curved {
  /* clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%); */
  border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
}
</style>
