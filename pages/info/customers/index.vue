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
            <GroupCardShimmer />
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
      <div v-if="isLoadingNext">
        <div class="grid md:grid-cols-4 gap-6 mt-4">
          <div
            class="col"
            v-for="(item, index) in shimmerInitialData"
            :key="index"
          >
            <GroupCardShimmer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SEAKUN_API } from '~/constants/api.js';
import GroupCard from '~/components/mollecules/GroupCard';
import GroupCardShimmer from './views/group-card-loading.vue';
import Title from '~/components/atoms/Title';
import MasterService from '~/services/MasterServices.js';

export default {
  components: {
    GroupCard,
    GroupCardShimmer,
    Title,
  },
  layout: 'new',
  data() {
    return {
      MasterService,
      SEAKUN_API,
      customers: [],
      shimmerInitialData: Array(4),
      isLoading: false,
      isLoadingNext: false,
      pagination: {
        currentPage: 1,
        perPages: 8,
      },
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    let provider = this.$route.query.provider;
    this.getAccountGroups(provider);
    this.getNextAccountGroup(provider);
  },
  methods: {
    async getAccountGroups(providerUid) {
      this.isLoading = true;
      const { MasterService } = this;
      const params = {
        page: this.pagination.currentPage,
        limit: this.pagination.perPages,
        providerUid,
      };
      try {
        const fetchAccountGroups = await MasterService.getAccountGroups(params);
        if (fetchAccountGroups.data) {
          const { data, pagination } = fetchAccountGroups.data;
          this.customers = data ? data : [];
          this.pagination = pagination;
          this.isLoading = false;
        } else {
          throw new Error(fetchAccountGroups);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getNextAccountGroup(providerUid) {
      window.onscroll = async () => {
        let heightFooter = document.getElementsByClassName('footer')[0];
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight - heightFooter.offsetHeight;
        if (bottomOfWindow && !this.isLoading && !this.isLoadingNext) {
          if (this.pagination.currentPage !== this.pagination.numOfPages) {
            this.isLoadingNext = true;
            const { MasterService } = this;
            const params = {
              page: this.pagination.currentPage + 1,
              limit: this.pagination.perPages,
              providerUid,
            };
            try {
              const fetchAccountGroups = await MasterService.getAccountGroups(
                params
              );
              if (fetchAccountGroups.data) {
                const { data, pagination } = fetchAccountGroups.data;
                this.customers = [...this.customers, ...data];
                this.pagination = pagination;
                this.isLoadingNext = false;
              } else {
                throw new Error(fetchAccountGroups);
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
      };
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
