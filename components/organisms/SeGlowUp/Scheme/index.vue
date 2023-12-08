<template>
  <div
    class="pt-[30px] wrapper-scheme bg-cover pb-[35px] md:pb-[45px] lg:pb-[69px]"
    id="price-scheme-seglowup"
  >
    <div class="w-full text-center text-[#2A5446] text-nunito">
      <h1 class="font-[800] text-base md:text-xl lg:text-[30px]">
        Contoh Skema Harga
      </h1>
      <p
        class="text-sm md:text-base lg:text-lg pt-1 md:pt-2 leading-normal mx-auto max-w-[271px] md:max-w-full"
      >
        Berikut ini contoh skema harga untuk salah satu layanan SeGlowUp
      </p>
    </div>
    <div class="w-full px-[1rem] md:px-0">
      <div
        class="bg-white p-5 w-full md:w-max mx-auto rounded-[10px] md:rounded-[12px] md:min-w-[430px] mt-8"
        style="box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);

    Show 4 more colors
    "
      >
        <section
          class="border bg-[#EEFDFA] border-[#D9FCF2] rounded-[6px] text-center"
        >
          <p
            class="text-[#08A081] text-sm md:text-base leading-[44px] md:py-3 font-bold"
          >
            Paket {{ priceScheme.desc }}
          </p>
        </section>
        <section
          class="text-xs md:text-sm lg:text-base text-gray-secondary space-y-1 md:space-y-2 lg:space-y-3 mt-3 leading-normal"
        >
          <div
            v-for="(info, id) in priceScheme.informations"
            :key="id"
            class="grid grid-cols-2 gap-1 items-start text-sm py-1 text-main"
            :class="`${
              id == priceScheme.informations.length - 1 ? 'font-bold' : ''
            }`"
          >
            <p v-html="info.title"></p>
            <p class="text-right" v-html="info.value"></p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { seglowupPriceList } from '~/constants/seglowup-price';

export default {
  data() {
    return {
      seglowupPriceList,
      priceScheme: {},
    };
  },
  mounted() {
    this.priceScheme = this.seglowupPriceList.find((scheme) => {
      return scheme.series == 'Series 749Rb';
    });
  },
};
</script>

<style lang="scss" scoped>
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
@media (min-width: 1024px) {
  .wrapper-scheme {
    background-image: url('/images/seglowup/background/scheme.png');
  }
}
.wrapper-scheme {
  background-image: url('/images/seglowup/background/scheme-mobile.webp');
}
</style>
