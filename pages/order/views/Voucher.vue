<template>
    <div class="voucher w-full flex justify-between py-3 px-3 ">
             <p class="voucher__label font-extrabold">
               <span class="">
                  <PriceTagIcon/>

               </span>
               Voucher Seakun
               </p>
          <p class="voucher__action text-gray-500">
          
            Masukan Voucher
            <span>
              <RightArrowIcon/>
            </span>
          </p>
        </div>
</template>

<script>
import PriceTagIcon from '~/assets/images/icon/price-tag.svg?inline'
import RightArrowIcon from '~/assets/images/icon/right-arrow.svg?inline'
export default {
    name : 'voucher',
    components : {
        PriceTagIcon,
        RightArrowIcon
    }
}
</script>

<style>

</style>