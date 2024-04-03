<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center z-0"
    v-if="isShow"
    style="font-family: 'DM Sans', sans-serif"
  >
    <div class="mt-[126px] bg-white rounded-[18px] h-min relative">
      <img
        src="/images/ramadan/close.svg"
        alt="close"
        class="absolute w-7 h-7 -right-[10px] -top-[10px] cursor-pointer"
        @click="$emit('handleClose')"
      />
      <img
        src="/images/ramadan/illustration-auth.webp"
        alt="login"
        class="w-[320px] h-[180px]"
      />
      <div class="text-center text-gray-secondary">
        <p class="mt-4 text-lg font-bold mb-2">Kamu Belum Login</p>
        <p class="text-sm">Silakan login untuk mencari THR</p>
        <ButtonVue
          class="text-white bg-primary w-[230px] h-[46px] mb-8 mt-6"
          @click="$router.push('/login')"
          >Login</ButtonVue
        >
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from '../../../atoms/Button.vue';
export default {
  components: {
    ButtonVue,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
