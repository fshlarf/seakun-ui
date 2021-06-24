<template>
  <div class="order-detail bg-white shadow-md  mt-8 rounded-md items-center mx-2">
      <div class="order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center">
        <div class="flex-1">
            <div class="shimmer w-full h-24">

            </div>
        </div>
        <div class="detail-product__price col-span-4 ml-4">
            <p class="font-bold shimmer w-full my-2"> </p>
            <p class="font-bold shimmer w-full my-2"> </p>
            <p class="font-bold shimmer w-full my-2"> </p>

        </div>
      </div>
      <div class="order-detail__payment flex justify-between  px-4 py-3 border-t border-gray-50 ">
        <div  class="shimmer w-4/12" ></div>
        <div  class="shimmer w-4/12" ></div>
      </div>
       <div class="order-detail__payment flex justify-between  px-4 pb-3 border-t border-gray-50 ">
        <div  class="shimmer w-4/12" ></div>
        <div  class="shimmer w-4/12" ></div>
      </div>
    </div>
</template>

<script>

export default {
    name : 'detailOrderLoading',
}
</script>

<style>

</style>