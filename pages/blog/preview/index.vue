<template>
  <div class="container-seakun-blog mt-1.5 md:mt-3 xl:mt-3">
    <!-- Breadcrumbs -->
    <nav
      v-if="!isLoading"
      class="mb-6 flex text-xs font-normal text-[#A0A3BD]"
      aria-label="Breadcrumb"
    >
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7898 7.89071L8.35391 1.45946C8.30757 1.41303 8.25252 1.37619 8.19193 1.35106C8.13134 1.32593 8.06638 1.31299 8.00078 1.31299C7.93518 1.31299 7.87023 1.32593 7.80963 1.35106C7.74904 1.37619 7.694 1.41303 7.64766 1.45946L1.21172 7.89071C1.02422 8.07821 0.917969 8.3329 0.917969 8.59852C0.917969 9.15008 1.36641 9.59852 1.91797 9.59852H2.59609V14.1876C2.59609 14.4641 2.81953 14.6876 3.09609 14.6876H7.00078V11.1876H8.75078V14.6876H12.9055C13.182 14.6876 13.4055 14.4641 13.4055 14.1876V9.59852H14.0836C14.3492 9.59852 14.6039 9.49383 14.7914 9.30477C15.1805 8.91415 15.1805 8.28133 14.7898 7.89071Z"
                fill="#A0A3BD"
              />
            </svg>
          </a>
        </li>
        <li><p>></p></li>
        <li>
          <a href="#" class="ms-1">{{
            articleDetail.blogCategory
              ? articleDetail.blogCategory[0].name
              : 'Film'
          }}</a>
        </li>
        <li><p>></p></li>
        <li>
          <a href="#" class="ms-1">{{ articleDetail.title }}</a>
        </li>
      </ol>
    </nav>
    <div
      v-else
      class="flex gap-1 items-center mb-6 text-xs font-normal text-[#A0A3BD]"
    >
      <div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7898 7.89071L8.35391 1.45946C8.30757 1.41303 8.25252 1.37619 8.19193 1.35106C8.13134 1.32593 8.06638 1.31299 8.00078 1.31299C7.93518 1.31299 7.87023 1.32593 7.80963 1.35106C7.74904 1.37619 7.694 1.41303 7.64766 1.45946L1.21172 7.89071C1.02422 8.07821 0.917969 8.3329 0.917969 8.59852C0.917969 9.15008 1.36641 9.59852 1.91797 9.59852H2.59609V14.1876C2.59609 14.4641 2.81953 14.6876 3.09609 14.6876H7.00078V11.1876H8.75078V14.6876H12.9055C13.182 14.6876 13.4055 14.4641 13.4055 14.1876V9.59852H14.0836C14.3492 9.59852 14.6039 9.49383 14.7914 9.30477C15.1805 8.91415 15.1805 8.28133 14.7898 7.89071Z"
            fill="#A0A3BD"
          />
        </svg>
      </div>
      <div>></div>
      <div class="shimmer h-3 w-[70px]"></div>
      <div>></div>
      <div class="shimmer h-3 w-[200px]"></div>
    </div>

    <!-- Konten -->
    <div class="flex flex-col gap-0 md:gap-[48px] md:flex-row xl:flex-row">
      <!-- Article Details, Latest Article Mobile, Related Article, Comment Desktop -->
      <div class="w-full md:w-11/12 lg:w-3/4">
        <MainContentLoading v-if="isLoading" />
        <MainContent v-else :blog="articleDetail" :content="blogContent" />

        <!-- Latest Article Mobile -->
        <div class="block md:hidden my-8">
          <div class="title-font">
            <label class="text-[16px] font-bold text-main">Latest</label>
            <label class="text-[16px] font-bold text-primary"> Article</label>
          </div>
          <div v-if="!isLoadingLatest" class="mt-5">
            <LatestCard
              v-for="(article, id) in latestArticle.list"
              :key="id"
              :article="article"
              size="small"
              date-type="blog_details"
              show-date
              class="mb-[16px]"
              @onClickCard="toDetailPage"
            />
          </div>
          <div v-else class="mt-5">
            <LatestCardLoading
              size="small"
              date-type="blog_details"
              show-date
              class="mb-[16px]"
            />
            <LatestCardLoading
              size="small"
              date-type="blog_details"
              show-date
              class="mb-[16px]"
            />
            <LatestCardLoading
              size="small"
              date-type="blog_details"
              show-date
            />
          </div>
        </div>

        <!-- Related Article -->
        <div v-if="relatedArticle.list.length > 0" class="mt-0 md:mt-14">
          <div class="flex items-center justify-between mb-5">
            <div class="title-font">
              <label class="text-[16px] font-bold text-main">Related</label>
              <label class="text-[16px] font-bold text-primary"> Article</label>
            </div>
            <!-- Button Pagination -->
            <div class="flex justify-end">
              <PaginationButton
                type="left"
                :disable="relatedArticleParam.page === 1"
                @handleClick="prevPage"
                class="mx-[12px]"
              />

              <PaginationButton
                :disable="
                  relatedArticleParam.page ===
                  relatedArticle.pagination.numOfPages
                "
                type="right"
                @handleClick="nextPage"
              />
            </div>
          </div>
          <div
            class="grid w-full grid-cols-1 flex-col items-center justify-between gap-3 md:grid-cols-3 md:flex-row md:gap-2 lg:grid-cols-3 xl:grid-cols-3"
          >
            <template v-if="!isLoadingRelated">
              <CardRelated
                v-for="(article, id) in relatedArticle.list"
                :key="id"
                card-type="category"
                :article="article"
                @onClickCard="toDetailPage"
              />
            </template>
            <template v-else>
              <CardRelatedLoading card-type="category" />
              <CardRelatedLoading card-type="category" />
              <CardRelatedLoading card-type="category" />
            </template>
          </div>
        </div>

        <!-- Comment Text Area Desktop -->
        <!-- <div class="mt-7 hidden justify-center md:block">
          <div class="relative">
            <textarea
              id="message"
              rows="4"
              class="block h-[120px] w-full rounded-lg border border-[#A0A3BD4D]/30 p-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Tinggalkan komentar.."
            ></textarea>
            <button
              type="button"
              class="absolute bottom-5 right-5 rounded-md bg-primary px-4 py-2 text-xs font-bold text-white"
            >
              Kirim
            </button>
          </div>
          <div class="mt-8 flex-col text-center">
            <div class="inline-block">
              <img src="/images/seakun-blog/comments_illustration.png" />
              <p class="text-xs font-normal">Belum ada komentar</p>
            </div>
          </div>
        </div> -->
      </div>

      <!-- Latest Article and Comment Mobile -->
      <div class="w-full md:w-6/12 lg:w-2/4">
        <div class="hidden md:block md:sticky md:top-4 md:bg-white">
          <div class="title-font">
            <label class="text-[16px] font-bold text-main">Latest</label>
            <label class="text-[16px] font-bold text-primary"> Article</label>
          </div>
          <div v-if="!isLoadingLatest" class="mt-5">
            <LatestCard
              v-for="(article, id) in latestArticle.list"
              :key="id"
              size="small"
              date-type="blog_details"
              show-date
              :article="article"
              class="mb-[16px]"
              @onClickCard="toDetailPage"
            />
          </div>
          <div v-else class="mt-5">
            <LatestCardLoading
              size="small"
              date-type="blog_details"
              show-date
              class="mb-[16px]"
            />
            <LatestCardLoading
              size="small"
              date-type="blog_details"
              show-date
              class="mb-[16px]"
            />
            <LatestCardLoading
              size="small"
              date-type="blog_details"
              show-date
            />
          </div>
        </div>

        <!-- Comment Text Area Mobile -->
        <!-- <div class="mt-8 block md:hidden xl:hidden">
          <div class="relative">
            <textarea
              id="message"
              rows="4"
              class="block h-[120px] w-full rounded-lg border border-[#A0A3BD4D]/30 p-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Tinggalkan komentar.."
            ></textarea>
            <button
              type="button"
              class="absolute bottom-5 right-5 rounded-md bg-primary px-4 py-2 text-xs font-bold text-white"
            >
              Kirim
            </button>
          </div>
          <div class="mt-8 flex-col text-center">
            <div class="inline-block">
              <img src="/images/seakun-blog/comments_illustration.png" />
              <p class="text-xs font-normal">Belum ada komentar</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import MainContent from './views/MainContent.vue';
