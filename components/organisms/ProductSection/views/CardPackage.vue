<template>
  <div
    class="card-package md:w-[416px] tn:mt-4 tn:px-1 md:px-3 md:mx-3 py-4 shadow-md border !rounded-lg cursor-pointer"
  >
    <div v-if="packet.isPreOrder" class="relative">
      <div
        class="preorder ribbon bg-secondary text-white text-xs p-2 w-16 rounded-r-xl rounded-tl-2xl"
      >
        Preorder
      </div>
    </div>
    <div class="w-1/4 mx-auto">
      <img
        class="w-full h-auto"
        :src="`/images/${slug}.png`"
        alt="Image not found"
      />
    </div>

    <div class="text-center mt-6">
      <h1 class="tn:text-lg md:text-sm font-bold my-2">
        {{ packet.name }}
      </h1>
      <p
        class="text-center text-red-700 tn:text-sm md:text-md"
        v-if="!packet.active"
      >
        Paket tidak aktif
      </p>

      <p class="tn:text-2xl md:text-xl font-bold mt-6">
        {{ formatMoneyRupiah(packet.grandTotal) }}
        <span class="text-sm text-primary"
          >/ {{ setMonthPacket(packet) }}
          {{ packet.paymentType === 'month' ? 'bulan' : 'tahun' }}</span
        >
      </p>

      <h1 class="text-sm mt-6">Keuntungan</h1>

      <div class="mt-3 text-left">
        <div
          class="mt-1 tn:px-3"
          v-for="(item, id) in packet.facilities"
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
                packet.active ? 'font-bold' : 'font-normal'
              }`"
            >
              {{ item }}
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

.ribbon {
  position: absolute;
}
.preorder {
  margin-left: -22px;
  margin-top: -20px;
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

@media (max-width: 400px) {
  .preorder {
    margin-left: -15px;
    margin-top: -20px;
  }
}
</style>
