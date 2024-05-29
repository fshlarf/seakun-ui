<template>
  <div id="navbar" class="w-full fixed top-0 z-40 py-3" :class="className">
    <div
      class="!container static z-0 w-full md:px-10 lg:flex lg:justify-between"
    >
      <nuxt-link to="/">
        <img
          class="h-[30px] w-[163px] md:h-10"
          src="/images/navbar/new_brand_seakun.svg"
          alt="brand seakun"
        />
      </nuxt-link>
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
      default: 'bg-third tn:shadow',
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
@media (min-width: 400px) {
  #navbar {
    background-color: #ffffff;
  }
}
@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
