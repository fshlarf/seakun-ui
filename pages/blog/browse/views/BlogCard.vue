<template>
  <div
    class="rounded-[8px] shadow-md p-2 md:p-3 w-full flex gap-3 cursor-pointer"
    @click="$emit('onClickCard', article.uid)"
  >
    <img
      :src="thumbnail"
      alt="thumbnail"
      class="w-[84px] h-[84px] md:w-[96px] md:h-[96px] object-cover rounded-[6px] shrink-0 bg-slate-200"
    />
    <div>
      <p class="font-medium text-xs md:text-sm line-clamp-1 overflow-hidden">
        {{ article.title }}
      </p>
      <p class="text-xs text-[#66738F] line-clamp-2 mt-2 overflow-hidden">
        {{ preview }}
      </p>
      <div class="mt-3 flex justify-between items-center">
        <p class="text-[11px] md:text-xs text-[#A0A3BD]">
          {{ unixToIndonesianDate(article.publishedAt) }}
        </p>
        <CategoryTag :label="category" />
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
