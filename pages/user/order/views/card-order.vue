<template>
  <div class="rounded-[10px] text-gray-secondary">
    <header
      class="rounded-t-[10px] border-[1px] border-b-0 flex items-center justify-between p-3 md:px-5 md:py-3"
      :class="
        data && data.isActive
          ? 'bg-[#1AB26B1A]/[5%] border-green-seakun-secondary-dark/30'
          : 'bg-[#D9D9D9]/30'
      "
    >
      <h3
        :class="
          data && data.isActive
            ? 'text-green-seakun-secondary-dark'
            : 'text-[#474747]'
        "
        class="text-xs md:text-sm font-bold"
      >
        {{ data.orderCode }}
      </h3>
      <div
        class="bg-white text-xs md:text-sm font-bold border-[1px] text-center min-w-[91px] rounded-[6px]"
        :class="[
          data.isActive
            ? 'text-green-seakun-secondary-dark border-green-seakun-secondary-dark'
            : 'text-gray-secondary border-gray-secondary',
        ]"
      >
        <p class="py-2 px-2">{{ data.isActive ? 'Aktif' : 'Tidak Aktif' }}</p>
      </div>
    </header>
    <div
      class="p-3 md:p-5 border-[1px] rounded-b-[10px] flex justify-between items-center"
      :class="
        data && data.isActive ? ' border-green-seakun-secondary-dark/30' : ''
      "
    >
      <div>
        <section class="flex gap-2 items-center text-sm font-bold">
          <img
            :src="[
              data.isActive
                ? '/images/icon/product-active.svg'
                : '/images/icon/product.svg',
            ]"
            alt="product"
          />
          <h3>
            {{ data && data.brand ? capitalizeFirstLetter(data.brand) : '-' }}
          </h3>
        </section>
        <section class="flex gap-2 items-center text-xs md:text-sm mt-2">
          <img
            :src="[
              data.isActive
                ? '/images/icon/price-tag-active.svg'
                : '/images/icon/price-tag.svg',
            ]"
            alt="product"
          />
          <p class="text-xs md:text-sm text-[#363636]">
            {{ data && data.period ? data.period : '-' }}
          </p>
        </section>
      </div>
      <div
        class="border-[1px] p-3 rounded-[6px] cursor-pointer"
        @click="$router.push('/user/order/details')"
        :class="
          data.brand == ('wattpad' || 'netflix')
            ? 'bg-[#ff500a]/[5%] border-[#ff500a]/[5%]'
            : 'border-[#1ab26b]/10 bg-[#1ab26b]/10'
        "
      >
        <img
          :src="`/images/product/brand/${data.brand}.png`"
          alt="brand"
          class="w-[90px] h-[27px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from '~/helpers/word-transformation.js';
export default {
  props: {
    data: {
      typeof: Object,
      default: () => {},
    },
  },
  //

  methods: {
    capitalizeFirstLetter,
  },
};
</script>

<style lang="scss" scoped></style>
