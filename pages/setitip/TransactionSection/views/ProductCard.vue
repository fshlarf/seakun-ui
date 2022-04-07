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
          <div class="flex space-x-2 items-center mb-2">
            <p>Dibeli oleh:</p>
            <div
              v-for="(user, id) in product.users"
              :key="id"
              class="rounded-full relative cursor-pointer border border-px border-white bg-primary text-white w-7 h-7 flex justify-center items-center text-xs"
              @mouseenter="toggleTooltip()"
              @mouseleave="toggleTooltip()"
            >
              {{ user.initial }}
              <div
                class="absolute z-10 tn:-top-10 md:-top-8 tn:left-15 md:-left-12"
                :class="{ hidden: !tooltipShow, block: tooltipShow }"
              >
                <div class="relative mx-2">
                  <div
                    class="bg-third text-black text-center text-xs rounded py-1 px-2 left-0 w-24"
                  >
                    {{ user.name }}
                    <svg
                      class="absolute h-2 w-full left-0 top-full"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xml:space="preserve"
                    >
                      <polygon
                        class="fill-current text-third tn:hidden md:block"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
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
  data() {
    return {
      tooltipShow: false,
    };
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    toggleTooltip() {
      this.tooltipShow = !this.tooltipShow;
    },
  },
};
</script>

<style lang="scss" scoped></style>
