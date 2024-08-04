<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-50 flex justify-center"
  >
    <div
      v-if="failureType == 'wrong-answer'"
      class="seafoursary__awesome w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] bg-cover mt-[143px] relative flex justify-center items-center"
    >
      <div class="text-center text-gray-secondary font-bold">
        <p class="text-xs sm:text-base">Jawaban kamu salah</p>
        <p class="text-[20px] sm:text-2xl sm:mt-2 mt-1">
          00:0{{ countdownText }}
        </p>
      </div>
      <div
        class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
      >
        <nuxt-link to="/sefoursary/game">
          <section
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
          >
            <p>Menu</p>
            <img
              src="/images/sefoursary/icons/hamburger.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
            />
          </section>
        </nuxt-link>
      </div>
    </div>
    <div
      v-if="failureType == 'not-lucky'"
      class="seafoursary__awesome w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] bg-cover mt-[143px] relative flex justify-center items-center"
    >
      <div class="text-center text-gray-secondary">
        <p class="text-sm sm:text-base font-bold">Kamu belum beruntung.</p>
        <p class="text-xs sm:text-sm sm:mt-2 mt-1">
          Yuk, lanjut ke level selanjutnya!
        </p>
        <img
          src="/images/sefoursary/icons/sad-emoji.svg"
          alt="you're not lucky yet"
          class="w-[60px] sm:w-[85px] mx-auto mt-4 sm:mt-6"
        />
      </div>
      <div
        class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
      >
        <nuxt-link to="/sefoursary/game">
          <section
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
          >
            <p>Menu</p>
            <img
              src="/images/sefoursary/icons/hamburger.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
            />
          </section>
        </nuxt-link>

        <section
          class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center cursor-pointer"
          @click="$emit('onNext')"
        >
          <p>Next Level</p>
          <img
            src="/images/sefoursary/icons/next-level.svg"
            alt="menu"
            class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    failureType: {
      type: String,
      default: 'wrong-answer',
    },
    countdown: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      countdownText: 0,
    };
  },
  mounted() {
    if (this.failureType == 'wrong-answer') {
      this.startCountdown();
    }
  },
  methods: {
    startCountdown() {
      this.countdownText = this.countdown;
      const intervalId = setInterval(() => {
        if (this.countdownText > 1) {
          this.countdownText -= 1;
        } else {
          this.countdownText = 0;
          this.$emit('onClose');
          clearInterval(intervalId);
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.seafoursary__awesome {
  background-image: url('/images/sefoursary/background/failure.webp');
}
</style>
