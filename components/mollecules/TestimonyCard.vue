<template>
  <div class="tn:w-60 lg:w-full rounded-3xl shadow-xl text-center p-4">
    <div
      class="my-1 mx-auto rounded-full overflow-hidden w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
    >
      <img
        :src="`${customer.photo}`"
        alt="#"
        class="h-full object-cover mx-auto"
      />
    </div>
    <div class="text-center">
      <h1
        class="font-bold text-secondary md:text-lg lg:text-xl xl:text-2xl my-1 md:my-2 mb-3"
      >
        {{ customer.name }} ({{ customer.provider }})
      </h1>
      <p class="my-2 text-xs md:text-sm lg:text-base">
        {{ customer.sortTestimony
        }}<span v-if="customer.sortTestimony.length === 220"
          >...
          <span
            @click="onClickShowTestimony(customer)"
            class="text-primary font-bold cursor-pointer"
            >lihat selengkapnya</span
          ></span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onClickShowTestimony(data) {
      this.$emit('onClickShowTestimony', data);
    },
  },
};
</script>

<style></style>
