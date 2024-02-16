<template>
  <div class="">
    <h3
      class="text-base font-bold text-green-seakun-secondary-dark"
      style="font-feature-settings: 'clig' off, 'liga' off"
    >
      Detail Harga & Member
    </h3>
    <div class="space-y-2 mt-3">
      <section
        v-for="(info, id) in details"
        :key="id"
        class="flex justify-between text-base"
      >
        <p>{{ info.name }}</p>
        <div class="flex items-center gap-1">
          <p
            :class="{
              'font-medium text-green-primary': id + 1 == details.length,
            }"
          >
            {{ info.details }}
          </p>
          <div class="relative" v-if="id + 1 == details.length">
            <div @click="isClickInfo = !isClickInfo">
              <Info color="#00B5D4" class="cursor-pointer" />
            </div>
            <div v-if="isClickInfo">
              <p
                class="tooltiptext w-max text-xs p-2 absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
              >
                Sudah termasuk biaya admin Seakun
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Info from '~/components/icons/Info.vue';

export default {
  components: {
    Info,
  },
  props: {
    details: {
      typeof: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isClickInfo: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.tooltiptext {
  background-color: #2d2d2de5;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  z-index: 1;
}

.tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #2d2d2de5 transparent transparent transparent;
}
</style>
