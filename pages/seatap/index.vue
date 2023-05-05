<template>
  <div>
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarBlank.vue';
import Header from './views/Header';

export default {
  components: {
    Navbar,
    Header,
  },
};
</script>
