<template>
  <div class="my-4">
    <p class="text-[20px] md:text-2xl font-bold">
      Syarat & Ketentuan Paket Cari Teman
    </p>
    <ul class="list-decimal pl-6 list-outside my-2 text-sm md:text-base">
      <li v-for="(findFriend, id) in findFriensTerms" :key="id">
        {{ findFriend }}
      </li>
    </ul>
    <p class="text-[20px] md:text-2xl font-bold mt-8">
      Syarat & Ketentuan Paket Rombongan
    </p>
    <ul class="list-decimal pl-6 list-outside my-2 text-sm md:text-base">
      <li v-for="(group, id) in groupTerms" :key="id">{{ group }}</li>
    </ul>
    <Button
      class="my-4 py-2 tn:w-full md:w-auto"
      label="PESAN SEKARANG"
      variant="third"
      @click="onClickChooseVariant"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  data() {
    return {
      findFriensTerms: [
        'Biaya yang dibebankan dalam pembelian user adalah biaya makan All You Can Eat di Restoran Voyage dan biaya admin Seakun.id',
        'Data user akan dimasukkan dalam waiting list setelah user melakukan pendaftaran Paket Cari Teman  di Seakun.id',
        'Jika paket cari teman sudah terpenuhi, maka user diharuskan melunasi pembayaran di Seakun.id',
        'User diwajibkan untuk menghubungi Restoran Voyage maksimal H-1 sebelum kedatangan dan user dapat langsung makan  All You Can Eat di Restoran Voyage dengan menunjukkan kode voucher yang dikirimkan via email oleh Seakun.id',
        'Kode voucher akan diberikan kepada setiap user, dan user diperbolehkan untuk datang sendiri atau bersama dengan teman dalam program ini.',
        'Jika user tidak mengkonfirmasi kehadirannya kepada Restoran Voyage, maka Restoran Voyage dan Seakun.id tidak bertanggung jawab apabila kode voucher ridak dapat digunakan atau All You Can Eat tidak dapat dipersiapkan.',
        'User harus datang di periode dan waktu yang telah ditentukan, jika user tidak datang dalam waktu periode yang ditentukan, maka uang tidak dapat dikembalikan kepada user.',
        'Jika user dalam suatu grup tidak terpenuhi sampai pada periode dan waktu yang telah ditentukan, maka tersedia 2 pilihan sebagai berikut: a) User menunggu sampai pada periode dan waktu patungan di Restoran Voyage selanjutnya dan uang user akan ditahan oleh Seakun.id untuk dibayarkan pada periode selanjutnya. b) Uang akan dikembalikan 100% ke user ',
        'Jika user membutuhkan bantuan atau pertanyaan terkait program patungan All You Can Eat di Restoran Voyage, maka dapat langsung menghubungi nomor admin Seakun.id.',
      ],
      groupTerms: [
        'Biaya yang dibebankan dalam pembelian user adalah biaya makan All You Can Eat di Restoran Voyage dan biaya admin Seakun.id',
        'User diwajibkan untuk menghubungi Restoran Voyage maksimal H-1 sebelum kedatangan dan user dapat langsung makan  All You Can Eat di Restoran Voyage dengan menunjukkan kode voucher yang dikirimkan via email oleh Seakun.id',
        'Kode voucher akan diberikan kepada setiap user, dan user diperbolehkan untuk datang sendiri atau bersama dengan teman dalam program ini.',
        'Jika user tidak mengkonfirmasi kehadirannya kepada Restoran Voyage, maka Restoran Voyage dan Seakun.id tidak bertanggung jawab apabila kode voucher ridak dapat digunakan atau All You Can Eat tidak dapat dipersiapkan.',
        'User harus datang di periode dan waktu yang telah ditentukan, jika user tidak datang dalam waktu periode yang ditentukan, maka uang tidak dapat dikembalikan kepada user.',
        'Jika user membutuhkan bantuan atau pertanyaan terkait program patungan All You Can Eat di Restoran Voyage, maka dapat langsung menghubungi nomor admin Seakun.id.',
      ],
    };
  },
  methods: {
    onClickChooseVariant() {
      const variantSection = document.getElementById('package-variant');
      variantSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  },
};
</script>

<style></style>
