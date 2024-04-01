<template>
  <div id="navbar-sekurban" class="w-full fixed z-40 bg-top">
    <div
      v-if="open"
      class="opacity-20 fixed inset-0 z-90 bg-black py-7"
      @click="open = false"
    ></div>
    <div class="static z-0 w-full text-gray-700">
      <div
        class="container-sekurban-new lg:flex lg:justify-between items-center"
        :class="{ 'my-7': !isScrolled, 'my-3': isScrolled }"
      >
        <nuxt-link to="/">
          <div @click="scrollToTop()">
            <img
              class="w-[100px] md:w-[150px]"
              src="/images/navbar/brand_seakun.svg"
              alt="brand seakun"
            />
          </div>
        </nuxt-link>
        <div
          class="absolute top-1 right-1 py-3 px-4 md:px-4 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center"
          :class="{ shadow: open, 'bg-white': open, 'py-6': !isScrolled }"
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

          <!-- Mobile Menu -->
          <nav
            :class="{ flex: open, hidden: !open }"
            class="flex-col pr-4 md:pr-4 lg:pr-0 mt-2 md:p-0 lg:mt-0 lg:justify-end lg:hidden"
            v-for="(navbar, id) in navbarLink"
            :key="id"
          >
            <p
              :class="{
                'text-primary hover:opacity-70': isScrolled,
                '': open,
              }"
              class="cursor-pointer text-sm font-bold rounded-lg py-1 md:py-0 md:mt-0 text-primary hover:text-primary focus:opacity-50 text-right"
              href="#"
              @click="scrollToSection(navbar)"
            >
              {{ navbar.label }}
            </p>
          </nav>

          <!-- Desktop Menu -->
          <nav
            class="flex-col pr-4 md:pr-4 lg:pr-0 mt-2 md:p-0 lg:mt-0 hidden lg:flex lg:justify-end lg:flex-row items-center"
            v-for="(navbar, id) in navbarLink"
            :key="id"
          >
            <p
              :class="{
                'text-primary hover:opacity-70': isScrolled,
                '': open,
              }"
              class="cursor-pointer text-sm font-bold rounded-lg md:py-0 md:mt-0 text-white hover:text-primary focus:opacity-50 ml-7"
              href="#"
              @click="scrollToSection(navbar)"
            >
              {{ navbar.label }}
            </p>
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
      isScrolled: false,
      open: false,
      navbarLink: [
        {
          id: 1,
          label: 'Latar Belakang',
          tag: 'product-background-sekurban',
        },
        {
          id: 2,
          label: 'Detail Hewan Qurban',
          tag: 'product-detail-sekurban',
        },
        {
          id: 3,
          label: 'Rincian Biaya',
          tag: 'pricing-sekurban',
        },
        {
          id: 4,
          label: 'Benefit Program',
          tag: 'benefit-sekurban',
        },
        {
          id: 5,
          label: 'Flow Program',
          tag: 'order-flow-sekurban',
        },
        {
          id: 6,
          label: 'Testimoni',
          tag: 'testimony-sekurban',
        },
        {
          id: 7,
          label: 'FAQ',
          tag: 'faq-sekurban',
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

    this.handleScrollEffect();
  },
  methods: {
    handleScrollEffect() {
      const myNav = document.getElementById('navbar-sekurban');
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        myNav.classList.add('bg-below');
        myNav.classList.remove('bg-top');
        this.isScrolled = true;
      } else {
        myNav.classList.add('bg-top');
        myNav.classList.remove('bg-below');
        this.isScrolled = false;
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
      this.scrollToElementWithOffset(menu.tag, 25);
      this.open = false;
    },
    scrollToElementWithOffset(elementId, offset) {
      var element = document.getElementById(elementId);
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style>
.bg-below {
  background-color: #ffffff !important;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  transition: 1s all ease;
}
.bg-top {
  background-color: transparent !important;
  box-shadow: none !important;
  transition: 1s all ease;
}
@media (min-width: 800px) {
  .bg-below {
    background-color: #ffffff !important;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    transition: 1s all ease;
  }
  .bg-top {
    background-color: transparent !important;
    box-shadow: none !important;
    padding-top: 10px !important;
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
