<template>
  <div id="head" class="relative">
    <div
      class="absolute top-0 left-0 z-0 w-full tn:h-[411px] xl:h-[520px] bg-header"
    ></div>
    <div
      class="tn:px-[24px] md:!container tn:pt-20 md:pt-28 lg:pt-36 relative z-20"
    >
      <div
        class="w-full rounded-2xl bg-banner flex tn:flex-col md:flex-row md:justify-between md:items-end tn:py-8 md:p-0"
      >
        <div
          class="tn:pt-[10px] md:py-[32px] lg:py-[42px] tn:px-[24px] md:pl-[40px] lg:pl-[63px] md:pr-0 md:w-[620px] lg:w-[610px] tn:order-2 md:order-1"
        >
          <h1
            class="font-extrabold tn:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] text-[#15382F] tn:leading-snug xl:leading-[62px] tn:text-center md:text-left"
          >
            Patungan Layanan Premium
            <span
              v-if="typedText"
              class="text-[#A8DFC2] bg-[#15382F] tn:px-3"
              >{{ typedText }}</span
            >
          </h1>
          <p
            class="text-dark-green tn:text-[16px] lg:text-[24px] tn:mt-3 tn:text-center md:text-left leading-5"
          >
            Cek pilihan layanan di Seakun sekarang
          </p>
          <Button
            variant="gradient-dark"
            label="Lihat Layanan"
            class="tn:mt-6 xl:mt-12 tn:w-full md:w-auto"
            add-class="text-[24px] font-bold"
            @click="onClickOrder"
          />
        </div>
        <div class="tn:px-[27px] md:px-0 md:pr-[42px] tn:order-1 md:order-2">
          <img
            class="md:w-[450px] lg:w-[445px] mx-auto"
            src="/images/header/header.svg"
            alt="seakun"
          />
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
      textToType: ['Legal', 'Lebih Hemat', 'Aman'],
      currentTextIndex: 0,
      typedText: '',
      currentText: '',
      index: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTextIndex =
        (this.currentTextIndex + 1) % this.textToType.length;
      this.currentText = this.textToType[this.currentTextIndex];
      this.typeText();
    }, 3000);
  },
  methods: {
    typeText() {
      this.index = 0;
      this.typedText = '';
      const typeInterval = setInterval(() => {
        if (this.index < this.currentText.length) {
          this.typedText += this.currentText.charAt(this.index);
          this.index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 75);
    },
    onClickOrder() {
      const penggunaSection = document.getElementById('provider');
      penggunaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  },
};
</script>

<style>
#head {
  font-family: 'Nunito Sans', sans-serif;
}
.bg-header {
  background: linear-gradient(180deg, #e3fcf6 0%, #ffffff 116.06%);
}
.bg-banner {
  background: radial-gradient(
    80.18% 813.47% at 80.18% 92.9%,
    #a8dfc2 0%,
    #8dcabe 100%
  );
}
</style>
