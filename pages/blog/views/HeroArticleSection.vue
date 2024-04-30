<template>
  <div class="container-seakun-blog mt-3 flex flex-col gap-2 lg:flex-row">
    <div class="relative h-[240px] w-full md:h-[400px]">
      <!-- Card -->
      <Card
        show-label
        :article="left_article"
        label-type="dark"
        size="large"
        class="h-full"
      />
    </div>

    <div class="grid w-full grid-cols-2 grid-rows-2 gap-2">
      <div
        v-for="(article, index) in right_article"
        class="relative h-[124px] max-h-[124px] md:h-[248px] md:max-h-full lg:h-full"
      >
        <!-- Card -->
        <Card
          show-label
          :article="article"
          size="small"
          label-type="dark"
          class="h-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTag from'~/components/mollecules/CategoryTagBlog.vue';
import Card from '~/components/mollecules/FullImageCardBlog.vue';

export default {
  components: {
    Card,
    CategoryTag
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
          title: "Top 10 Most Streamed Songs on Spotify 2023",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Musik",
          image: "/images/seakun-blog/netflix.jpg",
        },
        {
          title: "Duolingo Tips That EVERY User Should Know",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Film",
          image: "/images/seakun-blog/netflix.jpg",
        },
        {
          title: "What is Google One, and Is it Worth Paying For?",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Musik",
          image: "/images/seakun-blog/netflix.jpg",
        },
        {
          title: "How to Start a Vlog in 5 Easy Steps",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Film",
          image: "/images/seakun-blog/netflix.jpg",
        },
      ],
    };
  },
  computed: {
    left_article() {
      return this.article_list[0];
    },
    right_article() {
      return this.article_list.slice(1);
    },
  },
};
</script>


<style scoped>
.title-font {
  font-family: "Nunito Sans", sans-serif;
}
</style>
