<template>
  <div>
    <Header />
    <div class="spotify">
      <div class="container">
        <Title title="Proses Pembayaran di Spotify" />
        <div class="row justify-content-around content-mobile">
          <ul>
            <li>Buka browser dan akses www.Spotify.com</li>
            <li>Klik Menu “Masuk”</li>
            <img src="/images/spotify-home.png" alt="step 1" />
            <li>Login menggunakan akun yg diberikan admin Seakun</li>
            <img src="/images/spotify-login.png" alt="step 2" />
            <li>Pilih Akun</li>
            <img src="/images/spotify-profile.png" alt="step 3" />
            <li>Klik Gabung Premium</li>
            <img src="/images/spotify-dashboard.png" alt="step 4" />
            <li>
              Ubah paket jika terpilih paket personal dengan cara klik “Ubah
              Paket”
            </li>
            <img src="/images/spotify-premium.png" alt="step 5" />
            <li>Pilih Paket “Family” dan klik “Memulai”</li>
            <img src="/images/spotify-info.png" alt="step 6" />
            <li>Klik “Pakai Gopay, DANA”</li>
            <img src="/images/spotify-payment.png" alt="step 7" />
            <li>Lakukan pembayaran menggunakan Gopay/DANA milik kamu</li>
            <li>Kirim bukti berhasil payment ke admin (Screenshot)</li>
            <li>
              Logout akun tersebut. Admin akan melakukan pengecekan dan
              pengaturan lebih lanjut terhadap akun yang didaftarkan
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/mollecules/Header';
import Footer from '~/components/mollecules/Footer';
import Title from '~/components/atoms/Title';

export default {
  components: {
    Header,
    Title,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.spotify {
  padding: 80px 10px 80px !important;
  background: white;
  .container {
    padding: 25px 0px 25px !important;
    ul {
      counter-reset: number;
      list-style: none;
      padding: 0px 10px 10px !important;
      li {
        color: #1f2023;
        text-align: justify;
        margin-top: 12px;
        margin-bottom: 12px;
        margin-left: -15px;
        margin-right: -15px;
        display: flex;
      }
      li:before {
        content: counter(number) ')';
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
  .spotify {
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
