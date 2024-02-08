<template>
  <div>
    <div
      class="flex-1 flex-col p-3 rounded border-l-4 border-green-seakun bg-white"
    >
      <p class="text-lg font-bold">Detail Pemesan</p>
      <div class="my-3 border-b border-[#E5E5E5]" />
      <div v-if="isLoading">
        <p class="shimmer w-5/12"></p>
        <p class="shimmer w-9/12 my-2"></p>
        <p class="shimmer w-8/12"></p>
      </div>
      <div v-else>
        <p class="text-base font-bold">{{ orderDetail.name }}</p>
        <p class="my-2 text-base font-normal">{{ orderDetail.phone }}</p>
        <p class="text-base font-normal">{{ orderDetail.email }}</p>
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
