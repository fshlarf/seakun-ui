<template>
  <div
    class="w-full h-full border-none max-w-sm bg-white shadow-xl rounded-xl overflow-hidden text-gray-900 md:pb-3"
  >
    <div class="md:h-48">
      <img
        :src="`/images/product/${product.slug}.png`"
        alt="image not found"
        class="object-cover rounded-br-3xl max-h-[185px] lg:rounded-br-none md:w-full md:h-auto"
      />
    </div>

    <div
      class="w-full h-full relative px-2 py-0 md:px-4 grid flex-rows content-between"
    >
      <div
        v-if="product.isNew"
        class="absolute tn:ml-2 tn:-top-8 md:-top-12 px-3 py-1 text-center rounded-full bg-yellow-400"
      >
        <p class="tn:text-xs md:text-base lg:text-base text-black font-bold">
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
          <h1 class="md:text-base font-bold mx-2">
            {{ product.name }}
          </h1>
        </div>

        <div
          v-if="product.variants"
          class="tn:px-1 tn:py-1 md:px-2 md:mt-3 lg:px-4"
        >
          <div
            class="text-xs md:text-sm md:flex md:justify-between mt-1"
            v-for="(packageDetail, id) in product.variants"
            :key="id"
          >
            <p class="font-semibold md:font-normal">
              {{ packageDetail.packageName }}
            </p>
            <p class="font-bold">
              {{ formatMoneyRupiah(packageDetail.grandTotal) }}
              <span class="text-xs font-light">
                / {{ packageDetail.duration === 12 ? 'thn' : 'bln' }}</span
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

        <div v-if="product.variants" class="text-center md:px-2">
          <Button
            variant="primary"
            :label="product.active ? 'Pesan' : 'Segera hadir'"
            class="w-full py-2 my-2 font-bold"
            :disabled="!product.active"
            @click="$emit('on-click-product', product)"
          />
        </div>
        <div v-if="product.preview" class="text-center md:px-2">
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
      return differentMonth < 3;
    },
  },
};
</script>

<style lang="scss" scoped></style>
