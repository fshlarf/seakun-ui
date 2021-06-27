<template>
  <div
    id="navbar"
    class="w-full bg-white fixed z-40 tn:py-2 lg:py-0 tn:shadow px-2"
  >
    <div v-if="open" class="opacity-20 fixed inset-0 z-90 bg-black"></div>
    <div
      class="container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between lg:items-center"
    >
      <nuxt-link class="hover:no-underline" to="/">
        <Logo label="Seakun.id" />
      </nuxt-link>
      <div
        class="absolute tn:top-1 tn:right-1 tn:py-3 tn:px-3 md:px-3 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col w-4/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center"
        :class="{ shadow: open, 'bg-white': open }"
      >
        <div class="items-center">
          <button
            class="lg:hidden rounded-lg focus:outline-none float-right"
            @click="open = !open"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="w-6 h-6 primary"
            >
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                v-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          :class="{ flex: open, hidden: !open }"
          class="flex-col tn:pr-4 md:pr-4 tn:mt-2 md:p-0 lg:mt-0 hidden lg:flex lg:justify-end lg:flex-row"
          v-for="(navbar, id) in navbarLink"
          :key="id"
        >
          <p
            class="cursor-pointer text-right my-3 text-sm md:text-base font-semibold md:font-bold text-primary hover:text-secondary rounded-lg md:py-0 md:mt-0 hover:opacity-50 focus:opacity-50 lg:ml-12 xl:ml-16"
            href="#"
            @click="scrollToSection(navbar.id)"
          >
            {{ navbar.label }}
          </p>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
export default {
  data() {
    return {
      open: false,
      navbarLink: [
        {
          id: 1,
          label: 'Layanan',
          link: '',
        },
        {
          id: 2,
          label: 'Pengguna',
          link: '',
        },
        {
          id: 3,
          label: 'Cara pesan',
          link: '',
        },
        {
          id: 4,
          label: 'Testimoni',
          link: '',
        },
        {
          id: 5,
          label: 'QnA',
          link: '',
        },
      ],
    };
  },
  components: {
    Logo,
  },
  methods: {
    scrollToSection(id) {
      if (id === 1) {
        const providerSection = document.getElementById('provider');
        providerSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
      if (id === 2) {
        const penggunaSection = document.getElementById('pengguna');
        penggunaSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
      if (id === 3) {
        const orderFlowSection = document.getElementById('orderFlow');
        orderFlowSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
      if (id === 4) {
        const testimonySection = document.getElementById('testimony');
        testimonySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
      if (id === 5) {
        const qnaSection = document.getElementById('qna');
        qnaSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
      this.open = false;
    },
  },
};
</script>

<style>
@media (min-width: 400px) {
  #navbar {
    background-color: #f4f9f8;
  }
}
@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
