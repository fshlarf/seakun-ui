<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center z-50"
    v-if="isShow"
    style="font-family: 'DM Sans', sans-serif"
  >
    <div class="mt-[126px] bg-white rounded-[20px] h-min relative">
      <img
        src="/images/ramadan/close.svg"
        alt="close"
        class="absolute w-7 h-7 -right-[8px] -top-[8px] cursor-pointer"
        @click="$emit('handleClose')"
      />
      <img
        src="/images/ramadan/gift.webp"
        alt="gift"
        class="w-[330px] h-[247px]"
      />
      <div class="text-center mb-12 mt-6 text-sm text-gray-secondary">
        <div class="flex justify-center items-end gap-3">
          <p class="">Jumlah amplop yang terkumpul:</p>
          <div
            class="bg-[#C8F3EA] rounded-full w-[22px] h-[22px] flex justify-center items-center"
          >
            0
          </div>
        </div>

        <p
          class="text-primary underline mt-5 cursor-pointer"
          @click="$emit('findThr')"
        >
          Ayo temukan THR nya sekarang juga!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
