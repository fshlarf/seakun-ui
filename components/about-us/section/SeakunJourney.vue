<template>
  <div class="bg-[#F0FFFC]" id="seakun-journey">
    <div
      class="container-about-us py-8 md:py-10 lg:py-12 xl:py-[60px] mt-5 md:mt-8 xl:mt-0"
    >
      <p
        class="text-green-primary text-[20px] sm:text-xl lg:text-2xl font-extrabold text-center"
      >
        Seakun Journey
      </p>
      <p
        class="text-gray-secondary text-xs md:text-sm text-center pt-2 max-w-[289px] sm:max-w-none mx-auto"
      >
        Berikut ini perjalanan singkat Seakun untuk terus mengembangkan dan
        memberikan pelayanan terbaik bagi penggunanya.
      </p>
      <div class="jorney-wrapper overflow-x-scroll mt-6 md:mt-8 lg:mt-10">
        <div class="flex w-max">
          <section v-for="(about, idx) in seakunJourney" :key="idx">
            <header v-if="about.year" class="flex gap-2 items-center">
              <img src="/images/about-us/icons/date.svg" alt="date" />
              <p
                class="text-gray-secondary text-base md:text-lg font-extrabold"
              >
                {{ about.year }}
              </p>
            </header>
            <div class="flex mt-4">
              <section v-for="(item, idx) in about.journey">
                <div class="relative">
                  <img
                    src="/images/about-us/icons/circle-ellipse.svg"
                    alt="desc"
                    class="z-20 relative"
                  />
                  <div
                    class="h-[3px] absolute left-0 right-0 bg-[#8FDFCE] top-1/2 -translate-y-1/2"
                  ></div>
                </div>

                <p
                  class="max-w-[316px] mr-[20px] md:max-w-[400px] md:mr-[40px] lg:max-w-[354px] lg:mr-[64px] pt-4 text-xs text-black leading-[22px]"
                >
                  {{ item.description }}
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import journey from './../../../pages/journey/index.vue';
import { seakunJourney } from '../../../constants/about-us';
export default {
  components: { journey },
  data() {
    return {
      seakunJourney,
    };
  },
};
</script>

<style lang="scss" scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.jorney-wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.jorney-wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
