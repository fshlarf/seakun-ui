<template>
  <div class="grid grid-cols-3 items-start gap-8">
    <div class="tn:col-span-3 lg:col-span-2">
      <div class="w-full">
        <div class="w-full tn:h-[360px] md:h-[448px] shimmer"></div>
        <div
          class="tn:mt-3 md:mt-4 grid tn:grid-cols-4 md:grid-cols-5 tn:gap-3 md:gap-4"
        >
          <div class="w-full tn:h-[80px] md:h-[123px] shimmer"></div>
          <div class="w-full tn:h-[80px] md:h-[123px] shimmer"></div>
          <div class="w-full tn:h-[80px] md:h-[123px] shimmer"></div>
          <div class="w-full tn:h-[80px] md:h-[123px] shimmer"></div>
          <div
            class="tn:hidden md:block w-full tn:h-[80px] md:h-[123px] md:shimmer"
          ></div>
        </div>
      </div>
      <div class="bg-white w-full tn:p-7 rounded-2xl space-y-3 tn:mt-8">
        <div class="shimmer h-6 w-1/3 rounded-full"></div>
        <div class="shimmer h-4 w-full"></div>
        <div class="shimmer h-4 w-3/4"></div>
        <div class="shimmer h-4 w-full"></div>
      </div>
      <div class="bg-white w-full tn:p-7 tn:mt-6 rounded-2xl space-y-3">
        <div class="shimmer h-6 w-1/3 rounded-full"></div>
        <div class="shimmer h-4 w-full"></div>
        <div class="shimmer h-4 w-3/4"></div>
        <div class="shimmer h-4 w-full"></div>
      </div>
    </div>
    <div class="w-full tn:hidden lg:block">
      <div class="bg-white tn:p-6 rounded-2xl space-y-3">
        <div class="shimmer h-4 w-1/2"></div>
        <div class="grid grid-cols-3 gap-3 items-center">
          <div class="shimmer h-4 w-full"></div>
          <div class="shimmer h-4 w-full col-span-2"></div>
        </div>
        <div class="shimmer h-4 w-full"></div>
        <div class="shimmer h-4 w-full"></div>
      </div>
      <div class="bg-white tn:p-6 rounded-2xl space-y-3 tn:mt-6">
        <div class="shimmer h-4 w-1/2"></div>
        <div class="shimmer h-4 w-full"></div>
        <div class="grid grid-cols-3 gap-3 items-center">
          <div class="shimmer h-4 w-full col-span-2"></div>
          <div class="shimmer h-4 w-full"></div>
        </div>
        <div class="shimmer h-4 w-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
