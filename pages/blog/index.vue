<template>
  <div class="">
    <HeroArticleSection
      v-if="!categoryUid"
      :is-loading="isLoadingTopBlogList"
      :articles="topBlogList"
      @onClickCard="toDetailPage"
    />
    <LatestArticleSection
      :is-loading="isLoadingBlogList"
      :articles="blogList"
      @onClickShowMore="onClickShowMore"
      @onClickCard="toDetailPage"
    />

    <!-- <div class="bg-[#C4C6D71A]/10 py-8">
      <div class="container-seakun-blog">
        <div class="flex flex-col lg:flex-row">
          <TopArticleSection />
          <RecommendArticleSection />
        </div>
      </div>
    </div> -->

    <!-- <PopularArticleSection />
    <CategorySection /> -->
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import HeroArticleSection from './views/HeroArticleSection.vue';
import LatestArticleSection from './views/LatestArticleSection.vue';
import TopArticleSection from './views/TopArticleSection.vue';
import RecommendArticleSection from './views/RecommendArticleSection.vue';
import PopularArticleSection from './views/PopularArticleSection.vue';
import CategorySection from './views/CategorySection.vue';
import Footer from '~/components/mollecules/FooterSeakunBlog.vue';
import MasterService from '~/services/MasterServices.js';

export default {
  components: {
    Navbar,
    HeroArticleSection,
    LatestArticleSection,
    TopArticleSection,
    RecommendArticleSection,
    PopularArticleSection,
    CategorySection,
    Footer,
  },
  layout: 'blog',
  data() {
    return {
      MasterService,
      blogParam: {
        page: 1,
        limit: 8,
        category: '',
      },
      topBlogParam: {
        page: 1,
        limit: 5,
        isTop: '1',
      },
      blogList: {
        list: [],
        pagination: {},
      },
      topBlogList: {
        list: [],
        pagination: {},
      },
      categoryUid: '',
      isLoadingBlogList: true,
      isLoadingTopBlogList: true,
    };
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal !== oldVal) {
        const { category } = newVal.query;
        if (category) {
          this.categoryUid = category;
          this.blogParam = {
            ...this.blogParam,
            category,
            page: 1,
          };
        } else {
          this.categoryUid = '';
          this.blogParam = {
            ...this.blogParam,
            category: '',
            page: 1,
          };
          this.getTopBlogList();
        }
        this.blogList = {
          list: [],
          pagination: {},
        };
        this.getBlogList();
      }
    },
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { category } = this.$route.query;
    if (category) {
      this.categoryUid = category;
      this.blogParam.category = category;
    } else {
      this.categoryUid = '';
      this.blogParam.category = '';
      this.getTopBlogList();
    }
    this.getBlogList();
  },
  methods: {
    onClickShowMore() {
      this.blogParam.page += 1;
      this.getBlogList();
    },
    toDetailPage(articleUid) {
      this.$router.push(`/blog/detail?id=${articleUid}`);
    },
    async getBlogList() {
      this.isLoadingBlogList = true;
      try {
        const fetchBlog = await this.MasterService.getBlogs(this.blogParam);
        let { data, pagination } = fetchBlog.data;
        data = data || [];
        this.blogList = {
          list: [...this.blogList.list, ...data],
          pagination,
        };
      } catch (error) {
        console.log(error);
      }
      this.isLoadingBlogList = false;
    },
    async getTopBlogList() {
      this.isLoadingTopBlogList = true;
      try {
        const fetchBlog = await this.MasterService.getBlogs(this.topBlogParam);
        const { data, pagination } = fetchBlog.data;
        this.topBlogList = {
          list: data,
          pagination,
        };
      } catch (error) {
        console.log(error);
      }
      this.isLoadingTopBlogList = false;
    },
  },
};
</script>

<style></style>
