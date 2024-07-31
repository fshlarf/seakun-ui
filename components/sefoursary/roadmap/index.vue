<template>
  <div>
    <section v-if="isLoading" class="container-about-us">
      <div
        class="bg-slate-200 w-full h-[600px] lg:h-[800px] rounded-lg lg:rounded-[25px] p-10 mt-[60px] lg:mt-[170px] relative animate-pulse"
      ></div>
    </section>
    <section v-else>
      <MobileRoadmap
        class="lg:hidden"
        @onClickLevel="(level) => $emit('onClickLevel', level)"
        :level="level"
      />
      <DesktopRoadmap
        class="hidden lg:block"
        @onClickLevel="(level) => $emit('onClickLevel', level)"
        :level="level"
      />
    </section>
  </div>
</template>

<script>
import MobileRoadmap from './mobile.vue';
import DesktopRoadmap from './desktop.vue';
export default {
  components: {
    MobileRoadmap,
    DesktopRoadmap,
  },
  props: {
    level: {
      type: Number,
      default: 1,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
