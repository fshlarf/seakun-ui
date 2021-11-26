<template>
  <div>
    <div v-if="!isLoading">
      <div class="w-full shadow-md rounded-xl p-3">
        <div class="grid grid-cols-4 tn:gap-2 items-center">
          <div class="col-span-3 md:space-y-1">
            <div class="md:flex items-center">
              <p class="tn:text-sm md:text-base font-bold">
                {{ variant.name }}
                <span class="text-secondary uppercase font-normal">{{
                  variant.package
                }}</span>
              </p>
            </div>
            <p class="md:text-xl font-extrabold">
              {{ currencyFormat(variant.detailPrice.finalPrice) }}
            </p>
          </div>
          <div class="">
            <Button
              v-if="variant.isAvailable"
              :label="variant.id === currentVariant.id ? 'Dipilih' : 'Pilih'"
              variant="primary"
              class="tn:w-full md:w-3/4 float-right"
              :disabled="variant.id === currentVariant.id"
              @click="choosePackage(variant)"
            />
            <Button
              v-else
              label="Menu habis"
              variant="primary"
              class="tn:w-full md:w-3/4 float-right"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w-full">
      <CardShimmer />
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import Button from '~/components/atoms/Button.vue';
import CardShimmer from '~/components/mollecules/CardShimmer.vue';
export default {
  data() {
    return {
      currencyFormat,
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    variant: {
      type: Object,
      default: {},
    },
    currentVariant: {
      type: Object,
      default: function () {},
    },
  },
  components: {
    Button,
    CardShimmer,
  },
  methods: {
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
    },
    choosePackage(variant) {
      this.$emit('choosePackage', variant);
    },
  },
};
</script>

<style></style>
