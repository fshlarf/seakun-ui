<template>
  <div>
    <Navbar />
    <HeaderSection />
    <PortofolioSection />
    <BenefitSection />
    <!-- <SeakunHelpBanner /> -->
    <PromoSection />
    <ProductSection />
    <OrderFlowSection />
    <PaymentSection />
    <CompanyPartnerSection />
    <TestimonySection />
    <UserGroupSection />
    <QnaSection />
    <WarningOrder />
    <PartnershipBanner />
    <Footer />
    <SeakunHelpFloatingButton @click="onClickFloatingButton" />
    <!-- <ModalSekurbanBanner /> -->
    <ModalSeakunHelp
      :show-modal="isShowModalSeakunHelp"
      @closeModal="onCloseModalSeakunHelp"
    />
    <ModalPromo :is-show="isShowModalPromo" @onClose="onCloseModalPromo" />
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import ModalPromo from '~/components/mollecules/ModalPromo';
import HeaderSection from '~/components/organisms/HeaderSection';
import PortofolioSection from '~/components/organisms/PortofolioSection';
import PromoSection from '~/components/organisms/PromoSection';
import ProductSection from '~/components/organisms/ProductSection';
import CompanyPartnerSection from '~/components/organisms/CompanyPartnerSection';
import OrderFlowSection from '~/components/organisms/OrderFlowSection';
import PaymentSection from '~/components/organisms/PaymentSection';
import TestimonySection from '~/components/organisms/TestimonySection';
import UserGroupSection from '~/components/organisms/UserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import QnaSection from '~/components/organisms/QnaSection';
import WarningOrder from '~/components/organisms/WarningOrder';
import PartnershipBanner from '~/components/organisms/PartnershipBanner';
import Footer from '~/components/mollecules/Footer';
import SeakunHelpBanner from '~/components/organisms/SeakunHelpBanner';
import SeakunHelpFloatingButton from '~/components/mollecules/SeakunHelpFloatingButton';
import ModalSekurbanBanner from '~/components/mollecules/ModalSekurbanBanner';
import ModalSeakunHelp from '~/components/mollecules/ModalSeakunHelp';
import ModalBase from '~/components/atoms/ModalBase';
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  components: {
    Navbar,
    HeaderSection,
    PortofolioSection,
    PromoSection,
    ProductSection,
    CompanyPartnerSection,
    OrderFlowSection,
    PaymentSection,
    TestimonySection,
    UserGroupSection,
    BenefitSection,
    QnaSection,
    WarningOrder,
    PartnershipBanner,
    Footer,
    SeakunHelpBanner,
    SeakunHelpFloatingButton,
    ModalSekurbanBanner,
    ModalSeakunHelp,
    ModalPromo,
    ModalBase,
  },
  data() {
    return {
      isShowModalSeakunHelp: false,
      isShowModalBase: false,
      isShowModalPromo: true,
    };
  },
  computed: {
    ...mapGetters({
      providerList: 'getProviders',
      groupList: 'getGroups',
    }),
  },
  // beforeMount() {
  //   this.$router.push('/info/maintenance');
  // },
  mounted() {
    this.checkReferralCode();
    const userGroup = document.getElementById('pengguna');
    if (this.providerList.list.length === 0) {
      this.fetchProvider('youtube');
    } else {
      this.isShowModalBase = false;
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
    checkReferralCode() {
      const { ref } = this.$router.history.current.query;
      const existingDataReferral = JSON.parse(
        localStorage.getItem('referral_code')
      );
      if (existingDataReferral) {
        const now = moment();
        const twentyFourHoursLimit = moment
          .unix(existingDataReferral.createdAt)
          .add(24, 'hours');
        const isWithin24Hours = twentyFourHoursLimit.isAfter(now);
        if (!isWithin24Hours) {
          localStorage.removeItem('referral_code');
        }
      }
      if (ref) {
        if (existingDataReferral) {
          localStorage.removeItem('referral_code');
        }
        const dataReferral = {
          referral: ref,
          createdAt: moment().unix(),
        };
        localStorage.setItem('referral_code', JSON.stringify(dataReferral));
      }
    },
    onCloseModalSeakunHelp() {
      this.isShowModalSeakunHelp = false;
    },
    onClickFloatingButton() {
      this.isShowModalSeakunHelp = true;
    },
    onCloseModalSefoursary() {
      this.isShowModalBase = false;
      // this.isShowModalPromo = true;
    },
    onCloseModalPromo() {
      this.isShowModalPromo = false;
    },
    onClickSefoursary() {
      this.$router.push('/sefoursary');
    },
  },
};
</script>

<style lang="scss" scoped></style>
