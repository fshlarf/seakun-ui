<template>
  <div class="px-4 py-2 bg-[#F1FEFB] rounded-[10px] h-max">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="text-green-seakun-secondary-dark font-bold text-base">
          Group
        </h1>
        <div class="space-y-3 mt-4 grid grid-rows-3 grid-flow-col gap-x-[10px]">
          <section
            v-for="(member, id) in dataGroup"
            :key="id"
            class="flex items-center gap-2 w-[186px] truncate"
          >
            <div
              class="w-6 h-6 flex items-center justify-center bg-green-seakun-secondary-dark/10 rounded-full"
            >
              <p class="text-sm text-green-seakun-secondary-dark font-bold">
                {{ id + 1 }}
              </p>
            </div>
            <p class="text-sm truncate">
              {{ member && member.name ? maskName(member.name) : '' }}
            </p>
          </section>
        </div>
      </div>
      <div class="pr-4">
        <img
          src="/images/illustration/card-group-order.png"
          alt="group"
          class="w-[200px] h-[160px] object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { maskName } from '~/helpers/word-transformation.js';
export default {
  props: {
    dataGroup: {
      typeof: Array,
      default: () => [],
    },
  },
  methods: {
    maskName,
  },
};
</script>

<style lang="scss" scoped></style>
