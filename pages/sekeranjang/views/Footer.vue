<template>
  <div class="lg:pt-6 xl:pt-12 tn:mt-20 bg-white">
    <div
      class="!container p-4 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-5 lg:gap-8 lg:justify-center"
    >
      <div
        class="tn:mt-7 max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16"
      >
        <p class="tn:text-sm md:text-base text-[#474747] my-2 space-y-1">
          Platform pertama di Indonesia yang memberikan layanan Berlangganan
          Bersama agar dapat menikmati fitur premium dengan proses berlangganan
          yang praktis, legal, aman dan murah
        </p>
        <div class="flex space-x-2 xl:space-x-3 my-3">
          <a href="https://instagram.com/official.seakun" target="_blank"
            ><img src="/images/footer/instagram2.svg" alt="instagram icon"
          /></a>
          <a href="https://twitter.com/seakun_id" target="_blank"
            ><img src="/images/footer/twitter2.svg" alt="twitter icon"
          /></a>
          <a href="https://www.linkedin.com/company/seakun-id/" target="_blank"
            ><img src="/images/footer/youtube2.svg" alt="youtube icon"
          /></a>
        </div>
      </div>
      <div class="tn:my-4 md:mt-0">
        <h1 class="font-bold tn:text-lg md:text-[20px] tn:my-8 lg:mb-4 xl:mb-8">
          Seakun.id
        </h1>
        <ul
          class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4 text-[#474747]"
        >
          <li @click="scrollTo('about-us')">
            <nuxt-link class="hover:no-underline" to="/"
              >Tentang Kami</nuxt-link
            >
          </li>
          <li @click="scrollTo('orderFlow')">
            <nuxt-link class="hover:no-underline" to="/">Cara Pesan</nuxt-link>
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
        <h1 class="font-bold tn:text-lg md:text-[20px] tn:my-8 lg:mb-4 xl:mb-8">
          Produk Non-Digital
        </h1>
        <ul
          class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4 text-[#474747]"
        >
          <li @click="scrollTo('provider')">
            <nuxt-link class="hover:no-underline" to="/">Sefitness</nuxt-link>
          </li>
          <li @click="scrollTo('product-ondemand')">
            <nuxt-link class="hover:no-underline" to="/">Buy 1 Get 1</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/">Sekelas</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/">Sekantor</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/">Sequrban</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="tn:my-4 lg:mt-0">
        <h1 class="font-bold tn:text-lg md:text-[20px] tn:my-8 lg:mb-4 xl:mb-8">
          Reach Us
        </h1>
        <div
          class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4 text-[#474747]"
        >
          <div class="flex space-x-2">
            <img src="/images/footer/email-icon.svg" alt="#" />
            <a href="mailto:admin@seakun.id">
              <p>admin@seakun.id</p>
            </a>
          </div>
          <div class="flex space-x-2">
            <img src="/images/footer/phone-icon.svg" alt="#" />
            <a href="https://api.whatsapp.com/send?phone=6282124852"
              >+62821 2485 2232</a
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
    <div class="text-center text-[#66738F] tn:py-2 lg:py-4">
      <p>&copy; 2023 PT Seakun Global Teknologi</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHiring: false,
    };
  },
  methods: {
    scrollTo(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  },
};
</script>

<style></style>
