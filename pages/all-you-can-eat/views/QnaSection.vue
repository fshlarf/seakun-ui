<template>
  <div id="qna" class="container pt-20 tn:mb-12 xl:mb-20">
    <div class="tn:text-center lg:text-left">
      <h1 class="font-bold tn:text-xl md:text-2xl md:mb-4 lg:mb-8">
        Frequently Asked Questions (FAQ)
      </h1>
    </div>
    <div class="grid tn:grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
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
          question: 'Bagaimana cara menggunakan voucher ini?',
          answer:
            'User diwajibkan untuk menghubungi Restoran Voyage maksimal H-1 sebelum kedatangan dan user dapat langsung makan  All You Can Eat di Restoran Voyage dengan menunjukkan kode voucher yang dikirimkan via email oleh Seakun.id',
          isShow: false,
        },
        {
          id: 2,
          question: 'Apa perbedaan paket cari teman dan paket rombongan?',
          answer:
            'Paket cari teman dapat memebli 1 voucher saja tetapi Pre-order sampai ada teman berlangganannya. Untuk Paket rombongan langsung order dengan order min. 2 voucher.',
          isShow: false,
        },
        {
          id: 3,
          question: 'Bagaimana jika tidak konfirmasi kehadiran?',
          answer:
            'Jika user tidak mengkonfirmasi kehadirannya kepada Restoran Voyage, maka Restoran Voyage dan Seakun.id tidak bertanggung jawab apabila kode voucher tidak dapat digunakan atau All You Can Eat tidak dapat dipersiapkan.',
          isShow: false,
        },
        {
          id: 4,
          question: 'Apakah Voucher ada kadaluarsanya?',
          answer: 'Ada, sesuai periode pembelian.',
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
