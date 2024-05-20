<template>
  <div
    class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3"
  >
    <div
      v-for="(item, id) in items"
      :key="id"
      @click="onClickCard(item.nominal)"
      class="text-gray-secondary/80 w-full border bg-[#FAFBFB] border-[#E1EDEA] py-3 text-center rounded-lg text-xs sm:text-sm lg:text-base cursor-pointer"
    >
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Rp10.000',
          nominal: 10000,
        },
        {
          text: 'Rp20.000',
          nominal: 20000,
        },
        {
          text: 'Rp50.000',
          nominal: 50000,
        },
        {
          text: 'Rp100.000',
          nominal: 100000,
        },
        {
          text: 'Rp200.000',
          nominal: 200000,
        },
        {
          text: 'Rp500.000',
          nominal: 500000,
        },
        {
          text: 'Rp1.000.000',
          nominal: 1000000,
        },
      ],
    };
  },
  methods: {
    onClickCard(val) {
      this.$emit('onClick', val);
    },
  },
};
</script>

<style lang="scss" scoped></style>