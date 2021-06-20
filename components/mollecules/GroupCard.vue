<template>
  <div class="p-4 my-8 rounded-2xl shadow w-72">
    <div class="flex justify-between items-center">
      <img class="w-28" :src="`${group.brand}`" alt="#" />
      <div class="px-2 bg-green-600 rounded-full">
        <p class="text-white text-sm font-bold">Available</p>
      </div>
    </div>
    <p class="my-2 font-bold">Group {{ group.number }}</p>
    <div class="h-px w-full bg-primary my-2"></div>
    <ol class="space-y-1">
      <li
        v-for="(member, id) in group.member"
        :key="id"
        :class="{ 'text-secondary font-bold': member === 'Slot tersedia' }"
      >
        {{ id + 1 }}. {{ member }}
      </li>
    </ol>
    <div>
      <Button
        label="Daftar sekarang"
        variant="primary"
        class="w-full mt-4 font-bold"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  props: {
    group: {
      type: Object,
      default: {},
    },
  },
  components: {
    Button,
  },
};
</script>

<style></style>
