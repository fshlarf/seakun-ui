<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-2/6">
    <template v-slot:header>
      <div class="font-bold text-lg">Ubah Durasi Berlangganan</div>
    </template>
    <div class="flex items-center space-x-2 mb-8">
      <img
        :src="`/images/product/brand/${orderData.packageName}.png`"
        alt="image not found"
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
        v-for="(item, index) in listDuration"
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
      provider: ['microsoft', 'microsoft-365', 'microsoft365', 'canva'], // special case for provider with different price for 1 year subscription
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
  computed: {
    listDuration() {
      if (this.orderData) {
        if (this.orderData.status === 1) {
          if (this.provider.includes(this.orderData.packageName)) {
            if ([1, 3, 6].includes(this.orderData.duration)) {
              return this.durationData.filter((item) => {
                return item.duration !== 12 && item.active;
              });
            } else {
              return this.durationData.filter((item) => {
                return item.duration === 12 && item.active;
              });
            }
          } else {
            return this.durationData.filter(item => {
              return item.active
            });
          }
        } else {
          if (this.provider.includes(this.orderData.packageName)) {
            if ([1, 3, 6].includes(this.orderData.duration)) {
              return this.durationData.filter((item) => {
                return item.duration !== 12;
              });
            } else {
              return this.durationData.filter((item) => {
                return item.duration === 12;
              });
            }
          } else {
            return this.durationData;
          }
        }
      }
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>