<template>
  <div id="benefit" class="container tn:pt-12">
    <div class="px-2">
      <h1 class="font-bold tn:text-xl md:text-2xl tn:mb-4 lg:mb-8">
        Benefit Pakai Setitip
      </h1>
    </div>
    <div
      class="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 justify-center place-items-stretch items-stretch"
    >
      <BenefitCard
        v-for="(benefit, id) in dataBenefit"
        :key="id"
        :benefit="benefit"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import BenefitCard from './views/BenefitCard.vue';
export default {
  data() {
    return {
      dataBenefit: [
        {
          id: 1,
          img: '/images/setitip/benefit/no-cc.png',
          desc: 'Ga perlu punya kartu kredit',
        },
        {
          id: 2,
          img: '/images/setitip/benefit/easy.png',
          desc: 'Proses cepat, mudah, aman dan transparan',
        },
        {
          id: 3,
          img: '/images/setitip/benefit/admin.png',
          desc: 'Administrasi diwakilkan Seakun',
        },
      ],
    };
  },
  components: {
    BenefitCard,
  },
};
</script>

<style></style>
