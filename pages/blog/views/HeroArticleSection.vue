<template>
  <div class="container-seakun-blog">
    <div v-if="!isLoading" class="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
      <div
        v-for="(article, id) in articles.list"
        :key="id"
        :class="`${
          id == 0
            ? 'col-span-2 row-span-2 relative h-[240px] w-full md:h-[400px]'
            : 'relative h-[124px] max-h-[124px] md:h-[248px] md:max-h-full lg:h-full'
        }`"
      >
        <!-- Card -->
        <Card
          show-label
          :article="article"
          label-type="dark"
          :size="id == 0 ? 'large' : 'small'"
          class="h-full"
        />
      </div>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div class="shimmer col-span-2 row-span-2 rounded-[6px] w-full"></div>
      <div class="shimmer w-full h-[130px] md:h-[180px] rounded-[6px]"></div>
      <div class="shimmer w-full h-[130px] md:h-[180px] rounded-[6px]"></div>
      <div class="shimmer w-full h-[130px] md:h-[180px] rounded-[6px]"></div>
      <div class="shimmer w-full h-[130px] md:h-[180px] rounded-[6px]"></div>
    </div>
  </div>
</template>

<script>
import CategoryTag from '~/components/mollecules/CategoryTagBlog.vue';
import Card from './mollecules/FullArticleCard.vue';

export default {
  components: {
    Card,
    CategoryTag,
  },
  props: {
    articles: {
      type: Object,
      default: () => {},
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.title-font {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
