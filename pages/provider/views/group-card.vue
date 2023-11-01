<template>
  <div class="w-[141px] p-[8px] shadow-md rounded-[8px]">
    <div class="flex justify-between items-center">
      <div class="">
        <img
          class="max-w-1/2 max-h-[15px]"
          src="/images/product/brand/gramedia-digital.png"
          alt="brand"
        />
      </div>
      <div class="text-white bg-primary rounded-full px-2 text-[10px]">
        Available
      </div>
    </div>

    <div class="mt-[8px]">
      <p class="text-[12px] font-bold">Group {{ group.group }}</p>
      <hr class="my-[8px]" />
      <div class="space-y-1">
        <div
          v-for="(member, id) in group.accountGroup"
          :key="id"
          class="flex items-start text-[10px]"
        >
          <p class="leading-4 min-w-[10px]">{{ id + 1 }}.</p>
          <p
            class="max-w-[85%] leading-4"
            :class="{ 'font-medium text-primary': member.customerName == '-' }"
          >
            {{
              member.customerName == '-' ? 'Slot tersedia' : member.customerName
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
  },
};
</script>

<style></style>
