<template>
  <div class="main-font w-full">
    <Navbar />
    <HeroArticleSection />
    <LatestArticleSection />

    <div class="bg-[#C4C6D71A]/10 py-8">
      <div class="container-seakun-blog">
        <div class="flex flex-col lg:flex-row">
          <TopArticleSection />
          <RecommendArticleSection />
        </div>
      </div>
    </div>

    <PopularArticleSection />
    <CategorySection />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/NavbarSeakunBlog.vue';
import HeroArticleSection from './views/HeroArticleSection.vue';
import LatestArticleSection from './views/LatestArticleSection.vue';
import TopArticleSection from './views/TopArticleSection.vue';
import RecommendArticleSection from './views/RecommendArticleSection.vue';
import PopularArticleSection from './views/PopularArticleSection.vue';
import CategorySection from './views/CategorySection.vue';
import Footer from '~/components/mollecules/FooterSeakunBlog.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Navbar,
    HeroArticleSection,
    LatestArticleSection,
    TopArticleSection,
    RecommendArticleSection,
    PopularArticleSection,
    CategorySection,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      providerSekurban: 'getProviderSekurban',
    }),
  },
  mounted() {
    if (!this.providerSekurban.uid) {
      this.fetchProviderSekurban();
    }
  },
  methods: {
    ...mapActions({
      fetchProviderSekurban: 'fetchProviderSekurban',
      createOrder: 'createOrder',
    }),
    onClickOrder() {
      const sekurban = this.providerSekurban;
      const customerUid = this.$cookies.get('customerUid');
      if (customerUid) {
        const payload = {
          packageVariantUid: sekurban.variants[0].uid,
          ispreorder: sekurban.variants[0].isPo === 1,
          userhost: sekurban.variants[0].isHost === 1,
        };
        this.createOrder(payload);
      } else {
        this.$alert.show({
          status: 'error',
          duration: 4000,
          message: 'Harap login untuk memesan',
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
  },
};
</script>

<style>
#sekurban-page {
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
