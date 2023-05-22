<template>
  <div :class="`bg-[${flow.bgColor}] bg-opacity-${flow.opacity}`">
    <div class="text-[#66738F] lg:px-[40px] tn:px-[43px]">
      <p class="text-[46px] mt-[38px] font-bold">{{ flow.id }}</p>
      <h1 class="text-[24px] font-bold mt-[77px]">{{ flow.tittle }}</h1>
      <p class="text-[18px] text-justify mt-4 w-[280px]">{{ flow.preview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flow: {
      type: Object,
      default: {},
    },
  },
};
</script>
