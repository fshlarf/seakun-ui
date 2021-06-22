<template>
  <div class="container tn:pt-8 lg:pt-16 xl:pt-24 md:pb-8">
    <div class="tn:text-center md:text-left">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-4">
        Varian sapi
      </h1>
      <p class="font-semibold">
        Sebelum memilih hewan qurbanmu, pastikan baca detail sapi juga syarat
        dan ketentuan, ya!
      </p>
    </div>
    <div
      v-if="!isLoading"
      class="grid tn:grid-cols-1 lg:grid-cols-none lg:grid-rows-3 lg:grid-flow-col tn:gap-4 md:gap-8 my-6"
    >
      <SequrbanVariantCard
        v-for="(cowVariant, id) in dataCows"
        :key="id"
        :variant="cowVariant"
      />
    </div>
    <div
      v-else
      class="grid tn:grid-cols-1 lg:grid-cols-none lg:grid-rows-3 lg:grid-flow-col tn:gap-4 md:gap-8 my-6"
    >
      <div class="" v-for="(item, index) in shimmerInitialData" :key="index">
        <CardShimmer />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SequrbanVariantCard from '~/components/mollecules/SequrbanVariantCard.vue';
import CardShimmer from '~/components/mollecules/CardShimmer.vue';
export default {
  data() {
    return {
      isLoading: true,
      shimmerInitialData: Array(5),
      dataCows: [
        {
          id: 1,
          img: '',
          type: 'A',
          weight: '230 KG',
          totalPrice: 'Rp2.740.000',
        },
      ],
    };
  },
  components: {
    SequrbanVariantCard,
    CardShimmer,
  },
  mounted() {
    this.getDataCows();
  },
  methods: {
    getDataCows() {
      this.isLoading = true;
      axios
        .get('https://seakun-packet-api-v1.herokuapp.com/sequrban')
        .then((res) => {
          this.dataCows = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
