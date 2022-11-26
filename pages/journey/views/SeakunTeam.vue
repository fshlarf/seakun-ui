<template>
  <div
    id="journey-team"
    class="relative z-0 bg-[#8DCABE] tn:pt-16 tn:pb-8 lg:pt-20"
  >
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
        class="tn:hidden md:flex container justify-center flex-wrap tn:gap-3 md:gap-8 tn:my-8 md:my-12"
      >
        <TeamCard v-for="(team, id) in teams" :key="id" :member="team" />
      </div>
      <div
        class="w-full md:!hidden overflow-y-auto overscroll-auto h-[450px] flex flex-wrap justify-center tn:gap-2 tn:mt-4 tn:p-4 hide-scrollbar tn:mb-8"
      >
        <TeamCard
          class="flex-none"
          v-for="(team, id) in teams"
          :key="id"
          :member="team"
        />
      </div>
      <!-- <div class="tn:mt-8 text-center font-medium text-white">
        <nuxt-link to="#">Tampilkan lebih banyak</nuxt-link>
      </div> -->
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
          image: 'faishal-arif',
        },
        {
          name: 'Aadilah Aziz',
          position: 'Co-founder',
          image: 'aadilah-aziz',
        },
        {
          name: 'Marlina Dian S.',
          position: 'Comissioner',
          image: 'marlina-dian',
        },
        {
          name: 'Harry Kurniawan',
          position: 'Head of Technology',
          image: 'harry-kurniawan',
        },
        {
          name: 'Aslihatul Millah',
          position: 'Social Project Specialist',
          image: 'aslihatul-millah',
        },
        {
          name: 'Riyansyah Iqbal',
          position: 'Software Engineer',
          image: 'riyansyah-iqbal',
        },
        {
          name: 'Ibnu Hazar',
          position: 'Software Engineer',
          image: 'ibnu-hazar',
        },
        {
          name: 'Fara Nur Azizah',
          position: 'Manager Operation',
          image: 'fara-nur-azizah',
        },
        {
          name: 'Amelda Tiara Citra',
          position: 'Lead Operation',
          image: 'amelda-tiara',
        },
        {
          name: 'Dian Astika Rini',
          position: 'Lead Operation',
          image: 'dian-astika',
        },
        {
          name: 'Siti Nuraini',
          position: 'Lead Operation',
          image: 'siti-nuraini',
        },
        {
          name: 'Nurovi Andiyani',
          position: 'Lead Operation',
          image: 'nurovi-andiyani',
        },
        {
          name: 'Adyan Aqil Azizi',
          position: 'UI/UX',
          image: 'adyan-aqil',
        },
        {
          name: 'Imanda Minara P.',
          position: 'Head of Operation',
          image: 'imanda-putri',
        },
        {
          name: 'Abil Abbas A.',
          position: 'Business Development',
          image: 'abil-abbas',
        },
        {
          name: 'Ayu Dien',
          position: 'Admin Operation',
          image: 'ayu-dien',
        },
        {
          name: 'Fadhillatuz Zuhroh',
          position: 'Admin Operation',
          image: 'fadhillatuz-zuhroh',
        },
        {
          name: 'Zulhafni Adha',
          position: 'Admin Operation',
          image: 'zulhafni-adha',
        },
        {
          name: 'Siti Nur Aisyah',
          position: 'Admin Operation',
          image: 'siti-nur-aisyah',
        },
        {
          name: 'Nungki K.',
          position: 'Admin Operation',
          image: 'nungki',
        },
        {
          name: 'Ayumi Fadhillah',
          position: 'Admin Operation',
          image: 'ayumi-fadhillah',
        },
        {
          name: 'Masruroh',
          position: 'Admin Operation',
          image: 'masruroh',
        },
        {
          name: 'Putri Surbakti',
          position: 'Admin Operation',
          image: 'nadila-putri',
        },
        {
          name: 'Yona Prestica',
          position: 'Admin Operation',
          image: 'yona-prestica',
        },
        {
          name: 'Khoirunnisa Azizah',
          position: 'Admin Operation',
          image: 'khoirunnisa-azizah',
        },
        {
          name: 'Farhah Salamah',
          position: 'Admin Operation',
          image: 'woman',
        },
        {
          name: 'Firdaus Yulia Fika',
          position: 'Admin Operation',
          image: 'firdaus-yulia-fika',
        },
        {
          name: 'Ersa Nur Trajeswan',
          position: 'Admin Operation',
          image: 'ersa-nur',
        },
        {
          name: 'Sherly Marlinda',
          position: 'Finance',
          image: 'sherly-marlinda',
        },
      ],
    };
  },
};
</script>

<style></style>
