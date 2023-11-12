<template>
  <div
    class="w-[141px] lg:w-[222px] p-[8px] lg:p-[12px] shadow-md rounded-[8px]"
  >
    <div class="flex justify-between items-center">
      <div class="">
        <img
          class="max-w-1/2 max-h-[15px] lg:max-h-[22px]"
          :src="`/images/product/brand/${provider}.png`"
          alt="brand"
        />
      </div>
      <div
        class="text-white rounded-full px-2 text-[10px] lg:text-[12px]"
        :class="`${isAvailable ? 'bg-primary' : 'bg-red-500'}`"
      >
        {{ isAvailable ? 'Available' : 'Full' }}
      </div>
    </div>

    <div class="mt-[8px]">
      <p class="text-[12px] lg:text-base font-bold">Group {{ group.group }}</p>
      <hr class="my-[8px]" />
      <div class="space-y-1 lg:space-y-2 xl:space-y-3">
        <div
          v-for="(member, id) in group.accountGroup"
          :key="id"
          class="flex gap-1 items-start text-[10px] lg:text-base"
        >
          <p class="leading-4 min-w-[14px]">{{ id + 1 }}.</p>
          <p
            class="max-w-[85%] leading-4 truncate"
            :class="{ 'font-medium text-primary': member.customerName == '-' }"
          >
            {{
              member.customerName == '-'
                ? 'Slot tersedia'
                : `${member.customerName}`
            }}
          </p>
        </div>
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
    provider: {
      type: String,
      default: '',
    },
  },
  computed: {
    isAvailable() {
      return this.group.accountGroup.some((member) => {
        return member.customerName == '-';
      });
    },
  },
};
</script>

<style></style>
