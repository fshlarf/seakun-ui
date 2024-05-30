<template>
  <div class="rounded-[8px] shadow-md p-2 md:p-3 w-full flex gap-3">
    <div
      class="shimmer w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-[6px] shrink-0"
    ></div>
    <div class="w-full">
      <div class="shimmer h-3 md:h-4 w-[90%]"></div>
      <div class="shimmer h-2 md:h-3 w-full md:mt-2"></div>
      <div class="shimmer h-2 md:h-3 w-[70%]"></div>
      <div class="mt-2 hidden md:flex justify-between items-center">
        <p class="shimmer h-2 md:h-3 w-[100px]"></p>
        <div class="shimmer h-3 md:h-4 w-[100px]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTag from '~/components/mollecules/CategoryTagBlog.vue';
import { unixToIndonesianDate } from '~/helpers/word-transformation.js';

export default {
  components: {
    CategoryTag,
  },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    preview() {
      const content = JSON.parse(this.article.content);
      const firstParagraph = content.blocks.find(
        (item) => item.type === 'paragraph'
      );
      return firstParagraph ? firstParagraph.data.text : '';
    },
    category() {
      return this.article.blogCategory[0].name;
    },
    thumbnail() {
      return this.article.blogThumbnail.fileUrl;
    },
  },
  methods: {
    unixToIndonesianDate,
  },
};
</script>

<style></style>
