<template>
  <div>
    <CustomNavbar
      :navbar-id="navbarProps.navbarId"
      :navbar-link="navbarProps.navbarLink"
      :containerClass="navbarProps.containerClass"
      :logo="navbarProps.logo"
      :logo-class="navbarProps.logoClass"
      :humbuger-class="navbarProps.hamburgerClass"
    />
    <IntroBanner :is-loading="isLoading" />
    <HowToPlay />
    <SpecialGift />
    <HowToClaim />
    <LiveDraw />
    <TermsAndConditions />
    <Footer classContainer="!container-about-us" />
  </div>
</template>

<script>
import CustomNavbar from '../../components/mollecules/CustomNavbar.vue';
import IntroBanner from '~/components/sefoursary/IntroBanner.vue';
import HowToPlay from '~/components/sefoursary/HowToPlay.vue';
import SpecialGift from '../../components/sefoursary/SpecialGift.vue';
import HowToClaim from '../../components/sefoursary/HowToClaim.vue';
import LiveDraw from '../../components/sefoursary/LiveDraw.vue';
import TermsAndConditions from '../../components/sefoursary/TermsAndConditions.vue';
import Footer from '~/components/mollecules/Footer.vue';
import { authorizeWebview } from '~/helpers/httpRequest';

export default {
  components: {
    CustomNavbar,
    IntroBanner,
    HowToPlay,
    SpecialGift,
    HowToClaim,
    LiveDraw,
    TermsAndConditions,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      navbarProps: {
        navbarId: 'navbar-sefoursary',
        containerClass: 'container-about-us',
        logo: '/images/sefoursary/logo.svg',
        logoClass: '!h-[38px] sm:!h-[40px] md:!h-[50px] lg:!h-[60px] lg:mb-4',
        hamburgerClass: 'sm:mt-1 md:mt-2 lg:mt-0',
        navbarLink: [
          {
            id: 1,
            label: 'Cara Main',
            tag: 'sefoursary-how-to-play',
          },
          {
            id: 2,
            label: 'Hadiah Spesial',
            tag: 'sefoursary-special-gift',
          },
          {
            id: 3,
            label: 'Cara Klaim Hadiah',
            tag: 'sefoursary-how-to-claim',
          },
          {
            id: 4,
            label: 'Syarat & Ketentuan',
            tag: 'sefoursary-terms-and-conditions',
          },
        ],
      },
    };
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    async checkAuth() {
      this.isLoading = true;
      try {
        const { ats, rts } = this.$route.query;
        if (ats && rts) {
          await authorizeWebview(this, ats, rts);
          const accesToken = this.$cookies.get('ATS');
          const refreshToken = this.$cookies.get('RTS');
          if (!accesToken || !refreshToken) {
            this.$alert.show({
              status: 'error',
              message: 'Silahkan login terlebih dahulu',
            });
            setTimeout(() => {
              this.$router.push('/login');
            }, 5000);
          }
        }
      } catch (error) {
        this.$alert.show({
          status: 'error',
          message: 'Sesi berakhir. Silahkan login kembali',
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 5000);
        console.log('Error', error);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
