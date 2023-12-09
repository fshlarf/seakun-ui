<template>
  <div class="bg-[#EAF9F6] relative z-0">
    <div class="relative w-full overflow-hidden">
      <div class="container pt-14 lg:pt-28 xl:pt-[140px]">
        <div class="lg:grid lg:grid-cols-2 gap-6 items-center">
          <img
            src="/images/seglowup/banner/woman-mobile.webp"
            alt="woman"
            class="w-full max-w-[400px] md:max-w-[350px] mx-auto px-3 lg:hidden mt-7"
          />
          <div>
            <section
              class="bg-[#FFC2D1] px-3 !mx-auto mt-6 lg:mt-0 lg:!mx-0 md:px-4 lg:px-5 h-[43px] md:h-[58px] lg:h-[78px] w-max rounded-t-[40px] rounded-r-[40px] flex items-center gap-1 md:gap-2 lg:gap-3"
            >
              <h3
                class="text-[24px] md:text-[35px] lg:text-[55px] leading-[44px] tracking-[2px] text-white font-[800]"
              >
                SeGlowUp
              </h3>
              <section class="flex items-center h-[45px]">
                <div>
                  <img
                    src="/images/icons/sprinkle.svg"
                    alt="Springkle"
                    class="w-3 lg:w-[19px] transition-all ease-in-out"
                    :class="[showSpark1 ? 'opacity-100' : 'opacity-10']"
                  />
                  <img
                    src="/images/icons/sprinkle.svg"
                    alt="Springkle"
                    class="w-3 lg:w-[19px] transition-all ease-in-out mt-1 lg:mt-2"
                    :class="[showSpark3 ? 'opacity-100' : 'opacity-10']"
                  />
                </div>
                <div>
                  <img
                    src="/images/icons/sprinkle.svg"
                    alt="Springkle"
                    class="w-[16px] lg:w-[30px] transition-all ease-in-out"
                    :class="[showSpark2 ? 'opacity-100' : 'opacity-10']"
                  />
                </div>
              </section>
            </section>
            <section
              class="mt-4 w-max mx-auto lg:mx-0 text-center lg:text-left relative !z-20"
            >
              <h5
                class="text-[24px] md:text-[29px] lg:text-[36px] font-[800] leading-[44px] text-[#2A5446]"
              >
                Glow Up Bareng Seakun
              </h5>
              <p
                class="max-w-[319px] md:max-w-[500px] text-sm md:text-base lg:text-lg text-[#2A5446]"
              >
                Cantik bersama dengan biaya yang lebih terjangkau! Cari teman
                treatment bareng di klinik kecantikan favoritmu dengan mudah dan
                aman lewat Seakun.
              </p>
              <Button
                label="Lihat Layanan"
                class="text-[20px] md:text-[24px] lg:text-[28px] font-bold mt-6 lg:mt-8 bg-[#08A081] text-white rounded-lg w-full md:w-[240px] h-[52px] md:h-[62px] lg:h-[72px]"
                @click="onClickOrder"
              />
            </section>
          </div>
          <div class="hidden lg:block lg:!w-[500px] xl:!w-[690px]">
            <img
              src="/images/seglowup/banner/woman.webp"
              alt="seglowup"
              class="!w-[690px]"
            />
          </div>
        </div>
      </div>
      <div class="hidden lg:block absolute -bottom-28 left-[48%] -z-10 w-full">
        <img
          src="/images/seglowup/banner/shape.png"
          alt="shapes"
          class="!w-[85%]"
        />
      </div>
    </div>

    <div class="bg-[#D5F5EF] w-full mt-8 lg:mt-0">
      <div
        class="container flex items-center h-[80px] md:h-[95px] lg:h-[120px]"
        :class="`${isMobile ? 'justify-around' : 'justify-between'}`"
      >
        <img
          src="/images/product/zap.svg"
          alt="zap"
          class="w-[62px] h-[28px] md:w-[90px] md:h-[38px] lg:w-[120px] lg:h-[54px]"
          v-for="(zap, id) in isMobile ? 4 : 5"
          :key="id"
        />
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
      showSpark1: false,
      showSpark2: false,
      showSpark3: false,
      isMobile: true,
    };
  },
  mounted() {
    setInterval(async () => {
      this.showSpark1 = !this.showSpark1;
      await this.waitForTimeout(100);
      this.showSpark2 = !this.showSpark2;
      await this.waitForTimeout(100);
      this.showSpark3 = !this.showSpark3;
    }, 500);
    this.defineIsMobile();
  },
  methods: {
    defineIsMobile() {
      let displayWidth = window.innerWidth;
      this.isMobile = displayWidth <= 400;
    },
    onClickOrder() {
      const penggunaSection = document.getElementById('service-seglowup');
      penggunaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
    waitForTimeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>

<style></style>
