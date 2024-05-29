<template>
  <div class="container py-3 md:pt-6 md:pb-[44px]">
    <div class="flex justify-between items-center">
      <div class="title-font mb-5 mt-6">
        <label class="text-[16px] font-bold text-text-dark">Latest</label>
        <label class="text-[16px] font-bold text-primary"> Article</label>
      </div>
      <!-- <div class="flex justify-end">
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
      </div> -->
    </div>
    <div
      v-if="articles && articles.list.length > 0"
      class="grid w-full grid-cols-1 items-center justify-between gap-5 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
    >
      <Card
        label_type="light"
        show-label
        show-date
        v-for="(article, id) in articles.list"
        :key="id"
        :article="article"
      />
    </div>
    <div
      v-if="isLoading"
      class="grid w-full grid-cols-1 items-center justify-between gap-5 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
    >
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>

    <div
      v-if="
        !isLoading &&
        articles.pagination &&
        articles.pagination.numOfResults > articles.list.length
      "
      class="mt-8 w-full flex justify-center"
    >
      <Button
        variant="secondary"
        label="Lihat lainnya"
        class="font-bold my-2 border"
        @click="$emit('onClickShowMore')"
      />
    </div>
  </div>
</template>

<script>
import Card from './mollecules/ArticleCard.vue';
import CardLoading from './mollecules/ArticleCardLoading.vue';
import PaginationButton from '~/components/mollecules/PaginationButtonBlog.vue';
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    Card,
    PaginationButton,
    Button,
    CardLoading,
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
