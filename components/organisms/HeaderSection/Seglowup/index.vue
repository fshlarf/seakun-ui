<template>
  <div id="head-glowup" class="relative bg-[#EAF9F6] overflow-hidden">
    <div
      class="absolute top-0 left-0 z-0 w-full tn:h-[411px] xl:h-[520px]"
    ></div>
    <div
      class="lg:pl-[10rem] lg:pr-[33px] pt-20 md:pt-28 lg:pt-36 relative z-20 flex justify-between items-center"
    >
      <div>
        <section
          class="bg-[#FFC2D1] px-5 py-4 w-max rounded-t-[40px] rounded-r-[40px] flex items-center gap-3"
        >
          <h3
            class="text-[55px] leading-[44px] tracking-[2px] text-white font-[800]"
          >
            SeGlowUp
          </h3>
          <section class="flex items-center h-[45px]">
            <div>
              <img
                src="/images/icons/sprinkle.svg"
                alt="Springkle"
                class="w-[19px] transition-all ease-in-out"
                :class="[showSpark1 ? 'opacity-100' : 'opacity-10']"
              />
              <img
                src="/images/icons/sprinkle.svg"
                alt="Springkle"
                class="w-[19px] transition-all ease-in-out mt-2"
                :class="[showSpark3 ? 'opacity-100' : 'opacity-10']"
              />
            </div>
            <div>
              <img
                src="/images/icons/sprinkle.svg"
                alt="Springkle"
                class="w-[30px] transition-all ease-in-out"
                :class="[showSpark2 ? 'opacity-100' : 'opacity-10']"
              />
            </div>
          </section>
        </section>
        <section class="mt-4">
          <h5 class="text-[36px] font-[800] leading-[44px] text-[#2A5446]">
            Seakun Glow Up Bareng
          </h5>
          <p class="max-w-[500px] text-lg text-[#2A5446]">
            Cari teman treatment bareng di klinik kecantikan favoritmu dengan
            mudah, dan aman lewat Seakun Glow Up Bareng.
          </p>
          <Button
            label="Lihat Layanan"
            class="text-[28px] font-bold mt-8 bg-[#08A081] text-white rounded-lg w-[240px] h-[72px]"
          />
        </section>
      </div>
      <div class="">
        <img
          src="/images/seglowup/banner/woman.png"
          alt="woman"
          class="w-[689px] h-[514px]"
        />
        <img
          src="/images/seglowup/banner/shapes.png"
          alt="shapes"
          class="absolute right-0 top-0 -z-10"
        />
      </div>
    </div>
    <div class="w-full bg-[#D5F5EF] flex items-center justify-evenly h-[120px]">
      <img
        src="/images/product/zap.svg"
        alt="zap"
        class="w-[120px] h-[54px]"
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
      const penggunaSection = document.getElementById('service-information');
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
