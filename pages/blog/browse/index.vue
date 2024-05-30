<template>
  <div class="container-seakun-blog pt-3">
    <div class="max-w-[600px] mx-auto">
      <div class="flex gap-2 items-center">
        <nuxt-link to="/blog">
          <img src="/images/icons/atoms/arrow-back.svg" alt="kembali" />
        </nuxt-link>
        <p v-if="blogList && blogList.pagination" class="text-sm md:text-base">
          <b>{{ totalResults }}</b> Hasil Pencarian
        </p>
      </div>

      <div
        v-if="!isLoading && blogList && blogList.list.length == 0"
        class="flex flex-col justify-center items-center w-full mt-8"
      >
        <img
          class="w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
          src="/images/seakun-blog/not-found.svg"
          alt="tidak ditemukan"
        />
        <p class="mt-3 text-xs md:text-base">
          Maaf, hasil pencarian tidak ditemukan
        </p>
      </div>

      <template v-if="blogList && blogList.list && blogList.list.length > 0">
        <div v-for="(blog, id) in blogList.list" class="mt-3 space-y-3 md:px-4">
          <BlogCard :article="blog" />
        </div>
      </template>

      <div v-if="isLoading" class="mt-3 space-y-3 md:px-4">
        <BlogCardLoading />
        <BlogCardLoading v-if="blogParam.page == 1" />
        <BlogCardLoading v-if="blogParam.page == 1" />
      </div>

      <div
        v-if="
          !isLoading &&
          blogList.pagination &&
          blogList.pagination.numOfResults > blogList.list.length
        "
        class="mt-8 w-full flex justify-center"
      >
        <Button
          variant="secondary"
          label="Lihat lainnya"
          class="font-bold my-2 border"
          add-class="text-sm md:text-base py-2"
          @click="onClickShowMore"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from './views/BlogCard.vue';
import BlogCardLoading from './views/BlogCardLoading.vue';
import CategoryTag from '~/components/mollecules/CategoryTagBlog.vue';
import Button from '~/components/atoms/Button.vue';
import MasterService from '~/services/MasterServices.js';
import { unixToIndonesianDate } from '~/helpers/word-transformation.js';

export default {
  layout: 'blog',
  components: {
    CategoryTag,
    BlogCard,
    Button,
    BlogCardLoading,
  },
  data() {
    return {
      MasterService,
      blogParam: {
        page: 1,
        limit: 1,
        keyword: '',
      },
      blogList: {
        list: [],
        pagination: {},
      },
      isLoading: true,
    };
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal !== oldVal) {
        const { keyword } = newVal.query;
        if (keyword) {
          this.blogParam = {
            ...this.blogParam,
            keyword,
            page: 1,
          };
          this.blogList = {
            list: [],
            pagination: {},
          };
          this.getBlogList();
        }
      }
    },
  },
  computed: {
    totalResults() {
      return this.blogList.pagination.numOfResults || 0;
    },
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { keyword } = this.$route.query;
    if (keyword) {
      this.blogParam.keyword = keyword;
      this.getBlogList();
    }
  },
  methods: {
    onClickShowMore() {
      this.blogParam.page += 1;
      this.getBlogList();
    },
    async getBlogList() {
      this.isLoading = true;
      try {
        const getBlog = await this.MasterService.getBlogs(this.blogParam);
        let { data, pagination } = getBlog.data;
        data = data || [];
        this.blogList = {
          list: [...this.blogList.list, ...data],
          pagination,
        };
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    unixToIndonesianDate,
  },
};
</script>

<style></style>
