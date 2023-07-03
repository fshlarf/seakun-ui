<template>
  <div
    id="product-detail-sekurban"
    class="container-sekurban tn:pt-12 lg:pt-20 xl:flex xl:justify-between items-center"
  >
    <div
      class="cow-gallery tn:w-full mx-auto lg:w-[700px] xl:w-[528px] overflow-hidden rounded-[15px] relative"
    >
      <div
        @click="slideLeft"
        class="absolute left-[16px] top-1/2 transform -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-chevron flex justify-center items-center cursor-pointer"
      >
        <img src="/images/icons/atoms/chevron-white-left.svg" alt="chevron" />
      </div>
      <div
        @click="slideRight"
        class="absolute right-[16px] top-1/2 transform -translate-y-1/2 rotate-180 w-[38px] h-[38px] rounded-full bg-chevron flex justify-center items-center cursor-pointer"
      >
        <img src="/images/icons/atoms/chevron-white-left.svg" alt="chevron" />
      </div>
      <div
        class="absolute left-1/2 transform -translate-x-1/2 bottom-[15px] flex justify-center items-center space-x-2"
      >
        <div
          v-for="(cow, id) in cowImages"
          :key="id"
          @click="activeSlider = id + 1"
          class="rounded-full transition-all ease-in-out delay-50"
          :class="`${
            activeSlider === id + 1
              ? 'w-[24px] h-[5px] bg-[#00BA88]'
              : 'w-[6px] h-[6px] bg-white cursor-pointer'
          }`"
        ></div>
      </div>
      <!-- <div
        id="cow-slide-container"
        class="flex overflow-x-auto hide-scrollbar cow-slide-container"
      >
        <div
          v-for="(image, id) in cowImages"
          :key="id"
          :id="`slide-${id + 1}`"
          class="w-full flex-none overflow-hidden bg-black cow-img"
        >
          <img class="w-full object-contain" :src="image.img" alt="foto sapi" />
        </div>
      </div> -->
      <div>
        <img
          :src="`/images/sekurban/cow/cow-${activeSlider}.jpg`"
          alt="foto sapi"
        />
      </div>
    </div>
    <div
      class="xl:w-[628px] tn:mt-4 xl:mt-0 lg:grid lg:grid-cols-2 xl:grid-cols-1 lg:items-center"
    >
      <div>
        <h2
          class="text-[#46C3A3] tn:text-[20px] md:text-[26px] lg:text-[32px] tn:font-semibold lg:font-bold"
        >
          Detail Sapi
        </h2>
        <p class="tn:text-[12px] md:text-[16px] lg:text-[18px] tn:mt-1 lg:mt-3">
          Berikut ini merupakan detail hewan sapi yang akan menjadi hewan qurban
          pada Program Patungan Qurban yang diadakan oleh Seakun dan Kitabisa.
        </p>
      </div>
      <div class="flex items-center tn:space-x-2 md:space-x-3 tn:mt-3 xl:mt-6">
        <div
          v-for="(data, id) in cowInformations"
          :key="id"
          class="tn:rounded-[6px] md:rounded-[10px] bg-[#EBFCF7] tn:px-[8px] tn:py-[9px] md:px-[12px] md:py-[14px] tn:w-[75px] tn:h-[81px] md:w-[144px] md:h-[130px]"
        >
          <div
            class="tn:w-[16px] tn:h-[16px] md:w-[32px] md:h-[32px] flex items-end"
          >
            <img :src="data.icon" alt="detail sapi" />
          </div>
          <p class="opacity-50 tn:text-[10px] md:text-[14px] tn:mt-2">
            {{ data.label }}
          </p>
          <p
            class="text-[#15382F] font-medium tn:leading-[14px] md:leading-[22px] tn:text-[10px] md:text-base"
          >
            {{ data.data }}
          </p>
        </div>
      </div>

      <Button
        variant="third"
        add-class="tn:font-semibold lg:font-bold tn:!text-[16px] lg:!text-[20px] tn:!px-6"
        class="tn:mt-4 lg:mt-6 xl:mt-10 tn:w-full md:w-1/2 lg:w-full xl:!max-w-max"
        @click="$emit('onClickOrder')"
        disabled
        >Daftar Sekarang</Button
      >
    </div>
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
      slider: 1,
      activeSlider: 1,
      cowInformations: [
        {
          icon: '/images/sekurban/icons/cow.svg',
          label: 'Jenis sapi',
          data: 'Sapi Kupang / Bali',
        },
        {
          icon: '/images/sekurban/icons/mass.svg',
          label: 'Bobot sapi',
          data: '200+ kg',
        },
        {
          icon: '/images/sekurban/icons/age.svg',
          label: 'Umur sapi',
          data: 'Cukup Umur',
        },
        {
          icon: '/images/sekurban/icons/health.svg',
          label: 'Kondisi sapi',
          data: 'Sehat & Bebas PMK',
        },
      ],
      cowImages: [
        {
          img: '/images/sekurban/cow/cow-1.jpg',
        },
        {
          img: '/images/sekurban/cow/cow-2.jpg',
        },
        {
          img: '/images/sekurban/cow/cow-3.jpg',
        },
        {
          img: '/images/sekurban/cow/cow-4.jpg',
        },
        {
          img: '/images/sekurban/cow/cow-5.jpg',
        },
        {
          img: '/images/sekurban/cow/cow-6.jpg',
        },
      ],
    };
  },
  methods: {
    slideLeft() {
      if (this.activeSlider > 1) {
        this.activeSlider -= 1;
      }
    },
    slideRight() {
      if (this.activeSlider < this.cowImages.length) {
        this.activeSlider += 1;
      }
    },
  },
};
</script>

<style>
.bg-chevron {
  background: rgba(255, 255, 255, 0.35);
}
.cow-slide-container {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  touch-action: none !important;
}
.cow-img {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  touch-action: none !important;
}
</style>
