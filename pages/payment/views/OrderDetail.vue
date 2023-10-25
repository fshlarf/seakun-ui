<template>
  <div class="mt-[24px] md:mt-[28px]">
    <div
      class="flex-1 flex-column p-3 rounded border-l-4 border-green-seakun bg-[#E9FCF8]/30"
    >
      <p class="text-sm md:text-[20px] font-bold">Detail Pelanggan</p>
      <div class="my-3 border-b border-[#E5E5E5]" />
      <div v-if="isLoading">
        <p class="shimmer w-5/12"></p>
        <p class="shimmer w-9/12 my-2"></p>
        <p class="shimmer w-8/12"></p>
      </div>
      <div v-else>
        <div class="flex items-center gap-2">
          <img src="/images/icons/atoms/profile-green.svg" alt="nama" />
          <p class="text-sm md:text-base font-bold">{{ orderDetail.name }}</p>
        </div>
        <div class="flex items-center gap-2">
          <img src="/images/icons/atoms/phone-green.svg" alt="nama" />
          <p class="my-2 text-sm md:text-base font-normal">
            {{ orderDetail.phone }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <img src="/images/icons/atoms/email-green.svg" alt="nama" />
          <p class="text-sm md:text-base font-normal">
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
