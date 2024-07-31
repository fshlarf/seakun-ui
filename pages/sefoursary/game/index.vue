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
  </div>
</template>

<script>
import moment from 'moment';

import NavbarBlank from '~/components/mollecules/NavbarBlank.vue';
import BreadCrumb from '../../../components/sefoursary/BreadCrumb.vue';
import Roadmap from '~/components/sefoursary/roadmap';
import Footer from '~/components/mollecules/Footer.vue';
import {
  getDataFromGoogleSheet,
  updateDataInGoogleSheet,
} from '~/services/SefoursaryService.js';
import CustomerService from '../../../services/CustomerServices';
import { arrFindMaxValue } from '~/helpers/utils';

export default {
  components: {
    NavbarBlank,
    BreadCrumb,
    Roadmap,
    Footer,
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
      return moment().format('M/D/YYYY h:mm:ss');
    },
  },
  created() {
    this.CustomerService = new CustomerService(this);
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    getDataFromGoogleSheet,
    updateDataInGoogleSheet,
    arrFindMaxValue,
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
        this.getLevel();
      } catch (error) {
        console.log('error fetch user', error);
      }
    },
    async getLevel() {
      try {
        const userData = this.userInfo;

        const res = await this.getDataFromGoogleSheet(
          'USER',
          'Email',
          userData.email
        );
        if (res) {
          const findMyLevel = res.filter(
            (item) => item.Email === userData.email
          );

          if (findMyLevel.length == 0) {
            this.myLevel = 1;
            this.postUser();
          } else {
            const currentLevel = this.arrFindMaxValue(findMyLevel, 'level');
            this.myLevel = currentLevel.level;
          }
        }
      } catch (error) {
        console.log('error:', error);
      }
      this.isLoading = false;
    },
    async postUser() {
      try {
        const userData = this.userInfo;
        const ctx = {
          sheetName: 'USER',
          payload: {
            'User name': userData.name,
            Email: userData.email,
            'User WA': userData?.phoneNumber,
            Level: 1,
            'Last Updated': this.formattedDate,
            Passed: true,
          },
        };

        const res = await this.updateDataInGoogleSheet(ctx);
      } catch (error) {
        console.log('eror post user:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
