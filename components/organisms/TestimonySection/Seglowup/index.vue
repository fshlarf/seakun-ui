<template>
  <div class="container-semabar" id="testimony-seglowup">
    <div class="mt-6 md:mt-10 lg:mt-[64px] py-6">
      <header
        class="w-full text-center text-[#2A5446] max-w-[928px] mx-auto text-nunito"
      >
        <h1 class="font-bold text-base md:text-xl lg:text-[30px]">
          Testimonial
        </h1>
        <p class="text-sm md:text-base lg:text-lg pt-1 md:pt-2">
          Berikut ini kata mereka yang sudah menggunakan layanan kami.
        </p>
      </header>
      <div class="grid lg:grid-cols-3 gap-6 mt-5 md:mt-6 lg:mt-8">
        <div
          v-for="(testimony, id) in dataTestimony"
          :key="id"
          class="p-5 bg-white rounded-lg text-[11px] md:text-xs text-main md:max-w-[500px] lg:max-w-full mx-auto"
          style="box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.08)"
        >
          <section class="flex gap-5">
            <img
              src="/images/seglowup/testimony/quote.svg"
              alt="quote"
              class="w-6 md:w-8 h-[21px] md:h-7"
            />
            <p class="text-justify">{{ testimony.testimony }}</p>
          </section>
          <section class="mt-[15px] md:mt-5 gap-3 flex">
            <img
              :src="`/images/profile-page/avatar/${testimony.images}.svg`"
              alt="testimony"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="text-xs md:text-sm font-medium">{{ testimony.name }}</p>
              <p class="text-[#2D2D2DCC] pt-1">{{ testimony.address }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTestimony: [
        {
          name: 'Fara Nur Azizah',
          address: 'Balikpapan',
          testimony:
            'aku tuh sebenarnya udah lama ngincer ZAP untuk treatment disana, ternyata di Seakun.id ada Seglowup layanan baru untuk sharing paket series, jauh hemaat banget sih ini untuk 8x treatment di klinik sekelas ZAP 🥹',
          images: 'woman-1',
        },
        {
          name: 'Indriyani Puspita',
          address: 'Jakarta',
          testimony:
            'Akhirnya seakun ada patungan treatment bareng. Dulu sempat boros, tapi pas tau seglowup, ternyata biayanya jauh lebih hemat dong. Ini sih cocok banget buat yang mau glow up tapi tetep pengen hemat juga kaya aku hehe..',
          images: 'woman-2',
        },
        {
          name: 'Marlina Dian Safitri',
          address: 'Jakarta',
          testimony:
            'Biasanya beli treatment series untuk sendiri karena harga per treatment nya jd lebih murah, tp waktu sibuk dan g sempat treatment jd beberapa expired, ternyata di seakun.id ada layanan seGlowUp bisa dicariin temen sharing, tetep dapat harga murah tanpa khawatir expired 🫶🏻',
          images: 'woman-3',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
