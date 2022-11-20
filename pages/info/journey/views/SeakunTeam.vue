<template>
  <div class="relative z-0 bg-[#8DCABE] tn:py-8 md:py-16">
    <img
      class="absolute right-0 top-0 z-1"
      src="/images/journey/bg-top-right.png"
      alt="latar kanan"
    />
    <img
      class="absolute left-0 bottom-0 z-1"
      src="/images/journey/bg-bottom-left.png"
      alt="latar kiri"
    />
    <div class="relative z-2">
      <div class="text-center text-white">
        <h1 class="font-bold tn:text-[24px] md:text-[32px] lg:text-[40px]">
          Tim Seakun
        </h1>
        <p
          class="font-medium tn:mt-2 tn:text-[14px] md:text-[16px] tn:w-4/5 md:w-2/3 lg:w-1/2 mx-auto"
        >
          Seakun.id bisa berjalan hingga saat ini bukan karena kerja 1 orang,
          melainkan karena kerja tim yang sangat luar biasa. Berikut adalah
          susunan tim Seakun.id.
        </p>
      </div>
      <div
        class="container flex justify-center flex-wrap tn:gap-3 md:gap-8 tn:mt-8 md:mt-12"
      >
        <TeamCard v-for="(team, id) in teams" :key="id" :member="team" />
      </div>
      <div class="tn:mt-8 text-center font-medium text-white">
        <nuxt-link to="#">Tampilkan lebih banyak</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from './views/team-card.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    TeamCard,
    Button,
  },
  data() {
    return {
      teams: [
        {
          name: 'Faishal Arif',
          position: 'Founder & CEO',
        },
        {
          name: 'Aadilah Aziz',
          position: 'Co-founder',
        },
        {
          name: 'Marlina Dian S.',
          position: 'Comissioner',
        },
        {
          name: 'Harry Kurniawan',
          position: 'Head of Technology',
        },
        {
          name: 'Aslihatul Millah',
          position: 'Social Project Specialist',
        },
        {
          name: 'Riyansyah Iqbal',
          position: 'Software Engineer',
        },
        {
          name: 'Ibnu Hazar',
          position: 'Software Engineer',
        },
        {
          name: 'Fara Nur Azizah',
          position: 'Manager Operation',
        },
        {
          name: 'Amelda Tiara Citra',
          position: 'Lead Operation',
        },
        {
          name: 'Dian Astika Rini',
          position: 'Lead Operation',
        },
        {
          name: 'Siti Nuraini',
          position: 'Lead Operation',
        },
        {
          name: 'Nurovi Andiyani',
          position: 'Lead Operation',
        },
        {
          name: 'Adyan Aqil Azizi',
          position: 'UI/UX',
        },
        {
          name: 'Imanda Minara P.',
          position: 'Head of Operation',
        },
        {
          name: 'Abil Abbas A.',
          position: 'Business Development',
        },
        {
          name: 'Ayu Dien',
          position: 'Admin Operation',
        },
        {
          name: 'Fadhillatuz Zuhroh',
          position: 'Admin Operation',
        },
        {
          name: 'Zulhafni Adha',
          position: 'Admin Operation',
        },
        {
          name: 'Siti Nur Aisyah',
          position: 'Admin Operation',
        },
        {
          name: 'Nungki K.',
          position: 'Admin Operation',
        },
      ],
    };
  },
};
</script>

<style></style>
