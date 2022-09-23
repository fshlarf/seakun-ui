<template>
  <div class="tn:mt-20 w-full tn:py-12">
    <div
      class="w-[1266px] mx-auto rounded-md bg-[#499C8A] relative z-0 overflow-hidden"
    >
      <img
        class="absolute z-10 top-0 w-full"
        src="/images/sekeranjang/product/wave-1.png"
        alt="wave 1"
      />
      <img
        class="absolute z-20 top-0 w-full"
        src="/images/sekeranjang/product/wave-2.png"
        alt="wave 2"
      />
      <div
        class="relative z-40 flex justify-between items-center text-white tn:py-9 tn:px-16"
      >
        <div class="w-[758px]">
          <h1 class="text-[48px] font-bold">Ajukan Produk</h1>
          <p class="text-[24px] tn:mt-4 font-base leading-8 text-[#efefef]">
            Ajukan produk <b>buy 1 get 1</b> atau produk
            <b>barengan beli banyak</b> untuk mendapatkan potongan harga lebih
            banyak.
          </p>
          <Button
            class="tn:mt-6 tn:py-4 font-bold w-1/2"
            variant="primary"
            label="Ajukan Sekarang"
            @click="$router.push('/sekeranjang/create-product')"
          />
        </div>
        <div class="w-[350px]">
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
