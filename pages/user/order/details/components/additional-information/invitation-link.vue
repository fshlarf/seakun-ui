<template>
  <div
    class="p-3 lg:p-4 bg-[#F6FFFD] border border-[#E0F8F2] text-xs lg:text-sm rounded-lg space-y-3"
  >
    <section>
      <p class="text-[#66738F]">Invitation Link</p>
      <div class="flex items-center gap-2 mt-2">
        <img
          src="/images/order-details/icons/copy.svg"
          alt="info"
          class="w-[13px] h-[15px] md:w-[18px] lg:h-[18px] cursor-pointer"
          @click="copy(information.invitationLink)"
        />
        <div class="truncate">
          <p class="text-[#474747] truncate">
            {{ information.invitationLink }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <p class="text-[#66738F]">Address</p>
      <div class="flex items-center gap-2 mt-2">
        <img
          src="/images/order-details/icons/copy.svg"
          alt="info"
          class="w-[13px] h-[15px] md:w-[18px] lg:h-[18px] cursor-pointer"
          @click="copy(information.address)"
        />
        <div class="truncate">
          <p class="text-[#474747] truncate">
            {{ information.address }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    invitationLink: {
      typeof: String,
      default: '',
    },
    information: {
      typeof: Object,
      default: () => {},
    },
  },
  methods: {
    copy(val) {
      navigator.clipboard.writeText(val);
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
