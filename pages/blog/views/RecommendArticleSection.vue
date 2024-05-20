<template>
  <!-- Recommend Article -->
  <div class="w-full lg:w-1/2 lg:pl-[52px]">
    <div class="title-font">
      <label class="text-[16px] font-bold text-main">Recommend</label>
      <label class="text-[16px] font-bold text-primary"> For You</label>
    </div>
    <div class="mt-5">
      <CardRecommend
        size="large"
        image="large"
        show-label
        show-date
        v-for="(article, id) in recPaginated"
        :key="id"
        :article="article"
        class="mb-[16px]"
      />
    </div>
    <div class="mt-5">
      <!-- Button Pagination -->
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
  </div>
</template>

<script>
import CardRecommend from '~/components/mollecules/RecommendCardBlog.vue';
import PaginationButton from '~/components/mollecules/PaginationButtonBlog.vue';

export default {
  components: {
    CardRecommend,
    PaginationButton
  },
  data() {
    return {
      recommend_article: [
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
          title: 'djfknkasdf',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/netflix.jpg',
        },
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
          title: 'djfknkasdf',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Film',
          image: '/images/seakun-blog/netflix.jpg',
        },
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
          title: 'Top 10 Most Streamed Songs on Spotify 2023',
          created_at: '2024-01-02',
          author: 'Seakun.id',
          label: 'Musik',
          image: '/images/seakun-blog/netflix.jpg',
        },
      ],
      page: 1,
      limit: 7,
    };
  },
  computed: {
    recPaginated() {
      const start = (this.page - 1) * this.limit;
      const end = start + this.limit;
      return this.recommend_article.slice(start, end);
    },
    total() {
      return Math.ceil(this.recommend_article.length / this.limit);
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
