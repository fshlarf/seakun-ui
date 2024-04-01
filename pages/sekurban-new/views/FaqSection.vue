<template>
  <div id="faq-sekurban" class="container-sekurban-new mb-5 py-8 md:py-3 pb-10">
    <div class="text-center">
      <h1 class="text-xl md:text-3xl font-bold mb-6 md:mb-10">
        Frequently Asked Question
      </h1>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 items-center"
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
          question:
            'Bagaimana flow dalam mengikuti program Patungan Qurban ini?',
          answer:
            'Detail flow dapat dilihat di link berikut <a class="underline text-white font-semibold" href="#order-flow-sekurban">flow Program Patungan Qurban</a>',
          isShow: false,
        },
        {
          id: 2,
          question: 'Apakah harus menunggu peserta qurban lain?',
          answer:
            'Tidak, kamu bisa langsung melakukan pembayaran dan setelah itu resmi terdaftar sebagai peserta qurban dalam program ini',
          isShow: false,
        },
        {
          id: 3,
          question:
            'Jika dalam 1 grup Patungan Qurban sapi belum terisi full sampai hari H, apakah biaya akan di refund?',
          answer:
            'Tidak, apabila grup belum full sampai mendekati hari H, maka jenis hewan qurban akan diganti menjadi qurban kambing',
          isShow: false,
        },
        {
          id: 4,
          question:
            'Apa yang saya dapatkan jika mengikuti Program Patungan Qurban ini?',
          answer:
            'Kamu mendapatkan sertifikat telah mengikuti program ini, mendapatkan dokumentasi seluruh proses qurban dan Insya Allah akan mendapatkan pahala yang sangat besar dari Allah SWT',
          isShow: false,
        },
        {
          id: 5,
          question:
            'Apakah saya akan mendapatkan jatah daging dari hewan yang diqurbankan jika mengikuti program ini?',
          answer:
            'Tidak, untuk memudahkan proses qurban, jatah daging akan ikut disedekahkan kepada mereka yang berhak menerima qurban',
          isShow: false,
        },
        {
          id: 6,
          question: 'Jenis sapi apa yang akan diqurbankan?',
          answer:
            'Untuk detail sapi yang akan diqurbankan pada program ini bisa dilihat pada link <a class="underline text-white font-semibold" href="#product-detail-sekurban">detail hewan qurban</a>',
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
