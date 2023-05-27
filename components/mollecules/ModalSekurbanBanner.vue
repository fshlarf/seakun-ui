<template>
  <div
    v-if="show"
    class="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-[910]"
  >
    <!-- dark backdrop layer -->
    <div
      class="z-[920] overflow-auto left-0 top-0 bottom-0 right-0 w-full h-screen fixed bg-black opacity-30"
      @click="onClose"
    ></div>
    <!-- dark backdrop layer -->

    <div class="relative z-[930] w-full">
      <div
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="relative">
          <!-- close modal button -->
          <div
            @click="onClose"
            class="absolute -right-3 -top-3 w-[28px] h-[28px] rounded-full flex justify-center items-center bg-close-btn text-white cursor-pointer"
          >
            <i class="fa-solid fa-times fa-lg"></i>
          </div>
          <!-- close modal button -->

          <div class="cursor-pointer" @click="toSekurbanPage">
            <div class="w-[640px] tn:hidden md:block">
              <img
                class="w-full"
                src="/images/sekurban/popup-banner.png"
                alt="daftar sequrban"
              />
            </div>
            <div class="w-[284px] md:hidden">
              <img
                class="w-full"
                src="/images/sekurban/popup-banner-mobile.png"
                alt="daftar sequrban"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onClose() {
      this.show = false;
    },
    toSekurbanPage() {
      this.$router.push('/sekurban');
    },
  },
};
</script>

<style>
.bg-close-btn {
  background: rgba(0, 0, 0, 0.75);
}
</style>
