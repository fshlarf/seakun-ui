<template>
  <div id="product-detail-sekurban" class="container-sekurban-new my-5">
    <div class="my-5 lg:py-10">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-9">
        <div class="relative w-full h-[220px] md:h-[280px] block lg:hidden">
          <div
            class="cow-gallery w-full mx-auto overflow-hidden rounded-[12px] relative"
          >
            <div
              @click="slideLeft"
              class="absolute left-[24px] top-1/2 transform -translate-y-1/2 w-[38px] h-[38px] rounded-full flex justify-center items-center cursor-pointer z-10"
              :class="{
                'bg-[#83CFC0]': activeSlider === 1,
                'bg-chevron hover:bg-primary/80': activeSlider !== 1,
              }"
            >
              <img
                src="/images/icons/atoms/chevron-white-left.svg"
                alt="chevron"
              />
            </div>
            <div
              @click="slideRight"
              class="absolute right-[24px] top-1/2 transform -translate-y-1/2 rotate-180 w-[38px] h-[38px] rounded-full flex justify-center items-center cursor-pointer z-10"
              :class="{
                'bg-[#83CFC0]': activeSlider === cowImages.length,
                'bg-chevron hover:bg-primary/80':
                  activeSlider !== cowImages.length,
              }"
            >
              <img
                src="/images/icons/atoms/chevron-white-left.svg"
                alt="chevron"
              />
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex justify-center items-center space-x-2 z-10"
            >
              <div
                v-for="(cow, id) in cowImages"
                :key="id"
                @click="activeSlider = id + 1"
                class="rounded-full transition-all ease-in-out delay-50"
                :class="`${
                  activeSlider === id + 1
                    ? 'w-[6px] h-[6px] bg-primary'
                    : 'w-[6px] h-[6px] bg-white cursor-pointer'
                }`"
              ></div>
            </div>
            <div>
              <img
                :src="`/images/sekurban-new/cow/cow-${activeSlider}.jpg`"
                alt="foto sapi"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[322px] md:mt-[250px] mt-6 lg:mt-0">
          <div
            class="text-xs md:text-sm font-bold bg-[#C0F5EA] text-primary py-1 lg:py-1.5 px-2 lg:px-3 inline-block rounded-lg"
          >
            Detail Hewan Qurban
          </div>
          <h1 class="text-xl md:text-3xl font-bold mt-2 mb-1 lg:mb-3">
            Detail Sapi Qurban
          </h1>
          <p class="text-xs md:text-sm font-normal leading-[22px]">
            Berikut ini detail hewan sapi yang akan menjadi hewan qurban pada
            Program Patungan Qurban yang diadakan oleh Seakun, Kitabisa dan
            Ecoqurban.
          </p>

          <div class="grid grid-cols-2 gap-4 lg:hidden mt-2">
            <div
              v-for="(cow, id) in cowInformations"
              :key="id"
              class="bg-[#E2F4EF] rounded-[10px] py-3 px-4"
            >
              <div class="flex-col items-center">
                <div class="flex items-center gap-2 mb-1">
                  <img :src="cow.icon" class="h-[16px]" />
                  <p class="text-xs md:text-sm font-normal text-main/50">
                    {{ cow.label }}
                  </p>
                </div>
                <p class="text-xs md:text-sm font-semibold text-main">
                  {{ cow.data }}
                </p>
              </div>
            </div>
          </div>

          <button
            class="bg-primary text-base w-full lg:w-[276px] md:text-[22px] font-bold text-white px-12 py-3 mt-6 lg:mt-8"
          >
            Lihat Layanan
          </button>
        </div>
        <div class="relative w-[467px] hidden lg:block">
          <div
            @click="slideLeft"
            class="absolute left-[24px] top-1/2 transform -translate-y-1/2 -translate-x-0 w-[38px] h-[38px] rounded-full flex justify-center items-center cursor-pointer"
            :class="{
              'bg-[#83CFC0]': activeSlider === 1,
              'bg-chevron hover:bg-primary/80': activeSlider !== 1,
            }"
          >
            <img
              src="/images/icons/atoms/chevron-white-left.svg"
              alt="chevron"
            />
          </div>
          <div
            @click="slideRight"
            class="absolute right-[24px] top-1/2 transform -translate-y-1/2 translate-x-0 rotate-180 w-[38px] h-[38px] rounded-full flex justify-center items-center cursor-pointer"
            :class="{
              'bg-[#83CFC0]': activeSlider === cowImages.length,
              'bg-chevron hover:bg-primary/80':
                activeSlider !== cowImages.length,
            }"
          >
            <img
              src="/images/icons/atoms/chevron-white-left.svg"
              alt="chevron"
            />
          </div>
          <div
            class="cow-gallery w-full mx-auto lg:w-[467px] overflow-hidden rounded-[12px]"
          >
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
                    ? 'w-[6px] h-[6px] bg-primary'
                    : 'w-[6px] h-[6px] bg-white cursor-pointer'
                }`"
              ></div>
            </div>
            <div>
              <img
                :src="`/images/sekurban-new/cow/cow-${activeSlider}.jpg`"
                alt="foto sapi"
                class="w-[467px] h-[320px]"
              />
            </div>
          </div>
        </div>
        <div class="w-[236px] hidden lg:block">
          <div class="flex flex-col gap-4">
            <div class="bg-[#EBFAF6] rounded-[10px] py-3 px-4">
              <div class="flex gap-2 items-center">
                <div
                  class="bg-[#C9ECE3] flex justify-center items-center rounded-lg h-[44px] w-[44px]"
                >
                  <img
                    src="/images/sekurban-new/icons/cow.png"
                    class="h-[16.63px]"
                  />
                </div>

                <div>
                  <span class="text-sm font-normal text-main/50 mb-1"
                    >Jenis sapi</span
                  >
                  <p class="text-base font-medium text-main">
                    Sapi Kupang / Bali
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-[#EBFAF6] rounded-[10px] py-3 px-4">
              <div class="flex gap-2 items-center">
                <div
                  class="bg-[#C9ECE3] flex justify-center items-center rounded-lg h-[44px] w-[44px]"
                >
                  <img src="/images/sekurban-new/icons/bobot.png" class="h-6" />
                </div>

                <div>
                  <span class="text-sm font-normal text-main/50 mb-1"
                    >Bobot sapi</span
                  >
                  <p class="text-base font-semibold text-main">
                    Minimal 200 KG
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-[#EBFAF6] rounded-[10px] py-3 px-4">
              <div class="flex gap-2 items-center">
                <div
                  class="bg-[#C9ECE3] flex justify-center items-center rounded-lg h-[44px] w-[44px]"
                >
                  <img src="/images/sekurban-new/icons/date.svg" class="h-6" />
                </div>

                <div>
                  <span class="text-sm font-normal text-main/50 mb-1"
                    >Umur sapi</span
                  >
                  <p class="text-base font-semibold text-main">Cukup Umur</p>
                </div>
              </div>
            </div>
            <div class="bg-[#EBFAF6] rounded-[10px] py-3 px-4">
              <div class="flex gap-2 items-center">
                <div
                  class="bg-[#C9ECE3] flex justify-center items-center rounded-lg h-[44px] w-[44px]"
                >
                  <img
                    src="/images/sekurban-new/icons/heart.svg"
                    class="h-[22px]"
                  />
                </div>

                <div>
                  <span class="text-sm font-normal text-main/50 mb-1"
                    >Kondisi sapi</span
                  >
                  <p class="text-base font-semibold text-main">
                    Sehat & Bebas PMK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          icon: '/images/sekurban-new/icons/cow.png',
          label: 'Jenis sapi',
          data: 'Sapi Kupang / Bali',
        },
        {
          icon: '/images/sekurban-new/icons/bobot.png',
          label: 'Bobot sapi',
          data: 'Minimal 200 KG',
        },
        {
          icon: '/images/sekurban-new/icons/date.svg',
          label: 'Umur sapi',
          data: 'Cukup Umur',
        },
        {
          icon: '/images/sekurban-new/icons/heart.svg',
          label: 'Kondisi sapi',
          data: 'Sehat & Bebas PMK',
        },
      ],
      cowImages: [
        {
          img: '/images/sekurban-new/cow/cow-1.jpg',
        },
        {
          img: '/images/sekurban-new/cow/cow-2.jpg',
        },
        {
          img: '/images/sekurban-new/cow/cow-3.jpg',
        },
        {
          img: '/images/sekurban-new/cow/cow-4.jpg',
        },
        {
          img: '/images/sekurban-new/cow/cow-5.jpg',
        },
        {
          img: '/images/sekurban-new/cow/cow-6.jpg',
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
  background: rgba(8, 160, 129, 1);
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
