<template>
  <div class="bg-white lg:px-5 xl:px-8 rounded-xl">
    <header
      class="w-full h-full bg-no-repeat bg-contain bg-right hidden lg:block"
      style="background-image: url(/images/background/header-card-order.png)"
    >
      <h1 class="text-[20px] text-gray-secondary font-bold pt-8 pb-7">
        Pesanan
      </h1>
      <div class="flex gap-3 xl:gap-6 relative w-full overflow-x-scroll">
        <div
          class="h-[2px] absolute bottom-0 left-0 right-0 bg-[#00BA8826]/[15%]"
        ></div>
        <section
          v-for="(menu, id) in menus"
          :key="id"
          class="cursor-pointer"
          @click="handleTab(menu.name)"
        >
          <div>
            <p
              :key="id"
              class="text-sm pb-4 pl-2 pr-1 whitespace-nowrap"
              :class="
                activeTab == menu.slug
                  ? 'text-green-seakun-secondary-dark'
                  : 'text-green-seakun-secondary-dark/80'
              "
            >
              {{ menu.name }}
            </p>
            <div
              :class="{
                'underline border-b-2 border-green-seakun-secondary-dark ':
                  activeTab == menu.slug,
              }"
            ></div>
          </div>
        </section>
      </div>
    </header>

    <div class="mt-[26px] p-3 lg:p-0 lg:mt-6 space-y-5 bg-white lg:bg-none">
      <div class="lg:hidden flex justify-between items-center">
        <h3 class="text-sm text-gray-secondary font-medium">
          Lihat Berdasarkan
        </h3>

        <SelectWithCheck :label="{ name: ' Semua' }" :option="options" />
      </div>
      <Card v-for="(data, id) in orderData" :key="id" :data="data" />
    </div>
  </div>
</template>

<script>
import Card from './views/card-order.vue';
import SelectWithCheck from '../../../components/atoms/SelectWithCheck.vue';
import OrderService from '~/services/OrderServices';
import MasterService from '~/services/MasterServices';

export default {
  layout: 'profile',
  components: {
    Card,
    SelectWithCheck,
  },
  data() {
    return {
      OrderService,
      MasterService,
      isOpen: false,
      activeTab: 'Semua',
      menus: [
        {
          name: 'Semua',
          slug: 'Semua',
        },
        {
          name: 'Aktif',
          slug: 'Aktif',
        },
        {
          name: 'Menunggu Pembayaran',
          slug: 'Menunggu Pembayaran',
        },
        {
          name: 'Menunggu Perpanjangan',
          slug: 'Menunggu Perpanjangan',
        },
        {
          name: 'Berhenti Langganan',
          slug: 'Berhenti Langganan',
        },
        {
          name: 'Refund',
          slug: 'Refund',
        },
      ],
      orderData: [
        {
          orderCode: 'ORD23050007',
          isActive: true,
          brand: 'spotify',
          period: 'Rp67.500 / (3 Bulan)',
        },
        {
          orderCode: 'ORD23050007',
          isActive: false,
          brand: 'wattpad',
          period: 'Rp67.500 / (3 Bulan)',
        },
      ],
      options: [
        {
          name: 'Semua',
        },
        {
          name: 'Aktif',
        },
        {
          name: 'Menunggu pembayaran',
        },
        {
          name: 'Menunggu perpanjangan',
        },
        {
          name: 'Berhenti berlangganan',
        },
        {
          name: 'Refund',
        },
      ],
      paramGetOrder: {
        page: 1,
        limit: 5,
        status: '',
      },
      isLoading: true,
      orderList: [],
      orderStatusList: [],
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
    handleTab(slug) {
      this.activeTab = slug;
    },
    async getCustomerOrders() {
      this.isLoading = true;
      const { OrderService, paramGetOrder } = this;
      try {
        const fetchGetOrders = await OrderService.getCustomerOrders(
          paramGetOrder
        );
        if (fetchGetOrders.data) {
          console.log(fetchGetOrders.data);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    async getOrderStatusRef() {
      this.isLoading = true;
      const { MasterService } = this;
      try {
        const fetchGetOrderStatus = await MasterService.getReferentialOrderStatus();
        if (fetchGetOrderStatus.data) {
          console.log(fetchGetOrderStatus.data);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
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
