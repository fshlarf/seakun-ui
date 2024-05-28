<template>
  <div>
    <section
      class="p-4 bg-[#E9FCF8] rounded-lg sm:flex items-center gap-2 hidden"
    >
      <img
        src="/images/icons/sprinkle-yellow.svg"
        alt="new"
        class="w-[25px] h-[25px]"
      />
      <p class="sm:text-xs lg:text-sm text-[#417465] font-medium">
        BARU!! Sekarang kamu dapat melihat detail pesanan dengan mengklik Nomor
        Pesanan di bawah ini.
      </p>
    </section>
    <section
      class="fixed top-0 left-0 bottom-0 right-0 bg-black/40 z-50 flex justify-center items-center sm:hidden"
    >
      <div class="absolute">
        <img
          src="/images/banner/popup-update-odp.webp"
          alt="information"
          class="w-full max-w-[328px] h-[216px]"
        />
        <img
          src="/images/icons/atoms/close.svg"
          alt="close"
          class="absolute -top-3 -right-3 bg-black/[35%] rounded-full p-1 w-7 h-7 cursor-pointer"
          @click="$emit('handleClose')"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
