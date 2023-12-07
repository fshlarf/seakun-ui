<template>
  <div
    class="w-[141px] lg:w-[222px] p-[8px] lg:p-[12px] shadow-md rounded-[8px]"
  >
    <div class="flex justify-between items-center">
      <div class="w-1/2 h-[15px] shimmer"></div>
      <div
        class="text-white border rounded-full px-2 text-[10px] w-[40px] h-[20px]"
      ></div>
    </div>

    <div class="mt-[8px]">
      <p class="text-[12px] font-bold">Group</p>
      <hr class="my-[8px]" />
      <div class="space-y-1 lg:space-y-2">
        <div class="shimmer w-1/2 h-3 lg:h-4"></div>
        <div class="shimmer w-3/4 h-3 lg:h-4"></div>
        <div class="shimmer w-1/2 h-3 lg:h-4"></div>
        <div class="shimmer w-3/5 h-3 lg:h-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
