<template>
  <div id="navbar-seglowup" class="w-full fixed z-40 tn:py-3 lg:py-0 bg-none">
    <div
      v-if="open"
      class="opacity-20 fixed inset-0 z-90 bg-black"
      @click="open = false"
    ></div>
    <div class="static z-0 w-full text-gray-700">
      <div class="container lg:flex lg:justify-between lg:items-center">
        <nuxt-link to="/">
          <div @click="scrollToTop">
            <img
              class="tn:h-[40px]"
              src="/images/navbar/brand_seakun.svg"
              alt="brand seakun"
            />
          </div>
        </nuxt-link>
        <div
          class="absolute tn:top-1 tn:right-1 tn:py-4 tn:px-4 md:px-4 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col tn:w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center"
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
            class="tn:flex-col tn:pr-4 md:pr-4 lg:pr-0 tn:mt-2 md:p-0 lg:mt-0 lg:flex lg:justify-end lg:flex-row"
            v-for="(navbar, id) in navbarLink"
            :key="id"
          >
            <div
              class="cursor-pointer tn:text-right tn:my-3 lg:my-4 tn:text-sm md:text-[14px] font-semibold md:font-bold text-secondary rounded-lg md:py-0 md:mt-0 hover:opacity-50 focus:opacity-50 lg:ml-8 xl:ml-12 relative"
              @click="scrollToSection(navbar)"
            >
              <p>
                {{ navbar.label }}
              </p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
export default {
  data() {
    return {
      showSpark1: false,
      showSpark2: false,
      showSpark3: false,
      open: false,
      navbarLink: [
        {
          id: 1,
          label: 'Skema Harga',
          tag: 'price-scheme-seglowup',
        },
        {
          id: 2,
          label: 'Flow Berlangganan',
          tag: 'order-flow-seglowup',
        },
        {
          id: 3,
          label: 'Layanan',
          tag: 'service-seglowup',
        },
        {
          id: 4,
          label: 'Testimoni',
          tag: 'testimony-seglowup',
        },
        {
          id: 5,
          label: 'FAQ',
          tag: 'qna-seglowup',
        },
      ],
    };
  },
  components: {
    Logo,
  },
  mounted() {
    window.onscroll = () => {
      this.handleScrollEffect();
    };
  },
  methods: {
    handleScrollEffect() {
      const myNav = document.getElementById('navbar-seglowup');
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        myNav.classList.add('bg-nav');
        myNav.classList.remove('bg-none');
      } else {
        myNav.classList.add('bg-none');
        myNav.classList.remove('bg-nav');
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.open = false;
    },
    scrollToSection(menu) {
      this.scrollToElementWithOffset(menu.tag, 100);
      this.open = false;
    },
    scrollToElementWithOffset(elementId, offset) {
      const element = document.getElementById(elementId);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.bg-nav {
  background-color: #ffffff !important;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  transition: 1s all ease;
}
.bg-none {
  background-color: transparent !important;
  box-shadow: none !important;
  transition: 1s all ease;
}
@media (min-width: 800px) {
  .bg-nav {
    background-color: #ffffff !important;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    transition: 1s all ease;
  }
  .bg-none {
    background-color: transparent !important;
    box-shadow: none !important;
    padding-top: 30px !important;
    padding-bottom: 0 !important;
    transition: 1s all ease;
  }
}
@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
