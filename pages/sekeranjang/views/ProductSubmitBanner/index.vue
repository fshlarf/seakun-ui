<template>
  <div class="tn:mt-12 xl:mt-20 w-full md:py-12 lg:px-6">
    <div
      class="tn:w-full xl:w-[1266px] mx-auto lg:rounded-md bg-[#499C8A] relative z-0 overflow-hidden"
    >
      <img
        class="absolute z-10 top-0 w-full tn:h-full md:h-auto"
        src="/images/sekeranjang/product/wave-1.png"
        alt="wave 1"
      />
      <img
        class="absolute z-20 top-0 w-full tn:h-full md:h-auto"
        src="/images/sekeranjang/product/wave-2.png"
        alt="wave 2"
      />
      <div
        class="relative z-40 md:flex md:justify-between md:items-center text-white tn:py-5 md:py-9 tn:px-5 md:px-16"
      >
        <div class="lg:w-[758px]">
          <h1
            class="tn:text-[32px] lg:text-[48px] font-bold tn:text-center md:text-left"
          >
            Ajukan Produk
          </h1>
          <p
            class="lg:text-[24px] tn:mt-4 font-base tn:text-center md:text-left lg:leading-8 text-[#efefef]"
          >
            Ajukan produk <b>buy 1 get 1</b> atau produk
            <b>barengan beli banyak</b> untuk mendapatkan potongan harga lebih
            banyak.
          </p>
          <Button
            class="tn:mt-6 tn:py-4 font-bold tn:w-full md:w-1/2"
            variant="primary"
            label="Ajukan Sekarang"
            @click="$router.push('/sekeranjang/create-product')"
          />
        </div>
        <div class="w-[350px] tn:hidden md:block">
          <img
            class="mx-auto"
            src="/images/sekeranjang/product/submit-product.png"
            alt="submit product illustration"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
export default {
  components: {
    Button,
  },
};
</script>

<style></style>
