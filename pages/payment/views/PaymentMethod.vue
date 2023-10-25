<template>
  <div class="w-full mt-[24px] md:mt-[28px]">
    <h2 class="text-sm md:text-[20px] font-bold">Pilih Metode Pembayaran</h2>
    <div class="mt-2 md:mt-4 grid grid-cols-5 gap-[8px] md:gap-[16px]">
      <div
        role="button"
        @click="$emit('selectMethod', method)"
        v-for="(method, id) in methodList"
        :key="id"
        class="rounded-[5px] w-full h-[44px] md:h-[80px] flex justify-center items-center border p-2 md:p-4"
        :class="`${
          method.code == selectedMethod.code
            ? 'border-primary border-2 bg-[#E9FCF8]/30'
            : 'border-slate-100'
        }`"
      >
        <img
          :src="`/images/payment/${method.slug}.png`"
          alt="metode pembayaran"
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
  },
};
</script>

<style></style>
