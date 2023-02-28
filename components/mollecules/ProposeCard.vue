<template>
  <div
    class="w-full h-full border-none max-w-sm bg-white shadow-xl rounded-[8px] text-gray-900 md:pb-3 relative z-0"
  >
    <div class="text-center relative z-0">
      <div class="md:px-2 md:mb-10 lg:mb-12 xl:mb-14">
        <img
          :src="`${propose.img}`"
          alt="propose your business"
          class="w-5/6 mx-auto"
        />
        <h1 class="md:text-xl font-bold">
          {{ propose.name }}
        </h1>
        <p class="text-xs md:text-base font-semibold md:font-normal">
          {{ propose.preview }}
        </p>
      </div>
    </div>

    <div class="w-full absolute z-10 bottom-0 left-0 tn:p-2 md:p-4">
      <nuxt-link class="w-full" to="/vote">
        <Button
          variant="secondary"
          label="Ajukan permintaan"
          class="w-full h-full md:!py-3 font-bold text-sm md:text-base"
        />
      </nuxt-link>
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
