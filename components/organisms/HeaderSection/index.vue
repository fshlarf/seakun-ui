<template>
  <div class="relative z-0">
    <div
      class="tn:hidden md:block w-full absolute -z-30 tn:-top-10 md:-top-10 lg:-top-18 xl:-top-60"
    >
      <img
        class="tn:hidden md:block md:w-full tn:h-80 md:h-full"
        src="/images/header-bg.svg"
        alt="Image not found"
      />
    </div>
    <div
      class="tn:hidden md:block flex overflow-x-hidden overflow-y-hidden slider"
    >
      <div class="tn:hidden md:block w-full h-full flex-none slide-first">
        <BannerMain @onClickOrder="onClickOrder" />
      </div>
    </div>
    <div class="relative z-0 pt-20">
      <div
        class="px-3 md:hidden flex overflow-x-auto space-x-3 overflow-y-hidden slider2 place-items-stretch items-stretch"
      >
        <div class="w-full h-auto flex-none md:hidden">
          <BannerMainMobile @clickOrder="onClickOrder" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerMain from '~/components/mollecules/BannerMain.vue';
import BannerSequrban from '~/components/mollecules/BannerSequrban.vue';
import BannerMainMobile from '~/components/mollecules/BannerMainMobile.vue';
import BannerSequrbanMobile from '~/components/mollecules/BannerSequrbanMobile.vue';
export default {
  components: {
    BannerMain,
    BannerSequrban,
    BannerMainMobile,
    BannerSequrbanMobile,
  },
  methods: {
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

<style lang="scss" scoped>
.slider {
  scroll-behavior: smooth;
}
.slider2 {
  scroll-behavior: smooth;
}
.slider::-webkit-scrollbar {
  display: none;
}
.slider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.slider2::-webkit-scrollbar {
  display: none;
}
.slider2 {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
