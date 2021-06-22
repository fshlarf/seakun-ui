<template>
  <div
    id="navbar"
    class="w-full bg-white fixed z-40 tn:py-1 lg:py-2 tn:shadow px-2"
  >
    <div
      class="container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between lg:items-center"
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
  components: {
    Logo,
  },
};
</script>

<style></style>
