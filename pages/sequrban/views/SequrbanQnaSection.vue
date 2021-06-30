<template>
  <div id="qna" class="container tn:pt-10 lg:pt-20">
    <div class="tn:text-center lg:text-left">
      <h1 class="font-bold tn:text-xl md:text-2xl md:mb-4 lg:mb-8">
        Frequently Asked Questions (FAQ)
      </h1>
    </div>
    <div class="px-2 grid tn:grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start">
      <Accordion
        v-for="(faq, id) in dataFaq"
        :key="id"
        :is-show-answer="faq.isShow"
        :title="faq.question"
        :answer="faq"
        @toggleShow="toggleShow"
      />
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/atoms/Accordion.vue';
export default {
  data() {
    return {
      dataFaq: [
        {
          id: 1,
          question: 'Kapan saya membayar DP?',
          answer: 'Saat anda memesan qurban',
          isShow: false,
        },
        {
          id: 2,
          question: 'Kapan saya membayar sisa pembayaran?',
          answer:
            'Saat grup full, anda akan mendapatkan infromasi untuk melunasi sisa pembayaran dari Sequrban via whatsapp',
          isShow: false,
        },
        {
          id: 3,
          question: 'Bolehkah langsung membayar full?',
          answer:
            'Untuk saat ini belum bisa. Saat ini kita masih menggunakan metode DP untuk pembayaran tahap awal',
          isShow: false,
        },
        {
          id: 4,
          question: 'Bagaimana jika grup tidak full?',
          answer:
            'Kami akan kembalikan 100% uang DP atau total pembayaran (jika membayar penuh)',
          isShow: false,
        },
        {
          id: 5,
          question: 'Kapan kabar bahwa grup tidak full?',
          answer: 'H-7 sebelum idul adha akan kami informasikan kembali',
          isShow: false,
        },
        {
          id: 6,
          question:
            'Apakah jatah daging kurban akan dikirim ke member yang berkurban? ',
          answer:
            'Ya, jatah akan dikirimkan ke alamat yang sudah didaftarkan selama alamat masih berada di area jabodetabek',
          isShow: false,
        },
      ],
    };
  },
  components: {
    Accordion,
  },
  methods: {
    toggleShow(id) {
      this.dataFaq[id - 1].isShow = !this.dataFaq[id - 1].isShow;
    },
  },
};
</script>

<style></style>
