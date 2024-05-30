<template>
  <div class="w-full md:bg-[#F5F1FF] mt-8 md:mt-10">
    <div class="container-seakun-blog md:pt-9 md:pb-11 lg:pt-12 lg:pb-14">
      <header>
        <p class="font-bold text-base md:text-lg lg:text-[20px] text-center">
          Perubahan Harga di Seakun
        </p>
        <div class="flex justify-center gap-3 mt-3 sm:mt-6">
          <Button
            class="!text-xs sm:!text-sm w-[113px] h-9 !rounded-md border"
            :class="[
              isMonthly
                ? 'bg-[#9638FF] border-[#9638FF] text-white'
                : 'bg-[#F0EAFF] text-[#2D2D2D]',
            ]"
            @click="isMonthly = true"
            >Bulanan</Button
          >
          <Button
            class="!text-xs sm:!text-sm w-[113px] h-9 !rounded-md border"
            :class="[
              !isMonthly
                ? 'bg-[#9638FF] border-[#9638FF] text-white'
                : 'bg-[#F0EAFF] border-[#E6E0F4] text-[#2D2D2D]',
            ]"
            @click="isMonthly = false"
            >Tahunan</Button
          >
        </div>
      </header>
      <main
        class="flex flex-col md:flex-row mt-5 md:mt-9 gap-4 sm:gap-6 lg:gap-8 sm:justify-center items-center"
      >
        <CardForPrice :information="oldDataPrice" />
        <img
          :src="arrowSrc"
          alt="arrow"
          class="w-10 h-[50px] sm:w-[65px] sm:h-[60px] lg:w-[100px] lg:h-[67px]"
        />
        <CardForPrice cardType="new" :information="newDataPrice" />
      </main>
    </div>
  </div>
</template>

<script>
import Button from '../../../../components/atoms/Button.vue';
import CardForPrice from './CardForPrice.vue';
export default {
  components: {
    Button,
    CardForPrice,
  },
  data() {
    return {
      isMonthly: true,
      arrowSrc: '',
      oldMonthlyPrice: {
        name: 'Canva (Bulanan)',
        price: 'Rp190.000',
        member: 4,
        jointVenturePrice: 'Rp190.000 ÷ 4 = Rp47.500',
        adminFee: 'Rp6.500',
        total: 'Rp54.000',
      },
      newMonthlyPrice: {
        name: 'Canva (Bulanan)',
        price: 'Rp365.000',
        member: 5,
        jointVenturePrice: 'Rp365.000 ÷ 5 = Rp73.000',
        adminFee: 'Rp6.500',
        total: 'Rp79.500',
      },
      oldAnnualPrice: {
        name: 'Canva (Tahunan)',
        price: 'Rp1.900.000',
        member: 4,
        jointVenturePrice: 'Rp1.900.000 ÷ 4 = Rp475.000',
        adminFee: 'Rp70.000',
        total: 'Rp545.000',
      },
      newAnnualPrice: {
        name: 'Canva (Tahunan)',
        price: 'Rp3.650.000',
        member: 5,
        jointVenturePrice: 'Rp3.650.000 ÷ 5 = Rp730.000',
        adminFee: 'Rp78.000',
        total: 'Rp808.000',
      },
    };
  },
  computed: {
    oldDataPrice() {
      if (this.isMonthly) {
        return this.oldMonthlyPrice;
      } else return this.oldAnnualPrice;
    },
    newDataPrice() {
      if (this.isMonthly) {
        return this.newMonthlyPrice;
      } else return this.newAnnualPrice;
    },
  },
  mounted() {
    this.handleArrowSrc();
    window.addEventListener('resize', this.handleArrowSrc);
  },
  methods: {
    handleArrowSrc() {
      if (window.innerWidth < 768) {
        this.arrowSrc = '/images/canva-migration/arrow-mobile.webp';
      } else this.arrowSrc = '/images/canva-migration/arrow.webp';
    },
  },
};
</script>

<style lang="scss" scoped></style>