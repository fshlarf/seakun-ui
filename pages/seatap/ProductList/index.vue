<template>
  <div class="lg:container md:bg-[#F7F8F8] tn:bg-white md:pt-[38px] md:px-14">
    <div
      class="flex tn:flex-wrap md:flex-nowrap md:px-[40px] md:justify-center w-auto bg-white rounded-lg md:space-x-6 lg:py-[50px] tn:p-6 lg:p-0 place-items-center"
    >
      <div class="tn:w-full lg:w-[402px] lg:pl-6 tn:pl-0">
        <InputSearch placeholder="Masukkan lokasi/area/alamat" class="" />
      </div>
      <div
        class="flex items-center space-x-6 tn:w-full md:w-auto tn:mt-[19px] md:mt-0 lg:pr-6 tn:pl-0"
      >
        <div class="tn:w-full lg:w-[255px]">
          <SelectOption :btn-text="productTypeButton" />
        </div>
        <div class="tn:w-full lg:w-[255px]">
          <SelectOption :btn-text="categoryButton" />
        </div>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-4 tn:grid-cols-2 md:grid-cols-3 md:mt-[32px] md:gap-10 tn:gap-2 tn:px-6 lg:px-0 place-items-center"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div
      class="md:pt-[40px] md:pb-[70px] lg:mx-[290px] md:mx-40 grid md:grid-cols-9 tn:grid-cols-6 tn:pt-[7px] tn:mx-16 tn:pb-[108px] items-center lg:gap-[24px] lg:text-base tn:text-sm"
    >
      <div class="p-2 text-center w-10">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9L1 5L5 1"
            stroke="#2D2D2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="bg-white rounded-full p-2 text-center w-10">1</div>
      <div class="bg-white rounded-full p-2 text-center w-10">2</div>
      <div
        class="bg-white rounded-full p-2 text-center w-10 md:block tn:hidden"
      >
        3
      </div>
      <div
        class="bg-white rounded-full p-2 text-center w-10 md:block tn:hidden"
      >
        4
      </div>
      <div
        class="bg-white rounded-full p-2 text-center w-10 md:hidden tn:block"
      >
        ...
      </div>
      <div class="bg-white rounded-full p-2 text-center w-10">5</div>
      <div
        class="bg-white rounded-full p-2 text-center w-10 md:block tn:hidden"
      >
        ...
      </div>
      <div
        class="bg-white rounded-full p-2 text-center w-10 md:block tn:hidden"
      >
        10
      </div>
      <div class="p-2 text-center w-10">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L5 5L1 1"
            stroke="#2D2D2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './views/CardList.vue';
import InputSearch from '~/components/atoms/InputSearch';
import SelectOption from './views/SelectOption.vue';

export default {
  data() {
    return {
      productTypeButton: 'Rekomendasi',
      categoryButton: 'Jenis',
    };
  },
  components: {
    ProductCard,
    InputSearch,
    SelectOption,
  },
};
</script>
