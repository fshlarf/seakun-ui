<template>
  <div id="qna-semabar" class="container pt-[52px] tn:mb-[48px] xl:mb-[52px]">
    <div class="text-center mb-7 lg:mb-8 text-[#15382F]">
      <h1 class="font-bold text-base md:text-xl lg:text-[28px]">
        Frequently Asked Questions
      </h1>
      <p class="text-sm md:text-base lg:text-xl pt-2">
        Beberapa pertanyaan yang sering ditanyakan
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
        class="w-full h-max"
        class-answer="bg-[#86D0C1]"
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
          question: 'Apa saja fasilitas yang didapatkan dari Semabar?',
          answer:
            'Fasilitas yang didapatkan bervariasi tergantung pada jenis permainan dan venue. Untuk informasi lebih lanjut, silakan melihat bagian paket dengan memilih jenis permainan dan lokasi di atas.',
          isShow: false,
        },
        {
          id: 2,
          question: 'Apakah harus menunggu peserta mabar lain?',
          answer:
            'Iya, betul. Pembagian dan formasi tim akan diumumkan beberapa jam sebelum permainan.',
          isShow: false,
        },
        {
          id: 3,
          question:
            'Jika dalam satu match belum terisi full peserta, apakah biaya akan direfund?',
          answer:
            'Jika peserta tidak memadai atau terjadi kendala dengan venue, peserta dapat memilih untuk refund 100% atau quota bermain dapat dipakai di waktu berikutnya.',
          isShow: false,
        },
        {
          id: 4,
          question:
            'Jika saya telah membeli membership untuk 4 kali bermain namun berhalangan hadir, apakah quota saya hangus?',
          answer:
            'Tenang saja, quota bermain kamu dapat tetap dipakai di waktu berikutnya. Silakan konfirmasi ke Admin komunitas jika kamu tidak dapat join di suatu sesi permainan.',
          isShow: false,
        },
        {
          id: 5,
          question: 'Kapan saya dapat melihat jadwal bermain?',
          answer:
            'Silakan join ke komunitas Semabar sesuai jenis permainan. Semua informasi detail terkait jadwal bermain, lokasi, pembagian tim, dan tata cara bermain akan diinformasikan di grup komunitas.',
          isShow: false,
        },
        {
          id: 6,
          question: 'Siapa yang dapat saya hubungi jika merasa kesulitan?',
          answer:
            'Tidak perlu khawatir, karena Admin komunitas kami akan membantu kamu jika kamu menemui kesulitan. Admin komunitas juga akan hadir pada saat jadwal pemainan.',
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
