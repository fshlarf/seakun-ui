<template>
  <div class="container tn:pt-8 lg:pt-14">
    <div class="md:w-3/4 mx-auto">
      <img
        src="/images/ramadan-gift/banner.png"
        alt="thr untuk seakun"
        class="w-full"
      />
    </div>
    <div
      class="md:w-3/4 tn:px-3 md:px-4 lg:px-5 xl:px-6 md:mx-auto text-justify tn:mt-4 tn:text-sm md:text-base"
    >
      <h1 class="font-bold tn:text-lg md:text-2xl">Hai kak!</h1>
      <p class="tn:mt-3">
        Seluruh Tim Seakun mengucapkan terimakasih banyak sudah memberikan
        kepercayaan kepada kami agar dapat memberikan layanan terbaik ke seluruh
        pengguna Seakun termasuk kakak.
      </p>
      <p class="tn:mt-3">
        Tidak terasa sudah hampir 3 tahun Seakun membantu kakak-kakak semua yang
        merupakan pengguna Seakun untuk dapat menghemat biaya pengeluaran dalam
        menikmati layanan premium secara legal yang bisa menghemat ratusan ribu
        bahkan jutaan rupiah setiap tahunnya.
      </p>
      <p class="tn:mt-3">
        Jika kakak merasa sangat terbantu dan sangat senang dengan layanan yang
        Seakun berikan, kakak bisa memberikan THR untuk Tim Seakun yang bertugas
        dengan cara klik tombol di bawah.
      </p>
      <p class="tn:mt-3">
        Sekali lagi, terimakasih banyak untuk THR dan dukungan yang kakak
        berikan, semoga berkah, sehat dan sukses selalu di manapun kakak berada.
      </p>
      <p class="tn:mt-5">Salam, <br />Tim Seakun</p>

      <div class="w-full tn:mt-8 text-center">
        <Button
          variant="primary"
          label="Kirim THR ke Seakun"
          class="tn:py-4 tn:px-12 font-bold tn:w-full md:w-auto"
          @click="isShowModalScan = !isShowModalScan"
        />
      </div>

      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[10px] md:py-[15px] lg:py-[20px] border-2 border-dashed !border-primary tn:mt-12 tn:text-sm text-gray-600 bg-[#F4F9F8]"
      >
        <h3 class="font-bold">Disclaimer:</h3>
        <p class="tn:mt-2">
          Program THR untuk Seakun ini dilatarbelakangi oleh beberapa pengguna
          Seakun yang senang atas pelayanan yang diberikan oleh Seakun dan ingin
          memberikan apresiasi tinggi berupa tips kepada Tim Seakun yang
          bertugas. Sehingga muncul program ini dengan tujuan untuk mewadahi
          seluruh pengguna Seakun agar bisa memberikan dukungan dan apresiasi
          lebih kepada seluruh Tim Seakun yang bertugas tanpa ada paksaan dari
          pihak manapun.
        </p>
        <p class="tn:mt-2">
          Hal-hal yang merupakan tanggung jawab Manajemen Seakun prihal hak-hak
          karyawan sudah ditunaikan dengan baik dan mengikuti aturan yang
          berlaku.
        </p>
      </div>
    </div>

    <ModalScanQris
      :show-modal="isShowModalScan"
      @onClose="isShowModalScan = !isShowModalScan"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import ModalScanQris from './views/ModalScanQris.vue';

export default {
  layout: 'new',
  components: {
    Button,
    ModalScanQris,
  },
  data() {
    return {
      isShowModalScan: false,
    };
  },
};
</script>

<style></style>
