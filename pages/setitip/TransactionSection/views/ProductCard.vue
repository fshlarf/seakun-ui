<template>
  <div
    class="!w-72 h-full border-none bg-white shadow-xl rounded-3xl overflow-hidden text-gray-900 md:pb-3"
  >
    <div class="h-48">
      <img
        :src="product.img"
        alt="image not found"
        class="object-cover max-h-[185px] w-full md:h-auto"
      />
    </div>

    <div
      class="w-full h-full relative tn:px-2 tn:pb-2 md:py-0 md:px-4 grid flex-rows content-between"
    >
      <div class="h-full">
        <div class="flex tn:pt-2 items-center mb-2 px-2">
          <img :src="product.icon" alt="#" class="w-8 ml-1" />
          <h1 class="text-xl font-bold mx-2">
            {{ product.name }}
          </h1>
        </div>

        <div v-if="product.preview" class="tn:mb-1 tn:px-2 tn:mt-3 lg:px-4">
          <div class="text-base mt-1">
            <p class="">
              {{ product.preview }}
            </p>
          </div>
        </div>
        <div class="tn:mb-1 tn:px-2 tn:mt-3 lg:px-4">
          <div class="flex mb-2">
            <div
              class="rounded-full border border-px border-white bg-red-500 text-white w-7 h-7 flex justify-center items-center text-xs"
            >
              A
            </div>
            <div
              class="rounded-full border border-px border-white bg-yellow-500 text-white w-7 h-7 flex -ml-1 justify-center items-center text-xs"
            >
              B
            </div>
            <div
              class="rounded-full border border-px border-white bg-yellow-300 text-white w-7 h-7 flex -ml-1 justify-center items-center text-xs"
            >
              C
            </div>
            <div
              class="rounded-full border border-px border-white bg-blue-300 text-white w-7 h-7 flex -ml-1 justify-center items-center text-xs"
            >
              5+
            </div>
          </div>
          <p class="text-secondary text-xl font-bold">
            {{ formatMoneyRupiah(product.price) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers';
export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
  },
};
</script>

<style lang="scss" scoped></style>
