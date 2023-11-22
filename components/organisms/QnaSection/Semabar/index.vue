<template>
  <div id="qna-semabar" class="container pt-20 tn:mb-12 xl:mb-20">
    <div class="text-center mb-7 lg:mb-8 text-[#15382F]">
      <h1 class="font-bold text-base md:text-xl lg:text-[28px]">
        Frequently Asked Questions
      </h1>
      <p class="text-sm md:text-base lg:text-xl">
        Berikut ini beberapa pertanyaan yang sering ditanyakan
      </p>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 justify-self-start"
    >
      <Accordion
        v-for="(faq, id) in dataFaq"
        :key="id"
        :is-show-answer="faq.isShow"
        :title="faq.question"
        :answer="faq"
        @toggleShow="toggleShow"
        class="w-full h-full"
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
          question: 'Apakah harus menunggu peserta mabar lain?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
          isShow: false,
        },
        {
          id: 2,
          question:
            'Jika dalam satu match belum terisi full peserta, apakah biaya akan direfund?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
          isShow: false,
        },
        {
          id: 3,
          question:
            'Jika dalam satu match belum terisi full peserta, apakah biaya akan direfund?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
          isShow: false,
        },
        {
          id: 4,
          question: 'Apa saja fasilitas yang didapatkan?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
          isShow: false,
        },
        {
          id: 5,
          question: 'Apa saja fasilitas yang didapatkan?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
          isShow: false,
        },
        {
          id: 6,
          question: 'Apa saja fasilitas yang didapatkan?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
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
