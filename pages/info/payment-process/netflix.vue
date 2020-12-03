<template>
<div>
  <Header />
  <div class="netflix">
      <Title title="Proses Pendaftaran dan Pembayaran Netflix" />
    <div class="container">
        <div class="col">
          <p>1&#41; Buka browser dan akses www.netflix.com </p>
          <p>2&#41; Lakukan Pendaftaran dengan memasukkan alamat email di kolom email dan klik "Get Started"</p>
            <img 
            class="img-fluid"
            src="/images/netflix-get-started.png"
            alt="Image not found"/>
          <p>3&#41; Di halaman Step 1, tambahkan password sesuai dengan ketentuan yang diinformasikan oleh Admin Seakun, kemudian klik "Continue"</p>
          <img 
            class="img-fluid"
            src="/images/netflix-register-1.png"
            alt="Image not found"/>
          <p>4&#41; Di halaman Step 2, pilih plan sesuai informasi dari Admin Seakun, kemudian klik "Continue"</p>
          <p>5&#41; Di halaman Step 3, masukkan informasi kartu kredit atau debit international kamu. Kemudian centang kotak "I agree" dan klik "Star Membership"</p>
          <img 
            class="img-fluid"
            src="/images/netflix-register-2.png"
            alt="Image not found"/>
          <p>6&#41; Jika proses pembayaran berhasil, saldo di kartu kamu akan terpotonh sebesar harga plan yang dipiluh dan kamu akan diarahkan ke halaman pengaturan profil</p>
          <p>7&#41; Isi profil menggunakan nama "Seakun" dan klik "Continue". Lakukan pengaturan bahasa dan preferensi (jika muncul)</p>
          <p>8&#41; Setelah berada di Home, klik icon profil dan buka halaman Accoung > Billing Details (https://www.netflix.com/BillingActivity)</p>
          <p>9&#41; Pastikan riwayat pembayaran telah muncul di halaman Billing Details <br />
          <img 
            class="img-fluid"
            src="/images/netflix-payment-info.png"
            alt="Image not found"/>
          <p>10&#41; Informasikan ke Admin Seakun bahwa proses pendaftaran dan pembayaran telah berhasil. Admin akan melakukan pengecekan dan pengaturan lebih lanjut terhadap akun yang didaftarkan</p>
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
  padding: 60px 0px 80px !important;
  background: white;
  .container {
    background-color: white;
    padding: 15px 0px 15px !important;
  }
  .col {
    padding: 0px 0px 0px !important;
    p {
      color:#1F2023;
      text-align: justify;
      margin-left: -15px;
      margin-right: -15px;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    img {
      padding: 25px 0px 20px !important;
      max-width: 80%;
      max-height: 75%;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>