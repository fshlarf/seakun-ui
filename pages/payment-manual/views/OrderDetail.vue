<template>
  <div>
    <div
      class="flex-1 flex-column md:pl-6 md:py-5 tn:pl-4 tn:py-3 rounded-lg border-l-4 border-green-seakun bg-[#F4FDFA] bg-opacity-50"
    >
      <p class="md:text-xl tn:text-xs font-bold">Detail Pemesan</p>
      <div
        class="md:my-4 tn:my-2 border-b border-[#8DCABE] border-opacity-20"
      />
      <div v-if="isLoading">
        <p class="shimmer w-5/12"></p>
        <p class="shimmer w-9/12 my-2"></p>
        <p class="shimmer w-8/12"></p>
      </div>
      <div v-else>
        <div class="flex gap-2 items-center">
          <img
            src="/images/product/brand/order/icon/user.svg"
            alt="icon-user"
          />
          <p class="md:text-base tn:text-xs font-bold">
            {{ orderDetail.name }}
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <img
            src="/images/product/brand/order/icon/phone.svg"
            alt="icon-phone"
          />

          <p class="my-2 md:text-base tn:text-xs font-normal">
            {{ orderDetail.phone }}
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <img
            src="/images/product/brand/order/icon/email.svg"
            alt="icon-email"
          />

          <p class="md:text-base tn:text-xs font-normal">
            {{ orderDetail.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderDetail',
  props: {
    orderDetail: Object,
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
