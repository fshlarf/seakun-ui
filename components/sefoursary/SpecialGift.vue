<template>
  <div
    class="mt-8 md:mt-12 lg:mt-[50px] xl:mt-[64px]"
    id="sefoursary-special-gift"
  >
    <div class="container-about-us text-center sm:hidden">
      <p class="font-bold text-[20px] pb-4 text-gray-secondary">
        Hadiah Spesial
      </p>
      <img
        src="/images/sefoursary/banner/special-gift-mobile.webp"
        alt="special-gift"
        class="w-full mx-auto"
      />
    </div>
    <div
      class="hidden sm:block w-full bg-[#C6FFFC] py-[60px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
    >
      <div class="container-about-us">
        <p
          class="font-bold md:text-[25px] lg:text-[28px] xl:text-[30px] text-gray-secondary text-center"
        >
          Hadiah Spesial
        </p>
        <div
          class="flex gap-5 flex-wrap justify-center xl:justify-between mx-auto pl-3 lg:pl-0 mt-10 lg:mt-[64px]"
        >
          <section
            v-for="(item, id) in spesialGift"
            :key="id"
            class="w-[156px]"
            :class="[{ '!w-[193px]': id === 5 }]"
          >
            <div
              class="w-[140px] h-[99px] flex flex-col items-center"
              :class="[{ '!w-[193px]': id === 5 }]"
            >
              <img :src="imgSrc(item.image)" :alt="item.image" />
              <img
                v-if="item.secondImage"
                :src="imgSrc(item.secondImage)"
                :alt="item.secondImage"
                class="pt-2"
              />
            </div>
            <div
              class="font-nunito tracking-[-1px] mt-5 text-xs xl:text-sm text-white bg-[#F87C09] rounded px-3 text-center w-[149px] flex justify-center flex-col gap-1 py-2 h-[77px]"
              :class="[{ '!w-[193px]': id === 5 }]"
            >
              <p class="font-extrabold">{{ item.title }}</p>
              <p class="font-medium">{{ item.text }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spesialGift: [
        {
          image: 'spotify',
          secondImage: 'youtube',
          title: 'GRATIS LANGGANAN',
          text: '58 pemenang acak',
        },
        {
          image: 'ewallet',
          title: 'SALDO EWALLET',
          text: '35 pemenang acak',
        },
        {
          image: 'tws',
          title: 'BASEUS TWS',
          text: '3 Pemenang diundi ketika LIVE',
        },
        {
          image: 'smart-phone',
          title: 'SAMSUNG AO5',
          text: '2 pemenang diundi ketika LIVE',
        },
        {
          image: 'smart-tv',
          title: 'TCL SMART TV 40”',
          text: '1 pemenang diundi ketika LIVE',
        },
        {
          image: 'tab',
          title: 'SAMSUNG GALAXY TAB A9+',
          text: '1 pemenang diundi ketika LIVE',
        },
      ],
    };
  },
  methods: {
    imgSrc(name) {
      return `/images/sefoursary/special-gift/${name}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.font-nunito {
  font-family: nunito !important;
}
</style>
