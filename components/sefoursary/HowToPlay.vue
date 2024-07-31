<template>
  <div
    class="container-about-us mt-8 md:mt-12 lg:mt-[90px] xl:mt-[124px]"
    id="sefoursary-how-to-play"
  >
    <div class="flex justify-center md:gap-[35px] xl:gap-[56px]">
      <section class="bg-[#E4F6F5] md:!bg-white rounded-xl p-5 md:p-0 h-min">
        <div
          class="flex items-center gap-1 md:gap-3 justify-center md:bg-[#C3F8ED] lg:py-2 md:rounded-[10px]"
        >
          <p
            class="text-[#2D2D2D] md:text-[#0D8B71] text-[20px] lg:text-[28px] font-bold"
          >
            Cara Main
          </p>
          <img
            src="/images/sefoursary/icons/game.svg"
            alt="game"
            class="w-6 h-6 md:hidden"
          />
          <img
            src="/images/sefoursary/icons/game-green.svg"
            alt="game"
            class="w-8 h-8 hidden md:block"
          />
        </div>
        <div class="space-y-[10px] mt-4">
          <div
            v-for="(item, id) in howToPlay"
            :key="id"
            class="flex gap-2 items-center relative h-8"
          >
            <div
              class="font-bold text-xs text-white bg-[#08A081] rounded-full relative"
            >
              <p class="w-5 h-5 flex justify-center items-center">
                {{ id + 1 }}
              </p>
              <div
                class="w-[3px] h-[14px] rounded-[30px] bg-[#41CCB0] absolute line-top right-1/2 translate-x-1/2 items-end"
                :class="[{ hidden: id + 1 === howToPlay.length }]"
              ></div>
            </div>
            <p
              class="text-gray-secondary font-bold lg:font-extrabold text-xs md:text-sm lg:text-[15px]"
              :class="[{ 'padding__text d': id + 1 === howToPlay.length }]"
            >
              {{ item.step }}
            </p>
          </div>
        </div>
      </section>
      <div class="lg:mt-[-48px] xl:mt-[-71px] hidden lg:block">
        <img
          src="/images/sefoursary/illustration/roadmap.webp"
          alt="game"
          class="h-[330px] xl:h-[479px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      howToPlay: [
        {
          step: 'Login dulu di halaman Seakun',
        },
        {
          step: 'Buka halaman Sefourserry',
        },
        {
          step: `Klik ‘Main Sekarang’`,
        },
        {
          step: 'Jawab pertanyaan atau challenge di setiap levelnya',
        },
        {
          step:
            'Dapatkan hadiah langsung ataupun nomor undian di setiap checkpoint',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.line-top {
  top: calc(100% + 4px);
}

@media screen and (max-width: 501px) {
  .padding__text {
    padding-top: 8px;
  }
}

@media screen and (min-width: 768px) {
  .padding__text {
    padding-top: 12px;
  }
}

@media screen and (min-width: 1024px) {
  .padding__text {
    padding-top: 17px;
  }
}
</style>
