<template>
  <div
    class="container-about-us pt-8 md:pt-10"
    :style="`margin-top: ${navbarHeight}`"
    id="about-seakun"
  >
    <div>
      <section>
        <header class="flex items-center gap-2 text-sm text-[#6D7588]">
          <img
            src="/images/about-us/icons/home.svg"
            alt="home"
            class="w-[16px]"
          />
          <img
            src="/images/about-us/icons/arrow.svg"
            alt="home"
            class="w-[5px]"
          />
          <p>Tentang Seakun</p>
        </header>
        <div
          class="flex flex-col-reverse lg:flex-row justify-between gap-5 md:gap-8 lg:gap-10 mt-3"
        >
          <div>
            <p
              class="text-green-primary text-[20px] sm:text-xl lg:text-2xl font-extrabold text-center lg:text-left lg:pt-10"
            >
              Kenalan dengan Seakun
            </p>
            <div
              class="text-gray-secondary space-y-3 mt-2 lg:space-y-6 md:mt-4 text-xs sm:text-sm text-justify lg:text-left"
            >
              <p class="leading-5 lg:leading-6">
                <span class="font-bold">
                  PT Seakun Global Teknologi (Seakun.id)</span
                >
                adalah platform patungan layanan premium yang aman, legal, dan
                hemat hingga 70%. Telah melayani lebih dari 75.000 pengguna dan
                350.000 transaksi dengan 41 layanan berbeda. Seakun menawarkan
                berbagai layanan premium seperti Netflix, Spotify dan lainnya.
              </p>
              <p class="leading-5 lg:leading-6">
                Kami berkomitmen untuk membantu masyarakat menikmati layanan
                premium secara legal dan terjangkau, menghindarkan dari penipuan
                akun abal-abal. Dengan metode pembayaran beragam, pengingat
                pembayaran, dan layanan pelanggan responsif, Seakun terus
                berinovasi untuk memberikan layanan terbaik.
              </p>
              <p class="leading-5 lg:leading-6">
                Bergabunglah dengan Seakun dan nikmati keuntungan patungan
                layanan premium yang aman dan hemat.
              </p>
            </div>
          </div>
          <div class="bg-[#D2F2EC] lg:bg-transparent rounded-[10px]">
            <img
              src="/images/about-us/illustration/intro-illustration.webp"
              alt="illustration"
              class="mx-auto pt-[29px] w-full pl-[2px] pr-2 lg:p-0"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHeight: null,
    };
  },
  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.getNavbarHeight());
    }
  },
  methods: {
    getNavbarHeight() {
      const navbar = document.getElementById('navbar-about-us');
      if (navbar) {
        this.navbarHeight = `${navbar.offsetHeight}px`;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
