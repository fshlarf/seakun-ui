<template>
<div>
  <Header />
  <div class="netflix">
    <div class="container">
      <Title title="Proses Pendaftaran dan Pembayaran Netflix" />
      <div class="row justify-content-around content-mobile">
        <ul>
          <li>Buka browser dan akses www.netflix.com</li>
          <li>Lakukan Pendaftaran dengan memasukkan alamat email di kolom email dan klik "Get Started"</li>
            <img 
              src="/images/netflix-get-started.png"
              alt="Image not found"/>
          <li>Di halaman Step 1, tambahkan password sesuai dengan ketentuan yang diinformasikan oleh Admin Seakun, kemudian klik "Continue"</li>
            <img 
              src="/images/netflix-register-1.png"
              alt="Image not found"/>
          <li>Di halaman Step 2, pilih plan sesuai informasi dari Admin Seakun, kemudian klik "Continue"</li>
          <li>Di halaman Step 3, masukkan informasi kartu kredit atau debit international kamu. Kemudian centang kotak "I agree" dan klik "Star Membership"</li>
            <img 
              src="/images/netflix-register-2.png"
              alt="Image not found"/>
          <li>Jika proses pembayaran berhasil, saldo di kartu kamu akan terpotonh sebesar harga plan yang dipiluh dan kamu akan diarahkan ke halaman pengaturan profil</li>
          <li>Isi profil menggunakan nama "Seakun" dan klik "Continue". Lakukan pengaturan bahasa dan preferensi (jika muncul)</li>
          <li>Setelah berada di Home, klik icon profil dan buka halaman Accoung > Billing Details (https://www.netflix.com/BillingActivity)</li>
          <li>Pastikan riwayat pembayaran telah muncul di halaman Billing Details</li>
            <img 
              src="/images/netflix-payment-info.png"
              alt="Image not found"/>
          <li>Informasikan ke Admin Seakun bahwa proses pendaftaran dan pembayaran telah berhasil. Admin akan melakukan pengecekan dan pengaturan lebih lanjut terhadap akun yang didaftarkan</li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Header from "~/components/mollecules/Header";
import Footer from "~/components/mollecules/Footer";
import Title from "~/components/atoms/Title";

export default {
  components: {
    Header,
    Footer,
    Title,
  },
};
</script>

<style lang="scss" scoped>
.netflix {
  padding: 80px 10px 80px !important;
  background: white;
  .container {
    padding: 25px 0px 25px !important;
    ul {
      counter-reset: number;
      list-style: none;
      padding: 0px 10px 10px !important;
      li {
        color:#1F2023;
        text-align: justify;
        margin-top: 12px;
        margin-bottom: 12px;
        margin-left: -15px;
        margin-right: -15px;
        display: flex;
      }
      li:before {
        content: counter(number)")";
        counter-increment: number;
        padding-right: 5px;
        
      }
      img {
        padding: 25px 0px 25px !important;
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 800px) {
  .netflix {
    .content-mobile {
      display: block !important;
      width: 100%;
      padding: 0 0px;
      margin-left: 0 !important;
      img {
        margin: 0 0;
      }
    }
  }
}
</style>