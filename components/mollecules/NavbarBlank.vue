<template>
  <div id="navbar" class="w-full bg-third fixed z-40 py-2 tn:shadow px-2">
    <div
      class="container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between"
    >
      <nuxt-link class="hover:no-underline" to="/">
        <Logo label="Seakun.id" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
export default {
  name: 'navbar-blank',
  data() {
    return ({});
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
#navbar{
  position: fixed;
  top: 1px;
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
