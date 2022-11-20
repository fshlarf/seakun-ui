<template>
  <div class="w-full tn:py-8 md:py-16">
    <div class="max-w-[460px] mx-auto text-center text-primary">
      <h1 class="font-bold tn:text-[24px] md:text-[32px] lg:text-[40px]">
        Perjalanan Seakun
      </h1>
      <p
        class="tn:mt-2 tn:text-[14px] md:text-[16px] tn:w-4/5 md:w-full mx-auto text-secondary"
      >
        Perjalanan Seakun.id dari pertama kali hanya berupa ide hingga berjalan
        sampai saat ini
      </p>
    </div>
    <div class="w-full overflow-hidden tn:my-8 md:my-12 lg:my-16">
      <div
        class="tn:px-4 md:px-7 lg:px-16 xl:px-32 flex items-start overflow-x-auto overscroll-auto tn:pb-12 hide-scrollbar"
      >
        <div v-for="(time, id) in timeLine" :key="id" class="flex-none">
          <div v-if="id === 0" class="flex justify-end">
            <img
              src="/images/journey/start.png"
              alt="time point"
              class="text-right tn:w-[350px] md:w-[600px]"
            />
          </div>
          <img
            v-else-if="id === timeLine.length - 1"
            src="/images/journey/end.png"
            alt="time point"
            class="tn:w-[350px] md:w-[600px]"
          />
          <img
            v-else
            src="/images/journey/middle.png"
            alt="time point"
            class="tn:w-[350px] md:w-[600px]"
          />
          <div
            class="tn:mt-6 md:mt-10 text-primary bg-white shadow-xl rounded-md overflow-hidden tn:w-[320px] md:w-[500px] mx-auto"
          >
            <div class="w-full tn:h-[40px] md:h-[44px] bg-primary"></div>
            <div class="tn:p-6 md:p-8">
              <h2 class="text-center font-bold tn:text-[18px] md:text-[24px]">
                {{ time.title }}
              </h2>
              <p
                class="text-[#858FA3] text-justify tn:text-[10px] font-medium md:text-[12px] tn:mt-2"
              >
                {{ time.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLine: [
        {
          title: 'Mei 2020',
          desc:
            'Berawal dari tertipu, akhirnya jadi ide bisnis. Mulanya Founder kami mendapat pengalaman buruk ketika membeli akun Netflix abal-abal di salah satu e-commerce yang ada di Indonesia. Pengalaman ini memunculkan ide untuk membuat layanan patungan agar bisa menikmati layanan premium Netflix dan provider lainnya secara legal yang memiliki plan family, sharing device, group maupun teams dengan harga lebih terjangkau. Tak hanya itu, kami hadir untuk menghindarkan banyak orang dari tindak penipuan penjualan akun abal-abal.',
        },
        {
          title: 'Agustus 2020',
          desc:
            'Tanggal 1 Agustus 2020 platform Seakun.id diluncurkan ke publik. Di awal peluncurannya, banyak pengguna yang mengapresiasi dan menjadi pengguna awal platform kami. Namun bukan hanya “pengguna positif” yang datang, beberapa juga dari mereka yang mungkin merasa “tambang emasnya” terganggu akibat kehadiran kami, ikut pula meramaikan dengan berbagai cara yang intinya menunjukkan ketidaksenangan mereka terhadap kehadiran Seakun.id.',
        },
        {
          title: 'Desember 2020',
          desc:
            'Karyawan pertama. Posisi admin operasional menjadi posisi pertama yang dibuka di Seakun.id. Posisi ini kami buka karena jumlah pengguna kami yang terus bertambah signifikan dan sudah saatnya untuk meningkatkan pelayanan kepada pengguna.',
        },
        {
          title: 'Maret 2021',
          desc:
            'Kami resmi berbadan hukum. Seakun.id resmi menjadi sebuah perusahaan dengan nama PT Seakun Global Teknologi.',
        },
        {
          title: 'Agustus 2021',
          desc:
            'Founder kami berkomitmen penuh untuk Seakun.id. Founder sekaligus CEO kami memutuskan resign dari pekerjaannya dan berkomitmen penuh untuk membangun Seakun.id agar lebih besar lagi. Founder kami bersedia meninggalkan benefit dari pekerjaan sebelumnya dengan tujuan untuk memberikan pelayanan terbaik untuk pengguna dan menciptakan lebih banyak lapangan pekerjaan.',
        },
        {
          title: 'Desember 2021',
          desc:
            'Kami gagal pendanaan. Kala itu pengguna Seakun.id sudah berjumlah lebih dari 10.000. Kami mencoba untuk melakukan pendanaan ke salah satu Venture Capital agar bisa mendapatkan modal baru untuk mengembangkan perusahaan lebih masif lagi. Namun kami harus berlapang dada dan menegakkan kepala, nyatanya di momen itu kami gagal dalam proses pendanaan.',
        },
        {
          title: 'Maret 2022',
          desc:
            'Fitur yang ditunggu-tunggu oleh banyak pengguna Seakun.id meluncur ke publik. Fitur penerimaan pembayaran otomatis berhasil kami selesaikan. Fitur ini memanglah fitur yang sangat bermanfaat untuk pengguna karena sangat memudahkan mereka dalam bertransaksi di platform kami.',
        },
        {
          title: 'September 2022',
          desc:
            'Kami berjumlah 29 orang. Seluruh tim Seakun.id sudah berjumlah 29 orang. Kami berusaha untuk memberikan kualitas pelayanan terbaik dengan cara menambah anggota tim untuk posisi-posisi tertentu yang dibutuhkan. 11 orang diantaranya berstatus full time dan sisanya berstatus part time.',
        },
        {
          title: 'Oktober 2022',
          desc:
            'Berubah visi menjadi “Startup Camel”. Alih-alih berusaha menjadi “Startup Unicorn”, Founder sekaligus CEO kami memutuskan untuk mengarahkan kami untuk menjadi “Startup Camel”. Kini kami tidak selalu mengincar pendanaan semata, melainkan berusaha untuk sustain dan survive dalam kondisi apapun bahkan tanpa adanya modal sama sekali dari investor.',
        },
        {
          title: 'Saat ini',
          desc:
            'Keterbatasan finansial tidak membuat kami menyerah untuk memberikan layanan terbaik kepada para pengguna. Seiring dengan berjalannya waktu, perlahan namun pasti kami terus berusaha untuk menyelesaikan fitur dan produk baru yang kami harapkan bisa digunakan dan dinikmati oleh seluruh masyarakat khususnya pengguna Seakun.id.',
        },
      ],
    };
  },
};
</script>

<style></style>
