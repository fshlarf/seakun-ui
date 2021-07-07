<template>
  <div class="info faq">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-6 faq-title-container">FAQ</div>
        <div class="col-md-8 col-lg-6 tn:mb-6 xl:mb-10">
          <AccordionContainer>
            <Accordion name="faq1" title="Apa itu User Host?">
              User Host adalah user yang berlangganan provider Entertainment via
              Seakun.id dan
              <b>
                user yang bertanggung-jawab melakukan payment ke provider
                Entertainment menggunakan kartu debit/kredit pribadi miliknya.
              </b>
            </Accordion>

            <Accordion
              name="faq2"
              title="Bagaimana cara daftar sebagai User Host?"
            >
              Untuk menjadi Host kamu bisa mengikuti langkah-langkah sebagai
              berikut.
              <ol class="mt-2">
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
              </ol>
            </Accordion>

            <Accordion name="faq3" title="Apa syarat menjadi User Host?">
              Untuk menjadi User Host ada beberapa syarat yang harus dipenuhi
              yaitu sebagai berikut.
              <ol class="mt-2">
                <li>
                  Memiliki
                  <b>kartu debit/kredit internasional</b>
                  seperti BNI, Mandiri, Jenius dan kartu lain yang memiliki logo
                  VISA dan Mastercard.
                </li>
                <li>
                  Bersedia mendahulukan pembayaran ke provider entertainment
                  yang terkait dengan uang pribadi (akan diganti Seakun.id
                  paling lama 4 jam setelah menunjukkan bukti pembayaran).
                </li>
              </ol>
            </Accordion>

            <Accordion
              name="faq4"
              title="Apakah menjadi User Host aman untuk data pribadi dan kartu debit/kredit saya?"
            >
              Seakun.id berkomitmen penuh dalam menjaga data penggunanya.
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
              />
            </Accordion>

            <Accordion
              name="faq5"
              title="Bagaimana jika saya yang telah terdaftar menjadi User Host ingin berhenti berlangganan?"
            >
              Bila kamu sebagai User Host ingin berhenti berlangganan harap
              hubungi admin paling lambat h-2 sebelum masa berlangganan selesai.
            </Accordion>

            <Accordion
              name="faq6"
              title="Bagaimana agar saya mengetahui event Undian Voucher e-Wallet dan Giveaway yang diadakan Seakun.id?"
            >
              Follow instagram
              <a href="https://www.instagram.com/seakun.id/">@seakun.id</a>
              untuk mengetahui informasi event Undian Voucher e-Wallet dan
              Giveaway yang diadakan Seakun.id secara berkala.
            </Accordion>
          </AccordionContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/atoms/AccordionNew';
import AccordionContainer from '~/components/atoms/AccordionContainer';

export default {
  name: 'UserHostFAQ',
  layout: 'new',
  components: {
    Accordion,
    AccordionContainer,
  },
};
</script>
