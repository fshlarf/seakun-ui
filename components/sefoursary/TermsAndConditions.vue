<template>
  <div
    class="container-about-us mt-8 md:mt-12 lg:mt-[50px] xl:mt-[64px]"
    id="sefoursary-terms-and-conditions"
  >
    <p
      class="font-bold text-[20px] md:text-[25px] lg:text-[28px] xl:text-[30px]] text-[#2F2A32] text-center"
    >
      Syarat dan Ketentuan
    </p>
    <div
      class="bg-[#E1FBF6] py-5 pl-4 pr-3 md:pl-5 md:pr-5 lg:pl-6 lg:pr-6 lg:py-6 space-y-5 mt-5 md:mt-7 lg:mt-8 rounded-xl"
    >
      <section
        v-for="(item, id) in termsAndContions"
        :key="id"
        class="flex gap-3 text-xs md:text-sm"
        :class="[
          id == 0 ? 'items-center' : 'items-start',
          { 'sm:items-center': id === 4 },
        ]"
      >
        <div
          class="w-6 h-6 font-extrabold text-white bg-primary rounded-full flex items-center justify-center"
          :class="[id == 0 ? 'mb-2 sm:mb-0' : '']"
        >
          <p class="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
            {{ id + 1 }}
          </p>
        </div>
        <p class="font-bold leading-[20px]">{{ item.term }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    termsAndContions: [
      {
        term:
          'Program berlangsung dari tanggal 5 Agustus hingga 5 September 2024.',
      },
      {
        term:
          'Pemain Sefoursary mendapat kesempatan untuk memenangkan berbagai hadiah langsung (secara acak dan selama kuota masih tersedia). Pemenang hanya dapat memenangkan satu hadiah acak yang diatur oleh Seakun.',
      },
      {
        term:
          'Pemenang hadiah undian dipilih dan diumumkan di event LIVE yang diadakan di IG Seakun @seakun.id.',
      },
      {
        term:
          'Dengan mengikuti program Sefoursary, Pengguna dianggap telah menyetujui Syarat & Ketentuan yang berlaku.',
      },
      {
        term:
          'Seakun berhak untuk memblokir Pengguna dari kompetisi dan semua aktivitas yang berkaitan dengan Sefoursary jika ditemukan adanya kecurangan, seperti menggunakan plug-in, melakukan peretasan atau sabotase, dan hal-hal lain yang melanggar Syarat & Ketentuan. Pengguna juga berisiko untuk diblokir dari semua aktivitas di Seakun.',
      },
      {
        term:
          'Seakun adalah pihak yang bertanggung jawab untuk menangani klaim yang diajukan.',
      },
      {
        term:
          'Seakun berhak mengubah/menghentikan permainan Sefoursary tanpa pemberitahuan terlebih dahulu kepada pihak manapun. Jika ada perbedaan pada Syarat & Ketentuan dengan materi promosi, maka Syarat & Ketentuan inilah yang berlaku.',
      },
      {
        term:
          'Pihak Seakun tidak bertanggung jawab apabila Pemenang tidak melakukan klaim hadiah sesuai ketentuan di atas dalam kurun waktu yang sudah ditentukan. Apabila pemenang mengalami kendala pada saat proses klaim hadiah, pemenang dapat menghubungi Customer Service Seakun.',
      },
      {
        term:
          'Pemenang harus membuat video unboxing setelah menerima paket dari kurir (mulai dari kondisi paket belum dibuka & tanpa diedit) untuk hadiah berupa barang.',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
