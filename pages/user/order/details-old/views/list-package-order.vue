<template>
  <div>
    <div class="">
      <h3 class="text-base font-bold text-green-seakun-secondary-dark">
        Paket & Masa Langganan
      </h3>
      <div class="space-y-2 mt-3">
        <section
          v-for="(packages, id) in dataPackage"
          :key="id"
          class="flex justify-between text-base"
        >
          <p>{{ packages.name }}</p>
          <p
            :class="{
              'font-medium text-green-primary': id + 1 == dataPackage.length,
            }"
          >
            {{ packages.details }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataPackage: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