import MainContentLoading from './views/MainContentLoading.vue';
import LatestCard from './views/LatestCard.vue';
import LatestCardLoading from './views/LatestCardLoading.vue';
import CardRelated from './views/RelatedCard.vue';
import CardRelatedLoading from './views/RelatedCardLoading.vue';
import PaginationButton from '~/pages/blog/views/atoms/PaginationButton.vue';
import CategoryTag from '~/components/mollecules/CategoryTagBlog.vue';
import MasterService from '~/services/MasterServices.js';

export default {
  layout: 'blog',
  components: {
    LatestCard,
    CardRelated,
    CategoryTag,
    PaginationButton,
    LatestCardLoading,
    CardRelatedLoading,
    MainContent,
    MainContentLoading,
  },
  data() {
    return {
      MasterService,
      blogUid: '',
      relatedArticleParam: {
        page: 1,
        limit: 3,
        category: '',
      },
      latestArticle: {
        list: [],
        pagination: {},
      },
      relatedArticle: {
        list: [],
        pagination: {},
      },
      articleDetail: {},
      blogContent: {},
      isLoading: true,
      isLoadingLatest: true,
      isLoadingRelated: true,
    };
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal !== oldVal) {
        const { id } = newVal.query;
        if (id) {
          this.blogUid = id;
          this.getArticleDetail();
        }
      }
    },
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { id } = this.$route.query;
    this.blogUid = id;
    this.getArticleDetail();
    this.getLatestArticle();
  },
  methods: {
    toDetailPage(articleUid) {
      this.$router.push(`/blog/detail?id=${articleUid}`);
      window.scrollTo(0, 0);
    },
    async getArticleDetail() {
      this.isLoading = true;
      try {
        const fetchArticle = await this.MasterService.getBlogByUid({
          uid: this.blogUid,
        });
        const { data } = fetchArticle.data;
        this.articleDetail = data;
        this.relatedArticleParam.category = data.blogCategory[0].uid;
        this.blogContent = data.content ? JSON.parse(data.content) : {};
        this.getRelatedArticle();
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    async getLatestArticle() {
      this.isLoadingLatest = true;
      try {
        const fetchArticle = await this.MasterService.getBlogs({
          page: 1,
          limit: 10,
        });
        const { data, pagination } = fetchArticle.data;
        this.latestArticle = {
          list: data,
          pagination,
        };
      } catch (error) {
        console.log(error);
      }
      this.isLoadingLatest = false;
    },
    async getRelatedArticle() {
      this.isLoadingRelated = true;
      try {
        const fetchArticle = await this.MasterService.getBlogs(
          this.relatedArticleParam
        );
        const { data, pagination } = fetchArticle.data;
        this.relatedArticle = {
          list: data,
          pagination,
        };
      } catch (error) {
        console.log(error);
      }
      this.isLoadingRelated = false;
    },
    prevPage() {
      if (this.relatedArticleParam.page > 1) {
        this.relatedArticleParam.page--;
        this.getRelatedArticle();
      }
    },
    nextPage() {
      if (
        this.relatedArticleParam.page <
        this.relatedArticle.pagination.numOfPages
      ) {
        this.relatedArticleParam.page++;
        this.getRelatedArticle();
      }
    },
  },
};
</script>

<style></style>
