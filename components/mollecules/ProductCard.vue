<template>
  <div
    class="w-full h-full border-none max-w-sm bg-white shadow-xl rounded-xl overflow-hidden text-gray-900 md:pb-3"
  >
    <div class="md:h-64 lg:h-56 xl:h-48">
      <img
        :src="`/images/product/${product.slug}${
          product.slug === 'disney-hotstar' ? '.jpeg' : '.svg'
        }`"
        alt="image not found"
        class="object-cover rounded-br-3xl max-h-[185px] lg:rounded-br-none md:w-full md:h-auto"
      />
    </div>

    <div
      class="w-full h-full relative px-2 py-0 md:px-4 grid flex-rows content-between"
    >
      <div
        v-if="product.isNew"
        class="absolute tn:ml-2 tn:-top-8 md:ml-0 md:top-0 md:right-4 px-3 py-1 text-center rounded-full bg-forth"
      >
        <p
          class="tn:text-xs md:text-base lg:text-base text-secondary font-bold"
        >
          Baru
        </p>
      </div>
      <div class="h-full">
        <div class="flex tn:pt-2 items-center mb-1 md:mb-2 md:px-2">
          <img
            :src="`/images/icons/${product.slug}${
              product.slug === 'disney-hotstar' ? '.png' : '.svg'
            }`"
            alt="#"
            class="w-8 ml-1"
          />
          <h1 class="md:text-base font-bold mx-2 max-w-[120px]">
            {{ product.name }}
          </h1>
        </div>

        <div
          v-if="product.packages"
          class="tn:px-1 tn:py-1 md:px-2 md:mt-3 lg:px-4"
        >
          <div
            class="text-xs md:text-sm md:flex md:justify-between mt-1"
            v-for="(packageDetail, id) in product.packages"
            :key="id"
          >
            <p class="font-semibold md:font-normal">
              {{ packageDetail.name }}
            </p>
            <p class="font-bold">
              {{ formatMoneyRupiah(packageDetail.price) }}
              <span class="text-xs font-light">
                / {{ packageDetail.type === 'monthly' ? 'bln' : 'thn' }}</span
              >
            </p>
          </div>
          <p
            class="text-xs md:text-sm font-bold text-primary my-2 cursor-pointer"
            @click="showPriceScheme(product.slug, product.name)"
          >
            Lihat skema harga
          </p>
        </div>

        <div
          v-if="product.preview"
          class="tn:px-1 tn:mb-1 md:px-2 md:mt-3 lg:px-4"
        >
          <div class="text-xs md:text-base mt-1">
            <p class="font-semibold md:font-normal">
              {{ product.preview }}
            </p>
          </div>
        </div>
      </div>

      <div class="h-full sticky bottom-0">
        <div class="md:px-2">
          <div class="h-px w-full bg-primary md:my-3"></div>
        </div>

        <div class="text-center md:px-2">
          <Button
            variant="primary"
            :label="product.isActive ? 'Pesan' : 'Segera hadir'"
            class="w-full py-2 my-2 font-bold"
            :disabled="!product.isActive"
            @click="$emit('on-click-product', product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import { currencyFormat } from '~/helpers';
export default {
  components: {
    Button,
  },
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
    showPriceScheme(param1, param2) {
      this.$emit('showPriceScheme', param1, param2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
