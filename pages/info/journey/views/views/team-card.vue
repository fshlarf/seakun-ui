<template>
  <div class="bg-[#EFEFEF] shadow-sm rounded w-[166px] tn:py-2 text-center">
    <div class="h-[150px] w-[150px] mx-auto bg-[#D9D9D9] rounded"></div>
    <p class="font-bold text-primary tn:mt-2">{{ member.name }}</p>
    <p class="text-primary tracking-tight">{{ member.position }}</p>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
