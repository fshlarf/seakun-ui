<template>
  <div class="tn:w-60 lg:w-full rounded-3xl shadow-xl tn:py-2 md:py-4 tn:px-6 md:px-10">
    <div
      class="my-3 mx-auto rounded-full overflow-hidden tn:w-12 tn:h-12 lg:w-16 lg:h-16"
    >
      <img
        :src="`${customer.photo}`"
        alt="#"
        class="h-full object-cover mx-auto"
      />
    </div>
    <div>
      <h1
        class="text-center font-bold text-secondary tn:text-sm md:text-lg lg:text-xl xl:text-2xl md:my-2 mb-3"
      >
        {{ customer.name }} ({{ customer.provider }})
      </h1>
      <p class="my-2 tn:text-xs md:text-md lg:text-base">
        {{ customer.sortTestimony
        }}<span v-if="customer.sortTestimony.length === 155"
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
