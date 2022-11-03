<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-2/6">
    <template v-slot:header>
      <div class="font-bold text-lg">Ubah Durasi Berlangganan</div>
    </template>
    <div class="flex mb-8">
      <img
        :src="`/images/product/brand/${orderData.packageName}.png`"
        alt="provider brand"
        class="w-20 h-auto"
      />
      <p class="text-base font-bold ml-2">{{ orderData.orderNumber }}</p>
    </div>
    <div v-if="isLoading">
      <div
        class="border rounded-xl py-3 px-6 mb-2 cursor-pointer"
        v-for="(item, index) in dataLoading"
        :key="index"
      >
        <p class="shimmer w-full"></p>
      </div>
    </div>
    <div v-else>
      <div
        v-for="(item, index) in durationData"
        :key="index"
        v-bind:style="[
          item.uid === orderData.variantUid
            ? { background: '#EBFCFF', border: '1.5px solid #8DCABE' }
            : { border: '1.5px solid #ededed' },
        ]"
        class="border-2 rounded-xl py-3 px-6 mb-2 cursor-pointer"
        @click="$emit('pickDuration', item)"
      >
        <p v-if="item.duration === 12" class="text-lg font-normal">
          1 Tahun ({{ currencyFormat(item.grandTotal) }})
        </p>
        <p v-else class="text-lg font-normal">
          {{ item.duration }} Bulan ({{ currencyFormat(item.grandTotal) }})
        </p>
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from '~/components/atoms/Modal';
import { currencyFormat } from '~/helpers/word-transformation.js';

export default {
  name: 'ModalDuration',
  components: {
    Modal,
  },
  data() {
    return {
      currencyFormat,
      dataLoading: [0, 1, 2],
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    durationData: {
      type: Array,
      default: [],
    },
    orderData: Object,
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>
