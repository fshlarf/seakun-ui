<template>
  <div class="bg-[#2D2D2D] tn:p-6 md:p-0">
    <div
      class="!container grid md:grid-cols-4 tn:grid-cols-1 gap-[30px] px-[165px] md:pt-[96px] md:pb-[117px]"
    >
      <div class="md:hidden tn:block">
        <Logo label="Seakun.id" />
      </div>
      <div class="row-span-2">
        <div class="text-sm text-[#EFEFEF]">
          Platform pertama di Indonesia yang memberikan layanan Berlangganan
          Bersama agar dapat menikmati fitur premium, dengan proses berlangganan
          yang praktis, legal, aman, dan murah.
        </div>
        <div class="flex space-x-2 xl:space-x-3 mt-6">
          <a href="https://instagram.com/official.seakun" target="_blank"
            ><img src="/images/footer/instagram.svg" alt="instagram icon"
          /></a>
          <a href="https://twitter.com/seakun_id" target="_blank"
            ><img src="/images/footer/twitter.svg" alt="twitter icon"
          /></a>
          <a href="https://www.linkedin.com/company/seakun-id/" target="_blank"
            ><img src="/images/footer/linkedin.svg" alt="linkedin icon"
          /></a>
        </div>
      </div>
      <div class="text-[#EFEFEF]">
        <h1 class="font-bold text-xl">Seakun.id</h1>
        <ul class="md:text-sm mt-6 space-y-3">
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
              >Pusat Bantuan</a
            >
          </li>
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Karir
              <span class="hiring text-primary font-mono pl-2">
                we're hiring</span
              >
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="text-[#EFEFEF]">
        <h1 class="font-bold text-xl">Produk</h1>
        <ul class="md:text-sm space-y-4 pt-[24px]">
          <li @click="scrollTo('provider')">
            <nuxt-link class="hover:no-underline" to="/"
              >Produk Digital</nuxt-link
            >
          </li>
          <li @click="scrollTo('product-ondemand')">
            <nuxt-link class="hover:no-underline" to="/"
              >Produk on Demand</nuxt-link
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
          <li>
            <nuxt-link class="hover:no-underline" to="/"
              >Pusat Bantuan</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="text-[#EFEFEF]">
        <h1 class="font-bold text-md">Reach Us</h1>
        <div class="text-sm pt-[24px] space-y-4">
          <div class="flex space-x-2">
            <img src="/images/footer/email-icon.svg" alt="#" />
            <a href="mailto:cs@seakun.id">
              <p>cs@seakun.id</p>
            </a>
          </div>
          <div class="flex space-x-2">
            <img src="/images/footer/phone-icon.svg" alt="#" />
            <a href="https://api.whatsapp.com/send?phone=6282124852232"
              >+62 857 7464 2738</a
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
    <div class="text-center text-sm text-[#EFEFEF] pb-4 md:block tn:hidden">
      Copyright &copy; 2021 Seakun.id. All rights reserved
    </div>
  </div>
</template>
<script>
import Logo from '~/pages/seatap/views/Logo.vue';

export default {
  components: {
    Logo,
  },
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
