<template>
  <div
    class="container-about-us py-10 sm:py-[50px] lg:py-[60px]"
    id="seakun-teams"
  >
    <header
      class="flex justify-center sm:justify-between items-center text-center sm:text-left"
    >
      <div class="leading-6 lg:max-w-[760px] sm:max-w-[450px] md:max-w-[530px]">
        <p
          class="text-green-primary text-[20px] sm:text-xl lg:text-2xl font-extrabold"
        >
          Tim Seakun
        </p>
        <p class="text-xs md:text-sm text-gray-secondary pt-2">
          Seakun.id bisa berjalan hingga saat ini bukan karena kerja 1 orang,
          melainkan karena kerja tim yang sangat luar biasa. Berikut adalah
          susunan tim Seakun.id.
        </p>
      </div>
      <EmployeePagination
        class="hidden sm:block"
        :current-page="currentPage"
        :total-pages="totalPages"
        @onPrev="handlePrevPage"
        @onNext="handleNextPage"
      />
    </header>

    <div
      class="flex gap-5 flex-col sm:flex-row mt-10 overflow-x-scroll hide-scrollbar"
      v-if="!isLoading"
      :class="[
        paginatedItems.length == itemsPerPage
          ? 'sm:justify-between '
          : 'sm:justify-start ',
      ]"
      ref="scrollContainer"
    >
      <section v-for="(item, index) in paginatedItems" :key="index">
        <EmployeeProfile
          :profile="item"
          :card-id="item.fullName"
          :show-preview="previewCardTemp ? previewCardTemp : previewCard"
          @onClick="
            handleCard(item.fullName),
              scrollIntoView(index, paginatedItems.length)
          "
          @onHover="handleHover(item.fullName, index, paginatedItems.length)"
          @mouseleave="previewCardTemp = ''"
        />
      </section>
      <!-- (previewCardTemp = item.fullName), -->
    </div>
    <div
      v-else
      class="flex gap-5 flex-col sm:flex-row sm:justify-between mt-10 overflow-hidden"
    >
      <section v-for="(item, id) in 7" :key="item">
        <div
          :class="{ 'hidden sm:block': id >= 3 }"
          class="bg-slate-200 animate-pulse w-full sm:w-[143px] h-[200px] sm:h-[424px] rounded-[10px]"
        ></div>
      </section>
    </div>
    <EmployeePagination
      class="sm:hidden w-[280px] mt-8 mx-auto"
      :current-page="currentPage"
      :total-pages="totalPages"
      @onPrev="handlePrevPage"
      @onNext="handleNextPage"
      @onClickPage="onClickPage"
    />
  </div>
</template>

<script>
import { seakunTeams } from '../../../constants/about-us.js';
import EmployeePagination from '../EmployeePagination.vue';
import EmployeeProfile from '../EmployeeProfile.vue';

export default {
  components: {
    EmployeePagination,
    EmployeeProfile,
  },
  data() {
    return {
      seakunTeams,
      currentPage: 1,
      itemsPerPage: 7,
      previewCard: '',
      previewCardTemp: '',
      isLoading: true,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.seakunTeams.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.seakunTeams.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isLoading = true;
      this.itemsPerPage = this.getScreenSize();
      this.isLoading = false;
    },
    getScreenSize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        return 3;
      } else if (windowWidth < 768) {
        return 4;
      } else if (windowWidth < 1024) {
        return 5;
      } else if (windowWidth < 1280) {
        return 6;
      } else {
        return 7;
      }
    },
    handleCard(id) {
      if (this.previewCard === id) {
        this.previewCard = '';
        this.previewCardTemp = '';
      } else {
        this.previewCard = id;
      }
    },
    handleHover(name, index, length) {
      this.previewCardTemp = name;
      setTimeout(() => {
        this.scrollIntoView(index, length);
      }, 500);
    },
    scrollIntoView(index, length) {
      if (index + 1 >= length - 1 && length > 3) {
        console.log('run');
        const scrollContainer = this.$refs.scrollContainer;

        if (scrollContainer) {
          scrollContainer.scrollTo({
            left: scrollContainer.scrollWidth + 200,
            behavior: 'smooth',
          });
        }
      }
    },
    onClickPage(page) {
      this.currentPage = page;
    },
    handleNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    handlePrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
