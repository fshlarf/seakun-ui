<template>
  <div id="navbar" class="z-40 w-full fixed top-0 py-3" :class="className">
    <div :class="classContainer">
      <div class="static z-0 w-full lg:flex lg:justify-between">
        <nuxt-link to="/">
          <img
            class="h-[30px] md:h-10"
            src="/images/navbar/new_brand_seakun.svg"
            alt="brand seakun"
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
