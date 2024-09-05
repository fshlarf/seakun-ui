<template>
  <div>
    <NavbarBlank classContainer="container-about-us" />
    <BreadCrumb />
    <Roadmap
      @onClickLevel="goToChallenge"
      :level="myLevel"
      :is-loading="isLoading"
    />
    <Footer />
    <ModalSefoursaryEnd />
  </div>
</template>

<script>
import moment from 'moment';

import NavbarBlank from '~/components/mollecules/NavbarBlank.vue';
import BreadCrumb from '../../../components/sefoursary/BreadCrumb.vue';
import ModalSefoursaryEnd from '../../../components/sefoursary/game/ModalSefoursaryEnd.vue';
import Roadmap from '~/components/sefoursary/roadmap';
import Footer from '~/components/mollecules/Footer.vue';
import {
  getDataFromGoogleSheet,
  updateDataInGoogleSheet,
} from '~/services/SefoursaryService.js';
import CustomerService from '../../../services/CustomerServices';
import { arrFindMaxValue } from '~/helpers/utils';
import { authorizeWebview } from '~/helpers/httpRequest';

export default {
  components: {
    NavbarBlank,
    BreadCrumb,
    Roadmap,
    Footer,
    ModalSefoursaryEnd,
  },
  data() {
    return {
      CustomerService,
      userInfo: {},
      myLevel: 0,
      isLoading: true,
    };
  },
  computed: {
    formattedDate() {
      return moment().format('D/M/YYYY h:mm:ss');
    },
  },
  created() {
    this.CustomerService = new CustomerService(this);
  },
  mounted() {
    // this.initiate();
  },
  methods: {
    getDataFromGoogleSheet,
    updateDataInGoogleSheet,
    arrFindMaxValue,
    async initiate() {
      await this.checkAuth();
      this.fetchUser();
    },
    async checkAuth() {
      try {
        const { ats, rts } = this.$route.query;
        if (ats && rts) {
          await authorizeWebview(this, ats, rts);
        }

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
    },
    goToChallenge(level) {
      if (level <= this.myLevel) {
        this.$router.push({
          path: '/sefoursary/game/level',
          query: { id: level },
        });
      }
    },

    async fetchUser() {
      try {
        const fetchCustomer = await this.CustomerService.getCustomerByUid();
        const { data } = fetchCustomer.data;

        this.userInfo = data;

        const setToLocal = JSON.stringify(data);
        localStorage.setItem('customer', setToLocal);
        await this.getLevel();
      } catch (error) {
        console.log('error fetch user', error);
      }
    },
    async getLevel() {
      try {
        const res = await this.CustomerService.getSefoursaryData({
          sheet: 'USER',
        });
        const { data } = res.data;
        if (data && data.length > 0) {
          const currentLevel = this.arrFindMaxValue(data, 'level');
          if (currentLevel.level == 0) {
            this.myLevel = 1;
            await this.postUser();
          } else {
            this.myLevel = currentLevel.level;
          }
        } else {
          this.myLevel = 1;
        }
      } catch (error) {
        console.log('error:', error);
      }
      this.isLoading = false;
    },
    async postUser() {
      try {
        const userData = this.userInfo;
        const res = await this.CustomerService.openNextLevelSefoursary({
          level: 0,
        });
      } catch (error) {
        console.log('eror post user:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
