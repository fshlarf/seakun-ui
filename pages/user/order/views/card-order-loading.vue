<template>
  <div class="rounded-[10px]">
    <header
      class="rounded-t-[10px] border-[1px] border-b-0 flex items-center justify-between p-3 md:px-5 md:py-3"
    >
      <div class="shimmer h-4 w-1/3"></div>
      <div
        class="bg-white border-[1px] text-center min-w-[91px] rounded-[6px] p-3"
      ></div>
    </header>
    <div
      class="p-3 md:p-5 border-[1px] rounded-b-[10px] flex justify-between items-center"
    >
      <div>
        <section class="flex gap-2 items-center">
          <img src="/images/icon/product.svg" alt="product" />
          <div class="shimmer h-4 w-[150px]"></div>
        </section>
        <section class="flex gap-2 items-center mt-2">
          <img src="/images/icon/price-tag.svg" alt="product" />
          <div class="shimmer h-4 w-[200px]"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
