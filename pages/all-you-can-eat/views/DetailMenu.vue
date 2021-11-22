<template>
  <div class="my-4">
    <div class="grid grid-cols-5 tn:gap-2 md:gap-6 tn:space-y-2 md:space-y-0">
      <div class="col-span-2">
        <img
          class="w-full tn:h-[127px] md:h-[350px] object-cover tn:mb-2 md:mb-0"
          :src="`${imagePreview}`"
          alt="image not found"
        />
        <div
          class="scroll-menu flex space-x-1 overflow-x-auto overscroll-auto md:!hidden"
        >
          <img
            v-for="(image, id) in detailRestaurant.images"
            :key="id"
            class="w-[36px] h-[36px] object-cover cursor-pointer rounded-lg"
            :src="`${image}`"
            alt="image not found"
            @click="$emit('onClickImage', image)"
          />
        </div>
      </div>
      <div class="col-span-3">
        <div
          class="hidden scroll-menu md:flex space-x-1 overflow-x-auto overscroll-auto"
        >
          <img
            v-for="(image, id) in detailRestaurant.images"
            :key="id"
            class="w-24 h-24 object-cover cursor-pointer rounded-lg"
            :src="`${image}`"
            alt="image not found"
            @click="$emit('onClickImage', image)"
          />
        </div>
        <div class="tn:-mt-2 md:my-3 space-y-2">
          <p class="md:text-3xl font-bold">{{ detailRestaurant.name }}</p>
          <p class="tn:text-xs md:text-base font-medium">
            {{ detailRestaurant.location }}
          </p>
          <p
            class="flex items-center tn:text-xs md:text-sm space-x-2 text-secondary"
          >
            <span
              ><img class="mr-1" src="images/icons/atoms/call-icon.svg" alt="#"
            /></span>
            {{ detailRestaurant.phone }}
          </p>
          <p class="tn:text-xs md:text-base font-medium">
            {{ detailRestaurant.address }}
          </p>
          <Button
            class="tn:my-2 md:my-4 py-2 tn:w-full md:w-auto tn:!text-xs md:!text-base"
            label="PILIH VARIAN"
            variant="third"
            @click="onClickChooseVariant"
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
    detailRestaurant: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currencyFormat,
    };
  },
  methods: {
    onClickChooseVariant() {
      const variantSection = document.getElementById('package-variant');
      variantSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
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
