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
        @showModalDetail="showModalDetail"
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
    <ModalDetailVariant
      :is-loading-modal="isLoadingDetail"
      :show-modal="isShowModal"
      :variant="dataDetailCows"
      @closeModal="closeModalDetail"
    />
  </div>
</template>

<script>
import axios from 'axios';
import SequrbanVariantCard from '~/components/mollecules/SequrbanVariantCard.vue';
import ModalDetailVariant from '~/components/mollecules/ModalDetailVariant.vue';
import CardShimmer from '~/components/mollecules/CardShimmer.vue';
export default {
  data() {
    return {
      isShowModal: false,
      isLoading: true,
      isLoadingDetail: false,
      shimmerInitialData: Array(5),
      dataCows: [],
      dataDetailCows: {},
    };
  },
  components: {
    SequrbanVariantCard,
    ModalDetailVariant,
    CardShimmer,
  },
  mounted() {
    this.getDataCows();
  },
  methods: {
    showModalDetail(id) {
      this.getDataCowsById(id);
      this.isShowModal = true;
    },
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
    getDataCowsById(id) {
      this.isLoadingDetail = true;
      axios
        .get(`https://seakun-packet-api-v1.herokuapp.com/sequrban/${id}`)
        .then((res) => {
          this.dataDetailCows = res.data;
          this.isLoadingDetail = false;
        })
        .catch((err) => console.log(err));
    },
    closeModalDetail() {
      this.isShowModal = false;
    },
  },
};
</script>

<style></style>
