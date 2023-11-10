<template>
  <div class="w-full mt-[24px] md:mt-[28px]">
    <h2 class="text-sm md:text-[20px] font-bold">Pilih Metode Pembayaran</h2>
    <div class="mt-2 md:mt-4 grid grid-cols-5 gap-[8px] md:gap-[16px]">
      <div
        @click="selectMethod(method)"
        v-for="(method, id) in methodList"
        :key="id"
        class="rounded-[5px] w-full h-[44px] md:h-[80px] flex justify-center items-center border p-2 md:p-4 relative z-0"
        :class="`${
          method.code == selectedMethod.code
            ? 'border-primary border-2 bg-[#E9FCF8]/30'
            : 'border-slate-100'
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
        />
      </div>
    </div>
    <div
      v-if="!isAllowVa"
      class="mt-[10px] md:mt-4 rounded-[8px] bg-[#E4FFF8] p-[8px] flex justify-center items-start gap-[8px]"
    >
      <Info class="w-[20px] mt-1" color="#00BA88" />
      <p
        class="text-[#00BA88] text-[12px] md:text-sm max-w-[276px] md:max-w-[620px]"
      >
        Metode pembayaran bank dan retail (Alfamart) hanya tersedia untuk
        pilihan durasi berlangganan minimal 6 bulan
      </p>
    </div>
  </div>
</template>

<script>
import Info from '~/components/icons/Info.vue';

export default {
  components: {
    Info,
  },
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
