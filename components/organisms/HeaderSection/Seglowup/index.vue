<template>
  <div id="head-glowup" class="relative bg-[#EAF9F6] overflow-hidden">
    <div
      class="absolute top-0 left-0 z-0 w-full tn:h-[411px] xl:h-[520px]"
    ></div>

    <div
      class="lg:pl-[2rem] xl:pl-[10rem] lg:pr-[33px] pt-20 md:pt-28 lg:pt-36 relative z-20 md:gap-10 lg:gap-0 md:flex justify-between items-center"
    >
      <img
        src="/images/seglowup/banner/woman-mobile.webp"
        alt="woman"
        class="w-full mx-auto px-3 h-[345px] lg:hidden"
      />
      <div>
        <section
          class="bg-[#FFC2D1] px-3 mx-auto mt-6 lg:mt-0 md:mx-0 md:px-4 lg:px-5 h-[43px] md:h-[58px] lg:h-[78px] w-max rounded-t-[40px] rounded-r-[40px] flex items-center gap-1 md:gap-2 lg:gap-3"
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
                class="w-4 lg:w-[19px] transition-all ease-in-out"
                :class="[showSpark1 ? 'opacity-100' : 'opacity-10']"
              />
              <img
                src="/images/icons/sprinkle.svg"
                alt="Springkle"
                class="w-4 lg:w-[19px] transition-all ease-in-out mt-2"
                :class="[showSpark3 ? 'opacity-100' : 'opacity-10']"
              />
            </div>
            <div>
              <img
                src="/images/icons/sprinkle.svg"
                alt="Springkle"
                class="w-[20px] lg:w-[30px] transition-all ease-in-out"
                :class="[showSpark2 ? 'opacity-100' : 'opacity-10']"
              />
            </div>
          </section>
        </section>
        <section class="mt-4 w-max mx-auto text-center md:text-left">
          <h5
            class="text-[24px] md:text-[29px] lg:text-[36px] font-[800] leading-[44px] text-[#2A5446]"
          >
            Seakun Glow Up Bareng
          </h5>
          <p
            class="max-w-[319px] md:max-w-[400px] lg:max-w-[500px] text-sm md:text-base lg:text-lg text-[#2A5446]"
          >
            Cari teman treatment bareng di klinik kecantikan favoritmu dengan
            mudah, dan aman lewat Seakun Glow Up Bareng.
          </p>
          <Button
            label="Lihat Layanan"
            class="text-[20px] md:text-[24px] lg:text-[28px] font-bold mt-6 lg:mt-8 bg-[#08A081] text-white rounded-lg w-full md:w-[240px] h-[52px] md:h-[62px] lg:h-[72px]"
            @click="onClickOrder"
          />
        </section>
      </div>
      <div class="hidden lg:block">
        <img
          src="/images/seglowup/banner/woman.webp"
          alt="woman"
          class="xl:w-[689px] w-[589px] lg:h-[414px] xl:h-[514px]"
        />

        <img
          src="/images/seglowup/banner/shapes.png"
          alt="shapes"
          class="absolute right-0 top-[90px] xl:top-0 -z-10 w-[520px] xl:w-[750px]"
        />
      </div>
    </div>
    <div
      class="w-full bg-[#D5F5EF] flex items-center justify-evenly h-[80px] md:h-[95px] lg:h-[120px] mt-8 lg:mt-0"
    >
      <img
        src="/images/product/zap.svg"
        alt="zap"
        class="w-[62px] h-[28px] md:w-[90px] md:h-[38px] lg:w-[120px] lg:h-[54px]"
        :class="{ hidden: id === 4 }"
        v-for="(zap, id) in 5"
        :key="id"
      />
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
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.showSpark1 = !this.showSpark1;
    // }, 600);
    // setInterval(() => {
    //   this.showSpark2 = !this.showSpark2;
    // }, 700);
    // setInterval(() => {
    //   this.showSpark3 = !this.showSpark3;
    // }, 800);
    setInterval(async () => {
      this.showSpark1 = !this.showSpark1;
      await this.waitForTimeout(100);
      this.showSpark2 = !this.showSpark2;
      await this.waitForTimeout(100);
      this.showSpark3 = !this.showSpark3;
    }, 500);
  },
  methods: {
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

<style>
#head-glowup {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
