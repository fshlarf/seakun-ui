<template>
  <div class="container tn:pt-14 md:pt-20 tn:mb-12 xl:mb-20">
    <div class="text-center">
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
          question: 'Apa itu User Host?',
          answer: `User Host adalah user yang berlangganan provider Entertainment via
              Seakun.id dan
              <b>
                user yang bertanggung-jawab melakukan payment ke provider
                Entertainment menggunakan kartu debit/kredit pribadi miliknya.
              </b>`,
          isShow: false,
        },
        {
          id: 2,
          question: 'Bagaimana cara daftar sebagai User Host?',
          answer: `Untuk menjadi Host kamu bisa mengikuti langkah-langkah sebagai
              berikut.
              <ol class="mt-2 list-decimal list-outside">
                <li>
                  Daftar sebagai User Host dengan memilih paket yang berlabel
                  User Host di pilihan paket yang tersedia.
                </li>
                <li>
                  Pastikan nomor yang kamu daftarkan aktif di Whatsapp, Admin
                  akan menghubungi kamu untuk konfirmasi.
                </li>
                <li>
                  Admin akan memberikan akun provider Entertainment (Contoh:
                  Akun Netflix) yang belum memiliki plan berlangganan.
                </li>
                <li>
                  Kamu akan diminta untuk membayarkan terlebih dahulu biaya
                  berlangganan plan paketnya. Contoh: Netflix premium dengan
                  biaya sebesar Rp 186.000 menggunakan kartu debit/kredit yang
                  kamu miliki.
                </li>
                <li>
                  Segera lakukan konfirmasi ke Admin jika proses pembayaran
                  sudah berhasil dengan mengirim bukti pembayaran atau mutasi
                  rekening yang menyatakan pembayaran berhasil.
                </li>
                <li>
                  Kirimkan Nomor Rekening Bank kamu kepada Admin untuk proses
                  penggantian uang.
                </li>
                <li>
                  Admin akan mengganti biaya yang kamu keluarkan dipotong dengan
                  biaya berlangganan bulanan kamu, proses paling lama 4 jam
                  setelah bukti transfer dikirim. Contoh: Netflix Rp 186.000 -
                  Rp 46.500 (biaya berlangganan bulanan) = Rp 139.500
                </li>
                <li>
                  Admin akan mengirimkan Akun Netflix beserta Profile dan Pin
                  kepada kamu melalui email dan Whatsapp. Registrasi User Host
                  pun selesai.
                </li>
                <li>
                  Untuk proses di bulan berikutnya, lakukan pembayaran sesuai
                  dengan petunjuk pembayaran normal yang diinformasikan ke email
                  kamu H-7 sebelum masa berlangganan berakhir dan mengirimkan
                  bukti pembayaran ke Admin. Selanjutnya akan memiliki langkah
                  yang sama di mulai dari langkah nomor 4.
                </li>
              </ol>`,
          isShow: false,
        },
        {
          id: 3,
          question: 'Apa syarat menjadi User Host?',
          answer: `Untuk menjadi User Host ada beberapa syarat yang harus dipenuhi
              yaitu sebagai berikut.
              <ol class="mt-2 list-decimal list-outside">
                <li>
                  Memiliki
                  <b>e-wallet (Dana/Gopay)</b> atau
                  <b>kartu debit/kredit internasional</b>
                  seperti BNI, Mandiri, Jenius dan kartu lain yang memiliki logo
                  VISA dan Mastercard.
                </li>
                <li>
                  Bersedia mendahulukan pembayaran ke provider entertainment
                  yang terkait dengan uang pribadi (akan diganti Seakun.id
                  paling lama 24 jam setelah menunjukkan bukti pembayaran).
                </li>
              </ol>`,
          isShow: false,
        },
        {
          id: 4,
          question:
            'Apakah menjadi User Host aman untuk data pribadi dan kartu debit/kredit saya?',
          answer: `Seakun.id berkomitmen penuh dalam menjaga data penggunanya.
              Seakun.id juga punya aturan terkait kerahasiaan data penggunanya
              termasuk data User Host. Untuk data kartu debit/kredit yang
              digunakan juga dipastikan aman karena proses payment dilakukan
              oleh kamu sendiri. Setelah proses payment selesai, tidak akan ada
              orang lain yang bisa melihat informasi kartu debit/kredit milik
              kamu termasuk Seakun.id karena data kartu di sensor oleh provider
              terkait. Untuk detail sensor data kartu bisa dilihat sepeti gambar
              berikut.
              <img
                class="img-info"
                src="/images/netflix-payment-info.png"
                alt="netflix-payment-info"
              />`,
          isShow: false,
        },
        {
          id: 5,
          question:
            'Bagaimana jika saya yang telah terdaftar menjadi User Host ingin berhenti berlangganan?',
          answer:
            'Bila kamu sebagai User Host ingin berhenti berlangganan harap hubungi admin paling lambat h-2 sebelum masa berlangganan selesai.',
          isShow: false,
        },
        {
          id: 6,
          question:
            'Bagaimana agar saya mengetahui event Undian Voucher e-Wallet dan Giveaway yang diadakan Seakun.id?',
          answer: `Follow instagram <a href='https://www.instagram.com/official.seakun/' target='_blank' class='text-secondary font-bold'>@official.seakun</a> untuk mengetahui informasi event undian Voucher e-wallet dan Giveaway yang diadakan Seakun.id secara berkala.`,
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
