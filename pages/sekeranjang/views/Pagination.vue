<template>
  <div class="flex justify-center items-center space-x-10">
    <div v-if="paged > 1" @click="onClickPage(paged - 1)" role="button">
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
    <div class="flex items-center space-x-6">
      <div
        v-if="totalPages > 7 && paged > 5"
        class="flex items-center space-x-6"
      >
        <div
          role="button"
          class="rounded-full tn:p-2 w-[40px] h-[40px] flex justify-center items-center"
          :class="`${
            paged === 1 ? 'text-[#00B5D4] bg-[#EBFCFF]' : 'text-black bg-white'
          }`"
          @click="onClickPage(1)"
        >
          1
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
        v-for="(page, id) in pageList"
        :key="id"
        class="rounded-full tn:p-2 w-[40px] h-[40px] flex justify-center items-center"
        :class="`${
          page === paged ? 'text-[#00B5D4] bg-[#EBFCFF]' : 'text-black bg-white'
        }`"
        @click="onClickPage(page)"
      >
        {{ page }}
      </div>
      <div
        v-if="totalPages > 7 && paged < totalPages - 4"
        class="flex items-center space-x-6"
      >
        <div
          v-if="paged < totalPages - 4"
          class="rounded-full tn:p-2 text-black bg-white w-[40px] h-[40px] flex justify-center items-center"
        >
          ...
        </div>
        <div
          role="button"
          class="rounded-full tn:p-2 w-[40px] h-[40px] flex justify-center items-center"
          :class="`${
            paged === totalPages
              ? 'text-[#00B5D4] bg-[#EBFCFF]'
              : 'text-black bg-white'
          }`"
          @click="onClickPage(totalPages)"
        >
          {{ totalPages }}
        </div>
      </div>
    </div>
    <div
      v-if="paged < totalPages"
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
  },
  data() {
    return {
      shownPageLimit: 5,
      pageList: [],
      paged: this.currentPage,
      totalPages: this.numOfPages,
    };
  },
  mounted() {
    this.onClickPage(this.paged, 'init');
  },
  methods: {
    onClickPage(page, con) {
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
    },
  },
};
</script>

<style>
.reverse {
  transform: rotate(180deg);
}
</style>
