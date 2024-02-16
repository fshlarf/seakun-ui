<template>
  <div class="bg-white lg:px-5 xl:px-8 rounded-xl max-w-[802px]">
    <header
      class="w-full h-full bg-no-repeat bg-contain bg-right hidden lg:block"
      style="background-image: url(/images/background/header-card-order.png)"
    >
      <h1 class="text-[20px] text-gray-secondary font-bold pt-8 pb-7">
        Pesanan
      </h1>
      <div
        class="flex gap-3 xl:gap-6 relative w-full overflow-x-auto overscroll-auto hide-scrollbar"
      >
        <div
          class="h-[2px] absolute bottom-0 left-0 right-0 bg-[#00BA8826]/[15%]"
        ></div>
        <section class="cursor-pointer" @click="handleTab()">
          <div>
            <p
              class="text-sm pb-4 pl-2 pr-1 whitespace-nowrap"
              :class="
                activeTab == ''
                  ? 'text-green-seakun-secondary-dark'
                  : 'text-green-seakun-secondary-dark/80'
              "
            >
              Semua
            </p>
            <div
              :class="{
                'underline border-b-2 border-green-seakun-secondary-dark ':
                  activeTab == '',
              }"
            ></div>
          </div>
        </section>
        <section
          v-for="(menu, id) in menus"
          :key="id"
          class="cursor-pointer"
          @click="handleTab(menu.uid)"
        >
          <div v-if="menu.name !== 'Refund'">
            <p
              :key="id"
              class="text-sm pb-4 pl-2 pr-1 whitespace-nowrap"
              :class="
                activeTab == menu.uid
                  ? 'text-green-seakun-secondary-dark'
                  : 'text-green-seakun-secondary-dark/80'
              "
            >
              {{ menu.name }}
            </p>
            <div
              :class="{
                'underline border-b-2 border-green-seakun-secondary-dark ':
                  activeTab == menu.uid,
              }"
            ></div>
          </div>
        </section>
      </div>
    </header>

    <div
      class="mt-[26px] p-3 lg:p-0 lg:mt-6 space-y-5 bg-white lg:bg-none rounded-[10px]"
    >
      <div class="lg:hidden flex justify-between items-center">
        <h3 class="text-sm text-gray-secondary font-medium">
          Lihat Berdasarkan
        </h3>

        <SelectOrderStatusMobile
          @onSelectOrderStatus="handleTab"
          :active-tab="activeTab"
          :option="menus"
        />
      </div>
      <div v-if="isLoading" class="pb-5">
        <CardOrderLoading />
      </div>
      <template v-else>
        <div v-if="orderList.length > 0" class="space-y-5 pb-5">
          <Card v-for="(data, id) in orderList" :key="id" :order="data" />
        </div>
        <div v-else class="p-4 text-center">
          <div class="">
            <img
              class="mx-auto w-[100px] lg:w-[150px]"
              src="/images/user/order-not-found.png"
              alt="pesanan tidak ditemukan"
            />
          </div>
          <p class="text-xs md:text-sm xl:text-base mt-[12px] lg:mt-[24px]">
            Oops! Pesanan Tidak Ditemukan
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Card from './views/card-order.vue';
import CardOrderLoading from './views/card-order-loading.vue';
import SelectOrderStatusMobile from './views/select-order-status-mobile.vue';
import OrderService from '~/services/OrderServices';
import MasterService from '~/services/MasterServices';

export default {
  layout: 'profile',
  components: {
    Card,
    SelectOrderStatusMobile,
    CardOrderLoading,
  },
  data() {
    return {
      OrderService,
      MasterService,
      activeTab: '',
      menus: [],
      paramGetOrder: {
        page: 1,
        limit: 50,
        status: '',
      },
      isLoading: true,
      orderList: [],
    };
  },
  mounted() {
    this.OrderService = new OrderService(this);
    this.MasterService = new MasterService(this);
    this.getInitialData();
  },
  methods: {
    async getInitialData() {
      await this.getOrderStatusRef();
      this.getCustomerOrders();
    },
    handleTab(status) {
      this.activeTab = status;
      this.paramGetOrder = {
        ...this.paramGetOrder,
        status: status,
      };
      this.getCustomerOrders();
    },
    async getCustomerOrders() {
      this.isLoading = true;
      const { OrderService, paramGetOrder } = this;
      try {
        const fetchGetOrders = await OrderService.getCustomerOrders(
          paramGetOrder
        );
        if (fetchGetOrders.data) {
          const { data } = fetchGetOrders.data;
          this.orderList = data;
        }
      } catch (error) {}
      this.isLoading = false;
    },
    async getOrderStatusRef() {
      this.isLoading = true;
      const { MasterService } = this;
      try {
        const fetchGetOrderStatus = await MasterService.getReferentialOrderStatus();
        if (fetchGetOrderStatus.data) {
          const { data } = fetchGetOrderStatus.data;
          this.menus = data.map((status) => {
            const item = {
              uid: status.uid,
              name: this.convertStatusOrderName(status.value),
              sequence: status.sequence == 7 ? 0 : status.sequence,
            };
            return item;
          });
          this.menus.sort((a, b) => a.sequence - b.sequence);
        }
      } catch (error) {}
      this.isLoading = false;
    },
    convertStatusOrderName(status) {
      switch (status) {
        case 'Waiting For Follow-up':
          return 'Pre-order';
        case 'Registered':
          return 'Menunggu Pembayaran';
        case 'Waiting For Confirmation':
          return 'Sedang Diproses';
        case 'Active':
          return 'Aktif';
        case 'Pending':
          return 'Masa Tenggang';
        case 'Cancel':
          return 'Dibatalkan';
        case 'Refund':
          return 'Refund';
        default:
          return 'Aktif';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.underline {
  height: 2px;
  max-width: 0%;
  animation: drawBorder 0.5s ease forwards;
}

@keyframes drawBorder {
  from {
    max-width: 0%;
  }
  to {
    max-width: 100%;
  }
}
</style>
