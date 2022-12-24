<template>
  <div>
    <!-- <Navbar /> -->
    <HeaderSection />
    <IntroductionSection />
    <PartnershipSection />
    <!-- <WhatsappNoticeBanner /> -->
    <SeakunHelpBanner />
    <ProductSection />
    <CompanyPartnerSection />
    <UserTypeSection />
    <OrderFlowSection />
    <PaymentSection />
    <TestimonySectionTwitter />
    <UserGroupSection />
    <BenefitSection />
    <QnaSection />
    <WarningOrder />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import IntroductionSection from '~/components/organisms/IntroductionSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import ProductSection from '~/components/organisms/ProductSection';
import CompanyPartnerSection from '~/components/organisms/CompanyPartnerSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import OrderFlowSection from '~/components/organisms/OrderFlowSection';
import PaymentSection from '~/components/organisms/PaymentSection';
import TestimonySectionTwitter from '~/components/organisms/TestimonySectionTwitter';
import UserGroupSection from '~/components/organisms/UserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import QnaSection from '~/components/organisms/QnaSection';
import WarningOrder from '~/components/organisms/WarningOrder';
import Footer from '~/components/mollecules/Footer';
import WhatsappNoticeBanner from '~/components/organisms/WhatsappNoticeBanner';
import SeakunHelpBanner from '~/components/organisms/SeakunHelpBanner';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    HeaderSection,
    IntroductionSection,
    PartnershipSection,
    ProductSection,
    CompanyPartnerSection,
    UserTypeSection,
    OrderFlowSection,
    PaymentSection,
    TestimonySectionTwitter,
    UserGroupSection,
    BenefitSection,
    QnaSection,
    WarningOrder,
    Footer,
    WhatsappNoticeBanner,
    SeakunHelpBanner,
  },
  computed: {
    ...mapGetters({
      providerList: 'getProviders',
      groupList: 'getGroups',
    }),
  },
  mounted() {
    const userGroup = document.getElementById('pengguna');
    if (this.providerList.list.length === 0) {
      this.fetchProvider('youtube');
    }
    this.observeUserGroupSection(userGroup);
  },
  methods: {
    ...mapActions({
      fetchProvider: 'fetchProvider',
      fetchGroup: 'fetchGroup',
    }),
    observeUserGroupSection(element) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (this.groupList.list.length === 0) {
              this.fetchGroup();
            }
          }
        },
        {
          root: null,
          threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        }
      );
      observer.observe(element);
    },
  },
  // beforeMount() {
  //   this.$router.push('/info/maintenance');
  // },
};
</script>

<style lang="scss" scoped></style>
