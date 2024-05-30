<template>
  <div>
    <div class="title-font container-seakun-blog py-3 md:pb-3">
      <div class="flex items-center justify-between pt-2">
        <nuxt-link to="/"
          ><img
            src="/images/navbar/brand_seakun.svg"
            alt="brand seakun"
            class="w-[100px] md:w-[150px]"
        /></nuxt-link>

        <div class="md:w-1/4">
          <button class="md:hidden" @click="toggleSearching">
            <svg
              class="h-5 w-5 text-[#A0A3BD]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          <div class="relative hidden w-full max-w-sm md:block">
            <input
              v-model="searchKeyword"
              type="text"
              id="searchBlog"
              class="w-full rounded-lg border border-gray-300 p-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Search..."
              @keyup.enter="onSearchBlog"
              @input="onTypingSearchBox"
            />

            <svg
              v-if="!isTyping"
              class="absolute right-3 top-3 h-5 w-5 text-[#A0A3BD]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <svg
              v-else
              role="button"
              class="absolute right-3 top-3 h-5 w-5 cursor-pointer"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="clearSearchBox"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9C18 10.1819 17.7672 11.3522 17.3149 12.4442C16.8626 13.5361 16.1997 14.5282 15.364 15.364C14.5282 16.1997 13.5361 16.8626 12.4442 17.3149C11.3522 17.7672 10.1819 18 9 18C7.8181 18 6.64778 17.7672 5.55585 17.3149C4.46392 16.8626 3.47177 16.1997 2.63604 15.364C1.80031 14.5282 1.13738 13.5361 0.685084 12.4442C0.232792 11.3522 -1.76116e-08 10.1819 0 9C3.55683e-08 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9ZM4.293 13.707C4.10553 13.5195 4.00021 13.2652 4.00021 13C4.00021 12.7348 4.10553 12.4805 4.293 12.293L7.586 9L4.293 5.707C4.11084 5.5184 4.01005 5.2658 4.01233 5.0036C4.0146 4.7414 4.11977 4.49059 4.30518 4.30518C4.49059 4.11977 4.7414 4.0146 5.0036 4.01233C5.2658 4.01005 5.5184 4.11084 5.707 4.293L9 7.586L12.293 4.293C12.3852 4.19749 12.4956 4.12131 12.6176 4.0689C12.7396 4.01649 12.8708 3.9889 13.0036 3.98775C13.1364 3.9866 13.2681 4.0119 13.391 4.06218C13.5138 4.11246 13.6255 4.18671 13.7194 4.2806C13.8133 4.3745 13.8875 4.48615 13.9378 4.60905C13.9881 4.73194 14.0134 4.86362 14.0123 4.9964C14.0111 5.12918 13.9835 5.2604 13.9311 5.3824C13.8787 5.50441 13.8025 5.61475 13.707 5.707L10.414 9L13.707 12.293C13.8892 12.4816 13.99 12.7342 13.9877 12.9964C13.9854 13.2586 13.8802 13.5094 13.6948 13.6948C13.5094 13.8802 13.2586 13.9854 12.9964 13.9877C12.7342 13.99 12.4816 13.8892 12.293 13.707L9 10.414L5.707 13.707C5.51947 13.8945 5.26516 13.9998 5 13.9998C4.73484 13.9998 4.48053 13.8945 4.293 13.707Z"
                fill="#FF6E79"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- List Menu -->
      <ul
        v-if="isDisplayCategoryMenu"
        class="flex w-full items-center gap-4 overflow-auto border-b border-gray-200 md:gap-5 md:mt-3 hide-scrollbar"
      >
        <li
          v-for="(menu, index) in categoryList"
          :key="index"
          class="relative px-1 py-3 md:px-4 md:pb-5 cursor-pointer"
          @click="onClickMenu(menu)"
        >
          <div
            :class="`text-center ${
              menu.uid === activeCategory.uid ? is_active : 'text-main'
            }`"
          >
            {{ menu.name }}
          </div>
        </li>
      </ul>
    </div>

    <div
      v-if="is_searching"
      class="absolute top-0 z-10 h-screen w-full bg-black/40"
    >
      <div class="container-seakun-blog flex items-center gap-4 bg-white py-3">
        <button @click="toggleSearching">
          <svg
            class="h-5 w-5 fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>

        <div class="relative w-full max-w-sm md:hidden">
          <input
            v-model="searchKeyword"
            type="text"
            id="search"
            class="w-full rounded-lg border border-gray-300 p-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search.."
            @keyup.enter="onSearchBlog"
            @input="onTypingSearchBox"
          />

          <svg
            v-if="!isTyping"
            class="absolute right-3 top-3 h-5 w-5 text-[#A0A3BD]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>

          <svg
            v-else
            class="absolute right-3 top-3 h-5 w-5"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="clearSearchBox"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 9C18 10.1819 17.7672 11.3522 17.3149 12.4442C16.8626 13.5361 16.1997 14.5282 15.364 15.364C14.5282 16.1997 13.5361 16.8626 12.4442 17.3149C11.3522 17.7672 10.1819 18 9 18C7.8181 18 6.64778 17.7672 5.55585 17.3149C4.46392 16.8626 3.47177 16.1997 2.63604 15.364C1.80031 14.5282 1.13738 13.5361 0.685084 12.4442C0.232792 11.3522 -1.76116e-08 10.1819 0 9C3.55683e-08 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9ZM4.293 13.707C4.10553 13.5195 4.00021 13.2652 4.00021 13C4.00021 12.7348 4.10553 12.4805 4.293 12.293L7.586 9L4.293 5.707C4.11084 5.5184 4.01005 5.2658 4.01233 5.0036C4.0146 4.7414 4.11977 4.49059 4.30518 4.30518C4.49059 4.11977 4.7414 4.0146 5.0036 4.01233C5.2658 4.01005 5.5184 4.11084 5.707 4.293L9 7.586L12.293 4.293C12.3852 4.19749 12.4956 4.12131 12.6176 4.0689C12.7396 4.01649 12.8708 3.9889 13.0036 3.98775C13.1364 3.9866 13.2681 4.0119 13.391 4.06218C13.5138 4.11246 13.6255 4.18671 13.7194 4.2806C13.8133 4.3745 13.8875 4.48615 13.9378 4.60905C13.9881 4.73194 14.0134 4.86362 14.0123 4.9964C14.0111 5.12918 13.9835 5.2604 13.9311 5.3824C13.8787 5.50441 13.8025 5.61475 13.707 5.707L10.414 9L13.707 12.293C13.8892 12.4816 13.99 12.7342 13.9877 12.9964C13.9854 13.2586 13.8802 13.5094 13.6948 13.6948C13.5094 13.8802 13.2586 13.9854 12.9964 13.9877C12.7342 13.99 12.4816 13.8892 12.293 13.707L9 10.414L5.707 13.707C5.51947 13.8945 5.26516 13.9998 5 13.9998C4.73484 13.9998 4.48053 13.8945 4.293 13.707Z"
              fill="#FF6E79"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MasterService from '~/services/MasterServices.js';

export default {
  data() {
    return {
      MasterService,
      searchKeyword: '',
      categoryUid: '',
      isDisplayCategoryMenu: false,
      is_active:
        "text-primary font-extrabold after:content-[''] after:absolute after:bottom-0 after:inset-x-1 after:border-b-2 after:border-primary",
      is_searching: false,
      isTyping: false,
    };
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isDisplayCategoryMenu = newVal.path !== '/blog/browse';
        if (newVal.path == '/blog' && !newVal.query.category) {
          this.resetActiveCategory();
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      activeCategory: 'blog/getActiveCategory',
      categoryList: 'blog/getCategoryList',
    }),
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { path } = this.$route;
    this.isDisplayCategoryMenu = path !== '/blog/browse';
    const { category } = this.$route.query;
    if (category) {
      this.categoryUid = category;
    }
    this.getBlogCategory();
  },
  methods: {
    ...mapActions({
      setActiveCategory: 'blog/setActiveCategory',
      setCategoryList: 'blog/setCategoryList',
      resetActiveCategory: 'blog/resetActiveCategory',
    }),
    clearSearchBox() {
      this.searchKeyword = '';
      this.isTyping = false;
    },
    onTypingSearchBox() {
      this.isTyping = this.searchKeyword !== '';
    },
    onSearchBlog() {
      this.is_searching = false;
      this.$router.push(`/blog/browse?keyword=${this.searchKeyword}`);
    },
    onClickMenu(menu) {
      this.setActiveCategory(menu);
      this.$router.push(`/blog?category=${menu.uid}`);
    },
    toggleSearching() {
      this.is_searching = !this.is_searching;
    },
    async getBlogCategory() {
      try {
        const getCategory = await this.MasterService.getCategoryBlog();
        const { data } = getCategory.data;
        this.setCategoryList({ data, categoryUid: this.categoryUid });
      } catch (error) {
        console.log(error);
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
