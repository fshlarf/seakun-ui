<template>
  <div :class="`w-full ${cardShadow} h-full overflow-hidden rounded-md`">
    <div :class="`shimmer ${imageSize} md:h-[130px] w-full m-0`"></div>
    <div class="p-3 pt-2">
      <div :class="`shimmer ${cardTitleSize} w-full`"></div>
      <div class="flex items-center justify-between">
        <!-- Author -->
        <template v-if="showAuthor">
          <div class="shimmer h-4 w-[100px]"></div>
        </template>

        <!-- Date -->
        <template v-if="showDate">
          <div class="shimmer h-3 w-[200px]"></div>
        </template>

        <!-- Label -->
        <template v-if="showLabel">
          <CategoryTag :label="article.blogCategory[0].name" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTag from '~/components/mollecules/CategoryTagBlog.vue';
import { unixToIndonesianDate } from '~/helpers/word-transformation.js';

export default {
  props: {
    cardType: {
      type: String,
      default: 'article',
    },
    showLabel: {
      type: Boolean,
      default: false,
    },
    showDate: {
      type: Boolean,
      default: false,
    },
    showAuthor: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'article',
    },
    label: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  components: {
    CategoryTag,
  },
  computed: {
    cardShadow() {
      return this.cardType === 'article' ? 'bg-white shadow-md ' : '';
    },
    cardTitleSize() {
      return this.cardType === 'top' || this.cardType === 'article'
        ? 'min-h-[2.5rem]'
        : 'h-[1rem]';
    },
    imageSize() {
      return this.cardType === 'top' || this.cardType === 'article'
        ? 'h-[150px]'
        : 'h-[120px] rounded-md';
    },
    getColor() {
      return this.color === 'hero' ? 'text-white' : 'text-[#66738F]';
    },
  },
  methods: {
    unixToIndonesianDate,
  },
};
</script>

<style></style>
