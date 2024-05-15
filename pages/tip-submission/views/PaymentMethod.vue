<template>
  <div class="w-full mt-[24px] md:mt-[28px]">
    <h2 class="text-base text-[#2D2D2D]/80">Kirim TIP melalui</h2>
    <div class="mt-2 md:mt-4 grid grid-cols-5 gap-[8px] md:gap-[16px]">
      <div
        @click="selectMethod(method)"
        v-for="(method, id) in methodList"
        :key="id"
        class="rounded-[5px] w-full h-[44px] md:h-[80px] flex justify-center items-center border p-2 md:p-4 relative z-0"
        :class="`${
          method.code == selectedMethod.code
            ? 'border-primary  bg-[#E9F8F5]'
            : 'border-[#A0A3BD]/[15%]'
        } ${
          method.isVa && !isAllowVa ? 'cursor-not-allowed' : 'cursor-pointer'
        }`"
      >
        <div
          v-if="method.isVa && !isAllowVa"
          class="absolute z-10 top-0 left-0 rounded-[5px] bg-white/60 w-full h-full"
        ></div>
        <img
          :src="`/images/payment/${method.slug}.png`"
          alt="metode pembayaran"
          class="w-[70px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    methodList: {
      type: Array,
      default: [],
    },
    selectedMethod: {
      type: Object,
      default: () => {},
    },
    isAllowVa: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectMethod(method) {
      if (!method.isVa || (method.isVa && this.isAllowVa)) {
        this.$emit('selectMethod', method);
      }
    },
  },
};
</script>

<style></style>
