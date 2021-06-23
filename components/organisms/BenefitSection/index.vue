<template>
  <div class="container pt-12">
    <div class="tn:text-center lg:text-left">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-8">
        Kemudahan yang kami berikan
      </h1>
    </div>
    <div
      class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 justify-center place-items-stretch items-stretch"
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
import BenefitCard from '~/components/mollecules/BenefitCard.vue';
export default {
  data() {
    return {
      dataBenefit: [
        {
          id: 1,
          title: 'Murah dan legal',
          img: '/images/benefit/benefit1.svg',
          preview:
            'Dengan patungan, berlangganan platform digital premium jadi lebih murah dan pastinya legal.',
        },
        {
          id: 2,
          title: 'Privasi terjamin',
          img: '/images/benefit/benefit2.svg',
          preview:
            'Dengan tambahan pin profil pada akun yang kami buatkan, privasi pengguna lebih terjaga dan terjamin.',
        },
        {
          id: 3,
          title: 'Tanpa Kartu Kredit',
          img: '/images/benefit/benefit3.svg',
          preview:
            'Tidak punya Kartu Kredit? Tenang, semua fitur premium tetap bisa dinikmati. Kami yang uruskan buat kamu.',
        },
        {
          id: 4,
          title: 'Teman Berlangganan',
          img: '/images/benefit/benefit4.svg',
          preview:
            'Kami carikan teman yang satu keinginan dengan kamu untuk berlangganan fitur platform digital premium.',
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
