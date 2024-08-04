<template>
  <div
    id="navbar"
    class="z-40 w-full fixed top-0 py-3 lg:py-1"
    :class="className"
  >
    <div :class="classContainer">
      <div class="static z-0 w-full lg:flex lg:justify-between">
        <nuxt-link to="/">
          <!-- src="/images/navbar/new_brand_seakun.svg" -->
          <!-- class="h-[30px] md:h-10" -->
          <img
            alt="brand seakun"
            src="/images/sefoursary/logo.svg"
            class="!h-[38px] lg:!h-[60px] lg:mb-4 pb-1"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
export default {
  name: 'navbar-blank',
  data() {
    return {};
  },
  props: {
    className: {
      typeof: String,
      default: 'bg-white tn:shadow',
    },
    classContainer: {
      typeof: String,
      default: 'container',
    },
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0px;
}

@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
