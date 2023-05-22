<template>
  <div
    class="tn:w-full lg:fixed z-40 bg-white md:border-b md:border-[#E0E0E0] mx-auto"
  >
    <div
      class="tn:flex tn:justify-between tn:items-center h-[95px] lg:ml-[121px] lg:mr-[161px]"
    >
      <div class="tn:pl-6 md:pl-10 lg:p-0">
        <Logo label="Seakun.id" />
      </div>
      <div
        class="absolute tn:top-1 tn:right-1 tn:py-3 tn:px-3 md:px-3 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col tn:w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center"
        :class="{ 'bg-white': open }"
      >
        <div class="items-center p-3">
          <button
            class="lg:hidden rounded-lg focus:outline-none float-right"
            @click="open = !open"
          >
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2002 16H28.0802"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.2002 8H28.0802"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.2002 24H28.0802"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav
          :class="{ flex: open, hidden: !open }"
          class="flex-col tn:pr-4 md:py-[21px] md:px-[21px] tn:mt-2 md:p-0 lg:mt-0 hidden lg:flex lg:justify-end lg:flex-row"
          v-for="(navbar, id) in navbarLink"
          :key="id"
        >
          <p class="text-base text-[#8DCABE] mx-[10px]">
            {{ navbar.label }}
          </p>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/pages/seatap/views/Logo.vue';

export default {
  components: {
    Logo,
  },

  data() {
    return {
      open: false,
      navbarLink: [
        {
          id: 1,
          label: 'Provider',
        },
        {
          id: 2,
          label: 'Tipe User',
        },
        {
          id: 3,
          label: 'Cara Pesan',
        },
        {
          id: 4,
          label: 'Testimoni',
        },
        {
          id: 5,
          label: 'FAQ',
        },
      ],
    };
  },
};
</script>
