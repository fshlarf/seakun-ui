<template>
  <div
    class="w-full h-full border-none max-w-sm bg-white shadow-xl rounded-xl overflow-hidden text-gray-900 md:pb-3"
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

    <div
      class="w-full h-full relative px-2 py-0 md:px-4 grid flex-rows content-between"
    >
      <div class="h-full">
        <div class="flex tn:pt-2 items-center mb-1 md:mb-2 md:px-2">
          <div
            v-if="product.variants"
            class="h-8 w-8 ml-1 flex justify-center items-center"
          >
            <img
              :src="`/images/icons/${product.slug}.svg`"
              alt="#"
              class="w-full"
            />
          </div>
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
            <p class="font-semibold md:font-normal xl:w-[45%]">
              {{ packageDetail.packageName }}
            </p>
            <p class="font-bold xl:w-[55%] xl:text-right">
              {{ formatMoneyRupiah(packageDetail.grandTotal) }}
              <span
                v-if="packageDetail.duration === 12"
                class="text-xs font-light"
              >
                / 1 thn</span
              >
              <span v-else class="text-xs font-light">
                / {{ packageDetail.duration }} bln</span
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
            class="w-full tn:py-3 font-bold"
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
      return differentMonth < 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
