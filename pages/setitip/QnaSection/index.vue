<template>
  <div id="qna" class="container pt-20 tn:mb-12 xl:mb-20">
    <div class="px-2 mb-2">
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
          question: 'Apa yang dimaksud Setitip?',
          answer:
            'Setitip merupakan layanan baru dari Seakun dengan tujuan membantu user yang tidak memilki kartu kredit atau kartu debit internasional agar bisa membeli dan menikmati produk, produk digital atau jasa apapun di seluruh dunia tanpa terhalang metode pembayaran.',
          isShow: false,
        },
        {
          id: 2,
          question:
            'Berapa lama menunggu waktu belanja yang dilakukan Seakun setelah saya transfer ke Seakun?',
          answer:
            "Proses pembelian belanjaan kamu sesuai dengan produk yang kamu pesan paling lama 1 x 24 jam. Apabila sudah melewati rentang waktu tersebut dan pesanan belum diproses, silahkan lapor di <a href='seakun.id/help' target='_blank' class='text-secondary font-bold'>Seakun.id/help</a>.",
          isShow: false,
        },
        {
          id: 3,
          question:
            'Apakah saya harus memberikan credential (akun) saya ke Seakun?',
          answer:
            'Ya, benar. Sementara Seakun perlu login ke akun kamu dan mempurchase belanjaan yang sudah kamu pesan menggunakan kartu debit online internasional / kartu kredit milik Seakun. Setelah proses purchase selesai, kamu boleh mengganti password akun tersebut.',
          isShow: false,
        },
        {
          id: 4,
          question: 'Apakah aman memberikan password akun saya ke Seakun?',
          answer:
            'Seakun berkomitmen dan bertanggung jawab penuh dalam menjaga kerahasiaan akun user yang dibagikan ke Seakun. Jadi tentu aman untuk memberikan credential (akun) kamu ke Seakun.',
          isShow: false,
        },
        {
          id: 5,
          question: 'Berapa biaya admin untuk layanan Setitip?',
          answer:
            'Seakun perlu mengambil biaya 5% dari harga produk yang kamu pesan sebagai biaya administrasi layanan Setitip.',
          isShow: false,
        },
        {
          id: 6,
          question: 'Produk apa yang bisa saya beli menggunakan Setitip?',
          answer:
            'Produk yang dapat kamu beli menggunakan layanan Setitip adalah semua produk baik barang atau produk digital dari seluruh dunia yang memenuhi kriteria aman untuk dibeli menurut penilaian Seakun.',
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
