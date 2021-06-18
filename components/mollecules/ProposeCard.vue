<template>
  <div
    class="border-none max-w-sm bg-white shadow-xl rounded-xl text-gray-900 md:pb-3 relative z-0"
  >
    <div class="px-2 text-center relative z-0">
      <div class="md:px-2 md:mb-10 lg:mb-12 xl:mb-14">
        <img :src="`${propose.img}`" alt="image not found" class="w-full p-2" />
        <h1 class="md:text-xl font-bold">
          {{ propose.name }}
        </h1>
        <p class="text-xs md:text-base font-semibold md:font-normal">
          {{ propose.preview }}
        </p>
      </div>
    </div>
    <div class="tn:px-2 md:px-4">
      <Button
        variant="secondary"
        label="Ajukan permintaan"
        class="w-full my-2 font-bold text-sm md:text-base"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  props: {
    propose: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
