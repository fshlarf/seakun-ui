<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-2/6" class="dmsans">
    <template v-slot:header>
      <div class="dmsans font-bold text-lg lg:text-[22px]">
        Ubah Durasi Berlangganan
      </div>
    </template>
    <div class="flex items-center justify-between space-x-2 mb-7">
      <img
        :src="`/images/product/brand/${orderData.packageName}.png`"
        alt="provider brand"
        class="w-20 h-auto"
      />
      <OrderLabel :text="orderData.orderNumber" />
    </div>
    <hr class="border-[#EAECFF] !mb-6" />
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
      <!-- v-bind:style="[
        
          ? { background: '#EBFCFF', border: '1.5px solid #8DCABE' }
          : { border: '1.5px solid #ededed' },
      ]" -->
      <div
        v-for="(item, index) in listDuration"
        :key="index"
        :class="[
          {
            'bg-[#F4F7F7] !cursor-not-allowed':
              orderData.packageName == 'netflix' && item.duration == 1,
          },
          {
            ' !border-[#8DCABE]  !bg-[#EBFCFF]':
              item.uid === orderData.variantUid,
          },
        ]"
        class="border-[1.5px] border-black/[4%] rounded-xl py-3 px-6 mb-2 cursor-pointer"
        @click="$emit('pickDuration', item)"
      >
        <p v-if="item.duration === 12" class="text-lg font-normal">
          1 Tahun ({{ currencyFormat(item.grandTotal) }})
        </p>
        <p v-else class="text-lg font-normal">
          {{ item.duration }} Bulan ({{ currencyFormat(item.grandTotal) }})
        </p>
      </div>

      <BannerInformationNetflix
        v-if="!isNetflixValid"
        class="mt-7"
        className="leading-5 md:leading-6 text-xs lg:text-sm"
      />
    </div>
  </Modal>
</template>
<script>
import Modal from '~/components/atoms/Modal';
import { currencyFormat } from '~/helpers/word-transformation.js';
import OrderLabel from '../../../components/atoms/OrderLabel.vue';
import BannerInformationNetflix from '../../../components/mollecules/BannerInformationNetflix.vue';

export default {
  name: 'ModalDuration',
  components: {
    Modal,
    OrderLabel,
    BannerInformationNetflix,
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
    isNetflixValid: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    listDuration() {
      if (this.orderData) {
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
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>
<style scoped>
.dmsans {
  font-family: 'DM Sans', sans-serif !important;
}
</style>
