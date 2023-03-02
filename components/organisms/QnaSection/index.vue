<template>
  <div id="qna" class="container pt-20 tn:mb-12 xl:mb-20">
    <div class="tn:text-center lg:text-left">
      <h1
        class="font-bold tn:text-[20px] md:text-2xl xl:text-[36px] tn:mb-4 lg:mb-8"
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
          answer: 'Bank transfer Mandiri, BCA, Jenius, Gopay, LinkAja',
          isShow: false,
        },
        {
          id: 6,
          question: 'Bagaimana prosedur menjadi User Host?',
          answer: [
            'Daftar dengan memilih paket User Host. Misal User Host Netflix',
            'Admin akan melakukan konfirmasi melalui Whatsapp',
            'Lakukan pendaftaran menggunakan akun yang ditentukan oleh Admin',
            'Lakukan pembayaran di provider menggunakan kartu kredit/debit/gopay (khusus Netflix)',
            'Setelah berhasil melakukan pembayaran, informasikan ke Admin',
            'Admin akan mengirimkan pengganti dana yang terdebet',
          ],
          list: true,
          isShow: false,
        },
        {
          id: 7,
          question: 'Bagaimana bila ada kendala ketika proses pembayaran?',
          answer: `Bila kamu mengalami kendala dalam melakukan proses pembayaran, seperti: tidak mendapat konfirmasi dan follow up. Mohon isi form pada <a href='https://forms.gle/t1AbaxnjEtJr8NAPA' target='_blank' class='text-secondary font-bold'>link ini</a>. Kami akan segera menghubungi kamu maksimal dalam 1x24 jam.`,
          isShow: false,
        },
        {
          id: 8,
          question:
            'Apa yang harus dilakukan bila akun langganan mengalami masalah?',
          answer: `Bila akun kamu mengalami masalah, seperti: telah melakukan pembayaran namun akun berubah menjadi free kembali. Mohon isi form pada <a href='https://forms.gle/t1AbaxnjEtJr8NAPA' target='_blank' class='text-secondary font-bold'>link ini</a>. Kami akan segera menghubungi kamu maksimal 1x24 jam.`,
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
