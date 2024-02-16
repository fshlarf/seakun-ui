<template>
  <div
    class="p-3 lg:p-4 bg-[#F6FFFD] border border-[#E0F8F2] text-xs md:text-sm rounded-lg"
  >
    <div class="space-y-5">
      <section>
        <p class="text-[#66738F]">Link Invitation</p>
        <div class="flex items-center gap-2 mt-2">
          <img
            src="/images/order-details/icons/copy.svg"
            alt="info"
            class="w-[13px] h-[15px] md:w-[18px] lg:h-[18px] cursor-pointer"
            @click="copyInformation(information.invitationUrl)"
          />
          <div class="truncate">
            <p class="text-[#474747] truncate">
              {{ information.invitationUrl }}
            </p>
          </div>
        </div>
      </section>
      <section>
        <p class="text-[#66738F]">Search Address</p>
        <div class="flex items-center gap-2 mt-3">
          <img
            src="/images/order-details/icons/copy.svg"
            alt="info"
            class="w-[13px] h-[15px] md:w-[18px] lg:h-[18px] cursor-pointer"
            @click="copyInformation(information.searchAddress)"
          />
          <p class="text-[#474747] text-information">
            {{ information.searchAddress }}
          </p>
        </div>
      </section>
      <section>
        <p class="text-[#66738F]">Spotify Full Address</p>
        <div class="flex items-center gap-2 mt-3">
          <img
            src="/images/order-details/icons/copy.svg"
            alt="info"
            class="w-[13px] h-[15px] md:w-[18px] lg:h-[18px] cursor-pointer"
            @click="copyInformation(information.fullAddress)"
          />
          <p class="text-[#474747] text-information">
            {{ information.fullAddress }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      typeof: Object,
      default: () => {},
    },
  },
  methods: {
    copyInformation(val) {
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

<style lang="scss" scoped>
.text-information {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* From which line on to truncate */
  overflow: hidden;
}
</style>
