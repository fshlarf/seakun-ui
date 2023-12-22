<template>
  <div class="footer lg:pt-6 xl:pt-12 mt-12">
    <div
      class="tn:px-3 md:!container text-white p-4 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-5 lg:gap-8 lg:justify-center"
    >
      <div class="max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16">
        <div class="tn:mt-8 tn:mb-6 md:mb-9">
          <img
            class="tn:h-[30px]"
            src="/images/navbar/brand_seakun.svg"
            alt="tentang seakun"
          />
        </div>
        <p class="tn:text-sm md:text-base my-2 space-y-1">
          Platform pertama di Indonesia yang memberikan layanan Berlangganan
          Bersama agar dapat menikmati fitur premium dengan proses berlangganan
          yang praktis, legal, aman dan murah
        </p>
        <div class="flex space-x-2 xl:space-x-3 my-3">
          <a href="https://instagram.com/seakun.id" target="_blank"
            ><img src="/images/footer/instagram.svg" alt="instagram icon"
          /></a>
          <a href="https://twitter.com/OfficialSeakun" target="_blank"
            ><img src="/images/footer/twitter.svg" alt="twitter icon"
          /></a>
          <a href="https://www.linkedin.com/company/seakun-id/" target="_blank"
            ><img src="/images/footer/linkedin.svg" alt="linkedin icon"
          /></a>
        </div>
      </div>
      <div class="tn:my-4 md:mt-0">
        <h1 class="font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8">
          Seakun
        </h1>
        <ul class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4">
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Tentang Kami</nuxt-link
            >
          </li>
          <li @click="scrollTo('flow-semabar')">
            <nuxt-link class="hover:no-underline" to="/semabar"
              >Cara Pesan</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/terms-of-use"
              >Syarat dan Ketentuan</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Kebijakan Privasi</nuxt-link
            >
          </li>
          <li>
            <a
              class="hover:no-underline"
              href="https://forms.gle/t1AbaxnjEtJr8NAPA"
              target="_blank"
              >Laporan Kendala</a
            >
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Karir
              <span v-if="isHiring" class="hiring text-primary font-mono">
                ..we're hiring</span
              >
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="tn:my-4 lg:mt-0">
        <h1 class="font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8">
          Produk
        </h1>
        <ul class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4">
          <li @click="scrollTo('provider')">
            <nuxt-link class="hover:no-underline" to="/"
              >Produk Digital</nuxt-link
            >
          </li>
          <li @click="scrollTo('product-ondemand')">
            <nuxt-link class="hover:no-underline" to="/"
              >Produk Non Digital</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Program Patungan</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Program Sekeranjang</nuxt-link
            >
          </li>
          <li class="relative max-w-max">
            <nuxt-link class="hover:no-underline" to="/sekurban"
              >Sequrban</nuxt-link
            >
            <img
              class="transition-opacity ease-in-out delay-50 duration-500 absolute top-0 -right-1 w-[9px]"
              :class="`${showSpark1 ? 'opacity-100' : 'opacity-20'}`"
              src="/images/icons/atoms/spark.svg"
              alt="spark"
            />
            <img
              class="transition-opacity ease-in-out delay-50 duration-500 absolute bottom-1 -right-2 w-[8px]"
              :class="`${showSpark2 ? '!opacity-100' : '!opacity-20'}`"
              src="/images/icons/atoms/spark.svg"
              alt="spark"
            />
            <img
              class="transition-opacity ease-in-out delay-50 duration-500 absolute top-0 -right-4 w-[12px]"
              :class="`${showSpark3 ? '!opacity-100' : '!opacity-20'}`"
              src="/images/icons/atoms/spark.svg"
              alt="spark"
            />
          </li>
        </ul>
      </div>
      <div class="tn:my-4 lg:mt-0">
        <h1 class="font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8">
          Hubungi Kami
        </h1>
        <div class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4">
          <div class="flex space-x-2">
            <img src="/images/footer/email-icon.svg" alt="#" />
            <a href="mailto:cs@seakun.id">
              <p>cs@seakun.id</p>
            </a>
          </div>
          <!-- <div class="flex space-x-2">
            <img src="/images/footer/telegram.svg" alt="#" />
            <a href="https://t.me/seakunid">@seakunid (telegram)</a>
          </div> -->
          <div class="flex space-x-2 items-center">
            <img src="/images/footer/whatsapp.svg" alt="#" />
            <a href="https://api.whatsapp.com/send?phone=6282124852232"
              >082124852232</a
            >
          </div>
          <div class="flex space-x-2 items-start">
            <img class="ml-1" src="/images/footer/time-circle.svg" alt="#" />
            <div class="space-y-1">
              <p class="font-bold">Jam Operasional</p>
              <p>Setiap Hari</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center text-white tn:py-2 lg:py-4">
      <p>&copy; 2023 PT Seakun Global Teknologi</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHiring: false,
      showSpark1: false,
      showSpark2: false,
      showSpark3: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.showSpark1 = !this.showSpark1;
    }, 700);
    setInterval(() => {
      this.showSpark2 = !this.showSpark2;
    }, 800);
    setInterval(() => {
      this.showSpark3 = !this.showSpark3;
    }, 900);
  },
  methods: {
    scrollTo(id) {
      const currentPath = this.$nuxt.context.route.path;
      const segments = currentPath.split('/');
      const lastSegment = segments.slice(1).join('/');
      const navbarElement = document.getElementById('navbar');
      if (lastSegment == 'semabar' && navbarElement) {
        const heightNavbar = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
          top:
            document.getElementById(id).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            heightNavbar,
          behavior: 'smooth',
        });
      } else {
        this.$router.push('/semabar');
      }
    },
  },
};
</script>

<style>
.footer {
  background-color: #2d2d2d;
}
</style>
