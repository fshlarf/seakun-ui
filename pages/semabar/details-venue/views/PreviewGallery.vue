<template>
  <div class="fixed top-0 right-0 left-0 bottom-0 bg-[#00000099]">
    <div class="absolute top-[98px] left-1/2 -translate-x-1/2 w-full">
      <div
        class="flex items-center sm:gap-2 md:gap-3 lg:gap-10 xl:gap-[68px] justify-center sm:w-max mx-auto"
      >
        <div class="w-10 hidden sm:block">
          <ButtonChevron
            fill-color="white"
            variant="bg-[#00000080]"
            mode="left"
            add-class="!w-10 !h-10"
            v-if="idImage !== 0"
            @click-chevron="handleChevron('left')"
          />
        </div>
        <div v-if="gallery" class="grid px-5 sm:px-0 w-full sm:w-max mx-auto">
          <ArrowBack @click="$emit('click-arrow')" />
          <div class="relative h-max">
            <div class="sm:hidden absolute top-1/2 -translate-y-1/2 left-2">
              <ButtonChevron
                fill-color="white"
                variant="bg-[#00000066]"
                mode="left"
                add-class="!w-6 !h-6"
                v-if="idImage !== 0"
                @click-chevron="handleChevron('left')"
              />
            </div>
            <div v-for="(gallery, id) in gallery" :key="id" class="w-full">
              <img
                v-show="idImage === id"
                :src="`/images/semabar/gallery/${gallery.images}`"
                alt="gallery"
                class="w-full h-[200px] sm:w-[500px] sm:h-[270px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[940px] xl:h-[500px] mt-2 sm:mt-4 rounded-lg"
              />
            </div>
            <div class="sm:hidden absolute top-1/2 -translate-y-1/2 right-2">
              <ButtonChevron
                fill-color="white"
                variant="bg-[#00000066]"
                add-class="!w-6 !h-6 "
                v-if="idImage + 1 !== gallery.length"
                @click-chevron="handleChevron('right')"
              />
            </div>
          </div>
        </div>
        <div class="w-10 hidden sm:block">
          <ButtonChevron
            fill-color="white"
            variant="bg-[#00000080]"
            add-class="!w-10 !h-10"
            @click-chevron="handleChevron('right')"
            v-if="idImage + 1 !== gallery.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonChevron from '~/components/atoms/ButtonChevron';
import ArrowBack from '~/components/atoms/ArrowBack.vue';
export default {
  components: {
    ButtonChevron,
    ArrowBack,
  },
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
    currentId: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      idImage: this.currentId,
    };
  },
  mounted() {
    document.addEventListener('keydown', this.shortCutHandleChevron);
  },
  beforeDestroy() {
    document.removeEventListener(
      'keydown',
      this.shortCutCloseshortCutHandleChevronPreview
    );
  },
  methods: {
    shortCutHandleChevron(event) {
      if (event.keyCode === 37) {
        if (this.idImage !== 0) {
          this.idImage--;
        }
      } else if (event.keyCode === 39) {
        if (this.idImage + 1 !== this.gallery.length) {
          this.idImage++;
        }
      }
    },
    handleChevron(direction) {
      if (direction == 'left' && this.idImage !== 0) {
        this.idImage--;
      } else {
        if (this.idImage + 1 !== this.gallery.length) {
          this.idImage++;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
