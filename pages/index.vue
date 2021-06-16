<template>
  <div>
    <Navbar />
    <HeaderSection />
    <Introduction />
    <Partnership />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import Introduction from '~/components/organisms/Introduction';
import Partnership from '~/components/organisms/Partnership';

export default {
  components: {
    Navbar,
    HeaderSection,
    Introduction,
    Partnership,
  },
};
</script>

<style lang="scss" scoped></style>
