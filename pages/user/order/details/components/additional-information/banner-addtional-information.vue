<template>
  <div
    class="p-3 lg:p-4 bg-[#F6FFFD] border border-[#E0F8F2] text-xs md:text-sm rounded-lg"
  >
    <p class="text-[#66738F]">{{ message.title }}</p>
    <hr class="border-[#BDC3D8]/10 my-2 lg:my-3" />
    <div class="flex items-center gap-2">
      <img
        src="/images/order-details/info-icon.svg"
        alt="info"
        class="w-[18px] h-[18px]"
      />
      <p class="text-[#474747]">
        {{ message.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
