<template>
  <div
    class="tn:w-full md:w-[268px] bg-white !rounded-[8px] tn:p-2 md:p-[14px] provider-card relative z-0"
  >
    <div
      v-if="checkIsNewProduct(dataProvider.createdAt)"
      class="absolute top-0 tn:left-2 md:left-[10px] z-10 bg-[#FDCD22] tn:!font-bold tn:text-[10px] md:text-base tn:px-[8px] md:px-[16px] tn:py-[2px] md:py-[4px] tn:rounded-b-[2px] md:rounded-b-[8px]"
    >
      Baru
    </div>
    <div class="tn:pt-2 md:pt-4 flex justify-center items-center">
      <div class="cloud"></div>
    </div>
    <div
      class="flex tn:my-2 md:mb-0 tn:gap-2 items-center tn:h-[30px] md:h-[60px]"
    >
      <div
        class="tn:w-[30px] tn:h-[30px] md:w-[60px] md:h-[60px] flex justify-center items-center tn:rounded-md"
      >
        <img
          class="tn:w-full md:w-3/4"
          :src="`/images/icons/${dataProvider.slug}.svg`"
          alt="provider icon"
        />
      </div>
      <h4
        class="tn:!font-bold tn:text-[14px] md:text-base tn:m-0 text-left tn:!leading-[18px] md:!leading-5 max-w-[70%]"
      >
        {{ dataProvider.name }}
      </h4>
    </div>

    <div class="bg-[#f6f6f6] h-[0.5px] w-full" />

    <div class="tn:my-2 tn:min-h-[80px] md:min-h-[92px]">
      <div
        v-for="(variant, id) in dataProvider.variants"
        :key="id"
        class="tn:my-[3px] md:-space-y-2"
      >
        <p class="tn:text-[12px] md:text-[14px] md:!text-medium">
          {{ variant.packageName }}
        </p>
        <div
          class="tn:text-[11px] md:text-[14px] flex justify-between items-center"
        >
          <p v-if="variant.duration === 12" class="tn:!font-bold">
            {{ formatMoneyRupiah(variant.grandTotal) }}
            <span class="!font-normal text-[#66738F] md:hidden">/thn</span
            ><span class="!font-normal text-[#66738F] tn:hidden md:inline-block"
              >/tahun</span
            >
          </p>
          <p v-else-if="variant.duration > 1" class="tn:!font-bold">
            {{ formatMoneyRupiah(variant.grandTotal) }}
            <span class="!font-normal text-[#66738F] md:hidden"
              >/{{ variant.duration }} bln</span
            ><span class="!font-normal text-[#66738F] tn:hidden md:inline-block"
              >/{{ variant.duration }} bulan</span
            >
          </p>
          <p v-else class="tn:!font-bold">
            {{ formatMoneyRupiah(variant.grandTotal) }}
            <span class="!font-normal text-[#66738F] md:hidden">/bln</span
            ><span class="!font-normal text-[#66738F] tn:hidden md:inline-block"
              >/bulan</span
            >
          </p>
          <div
            v-if="dataProvider.slug === 'netflix'"
            class="tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"
          >
            1 <span class="md:hidden">Bln</span
            ><span class="tn:hidden md:inline-block">Bulan</span>
          </div>
          <div
            v-else-if="
              dataProvider.slug === 'canva' ||
              dataProvider.slug === 'microsoft-365'
            "
          >
            <div
              v-if="variant.duration === 12"
              class="tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"
            >
              1 <span class="md:hidden">Thn</span
              ><span class="tn:hidden md:inline-block">Tahun</span>
            </div>
            <div
              v-else
              class="tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"
            >
              1, 3, 6 <span class="md:hidden">Bln</span
              ><span class="tn:hidden md:inline-block">Bulan</span>
            </div>
          </div>
          <div
            v-else-if="variant.durations === '12'"
            class="tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"
          >
            1 <span class="md:hidden">Thn</span
            ><span class="tn:hidden md:inline-block">Tahun</span>
          </div>
          <div
            v-else
            class="tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"
          >
            {{ variant.durations }} <span class="md:hidden">Bln</span
            ><span class="tn:hidden md:inline-block">Bulan</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full tn:h-[77px] md:h-[100px]"></div>

    <div class="w-full absolute z-10 bottom-0 left-0 tn:p-2 md:p-[14px]">
      <div class="w-full">
        <div class="bg-[#f6f6f6] h-[0.5px] w-full" />
        <div class="tn:mt-2 tn:px-1 flex justify-between items-center">
          <!-- <div
            class="bg-[#F1F9F7] text-[#417465] tn:px-2 tn:py-1 rounded-[4px] flex items-center tn:gap-[6px]"
          >
            <img
              class="md:w-[24px] md:h-[24px]"
              src="/images/icons/atoms/person.svg"
              alt="member icon"
            />
            <p class="tn:text-[10px] md:text-[14px]">
              {{ dataProvider.memberLimit }}
              <span class="tn:hidden md:inline-flex">Orang</span>
            </p>
          </div> -->
          <div
            class="text-[#4BAC99] flex items-center tn:gap-1"
            role="button"
            @click="showPriceScheme(dataProvider.slug, dataProvider.name)"
          >
            <div
              class="md:w-[16px] md:h-[16px] flex justify-center items-center"
            >
              <img
                class="md:w-full"
                src="/images/icons/atoms/eye.svg"
                alt="open scheme"
              />
            </div>
            <p class="tn:text-[10px] md:text-[14px] md:!font-medium">
              Lihat skema harga
            </p>
          </div>
        </div>

        <Button
          :label="dataProvider.active ? 'Pesan' : 'Segera hadir'"
          :disabled="!dataProvider.active"
          variant="primary"
          class="w-full tn:mt-2 md:mt-3"
          add-class="!rounded-[8px] py-2 md:py-3"
          @click="$emit('on-click-product', dataProvider)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import moment from 'moment';
import { currencyFormat } from '~/helpers';

export default {
  components: {
    Button,
  },
  data: () => ({
    moment,
  }),
  props: {
    dataProvider: {
      type: Object,
      default: () => {},
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

<style>
.provider-card {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
}
.cloud {
  position: relative;
  z-index: 10;
  width: 38px;
  height: 10.5px;
  background-color: #f5f5f5 !important;
  border-radius: 10px;
  position: relative;
}
.cloud:before {
  content: '';
  position: absolute;
  background-color: #f5f5f5 !important;
  z-index: 15;
  width: 14px;
  height: 14px;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}

@media screen and (min-width: 600px) {
  .cloud {
    width: 76px;
    height: 21px;
  }
  .cloud:before {
    width: 28px;
    height: 28px;
    top: -14px;
  }
}
</style>
