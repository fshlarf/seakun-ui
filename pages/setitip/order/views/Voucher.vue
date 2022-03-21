<template>
  <div class="w-full flex justify-between py-3 px-3 border rounded-md">
    <p class="voucher__label font-extrabold">
      <span class="mr-1">
        <PriceTagIcon />
      </span>
      Voucher Seakun
    </p>
    <p class="voucher__action text-gray-500">
      Masukan Voucher
      <RightArrowIcon style="width: 12px; margin-left: 6px" />
    </p>
  </div>
</template>

<script>
import PriceTagIcon from '~/assets/images/icon/price-tag.svg?inline';
import RightArrowIcon from '~/assets/images/icon/right-arrow.svg?inline';
export default {
  name: 'voucher',
  components: {
    PriceTagIcon,
    RightArrowIcon,
  },
};
</script>

<style></style>
