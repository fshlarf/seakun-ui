<template>
  <div class="fixed top-0 right-0 left-0 bottom-0 bg-[#00000099] z-50">
    <div
      class="absolute top-1/2 -translate-y-1/2 md:top-[58px] md:translate-y-0 left-1/2 -translate-x-1/2 w-max z-40 preview-image"
    >
      <div
        class="flex items-center sm:gap-2 md:gap-3 lg:gap-10 xl:gap-[68px] justify-center sm:w-max mx-auto"
      >
        <div class="w-10 hidden sm:block">
          <img
            v-if="idImage !== 0"
            src="/images/icons/atoms/ellipse-chevron.svg"
            alt="left"
            @click="handleChevron('left')"
            class="cursor-pointer w-10 h-10"
          />
        </div>
        <div
          v-if="dataPreview"
          class="grid px-5 sm:px-0 w-full sm:w-max mx-auto"
        >
          <div class="relative h-max">
            <div
              class="sm:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20"
            >
              <img
                v-if="idImage !== 0"
                src="/images/icons/atoms/ellipse-chevron.svg"
                alt="left"
                @click="handleChevron('left')"
                class="cursor-pointer w-6 h-6"
              />
            </div>
            <div v-for="(preview, id) in dataPreview" :key="id" class="w-full">
              <div
                v-show="idImage === id"
                class="w-full h-[200px] sm:w-[500px] sm:h-[270px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[940px] xl:h-[500px] mt-2 sm:mt-4 rounded-lg relative"
              >
                <img
                  :src="preview.image"
                  alt="gallery"
                  class="w-full h-full rounded-lg object-cover absolute"
                />
                <img
                  src="/images/icons/atoms/ellipse-close-chevron.svg "
                  alt=""
                  class="w-6 h-6 md:w-7 md:h-7 cursor-pointer z-40 absolute -right-2 -top-3"
                  @click="$emit('click-arrow')"
                />
              </div>
            </div>
            <div class="sm:hidden absolute top-1/2 -translate-y-1/2 right-2">
              <img
                v-if="idImage + 1 !== dataPreview.length"
                src="/images/icons/atoms/ellipse-chevron.svg"
                alt="left"
                @click="handleChevron('right')"
                class="cursor-pointer w-6 h-6 rotate-180"
              />
            </div>
          </div>
        </div>
        <div class="w-10 hidden sm:block">
          <img
            v-if="idImage + 1 !== dataPreview.length"
            src="/images/icons/atoms/ellipse-chevron.svg"
            alt="left"
            @click="handleChevron('right')"
            class="cursor-pointer w-10 h-10 rotate-180"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonChevron from '~/components/atoms/ButtonChevron';
export default {
  components: {
    ButtonChevron,
  },
  props: {
    dataPreview: {
      type: Array,
      default: () => [],
    },
    currentId: {
      type: Number,
      default: null,
    },
    clickOutside: Function,
    default: () => {},
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
        if (this.idImage + 1 !== this.dataPreview.length) {
          this.idImage++;
        }
      }
    },
    handleChevron(direction) {
      if (direction == 'left' && this.idImage !== 0) {
        this.idImage--;
      } else {
        if (this.idImage + 1 !== this.dataPreview.length) {
          this.idImage++;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
