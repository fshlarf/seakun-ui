<template>
  <div
    v-if="data"
    class="bg-white md:p-8 md:rounded-xl md:border border-[#E8F6F3] w-full text-justify"
  >
    <template v-for="(item, id) in data">
      <section>
        <p
          class="font-bold text-[15px] md:text-base lg:text-lg mt-5 md:mt-6"
          :class="{
            '!font-extrabold !text-base md:!text-lg lg:!text-2xl !mt-0':
              id == 0,
          }"
        >
          {{ item.title }}
        </p>
        <p class="text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2">
          {{ item.info }}
        </p>
        <div
          v-if="item.child"
          class="text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2 pl-2.5"
        >
          <section
            v-for="(value, key) in item.child"
            :key="key"
            class="flex gap-1 md:gap-2"
          >
            <p>{{ key }}.</p>
            <p>{{ value }}</p>
          </section>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      typeof: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
