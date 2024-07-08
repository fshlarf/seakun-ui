<template>
  <div>
    <section class="hidden sm:flex gap-4 items-center">
      <button @click="$emit('onPrev')">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g :opacity="{ 0.5: isFirstPage }">
            <rect
              width="32"
              height="32"
              rx="8"
              :fill="isFirstPage ? '#DCEDE9' : '#08A081'"
            />
            <path
              d="M18.3686 21.5685C18.5326 21.4044 18.6248 21.1819 18.6248 20.9499C18.6248 20.7178 18.5326 20.4953 18.3686 20.3312L14.0374 16L18.3686 11.6687C18.528 11.5037 18.6162 11.2827 18.6142 11.0533C18.6122 10.8238 18.5202 10.6044 18.3579 10.4421C18.1957 10.2799 17.9763 10.1879 17.7468 10.1859C17.5174 10.1839 17.2964 10.2721 17.1314 10.4315L12.1815 15.3814C12.0174 15.5455 11.9253 15.768 11.9253 16C11.9253 16.232 12.0174 16.4545 12.1815 16.6186L17.1314 21.5685C17.2954 21.7325 17.518 21.8247 17.75 21.8247C17.982 21.8247 18.2045 21.7325 18.3686 21.5685Z"
              :fill="isFirstPage ? '#08A081' : 'white'"
            />
          </g>
        </svg>
      </button>
      <button @click="$emit('onNext')">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g :opacity="{ 0.5: isLastPage }">
            <rect
              width="32"
              height="32"
              rx="8"
              :fill="isLastPage ? '#DCEDE9' : '#08A081'"
            />
            <path
              d="M13.6314 21.5685C13.4674 21.4044 13.3752 21.1819 13.3752 20.9499C13.3752 20.7178 13.4674 20.4953 13.6314 20.3312L17.9626 16L13.6314 11.6687C13.472 11.5037 13.3838 11.2827 13.3858 11.0533C13.3878 10.8238 13.4798 10.6044 13.6421 10.4421C13.8043 10.2799 14.0237 10.1879 14.2532 10.1859C14.4826 10.1839 14.7036 10.2721 14.8686 10.4315L19.8185 15.3814C19.9826 15.5455 20.0747 15.768 20.0747 16C20.0747 16.232 19.9826 16.4545 19.8185 16.6186L14.8686 21.5685C14.7046 21.7325 14.482 21.8247 14.25 21.8247C14.018 21.8247 13.7955 21.7325 13.6314 21.5685Z"
              :fill="isLastPage ? '#08A081' : 'white'"
            />
          </g>
        </svg>
      </button>
    </section>
    <section
      class="sm:hidden flex items-center"
      :class="
        isFirstPage || isLastPage ? 'justify-center gap-4 ' : 'justify-between'
      "
    >
      <button @click="$emit('onPrev')">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="7.5"
            :fill="isFirstPage ? '#F5FAF9' : '#E1F8F3'"
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="7.5"
            :stroke="isFirstPage ? ' #E8F3F1' : '#F5FAF9'"
          />
          <path
            d="M16.3686 19.5685C16.5326 19.4044 16.6248 19.1819 16.6248 18.9499C16.6248 18.7179 16.5326 18.4954 16.3686 18.3313L12.0374 14L16.3686 9.66877C16.528 9.50374 16.6162 9.28271 16.6142 9.05329C16.6122 8.82387 16.5202 8.60441 16.3579 8.44218C16.1957 8.27994 15.9763 8.18792 15.7468 8.18593C15.5174 8.18394 15.2964 8.27213 15.1314 8.43152L10.1815 13.3814C10.0174 13.5455 9.92529 13.768 9.92529 14C9.92529 14.232 10.0174 14.4546 10.1815 14.6186L15.1314 19.5685C15.2954 19.7326 15.518 19.8247 15.75 19.8247C15.982 19.8247 16.2045 19.7326 16.3686 19.5685Z"
            :fill="isFirstPage ? '#DCEDE9' : '#08A081'"
            :fill-opacity="{ 0.5: isFirstPage }"
          />
        </svg>
      </button>

      <template v-for="item in totalPages">
        <section
          @click="$emit('onClickPage', item)"
          v-if="item == 1"
          class="w-7 h-7 flex items-center justify-center text-sm font-bold rounded-lg"
          :class="[
            item == currentPage
              ? 'text-white bg-[#7BCEBD]'
              : 'text-[#08A081]/50 bg-[#EDF6F4]',
          ]"
        >
          <p>
            {{ item }}
          </p>
        </section>

        <section
          @click="$emit('onClickPage', item)"
          v-if="
            item > 1 &&
            (item == currentPage ||
              item === currentPage + 1 ||
              (currentPage === Math.ceil(totalPages / 2) &&
                item === Math.ceil(totalPages / 2) - 1)) &&
            currentPage <= Math.ceil(totalPages / 2) &&
            item <= Math.ceil(totalPages / 2)
          "
          class="w-7 h-7 flex items-center justify-center text-sm font-bold rounded-lg"
          :class="[
            item == currentPage
              ? 'text-white bg-[#7BCEBD]'
              : 'text-[#08A081]/50 bg-[#EDF6F4]',
          ]"
        >
          <p>{{ item }}</p>
        </section>

        <p v-if="item == Math.ceil(totalPages / 2)">...</p>

        <section
          @click="$emit('onClickPage', item)"
          v-if="
            item > 1 &&
            item != totalPages &&
            (item == currentPage || item === currentPage - 1) &&
            item !== 6 &&
            item !== Math.ceil(totalPages / 2) &&
            item > Math.ceil(totalPages / 2)
          "
          class="w-7 h-7 flex items-center justify-center text-sm font-bold rounded-lg"
          :class="[
            item == currentPage
              ? 'text-white bg-[#7BCEBD]'
              : 'text-[#08A081]/50 bg-[#EDF6F4]',
          ]"
        >
          <p>{{ item }}</p>
        </section>

        <section
          @click="$emit('onClickPage', item)"
          v-if="item == totalPages"
          class="w-7 h-7 flex items-center justify-center text-sm font-bold rounded-lg"
          :class="[
            item == currentPage
              ? 'text-white bg-[#7BCEBD]'
              : 'text-[#08A081]/50 bg-[#EDF6F4]',
          ]"
        >
          <p>
            {{ item }}
          </p>
        </section>
      </template>

      <button @click="$emit('onNext')">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="7.5"
            :fill="isLastPage ? '#F5FAF9' : '#E1F8F3'"
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="7.5"
            :stroke="isLastPage ? ' #E8F3F1' : '#F5FAF9'"
          />
          <path
            d="M11.6314 19.5685C11.4674 19.4044 11.3752 19.1819 11.3752 18.9499C11.3752 18.7179 11.4674 18.4954 11.6314 18.3313L15.9626 14L11.6314 9.66877C11.472 9.50374 11.3838 9.28271 11.3858 9.05329C11.3878 8.82387 11.4798 8.60441 11.6421 8.44218C11.8043 8.27994 12.0237 8.18792 12.2532 8.18593C12.4826 8.18394 12.7036 8.27213 12.8686 8.43152L17.8185 13.3814C17.9826 13.5455 18.0747 13.768 18.0747 14C18.0747 14.232 17.9826 14.4546 17.8185 14.6186L12.8686 19.5685C12.7046 19.7326 12.482 19.8247 12.25 19.8247C12.018 19.8247 11.7955 19.7326 11.6314 19.5685Z"
            :fill="isLastPage ? '#DCEDE9' : '#08A081'"
            :fill-opacity="{ 0.5: isFirstPage }"
          />
        </svg>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isFirstPage() {
      return this.currentPage == 1;
    },
    isLastPage() {
      return this.currentPage == this.totalPages;
    },
  },
};
</script>

<style lang="scss" scoped></style>
