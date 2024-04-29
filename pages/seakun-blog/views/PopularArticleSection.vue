<template>
  <div class="container-seakun-blog py-3 md:pb-16 md:pt-4">
    <div class="title-font mb-5 mt-6 text-center">
      <label class="text-[16px] font-bold text-main">Popular</label>
      <label class="text-[16px] font-bold text-primary"> Article</label>
    </div>
    <div
      class="relative grid h-[732px] w-full grid-cols-1 items-center gap-4 md:h-[248px] md:grid-cols-3 lg:h-[346px] lg:gap-10"
    >
      <CardHero
        show-label
        v-for="(article, id) in article_list"
        :key="id"
        :article="article"
      />
    </div>
    <div
      class="mt-4 grid w-full items-center gap-5 md:mt-8 md:grid-cols-2 md:flex-row lg:grid-cols-3 lg:gap-10"
    >
      <CardRecommend
        size="small"
        image="medium"
        show-date
        show-label-medium
        v-for="(article, id) in article_list"
        :key="id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import CardHero from '~/components/mollecules/FullImageCardBlog.vue';
import CardRecommend from '~/components/mollecules/RecommendCardBlog.vue';

export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    CardHero,
    CardRecommend
  },
  data() {
    return {
      article_list: [
        {
          title: "Top 3 Netflix Movies 2023",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Film",
          image: "/images/seakun-blog/netflix.jpg",
        },
        {
          title: "Top 3 Netflix Movies 2023",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Musik",
          image: "/images/seakun-blog/netflix.jpg",
        },
        {
          title: "Top 3 Netflix Movies 2023",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Film",
          image: "/images/seakun-blog/netflix.jpg",
        },
      ],
    };
  },
};
</script>


<style>
.title-font {
  font-family: "Nunito Sans", sans-serif;
}
</style>
