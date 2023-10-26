<template>
  <div
    id="navbar"
    class="w-full bg-third fixed top-0 z-40 tn:py-3 tn:shadow px-2"
  >
    <div
      class="!container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between"
    >
      <nuxt-link to="/">
        <img
          class="tn:h-[30px]"
          src="/images/navbar/brand_seakun.svg"
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
    background-color: #f4f9f8;
  }
}
@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
