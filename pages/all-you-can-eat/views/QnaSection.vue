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
        // {
        //   id: 4,
        //   question: 'Apa perbedaan User Host dan User Reguler?',
        //   answer:
        //     'User Host adalah user yang diberi wewenang untuk melakukan pendaftaran dan pembayaran langsung ke provider seperti Netflix. Pembayaran provider akan sepenuhnya diganti oleh Seakun ketika pembayaran sudah terdebet. Sedangkan User Reguler, kamu tinggal terima jadi saja, proses pendaftaran ke provider dan pencarian kawan berlangganan akan dihandle oleh Seakun.',
        //   isShow: false,
        // },
        // {
        //   id: 5,
        //   question: 'Payment method apa saja yang available di Seakun?',
        //   answer: 'Bank transfer Mandiri, BCA, Jenius, Gopay, DANA, LinkAja',
        //   isShow: false,
        // },
        // {
        //   id: 6,
        //   question: 'Bagaimana prosedur menjadi User Host?',
        //   answer: [
        //     '1. Daftar dengan memilih paket User Host. Misal User Host Netflix',
        //     '2. Admin akan melakukan konfirmasi melalui Whatsapp',
        //     '3. Lakukan pendaftaran menggunakan akun yang ditentukan oleh Admin',
        //     '4. Lakukan pembayaran di provider menggunakan kartu kredit/debit/gopay (khusus Netflix)',
        //     '5. Setelah berhasil melakukan pembayaran, informasikan ke Admin',
        //     '6. Admin akan mengirimkan pengganti dana yang terdebet',
        //   ],
        //   list: true,
        //   isShow: false,
        // },
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
