<template>
  <div class="container py-3 md:pt-6 md:pb-[44px]">
    <div class="flex justify-between items-center">
      <div class="title-font mb-5 mt-6">
        <label class="text-[16px] font-bold text-text-dark">Latest</label>
        <label class="text-[16px] font-bold text-primary"> Article</label>
      </div>
      <div class="flex justify-end">
        <PaginationButton
          :disable="page === 1"
          @handleClick="prevPage"
          class="mx-[12px]"
        >
          <svg
            :class="{ 'stroke-[#2D2D2D]/50 stroke-[3px]': page === 1 }"
            class="stroke-[#2D2D2D] stroke-[3px]"
            width="16px"
            height="16px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </PaginationButton>

        <PaginationButton :disable="page === total" @handleClick="nextPage">
          <svg
            :class="{
              'stroke-[#2D2D2D]/50 stroke-[3px]': page === total,
            }"
            class="stroke-[#2D2D2D] stroke-[3px]"
            width="16px"
            height="16px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </PaginationButton>
      </div>
    </div>
    <div
      class="grid w-full grid-cols-1 items-center justify-between gap-5 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
    >
      <Card
        label_type="light"
        show-label
        show-date
        v-for="(article, id) in paginatedPage"
        :key="id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/mollecules/ArticleCardBlog.vue';
import PaginationButton from '~/components/mollecules/PaginationButtonBlog.vue';

export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    Card,
    PaginationButton,
  },
  data() {
    return {
      article_list: [
        {
          title: 'Top 3 Netflix Movies 2023',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/netflix.jpg',
        },
        {
          title: 'Top 10 Most Streamed Songs on Spotify 2023',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/netflix.jpg',
        },
        {
          title: 'Duolingo Tips That EVERY User Should Know',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/netflix.jpg',
        },
        {
          title: 'What is Google One, and Is it Worth Paying For?',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/netflix.jpg',
        },
        {
          title: 'Duolingo Tips That EVERY User Should Know',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/netflix.jpg',
        },
        {
          title: 'What is Google One, and Is it Worth Paying For?',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/netflix.jpg',
        },
        {
          title: 'The Mitchells vs. the Machines (2021)',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/film/mitchells.jpg',
        },
        {
          title: 'Klaus (2019)',
          created_at: '2024-02-03',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/film/klaus.jpg',
        },
        {
          title: 'The Mother (2023)',
          created_at: '2024-03-01',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/film/the_mother.jpg',
        },
        {
          title: 'Heart of Stone (2023)',
          created_at: '2024-01-04',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/film/heart_of_stone.jpg',
        },
        {
          title: 'The Irishman (2019)',
          created_at: '2024-03-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/film/irishman.jpg',
        },
        {
          title: 'Over the Moon (2020)',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/film/over_the_moon.jpg',
        },
        {
          title: 'Klaus (2019)',
          created_at: '2024-02-03',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/film/klaus.jpg',
        },
        {
          title: 'The Mother (2023)',
          created_at: '2024-03-01',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/film/the_mother.jpg',
        },
        {
          title: 'Heart of Stone (2023)',
          created_at: '2024-01-04',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/film/heart_of_stone.jpg',
        },
        {
          title: 'The Irishman (2019)',
          created_at: '2024-03-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/film/irishman.jpg',
        },
        {
          title: 'Over the Moon (2020)',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/film/over_the_moon.jpg',
        },
      ],
      page: 1,
      limit: 4,
    };
  },
  computed: {
    paginatedPage() {
      const start = (this.page - 1) * this.limit;
      const end = start + this.limit;
      return this.article_list.slice(start, end);
    },
    total() {
      return Math.ceil(this.article_list.length / this.limit);
    },
  },
  methods: {
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.total) {
        this.page++;
      }
    },
  },
};
</script>

<style>
.title-font {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
