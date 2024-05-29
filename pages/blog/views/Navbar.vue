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
          <button @click="switchSearching">
            <svg
              class="h-5 w-5 text-[#A0A3BD] md:hidden"
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
              type="text"
              id="search"
              class="w-full rounded-lg border border-gray-300 p-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Search..."
            />

            <svg
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
          </div>
        </div>
      </div>

      <!-- List Menu -->
      <!-- <ul
        class="flex w-full items-center gap-4 overflow-auto border-b border-gray-200 md:gap-5"
      >
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="relative px-1 py-3 md:px-4 md:pb-5"
        >
          <nuxt-link
            :to="menu.path"
            :class="`text-center ${
              menu.path === $route.fullPath ? is_active : 'text-main'
            }`"
            >{{ menu.label }}</nuxt-link
          >
        </li>
      </ul> -->
    </div>

    <div
      v-if="is_searching"
      class="absolute top-0 z-10 h-screen w-full bg-black/40"
    >
      <div class="container-seakun-blog flex items-center gap-4 bg-white py-3">
        <button @click="switchSearching">
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
            type="text"
            id="search"
            class="w-full rounded-lg border border-gray-300 p-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search.."
          />

          <svg
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          path: '/blog',
          label: 'Semua',
        },
        {
          path: '/blog/category-film',
          label: 'Film',
        },
        {
          path: '#',
          label: 'Series',
        },
        {
          path: '#',
          label: 'Musik',
        },
        {
          path: '#',
          label: 'Vlog',
        },
        {
          path: '#',
          label: 'Edukasi',
        },
        {
          path: '#',
          label: 'Produktivitas',
        },
        {
          path: '#',
          label: 'Game',
        },
      ],
      is_active:
        "text-primary font-extrabold after:content-[''] after:absolute after:bottom-0 after:inset-x-1 after:border-b-2 after:border-primary",
      is_searching: false,
    };
  },
  methods: {
    switchSearching() {
      this.is_searching = !this.is_searching;
    },
  },
};
</script>

<style>
.title-font {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
