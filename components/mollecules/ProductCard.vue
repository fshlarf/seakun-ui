<template>
  <div
    class="w-full h-full border-none max-w-sm bg-white tn:shadow-lg rounded-[8px] overflow-hidden text-gray-900 relative z-0"
  >
    <div
      class="relative tn:h-36 md:h-56 lg:h-52 xl:h-48 tn:w-full flex justify-center items-center overflow-hidden tn:rounded-br-3xl lg:rounded-br-none"
    >
      <img
        v-if="product.variants"
        :src="`/images/product/${product.slug}.png`"
        alt="provider"
        class="block object-cover min-h-full min-w-full"
      />
      <img
        v-else
        :src="`/images/product/on demand/${product.slug}.png`"
        alt="provider"
        class="block object-cover min-h-full min-w-full"
      />

      <div
        v-if="checkIsNewProduct(product.createdAt)"
        class="absolute tn:left-2 tn:bottom-2 md:left-3 md:bottom-3 px-3 py-1 text-center rounded-full bg-yellow-400"
      >
        <p class="tn:text-xs md:text-base lg:text-base text-black font-bold">
          Baru
        </p>
      </div>
    </div>

    <div class="w-full tn:p-2 md:p-4">
      <div class="">
        <h1 class="font-bold">
          {{ product.name }}
        </h1>
        <div class="tn:mt-2">
          <p class="tn:text-xs md:text-base">
            {{ product.preview }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full tn:h-14 md:h-20"></div>

    <div class="absolute z-10 bottom-0 left-0 w-full tn:p-2 md:p-4">
      <div class="h-px w-full bg-primary"></div>
      <div class="text-center">
        <Button
          variant="primary"
          :label="product.isActive ? 'Pesan' : 'Segera hadir'"
          class="w-full font-bold tn:mt-2 md:mt-3 md:py-3"
          :disabled="!product.isActive"
          @click="$emit('on-click-product', product)"
        />
      </div>
    </div>
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
