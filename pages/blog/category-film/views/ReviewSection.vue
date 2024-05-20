<template>
  <!-- Review Film -->
  <div class="container-seakun-blog my-4">
    <section class="mb-4 mt-2 md:mb-8 md:mt-7">
      <div class="mb-4 flex items-center justify-between">
        <div class="title-font flex items-center">
          <label class="text-[16px] font-bold text-mainseakun-blog/film/"
            >Review&nbsp;</label
          >
          <label class="text-[16px] font-bold text-primary"> Film</label>
        </div>

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
      <div
        class="grid w-full h-full grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4"
      >
        <CardHero
          class="h-36 md:h-[180px] lg:h-[280px]"
          v-for="(article, id) in paginatedPage"
          :key="id"
          :article="article"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CardHero from '~/components/mollecules/FullImageCardBlog.vue';
import PaginationButton from '~/components/mollecules/PaginationButtonBlog.vue';

export default {
  components: {
    CardHero,
    PaginationButton,
  },
  data() {
    return {
      film_list: [
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
      limit: 6,
    };
  },
  computed: {
    paginatedPage() {
      const start = (this.page - 1) * this.limit;
      const end = start + this.limit;
      return this.film_list.slice(start, end);
    },
    total() {
      return Math.ceil(this.film_list.length / this.limit);
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
    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()} ${date.toLocaleString('default', {
        month: 'short',
      })} ${date.getFullYear()}`;
    },
  },
};
</script>

<style>
.main-font {
  font-family: 'Dm Sans', sans-serif;
}

.title-font {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
