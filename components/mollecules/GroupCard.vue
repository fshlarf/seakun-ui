<template>
  <div class="p-4 my-8 rounded-2xl shadow w-72">
    <div class="flex justify-between items-center">
      <img class="w-28" :src="`${group.brand}`" alt="#" />
      <div :class="`px-2  ${group.members.some(el => el === '') ? 'bg-green-600' : 'full'} rounded-full`">
        <p class="text-white text-sm font-bold">
          {{ group.members.some(el => el === '') ? 'available' : 'full' }}
        </p>
      </div>
    </div>
    <p class="my-2 font-bold">Group {{ group.groupNumber }}</p>
    <div class="h-px w-full bg-primary my-2"></div>
    <ol class="space-y-1">
      <li
        v-for="(member, id) in group.members"
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
        :disabled="setDisabledBtn(group.members)"
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
  methods: {
    setDisabledBtn(members) {
      return members.some(el => el === '') ? false : true
    },
  }
};
</script>

<style scoped>
.full {
  background-color: #FB2525;
}
</style>
