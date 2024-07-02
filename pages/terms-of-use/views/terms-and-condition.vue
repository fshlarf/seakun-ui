<template>
  <div
    v-if="data"
    class="bg-white md:p-8 md:rounded-xl md:border border-[#E8F6F3] w-full text-justify"
  >
    <template v-for="(item, id) in data">
      <p
        :id="toKebabCase(item.title)"
        class="font-bold text-[15px] md:text-base lg:text-lg mt-5 md:mt-6"
        :class="{
          '!font-extrabold !text-base md:!text-lg lg:!text-2xl !mt-0': id == 0,
        }"
      >
        {{ item.title }}
      </p>

      <div v-if="id == 2">
        <section
          v-for="(val, key) in item.child"
          :key="key"
          class="flex gap-1 md:gap-2 text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2"
        >
          <p>{{ key }}.</p>
          <p>{{ val }}</p>
        </section>
      </div>

      <p class="text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2">
        {{ item.info }}
      </p>

      <div v-if="id !== 2">
        <section
          v-for="(val, key) in item.child"
          :key="key"
          class="flex gap-1 md:gap-2 text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2 pl-2.5"
        >
          <p>{{ key }}.</p>
          <p>{{ val }}</p>
        </section>
      </div>

      <section v-for="(parentVal, key) in item.childWithDesc" :key="key">
        <div
          class="flex gap-1 md:gap-2 text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2 pl-2.5"
        >
          <p>{{ key }}.</p>
          <p>{{ parentVal.title }}</p>
        </div>
        <section
          v-for="(val, key) in parentVal.desc"
          class="flex gap-1 md:gap-2 text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2 pl-8 md:pl-9"
        >
          <p>{{ key }}.</p>
          <p>{{ val }}</p>
        </section>
      </section>
      <p class="text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2">
        {{ item.desc }}
      </p>
      <section
        v-for="(val, key) in item.infoDescription"
        :key="key"
        class="flex gap-1 md:gap-2 text-xs md:text-sm leading-5 md:leading-[22px] pt-1 md:pt-2"
      >
        <p>{{ key }}.</p>
        <p>{{ val }}</p>
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
  methods: {
    toKebabCase(text) {
      return text.toLowerCase().replace(/\s+/g, '-');
    },
  },
};
</script>

<style lang="scss" scoped></style>
