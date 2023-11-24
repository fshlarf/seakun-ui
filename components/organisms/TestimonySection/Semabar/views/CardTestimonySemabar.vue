<template>
  <div
    class="rounded-[6px] bg-white border-[1px] boder-[#CFDADE]"
    v-show="dataTestimony"
  >
    <section class="p-4">
      <div class="w-full mx-auto">
        <img
          :src="`/images/semabar/testimony/${dataTestimony.images}`"
          :alt="dataTestimony.name"
          class="w-full h-[135px] md:h-[150px] lg:h-[177px] rounded-[6px] object-cover object-top"
        />
      </div>

      <p class="text-main leading-7 text-xs font-bold pt-3">
        {{ dataTestimony.name }}
      </p>
      <p class="text-[#66738F] text-xs leading-normal pt-1">
        {{ dataTestimony.address }}
      </p>
      <div class="border-t-[1px] border-[#ABBED133] mt-2">
        <p
          class="text-[#474747] text-xs md:text-sm leading-[18px] max-w-[284px] lg:max-w-[324px] pt-2"
        >
          {{ dataTestimony.text }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    dataTestimony: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
