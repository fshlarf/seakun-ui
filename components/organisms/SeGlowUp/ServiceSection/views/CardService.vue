<template>
  <div class="bg-white p-3 rounded-[6px] w-full">
    <nuxt-link to="/seglowup">
      <header
        class="bg-cover w-full h-[106px]"
        :style="`background-image: url(/images/seglowup/background/series-${id}.webp)`"
      >
        <div
          class="font-nunito text-green-seakun-secondary-dark leading-normal pt-[26px] pl-4 md:pl-[23px]"
        >
          <p class="text-base">Series Pricelist</p>
          <p class="font-[800] text-[21px] pt-1">
            {{ toRupiah(convertToNormalPrice(data.price)) }}
          </p>
        </div>
      </header>
      <section class="space-y-2 mt-2 text-xs">
        <div class="flex justify-between items-center">
          <p class="text-main text-xs">Harga Paket 32x Treatment</p>
          <p
            class="text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"
          >
            {{ toRupiah(convertToNormalPrice(data.price * 32)) }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-main text-xs">Harga Normal Per Treatment</p>
          <p
            class="text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"
          >
            {{ toRupiah(convertToNormalPrice(data.price)) }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-main text-xs">Harga Patungan Per Treatment</p>
          <p
            class="text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"
          >
            {{ toRupiah(data.price / 8) }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-main text-xs">Hemat Hingga</p>
          <p
            class="text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"
          >
            {{ toRupiah(convertToNormalPrice(data.price) - data.price / 8) }}
          </p>
        </div>
      </section>
      <section class="relative w-full mt-2">
        <div class="bg-[#F6F6F6] w-full h-[1px]"></div>
        <div class="text-xs mt-2">
          <p class="text-[#66738F]">Kategori Perawatan:</p>
          <div v-for="(category, id) in category" :key="id">
            <div v-if="category.name.includes(data.notes)">
              <p class="truncate md:pr-3 pt-2 categoryWidth">
                {{ category.value }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      typeof: Object,
      default: () => {},
    },
    id: {
      typeof: Number,
      default: 1,
    },
    zapUid: {
      typeof: String,
      default: '',
    },
  },
  mounted() {
    if (this.data) {
      this.toCamelCase('lolll');
    }
  },
  data() {
    return {
      filteredCategory: [],
      category: [
        {
          name: 'Zap Series 199K',
          value:
            'Beauty Care, Beauty Care, Hair Removal, Beauty Care, Body Treatment, Beauty Care',
        },
        {
          name: 'Zap Series 299K',
          value:
            'Beauty Care, Beauty Care, Hair Removal, Beauty Care, Body Treatment, Beauty Care',
        },
        {
          name: 'Zap Series 449K',
          value:
            'Beauty Care, Beauty Care, Hair Removal, Beauty Care, Body Treatment, Beauty Care',
        },
      ],
    };
  },
  methods: {
    toCamelCase(inputString) {
      return inputString
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
          if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
          return index === 0 ? match.toLowerCase() : match.toUpperCase();
        })
        .replace(/\s+/g, ''); // additional step to remove spaces
    },

    convertToNormalPrice(price) {
      const pricePerTreatment = price / 8;
      const totalPriceAfterDiscount = pricePerTreatment * 32;
      const totalPriceBeforeDiscount = totalPriceAfterDiscount / 0.85;
      const normalPricePerTreatment = totalPriceBeforeDiscount / 32;
      return normalPricePerTreatment;
    },
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.font-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
@media (max-width: 425px) {
  .categoryWidth {
    max-width: 320px;
  }
}
@media (max-width: 375px) {
  .categoryWidth {
    max-width: 300px;
  }
}
@media (max-width: 320px) {
  .categoryWidth {
    max-width: 260px;
  }
}
</style>
