<template>
  <div>
    <h1 class="text-base font-bold text-green-seakun-secondary-dark">
      Benefit Layanan
    </h1>
    <div class="space-y-[10px] mt-3">
      <section
        v-for="(benefit, id) in dataBenefit"
        :key="id"
        class="flex gap-2 items-center"
      >
        <img
          src="/images/icons/atoms/checked-green-secondary.svg"
          alt="available"
          class="w-5 h-5"
        />
        <p>{{ benefit.name }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBenefit: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
