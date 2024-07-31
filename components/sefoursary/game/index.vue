<template>
  <div>
    <Question
      v-if="isChallenge"
      :challenge="currentChallenges"
      @onClick="(result) => $emit('onClick', result)"
    />
    <Challenge
      v-else
      :challenge="currentChallenges"
      @submitChallenge="$emit('submitChallenge')"
    />
  </div>
</template>

<script>
import Question from './Question.vue';
import Challenge from './Challenge.vue';
export default {
  props: {
    level: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Question,
    Challenge,
  },
  computed: {
    isChallenge() {
      return this?.currentChallenges?.type === 'quest';
    },
  },
  data() {
    return {
      currentChallenges: {},
      challenge: [
        {
          level: 1,
          type: 'quest',
          question: 'Kapan Seakun pertama kali hadir?',
          answerKey: 2020,
          answer: [
            {
              option: 2020,
            },
            {
              option: 2021,
            },
            {
              option: 2022,
            },
            {
              option: 2023,
            },
          ],
        },
        {
          level: 2,
          type: 'quest',
          question: 'Ada berapa total layanan di Seakun?',
          answerKey: 41,
          answer: [
            {
              option: 38,
            },
            {
              option: 39,
            },
            {
              option: 40,
            },
            {
              option: 41,
            },
          ],
        },
        {
          level: 3,
          type: 'quest',
          question: 'Berapa jumlah member patungan di Netflix Seakun?',
          answerKey: 4,
          answer: [
            {
              option: 3,
            },
            {
              option: 4,
            },
            {
              option: 5,
            },
            {
              option: 6,
            },
          ],
        },
        {
          level: 4,
          type: 'quest',
          question: 'Yang bukan layanan non-digital Seakun?',
          answerKey: 'Secantik',
          answer: [
            {
              option: 'SeGlowUp',
            },
            {
              option: 'Semabar',
            },
            {
              option: 'Sekurban',
            },
            {
              option: 'Secantik',
            },
          ],
        },
        {
          level: 5,
          type: 'quest',
          question: 'Ada berapa total pengguna Seakun?',
          answerKey: '75.000+',
          answer: [
            {
              option: '77.000+',
            },
            {
              option: '76.000+',
            },
            {
              option: '75.000+',
            },
            {
              option: '74.000+',
            },
          ],
        },
        {
          level: 6,
          type: 'challenge',
          challenge: 'Download aplikasi Seakun di Google Play / AppStore',
          isDownloadApps: true,
          task:
            'Upload screenshot bukti kamu telah mendownload & install aplikasi',
        },
        {
          level: 7,
          type: 'quest',
          question: 'Apa aplikasi belajar bahasa yang tersedia di Seakun?',
          answerKey: 'Duolingo',
          answer: [
            {
              option: 'Duolingo',
            },
            {
              option: 'Hello Talk',
            },
            {
              option: 'ELSA',
            },
            {
              option: 'Promova',
            },
          ],
        },
        {
          level: 8,
          type: 'challenge',
          challenge: 'Follow twitter @OfficialSeakun',
          task: 'Upload screenshot bukti follow yang menampilkan username kamu',
        },
        {
          level: 9,
          type: 'quest',
          question: 'Berapa harga layanan ChatGPT di Seakun per-bulannya?',
          answerKey: 'Rp63.000',
          answer: [
            {
              option: 'Rp63.000',
            },
            {
              option: 'Rp77.500',
            },
            {
              option: 'Rp56.500',
            },
            {
              option: 'Rp67.500',
            },
          ],
        },
        {
          level: 10,
          type: 'challenge',
          challenge:
            'Repost postingan terakhir Seakun di Twitter / IG / Tiktok kamu',
          task: 'Upload screenshot repost yang menampilkan username kamu',
        },
        {
          level: 11,
          type: 'quest',
          question: 'Di kota mana saat ini layanan Semabar tersedia?',
          answerKey: 'Medan',
          answer: [
            {
              option: 'Makassar',
            },
            {
              option: 'Denpasar',
            },
            {
              option: 'Medan',
            },
            {
              option: 'Bogor',
            },
          ],
        },
        {
          level: 12,
          type: 'challenge',
          challenge:
            'Submit review positif / saran membangun di Google Play / AppStore',
          task: 'Upload screenshot bukti review kamu',
        },
        {
          level: 13,
          type: 'quest',
          question: 'Apa layanan yang paling murah di Seakun?',
          answerKey: 'Apple Music',
          answer: [
            {
              option: 'Youtube',
            },
            {
              option: 'Spotify',
            },
            {
              option: 'Apple Music',
            },
            {
              option: 'Gramedia',
            },
          ],
        },
        {
          level: 14,
          type: 'Follow tiktok @seakun.id',
          challenge: 'Follow tiktok @seakun.id',
          task: 'Upload screenshot bukti follow yang menampilkan username kamu',
        },
        {
          level: 15,
          type: 'challenge',
          challenge: 'Order layanan apa saja di Seakun minimal 3 bulan',
          task:
            'Upload screenshot bukti berlangganan yang menampilkan No. Pesanan',
        },
      ],
    };
  },
  watch: {
    level: {
      handler() {
        this.findChallenge(this.level);
      },
      immediate: true,
    },
  },
  methods: {
    findChallenge(level) {
      const myChallenge = this.challenge.find((item) => item.level === level);
      this.currentChallenges = myChallenge;
    },
  },
};
</script>

<style lang="scss" scoped></style>
