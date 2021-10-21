<template>
  <div class="md:my-4">
    <div class="md:grid md:grid-cols-5 md:gap-6 tn:space-y-2 md:space-y-0">
      <div class="md:col-span-2">
        <img
          class="w-full tn:h-[300px] md:h-[350px] object-cover"
          :src="`${imagePreview}`"
          alt="image not found"
        />
      </div>
      <div class="md:col-span-3">
        <div class="scroll-menu flex space-x-1 overflow-x-auto overscroll-auto">
          <img
            v-for="(image, id) in dataImages"
            :key="id"
            class="w-24 h-24 object-cover cursor-pointer rounded-lg"
            :src="`${image.src}`"
            alt="image not found"
            @click="$emit('onClickImage', image)"
          />
        </div>
        <div class="my-3 space-y-2">
          <p class="text-3xl font-bold"> {{ dataMenus.name }} </p>
          <p>
            {{ dataMenus.location }}
          </p>
          <p class="flex items-center text-sm space-x-2 text-secondary"><span><img class="mr-1" src="images/icons/atoms/call-icon.svg" alt="#"></span> {{ dataMenus.phone }} </p>
          <p>{{ dataMenus.address }}</p>
          <Button
            class="my-4 py-2 tn:w-full md:w-auto"
            label="PILIH VARIAN"
            variant="third"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import { currencyFormat } from '~/helpers/word-transformation.js';
export default {
  components: {
    Button,
  },
  props: {
    imagePreview: {
      type: String,
      default: '',
    },
    dataMenus: {
      type: Object,
      default: () => {},
    },
    dataImages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currencyFormat,
    };
  },
};
</script>

<style scoped>
.scroll-menu::-webkit-scrollbar {
  display: none;
}
.scroll-menu {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
