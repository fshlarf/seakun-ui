<template>
  <div class="terms-of-use mx-auto max-w-[800px] md:pt-12 md:text-justify">
    <h3 class="text-3xl">Kebijakan Privasi</h3>
    <h5 class="font-bold text-lg md:text-xl" style="margin-bottom: 30px">
      Terakhir diperbaharui: 11 November 2023
    </h5>

    <h5 class="text-xl mb-2">1. PENDAHULUAN</h5>
    <div>
      Anda dimohon untuk membaca Kebijakan Privasi ini sebelum menggunakan
      layanan yang disediakan di Platform Seakun.id.
    </div>
    <div class="mt-2">
      Dengan melakukan pendaftaran dan/atau menggunakan layanan berlangganan
      bersama yang disediakan di Platform Seakun.id, Anda setuju bahwa Anda
      telah membaca, memahami, mengetahui, menyetujui dan menerima seluruh
      informasi syarat, dan ketentuan penggunaan data yang terdapat dalam
      Kebijakan Privasi ini. Ketentuan Penggunaan ini merupakan suatu perjanjian
      yang sah antara PT. Seakun Global Teknologi (“Seakun” atau “kami”) dan
      Anda terkait pengelolaan data pribadi selama penggunaan Platform Seakun.id
      yang berlaku antara Anda dan Kami.
    </div>

    <div>
      <h5 class="text-xl mb-2">2. KEBIJAKAN PRIVASI</h5>
      <ul class="space-y-2">
        <li>
          2.1. Seakun.id menghargai privasi pengguna dan berkomitmen untuk
          melindungi informasi pribadi yang diberikan kepada kami. Dengan
          menggunakan layanan kami, Anda secara otomatis menyetujui dan memahami
          bahwa kami dapat mengumpulkan, menyimpan, dan memproses data pribadi
          Anda sesuai dengan Kebijakan Privasi yang telah ditetapkan oleh
          Seakun.id.
        </li>
        <li>
          2.2. Informasi pribadi yang mungkin kami kumpulkan meliputi, namun
          tidak terbatas pada, nama, alamat email, informasi transaksi, dan data
          lain yang relevan untuk menyediakan layanan dengan baik. Kami tidak
          akan mengungkapkan informasi pribadi Anda kepada pihak ketiga tanpa
          izin Anda, kecuali sebagaimana diwajibkan oleh hukum.
        </li>
        <li>
          2.3. Anda dapat merujuk ke halaman Kebijakan Privasi kami untuk
          memahami lebih lanjut tentang jenis informasi yang kami kumpulkan,
          cara kami menggunakannya, dan langkah-langkah yang kami ambil untuk
          menjaga keamanan dan kerahasiaannya. Seakun.id berhak untuk
          memperbarui atau mengubah Kebijakan Privasi ini secara berkala, dan
          perubahan tersebut akan diinformasikan kepada pengguna melalui saluran
          yang sesuai. Dengan melanjutkan penggunaan layanan kami setelah
          perubahan tersebut, Anda dianggap menerima dan menyetujui Kebijakan
          Privasi yang telah diperbarui.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyPage',
  layout: 'new',
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
h3,
h5 {
  font-weight: 600;
}
h5 {
  margin-top: 32px;
}
.list-alpha {
  list-style-type: lower-alpha;
}
@media (max-width: 800px) {
  h3 {
    font-size: 24px;
  }
  .terms-of-use {
    padding: 40px 20px !important;
  }
}
</style>
