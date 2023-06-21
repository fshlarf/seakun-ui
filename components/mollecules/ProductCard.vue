<template>
  <div
    class="w-full h-full border-[1px] border-[#8DCABE] max-w-[166px] bg-[#8DCABE] bg-opacity-5 md:rounded-2xl tn:rounded-lg overflow-hidden relative z-0"
    :class="`${
      product.slug === 'sekurban'
        ? 'md:border-opacity-100 tn:border-opacity-20'
        : 'border-opacity-20'
    }`"
  >
    <div
      class="relative tn:h-full tn:w-full overflow-hidden flex-nowrap justify-center items-center"
    >
      <div
        class="md:mt-[26.5px] tn:mt-3 md:h-[100px] tn:h-16"
        :class="`${!product.isActive ? 'opacity-30' : 'opacity-100'}`"
      >
        <img
          v-if="product.variants"
          :src="`/images/product/${product.slug}.png`"
          alt="provider"
          class="block object-cover min-h-full min-w-full"
        />
        <img
          v-else
          :src="`/images/product/on demand/new/${product.slug}.png`"
          alt="provider"
          class="justify-center mx-auto tn:h-9 tn:w-[45px] md:h-[45px] md:w-[48px]"
        />
        <div
          :class="`${
            product.slug === 'semabar' ? 'md:mt-3 tn:mt-1' : 'md:mt-4 tn:mt-2'
          }`"
        >
          <h1
            class="font-bold text-[#8DCABE] md:text-lg tn:text-sm justify-center text-center"
          >
            {{ product.name }}
          </h1>
          <p class="text-[#8DCABE] text-sm text-center">
            {{ product.preview }}
          </p>
        </div>
      </div>
      <div class="mt-4 md:mb-[25px] tn:mb-3 text-center">
        <Button
          variant="primary"
          label="Pesan"
          class="md:w-[90px] tn:w-[76px] font-bold py-[4.5px]"
          :disabled="!product.isActive"
          @click="$emit('on-click-product', product)"
        />
      </div>

      <div class="absolute top-0 right-0">
        <img
          v-if="!product.isActive"
          src="/images/product/coming-soon.svg"
          alt="coming-soon"
          class="md:h-full tn:h-[72px]"
        />
      </div>
      <div
        v-if="checkIsNewProduct(product.createdAt)"
        class="absolute tn:left-2 tn:bottom-2 md:left-3 md:bottom-3 px-3 py-1 text-center rounded-full bg-yellow-400"
      >
        <p class="tn:text-xs md:text-base lg:text-base text-black font-bold">
          Baru
        </p>
      </div>
    </div>

    <!-- <div class="w-full tn:p-2 md:p-4">
      <div class="">
        <h1 class="font-bold text-[#8DCABE]">
          {{ product.name }}
        </h1>
        <div class="tn:mt-2">
          <p class="tn:text-xs md:text-base">
            {{ product.preview }}
          </p>
        </div>
      </div>
    </div> -->

    <!-- <div class="w-full tn:h-14 md:h-20"></div>

    <div class="absolute z-10 bottom-0 left-0 w-full tn:p-2 md:p-4">
      <div class="h-px w-full bg-primary"></div>
      <div class="text-center">
        <Button
          variant="primary"
          label="Pesan"
          class="w-full font-bold tn:mt-2 md:mt-3 md:py-3"
          :disabled="!product.isActive"
          @click="$emit('on-click-product', product)"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import Label from '~/components/atoms/Label.vue';
import moment from 'moment';
import { currencyFormat } from '~/helpers';
export default {
  components: {
    Button,
    Label,
  },
  data: () => ({
    moment,
  }),
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
    checkIsNewProduct(createdDate) {
      const crateDateFormat = moment.unix(createdDate);
      const differentMonth = moment(moment()).diff(
        moment(crateDateFormat),
        'months',
        true
      );
      return differentMonth < 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
