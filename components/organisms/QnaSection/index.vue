<template>
  <div id="qna" class="container tn:pt-8 pb-8 md:pt-24 lg:pb-16">
    <div class="tn:text-center lg:text-left">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-8">
        Frequently Asked Questions (FAQ)
      </h1>
    </div>
    <div class="px-2 grid tn:grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
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
          question: 'Kapan masa berlangganan di Seakun aktif?',
          answer:
            'Masa berlangganan terhitung ketika Admin Whatsapp memberikan akun sharing, link invitation atau mengundang kamu ke grup premium. Masa berlangganan akan tetap berjalan walaupun kamu tidak meng-accept undangan yang telah dikirimkan.',
          isShow: false,
        },
        {
          id: 2,
          question:
            'Bagaimana mekanisme untuk melanjutkan langganan di Seakun?',
          answer:
            'Seminggu dan maksimal sehari sebelum masa berlangganan habis, kamu akan menerima reminder perpanjangan melalui email & Whatsapp yang terdaftar. Jika kamu ingin melanjutkan masa berlangganan, silakan melakukan transfer ke rekening / e-wallet Seakun dengan nominal yang diinformasikan.',
          isShow: false,
        },
        {
          id: 3,
          question: 'Apa perbedaan seakun dengan platform langganan yang lain?',
          answer:
            'Seakun adalah platform yang konsepnya mempertemukan kamu dengan kawan berlangganan yang mempunyai interest yang sama, sehingga akun hanya dishare ke member dalam satu grup tertentu aja. Berbeda dengan seller akun sharing yang biasanya akan menyebarkan akun ke banyak orang. Skema harga Seakun sangat transparan karena harga berlangganan adalah harga yang dibagi rata dengan jumlah member dalam satu grup.',
          isShow: false,
        },
        {
          id: 4,
          question: 'Apa perbedaan User Host dan User Reguler?',
          answer:
            'User Host adalah user yang diberi wewenang untuk melakukan pendaftaran dan pembayaran langsung ke provider seperti Netflix. Pembayaran provider akan sepenuhnya diganti oleh Seakun ketika pembayaran sudah terdebet. Sedangkan User Reguler, kamu tinggal terima jadi saja, proses pendaftaran ke provider dan pencarian kawan berlangganan akan dihandle oleh Seakun.',
          isShow: false,
        },
        {
          id: 5,
          question: 'Payment method apa saja yang available di Seakun?',
          answer:
            'Bank transfer Mandiri, BCA, Jenius, Gopay, OVO, DANA, LinkAja',
          isShow: false,
        },
        {
          id: 6,
          question: 'Bagaimana prosedur menjadi User Host?',
          answer: [
            '1. Daftar dengan memilih paket User Host. Misal User Host Netflix',
            '2. Admin akan melakukan konfirmasi melalui Whatsapp',
            '3. Lakukan pendaftaran menggunakan akun yang ditentukan oleh Admin',
            '4. Lakukan pembayaran di provider menggunakan kartu kredit/debit/gopay (khusus Netflix)',
            '5. Setelah berhasil melakukan pembayaran, informasikan ke Admin',
            '6. Admin akan mengirimkan pengganti dana yang terdebet',
          ],
          list: true,
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
