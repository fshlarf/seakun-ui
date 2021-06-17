<template>
  <div>
    <Navbar />
    <HeaderSection />
    <Introduction />
    <Partnership />
    <ProductSection />
    <UserType />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import Introduction from '~/components/organisms/Introduction';
import Partnership from '~/components/organisms/Partnership';
import ProductSection from '~/components/organisms/ProductSection';
import UserType from '~/components/organisms/UserType';

export default {
  components: {
    Navbar,
    HeaderSection,
    Introduction,
    Partnership,
    ProductSection,
    UserType,
  },
};
</script>

<style lang="scss" scoped></style>
