<template>
  <div
    class="relative card-package tn:px-1 md:px-3 md:mx-3 py-4 shadow-md border !rounded-lg cursor-pointer"
  >
    <div v-if="packet.isPreOrder" class="">
      <div
        class="preorder bg-secondary text-white text-xs p-2 w-16 rounded-r-xl rounded-tl-2xl"
      >
        Preorder
      </div>
    </div>
    <div class="w-1/3 mx-auto">
      <img
        class="w-auto h-14 object-contain mx-auto"
        :src="`/images/icons/modal package digital/${slug}.png`"
        alt="Image not found"
      />
    </div>

    <div class="text-center mt-6">
      <h1 class="tn:text-lg md:text-sm font-bold my-2">
        {{ packet.name }}
      </h1>
      <p
        class="text-center text-red-700 tn:text-sm md:text-md"
        v-if="!packet.isActive"
      >
        Paket tidak aktif
      </p>

      <p class="tn:text-2xl md:text-xl font-bold mt-6">
        {{ formatMoneyRupiah(packet.grandTotal) }}
        <span class="text-sm text-primary"
          >/ {{ setMonthPacket(packet) }}
          {{ packet.duration === 12 ? 'tahun' : 'bulan' }}</span
        >
      </p>

      <h1 class="text-sm mt-6">Keuntungan</h1>

      <div class="mt-3 text-left">
        <div
          class="mt-1 tn:px-3"
          v-for="(item, id) in packet.benefits"
          :key="id"
        >
          <div class="flex">
            <img
              class="self-start pt-[2px]"
              src="/images/icons/checked.svg"
              alt="checked"
            />
            <p
              :class="`ml-2 text-sm ${
                packet.isActive ? 'font-bold' : 'font-normal'
              }`"
            >
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="mt-3">
          <nuxt-link
            v-if="packet.isPreOrder"
            to="/info/pre-order"
            class="text-xs text-primary px-2"
            >Lihat Ketentuan Pre order Selengkapnya</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers';

export default {
  name: 'CardPackage',
  props: {
    packet: { type: Object, default: {} },
    slug: { type: String, default: '' },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    setMonthPacket(packet) {
      return packet.paymentType === 'month' && parseInt(packet.totalMonth) > 1
        ? packet.totalMonth
        : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.card-package:hover {
  border: 1px solid #8dcabe !important;
}

.preorder {
  position: absolute;
  top: 0.5rem;
  left: -10px;
}
.preorder::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid #295245;
  border-top: 5px solid #295245;
  border-bottom: 5px solid transparent;
}

@media (max-width: 450px) {
  .preorder {
    top: 0.5rem;
    left: -10px;
  }
}
</style>
