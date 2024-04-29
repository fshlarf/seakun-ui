<template>
  <div class="container-seakun-blog">
    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Film</label>
        <SeeMoreTag text="film" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>

    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mb-0 md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Series</label>
        <SeeMoreTag text="series" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>

    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Musik</label>
        <SeeMoreTag text="musik" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>

    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Vlog</label>
        <SeeMoreTag text="vlog" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>

    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Edukasi</label>
        <SeeMoreTag text="edukasi" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>

    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Produktivitas</label>
        <SeeMoreTag text="produktivitas" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>

    <div class="my-6">
      <div
        class="title-font mb-4 mt-2 flex items-center justify-between md:mt-14"
      >
        <label class="text-[16px] font-bold text-primary">Game</label>
        <SeeMoreTag text="game" />
      </div>
      <div
        class="grid w-full grid-cols-2 flex-col items-center justify-between gap-3 md:my-6 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-5"
      >
        <Card
          card-type="category"
          show-date
          v-for="(article, id) in article_list"
          :key="id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/mollecules/ArticleCardBlog.vue';
import SeeMoreTag from '~/components/mollecules/SeeMoreTagBlog.vue';

export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: [],
    },
  },
  components: {
    Card,
    SeeMoreTag
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
          title: "What is Google One, and Is it Worth Paying For?",
          created_at: "2024-01-02",
          author: "Seakun.id",
          label: "Musik",
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
