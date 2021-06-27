<template>
  <div class="">
    <div>
      <img :src="`${dataFlow.img}`" alt="#" class="mx-auto" />
    </div>
    <div class="flex justify-center items-center space-x-1 md:space-x-2">
      <CircleIcon :label="dataFlow.id" variant="primary" />
      <span class="text-secondary font-bold text-xs md:text-base">
        {{ dataFlow.title }}
      </span>
    </div>
  </div>
</template>

<script>
import CircleIcon from '~/components/atoms/CircleIcon.vue';
export default {
  props: {
    dataFlow: {
      type: Object,
      default: {},
    },
  },
  components: {
    CircleIcon,
  },
};
</script>

<style></style>
