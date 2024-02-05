<template>
  <div
    class="p-3 lg:p-4 bg-[#F6FFFD] border border-[#E0F8F2] text-xs lg:text-sm rounded-lg"
  >
    <p class="text-[#66738F]">Invitation Link</p>
    <div class="flex items-center gap-2 mt-2">
      <img
        src="/images/order-details/icons/copy.svg"
        alt="info"
        class="w-[13px] h-[15px] md:w-[18px] lg:h-[18px] cursor-pointer"
        @click="copy"
      />
      <div class="truncate">
        <p class="text-[#474747] truncate">
          {{ invitationLink }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invitationLink: {
      typeof: String,
      default: '',
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.invitationLink);
      this.$alert.show({
        status: 'success',
        title: '',
        message: 'Copied to clipboard',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
