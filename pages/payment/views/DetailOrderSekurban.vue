<template>
  <div class="order-detail bg-white shadow-md  mt-8 rounded-md items-center mx-2">
        <div class="order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center ">
          <div class="flex-1">
            <img class="detail-product__image w-9/12" :src="`/images/sequrban/sapi.png`" alt="Image not found" />
          </div>
          <div class="detail-product__price col-span-4 ml-4">
            <p  class="font-bold"><span class="capitalize" >Sequrban (Seakun x Wadiqibas) </span> </p>
            <p class="font-normal py-2">Tipe E - Sapi Bali (350 Kg)  </p>
            <p class="font-normal">Rp3.890.000 </p>
          </div>
        </div>
        <div class="order-detail__payment flex justify-between  px-4 pt-3 pb-2 border-t border-gray-5-60 ">
          <div>Total down payment (uang muka)</div>
          <div>
            <template>
                  Rp500.000
            </template>
          </div>
        </div>
        <div class="order-detail__payment flex justify-between  px-4 pb-3 ">
          <div>Sisa pembayaran (**dibayar setelah grup penuh)</div>
          <div>
            <template>
                 Rp3.390.000
            </template>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>