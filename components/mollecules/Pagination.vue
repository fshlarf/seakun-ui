<template>
  <div class="flex justify-center items-center space-x-8">
    <div
      v-if="paged > 1 && showArrow"
      @click="onClickPage(paged - 1)"
      role="button"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="cursor-pointer w-3 h-3 reverse"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="black"
        stroke-width="2"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="flex items-center space-x-3">
      <div
        v-if="totalPages > 7 && paged > 5"
        class="flex items-center space-x-3"
      >
        <div
          role="button"
          class="relative cursor-pointer"
          @click="onClickPage(1)"
        >
          <div
            class="rounded-full tn:p-2 flex justify-center items-center bg-white text-white font-medium"
            :class="`${
              page === paged
                ? 'opacity-30 w-[34px] h-[34px]'
                : 'opacity-10 w-[30px] h-[30px]'
            }`"
          ></div>
          <div
            class="absolute z-10 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white"
            :class="`${page === paged ? 'text-[16px]' : 'text-[14px]'}`"
          >
            1
          </div>
        </div>
        <div
          v-if="paged > 5"
          class="rounded-full tn:p-2 text-black bg-white w-[40px] h-[40px] flex justify-center items-center"
        >
          ...
        </div>
      </div>
      <div
        role="button"
        class="relative cursor-pointer"
        v-for="(page, id) in pageList"
        :key="id"
        @click="onClickPage(page)"
      >
        <div
          class="rounded-full tn:p-2 flex justify-center items-center bg-white text-white font-medium"
          :class="`${
            page === paged
              ? 'opacity-30 w-[34px] h-[34px]'
              : 'opacity-10 w-[30px] h-[30px]'
          }`"
        ></div>
        <div
          class="absolute z-10 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white"
          :class="`${page === paged ? 'text-[16px]' : 'text-[14px]'}`"
        >
          {{ page }}
        </div>
      </div>
      <div
        v-if="totalPages > 7 && paged < totalPages - 4"
        class="flex items-center space-x-3"
      >
        <div
          v-if="paged < totalPages - 4"
          class="rounded-full tn:p-2 text-black bg-white w-[40px] h-[40px] flex justify-center items-center"
        >
          ...
        </div>
        <div
          role="button"
          class="relative cursor-pointer"
          @click="onClickPage(totalPages)"
        >
          <div
            class="rounded-full tn:p-2 flex justify-center items-center bg-white text-white font-medium"
            :class="`${
              paged === totalPages
                ? 'opacity-30 w-[34px] h-[34px]'
                : 'opacity-10 w-[30px] h-[30px]'
            }`"
          ></div>
          <div
            class="absolute z-10 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white"
            :class="`${paged === totalPages ? 'text-[16px]' : 'text-[14px]'}`"
          >
            {{ totalPages }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="paged < totalPages && showArrow"
      @click="onClickPage(paged + 1)"
      role="button"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="cursor-pointer w-3 h-3"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="black"
        stroke-width="2"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    perPages: {
      type: Number,
      default: null,
    },
    numOfPages: {
      type: Number,
      default: 0,
    },
    numOfResults: {
      type: Number,
      default: null,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      shownPageLimit: 5,
      pageList: [],
      paged: 1,
      totalPages: 0,
    };
  },
  watch: {
    currentPage(val) {
      if (val) {
        this.paged = val;
      }
    },
    numOfPages(val) {
      if (val) {
        this.totalPages = val;
      }
    },
  },
  mounted() {
    this.onClickPage(this.paged, 'init');
  },
  methods: {
    onClickPage(page, con) {
      if (!this.isLoading) {
        if (!con) {
          this.$emit('clickPagination', page);
        }
        this.totalPages = this.numOfPages;
        if (this.totalPages > 7) {
          this.pageList = [];
          if (page <= 5) {
            const first = 1;
            const last = 6;
            for (let i = first; i <= last; i++) {
              this.pageList.push(i);
            }
          } else if (page >= this.totalPages - 4) {
            const first = this.totalPages - 5;
            const last = this.totalPages;
            for (let i = first; i <= last; i++) {
              this.pageList.push(i);
            }
          } else {
            const first = page - 2;
            const last = page + 2;
            for (let i = first; i <= last; i++) {
              if (i > 1 && i < this.totalPages) this.pageList.push(i);
            }
          }
        } else {
          this.pageList = [];
          const first = 1;
          const last = this.totalPages;
          let i = first;
          for (i; i <= last; i++) {
            this.pageList.push(i);
          }
        }
        this.paged = page;
        return this.pageList;
      }
    },
  },
};
</script>

<style>
.reverse {
  transform: rotate(180deg);
}
</style>
