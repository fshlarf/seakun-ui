<template>
  <div class="container-seakun-blog mt-8 md:mt-10">
    <LazyImage
      alt="information"
      className="h-[145px] sm:h-[140px] md:h-[160px] rounded-[10px] md:rounded-xl w-full"
      :src="bannerSrc"
    />
    <div class="mt-3 sm:mt-5 md:mt-8 sm:w-full md:w-max lg:w-max sm:mx-auto">
      <p
        class="text-xs sm:text-sm font-bold max-w-[328px] sm:max-w-none lg:max-w-none sm:mx-0 mx-auto text-center sm:text-left"
      >
        Sebagai wujud perhatian Seakun kepada pengguna agar tetap dapat
        menikmati <br class="hidden md:block lg:hidden" />
        Canva dengan harga terjangkau, <br class="hidden lg:block" />
        berikut adalah beberapa opsi yang kami sediakan.
      </p>
      <div class="space-y-6 mt-4 relative">
        <div class="absolute bottom-4 top-0 w-1 bg-[#F1EBFF] left-[11px]"></div>
        <section
          v-for="(opt, id) in options"
          :key="id"
          class="flex items-start gap-5 relative z-20"
        >
          <div class="text-sm font-bold rounded-full text-white bg-[#8B3EFF]">
            <p
              class="w-[26px] h-[26px] text-center flex justify-center items-center"
            >
              {{ id + 1 }}
            </p>
          </div>
          <div class="text-xs md:text-sm font-bold">
            <p class="w-full pt-1">{{ opt.title }}</p>
            <div
              v-if="opt.information"
              class="flex flex-col md:flex-row gap-4 mt-3"
            >
              <section
                v-for="(info, id) in opt.information"
                :key="id"
                class="bg-white p-4 rounded-[10px] text-xs max-w-[216px] md:max-w-[199px] lg:max-w-[231px] leading-4"
                style="box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)"
              >
                <LazyImage
                  className="w-8 h-8 md:w-10 md:h-10"
                  :src="info.img"
                />
                <p class="pt-2 md:pt-3 pb-1">
                  {{ info.title }}
                </p>
                <p class="!font-normal" :class="{ italic: id + 1 == 1 }">
                  {{ info.text }}
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from '../../../../components/atoms/LazyImage.vue';
export default {
  components: {
    LazyImage,
  },
  data() {
    return {
      bannerSrc: '',
      options: [
        {
          title: 'Tiga Opsi, yaitu:',

          information: [
            {
              title: 'Switch ke paket Tahunan, dengan harga yang sama',
              text: 'Canva Tim Rp545.000/tahun',
              img: '/images/canva-migration/icons/switch.svg',
            },
            {
              title: 'Tetap di paket Bulanan, dengan harga yang baru',
              text: 'Per cycle berikutnya akan dikenakan harga bulanan baru',
              img: '/images/canva-migration/icons/calendar.svg',
            },
            {
              title: 'Berhenti Berlangganan',
              text: 'Tidak lanjut berlangganan setelah masa berlangganan habis',
              img: '/images/canva-migration/icons/stop.svg',
            },
          ],
        },
        {
          title:
            'User wajib mengirimkan konfirmasi opsi yang dipilih, paling lambat pada tanggal 10 Juni 2024.',
        },
        {
          title:
            'Pada tanggal 10 Juni 2024, seluruh slot dalam grup akan kami atur ulang.',
        },
      ],
    };
  },
  mounted() {
    this.handleBannerSrc();
    window.addEventListener('resize', this.handleBannerSrc);
  },
  methods: {
    handleBannerSrc() {
      if (window.innerWidth < 600) {
        this.bannerSrc =
          '/images/canva-migration/information-banner/banner-mobile.webp';
      } else
        this.bannerSrc =
          '/images/canva-migration/information-banner/banner.webp';
    },
  },
};
</script>

<style lang="scss" scoped></style>
