<template>
  <div class="container-about-us relative z-40">
    <div
      class="seafoursary__question bg-cover w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] mx-auto mt-[52px] sm:mt-[60px] flex justify-center items-center px-10 pt-[76px] sm:pt-[30px] pb-[55px] sm:pb-0"
    >
      <div>
        <p
          class="text-primary text-sm sm:text-xl md:text-[20px] lg:text-2xl font-extrabold text-center"
        >
          {{ challenge.question }}
        </p>
        <div
          class="flex flex-wrap justify-center mt-4 sm:mt-10 gap-[23px] sm:gap-9"
        >
          <section
            v-for="(item, id) in challenge.answer"
            :key="id"
            @click="onSelect(item.option)"
            class="min-w-[100px] sm:min-w-[169px] text-center bg-[#19C09E] border border-[#15A386] rounded-[15px] text-xs sm:text-base lg:text-[20px] font-extrabold py-2 sm:py-3 cursor-pointer px-2 sm:px-3 text-white leading-[18px]"
          >
            {{ convertNumberToLetter(id) }} {{ item.option }}
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    challenge: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    convertNumberToLetter(number) {
      const letters = ['A.', 'B.', 'C.', 'D.'];
      return letters[number] || '';
    },
    onSelect(answer) {
      const result = answer == this.challenge.answerKey;
      const ctx = {
        selected: answer,
        question: this.challenge,
      };
      this.$emit('onClick', ctx);
    },
  },
};
</script>

<style lang="scss" scoped>
.seafoursary__question {
  background-image: url('/images/sefoursary/background/question.webp');
}
</style>
