<template>
  <div>
    <div class="customer tn:px-4 md:px-8 xl:px-28 tn:pt-8 lg:pt-16">
      <Title title="Group Berlangganan" />
      <div v-if="isLoading">
        <div class="grid md:grid-cols-4 gap-6">
          <div
            class="col"
            v-for="(item, index) in shimmerInitialData"
            :key="index"
          >
            <CardShimmerVertical />
          </div>
        </div>
      </div>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center tn:gap-2 md:gap-3 lg:gap-6 mt-8"
        v-if="customers.length > 0"
      >
        <GroupCard
          v-for="(customer, index) in customers"
          :key="index"
          :group="customer"
          @click-order="clickRegister"
          class="flex-none w-full mx-auto my-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { SEAKUN_API } from '~/constants/api.js';
import GroupCard from '~/components/mollecules/GroupCard';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import Title from '~/components/atoms/Title';

export default {
  components: {
    GroupCard,
    CardShimmerVertical,
    Title,
  },
  layout: 'new',
  data() {
    return {
      SEAKUN_API,
      customers: [],
      shimmerInitialData: Array(4),
      isLoading: false,
    };
  },
  mounted() {
    this.getCustomersData();
  },
  methods: {
    getCustomersData() {
      const { SEAKUN_API } = this;
      let provider = this.$route.query.provider;
      this.isLoading = true;
      axios
        .get(`${SEAKUN_API}/registered-user/group-${provider}`)
        .then((res) => this.processDataCustomers(res.data))
        .catch((err) => console.log(err))
        .finally(() => (this.isLoading = false));
    },
    processDataCustomers(customers) {
      let newArr = [];
      let theArr = [];

      customers &&
        customers.map((e, i) => {
          newArr.push(e.group);
          theArr[parseInt(e.group) - 1] = {
            groupNumber: parseInt(e.group),
            members: [],
            name: e.provider,
            brand: `/images/${e.provider}.png`,
            startDate: e.start_date,
          };
        });
        console.log(theArr[0]);
      customers &&
        customers.map((e, i) => {
          if (newArr.includes(e.group)) {
            theArr[parseInt(e.group) - 1].members.push(e.customer_name);
          }
        });

      theArr.sort().reverse();
      this.customers = theArr;
    },
    setStatus(arrayNames) {
      return arrayNames.includes('') ? 'Available' : 'Full';
    },
    setClassStatus(arrayNames) {
      return arrayNames.includes('') ? 'Available' : 'Full';
    },
    isButtonShow(arrayNames) {
      return arrayNames.includes('') ? true : false;
    },
    setName(name) {
      if (name == '') {
        return 'Slot Tersedia';
      } else {
        const regex = /(?!^)[\s\S](?!$)/g;
        let arrayName = name.split(' ');
        let newArr = arrayName.map((e, i) => {
          if (i == arrayName.length - 1) {
            e = e.replace(regex, '*');
            return e;
          } else {
            return e;
          }
        });
        newArr = newArr.join(' ');
        return newArr;
      }
    },
    setClassUserName(name) {
      return name == '' ? 'available-slot' : '';
    },
    clickRegister() {
      this.$router.push('/?regist=true');
    },
  },
};
</script>

<style scoped></style>
