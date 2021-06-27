<template>
  <div>
    <div v-if="!isLoading">
      <div class="w-full shadow-sm rounded-xl p-3">
        <div v-if="type === 'chosen'">
          <div class="flex gap-5 items-center">
            <div class="w-1/5 p-2">
              <div v-if="variant.images && variant.images.length > 0">
                <img
                  :src="`${variant.images[0]}`"
                  alt="Image not found"
                  class="w-full"
                />
              </div>
              <div v-else>
                <img
                  src="/images/sequrban/cow variant/type-c.svg"
                  alt="Images not found"
                  class="w-full"
                />
              </div>
            </div>
            <div class="space-y-1">
              <p class="tn:text-sm md:text-base font-bold">
                Sequrban (Seakun x Wadi Qibas)
              </p>
              <p class="tn:text-sm md:text-base">
                Tipe <span> {{ variant.packageCode }} </span>
              </p>
              <p class="tn:text-sm md:text-base">
                {{ toRupiah(variant.totalCost) }} x (1 paket)
              </p>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="flex tn:gap-1 md:gap-4 justify-around items-center">
            <div class="w-1/5 p-2">
              <div v-if="variant.images.length > 0">
                <img
                  :src="`${variant.images[0]}`"
                  alt="Image not found"
                  class="w-full"
                />
              </div>
              <div v-else>
                <img
                  src="/images/sequrban/cow variant/type-c.svg"
                  alt="Images not found"
                  class="w-full"
                />
              </div>
            </div>
            <div class="tn:text-center md:text-left md:space-y-1">
              <p class="tn:text-sm md:text-base font-bold">
                Tipe <span>{{ variant.packageCode }}</span>
                <span class="text-secondary">~{{ variant.weight }} KG</span>
              </p>
              <p class="md:text-xl font-extrabold">
                {{ toRupiah(variant.totalCost) }}
              </p>
              <p class="text-xs">
                Harga patungan dari harga
                <span class="font-bold">{{
                  toRupiah(variant.bulkingPrice)
                }}</span>
              </p>
            </div>
            <Button
              v-if="variant.isAvailable"
              :label="variant.id === currentVariant.id ? 'Dipilih' : 'Pilih'"
              variant="primary"
              class="tn:w-1/4 md:w-1/5"
              :disabled="variant.id === currentVariant.id"
              @click="choosePackage(variant.id)"
            />
            <Button
              v-else
              label="Stok habis"
              variant="primary"
              class="tn:w-1/4 md:w-1/5"
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
import Button from '~/components/atoms/Button.vue';
import CardShimmer from '~/components/mollecules/CardShimmer.vue';
export default {
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
    choosePackage(id) {
      this.$emit('choosePackage', id);
    },
  },
};
</script>

<style></style>
