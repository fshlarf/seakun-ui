<template>
  <div class="main-font w-full">
    <Navbar />
    <HeroArticleSection
      :is-loading="isLoadingTopBlogList"
      :articles="topBlogList"
    />
    <LatestArticleSection
      :is-loading="isLoadingBlogList"
      :articles="blogList"
      @onClickShowMore="onClickShowMore"
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
    <Footer />
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
  data() {
    return {
      MasterService,
      blogParam: {
        page: 1,
        limit: 8,
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
      isLoadingBlogList: true,
      isLoadingTopBlogList: true,
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    this.getBlogList();
    this.getTopBlogList();
  },
  methods: {
    onClickShowMore() {
      this.blogParam.page += 1;
      this.getBlogList();
    },
    async getBlogList() {
      this.isLoadingBlogList = true;
      try {
        const fetchBlog = await this.MasterService.getBlogs(this.blogParam);
        const { data, pagination } = fetchBlog.data;
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

<style>
#sekurban-page {
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
