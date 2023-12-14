<template>
  <div
    id="qna-seglowup"
    class="container-semabar pt-[24px] md:pt-[44px] lg:pt-[64px] tn:mb-[48px] xl:mb-[52px]"
  >
    <div class="text-center mb-7 lg:mb-8 text-[#15382F]">
      <header
        class="w-full text-center text-[#2A5446] max-w-[928px] mx-auto text-nunito"
      >
        <h1 class="font-bold text-base md:text-xl lg:text-[30px]">
          Frequently Asked Questions
        </h1>
        <p class="text-sm md:text-base lg:text-lg pt-2">
          Berikut ini beberapa pertanyaan yang sering ditanyakan
        </p>
      </header>
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
        class-answer="!bg-[#86D0C1]"
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
          question: 'Apa itu SeGlowUp?',
          answer:
            'SeGlowUp adalah layanan patungan treatment kecantikan bersama yang menghubungkan orang-orang dengan tujuan yang sama untuk mendapatkan perawatan kecantikan berkualitas dengan harga yang terjangkau.',
          isShow: false,
        },
        {
          id: 2,
          question: 'Treatment apa saja yang tersedia?',
          answer: 'Treatment yang tersedia saat ini rangkaian paket ZAP Series',
          isShow: false,
        },
        {
          id: 3,
          question: 'Bagaimana jika grup tidak full? Apakah bisa refund?',
          answer:
            'Kami akan memberikan informasi terbaru terkait grup SeGlowUp dan pelaksanaannya. Jika grup tidak full akan kami refund.',
          isShow: false,
        },
        {
          id: 4,
          question: 'Apakah SeGlowUp aman?',
          answer:
            'Aman karna semua prosesnya transparan dan akan dibantu sampai selesai untuk menikmati layanannya.',
          isShow: false,
        },
        {
          id: 5,
          question: 'Bagaimana cara bergabung SeGlowUp?',
          answer: [
            'Pilih & daftar layanan di Seakun',
            'Member melakukan pembayaran',
            'Member menunggu grup penuh',
            'Seakun menyerahkan data member & melakukan pembayaran',
            'Member registrasi di website ZAP',
            'ZAP mengaktivasi quota series treatment ke member Seakun',
            'Nikmati treatment di lokasi ZAP manapun dengan menunjukkan akun ZAP',
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
<style lang="scss" scoped>
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
