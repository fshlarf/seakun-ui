<template>
  <div class="container-sekurban tn:pt-12 lg:pt-20 tn:mb-12 xl:mb-20">
    <div class="tn:text-center lg:text-left">
      <h1
        class="tn:text-[20px] md:text-[26px] lg:text-[32px] tn:font-semibold md:font-bold tn:mb-4 lg:mb-8"
      >
        Frequently Asked Questions (FAQ)
      </h1>
    </div>
    <div
      class="grid tn:grid-cols-1 lg:grid-cols-2 tn:gap-3 lg:gap-8 items-center"
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
            'Bagaimana flow dalam mengikuti program Patungan Kurban ini?',
          answer:
            'Detail flow dapat dilihat di link berikut <a class="underline text-secondary font-semibold" href="#order-flow-sekurban">flow Program Patungan Kurban</a>',
          isShow: false,
        },
        {
          id: 2,
          question: 'Apakah harus menunggu peserta kurban lain?',
          answer:
            'Tidak, kamu bisa langsung melakukan pembayaran dan setelah itu resmi terdaftar sebagai peserta kurban dalam program ini',
          isShow: false,
        },
        {
          id: 3,
          question:
            'Jika dalam 1 grup Patungan Kurban sapi belum terisi full sampai hari H, apakah biaya akan di refund?',
          answer:
            'Tidak, apabila grup belum full sampai mendekati hari H, maka jenis hewan kurban akan diganti menjadi kurban kambing',
          isShow: false,
        },
        {
          id: 4,
          question:
            'Apa yang saya dapatkan jika mengikuti Program Patungan Kurban ini?',
          answer:
            'Kamu mendapatkan sertifikat telah mengikuti program ini, mendapatkan dokumentasi seluruh proses kurban dan Insya Allah akan mendapatkan pahala yang sangat besar dari Allah SWT',
          isShow: false,
        },
        {
          id: 5,
          question:
            'Apakah saya akan mendapatkan jatah daging dari hewan yang dikurbankan jika mengikuti program ini?',
          answer:
            'Tidak, untuk memudahkan proses kurban, jatah daging akan ikut disedekahkan kepada mereka yang berhak menerima kurban',
          isShow: false,
        },
        {
          id: 6,
          question: 'Jenis sapi apa yang akan dikurbankan?',
          answer:
            'Untuk detail sapi yang akan dikurbankan pada program ini bisa dilihat pada link <a class="underline text-secondary font-semibold" href="#product-detail-sekurban">detail hewan kurban</a>',
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
