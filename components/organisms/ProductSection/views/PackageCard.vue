<template>
  <div
    class="tn:w-full md:w-[380px] tn:rounded-xl overflow-hidden tn:shadow-md relative z-0"
  >
    <div
      class="tn:p-4 md:px-8 md:pt-7 md:pb-4 text-white relative z-0 glass-effect"
    >
      <p class="font-bold tn:text-xl md:text-2xl tn:mt-0">
        {{ provider.name }}
      </p>
      <p class="tn:text-sm md:text-base">{{ packet.name }}</p>
      <div
        v-if="packet.isPo === 1"
        class="bg-yellow-200 tn:py-1 tn:pr-2 tn:pl-3 rounded-tl-2xl absolute bottom-0 right-0 z-10 tn:text-xs md:text-sm text-black"
      >
        Preorder
      </div>
    </div>

    <div class="tn:p-4 tn:pb-0 md:px-8 md:pt-4 bg-white">
      <div class="benefits space-y-1">
        <div
          v-for="(benefit, id) in packet.benefits"
          :key="id"
          class="flex items-start tn:gap-1"
        >
          <div class="tn:pt-[3px] tn:!w-[16px]">
            <img
              class="tn:w-full]"
              src="/images/icons/checked.svg"
              alt="benefit list"
            />
          </div>
          <p
            class="tn:font-medium md:font-medium w-[90%] tn:text-sm md:text-[15px]"
          >
            {{ benefit.description }}
          </p>
        </div>
      </div>

      <div class="scheme tn:mt-3 md:mt-4 flex justify-between items-center">
        <p class="font-bold tn:text-[18px] md:text-[20px]">
          {{ formatMoneyRupiah(packet.grandTotal) }}
        </p>
        <div
          class="text-secondary items-center text-sm"
          @click="isShowDetailPrice = !isShowDetailPrice"
          role="button"
        >
          detail harga
          <i v-if="isShowDetailPrice" class="fa-solid fa-chevron-up fa-xs"></i>
          <i v-else class="fa-solid fa-chevron-down fa-xs"></i>
        </div>
      </div>
    </div>
    <div
      class="w-full tn:mt-2 md:mt-3 tn:space-y-1 tn:px-4"
      v-if="scheme.slug && isShowDetailPrice"
    >
      <div v-for="(price, id) in scheme.informations" :key="id">
        <div
          class="md:flex md:justify-between md:items-center tn:text-xs"
          :class="{ 'font-bold': price.is_total }"
        >
          <p>{{ price.title }}:</p>
          <p>{{ price.value }}</p>
        </div>
        <hr class="tn:mt-1" />
      </div>
    </div>
    <div class="w-full tn:mt-3 md:mt-4 tn:px-4 tn:pb-4">
      <Button
        :label="packet.isActive ? 'Pilih' : 'Kuota Sedang Penuh'"
        :variant="packet.isActive ? 'primary' : ''"
        class="w-full py-3 tn:!rounded-lg md:text-[18px]"
        :add-class="
          packet.isActive ? 'tracking-wider' : '!bg-gray-400 text-white'
        "
        @click="$emit('choosePacket', packet)"
      />
    </div>

    <div
      v-if="!packet.isActive"
      class="absolute z-20 top-0 left-0 w-full h-full bg-black opacity-20"
    ></div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
import { providerList } from '~/constants/price-scheme';
import { currencyFormat } from '~/helpers';

export default {
  components: {
    Button,
  },
  props: {
    packet: {
      type: Object,
      default: () => {},
    },
    provider: {
      type: Object,
      default: () => {},
    },
    slug: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      providerList,
      priceScheme: {},
      isShowDetailPrice: false,
    };
  },
  computed: {
    scheme() {
      const newScheme = this.providerList.find((scheme) => {
        return scheme.desc === this.packet.notes;
      });
      return newScheme;
    },
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
  },
};
</script>

<style scoped>
.glass-effect {
  background: rgb(85, 85, 85);
}
.glass-effect:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: 25%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2),
    rgba(85, 85, 85, 0.2),
    rgba(85, 85, 85, 0.2)
  );
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
