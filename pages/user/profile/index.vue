<template>
  <div>
    <template v-if="!isEdit">
      <header
        class="wrapper-header w-full relative mt-6 md:mt-0 rounded-xl z-0"
      >
        <img
          src="/images/profile-page/mask-header-transaction.png"
          alt="background"
          class="hidden lg:block absolute top-0 right-0 z-10"
        />
        <img
          src="/images/profile-page/mask-header-transaction-mobile.png"
          alt="background"
          class="absolute top-0 right-0 lg:hidden"
        />
        <!-- <div
          class="border-[1px] rounded-xl lg:border-none grid grid-cols-2 sm:grid-cols-4 gap-2 lg:flex items-center h-full w-full pr-10 sm:pr-0 p-4 lg:p-6 gap-y-5 lg:gap-14 xl:gap-20 lg:text-sm text-xs whitespace-nowrap"
        >
          <section class="text-green-seakun-secondary-dark">
            <h3>Berlangganan Sejak</h3>
            <div class="flex items-center gap-2 font-bold mt-2">
              <div class="p-1 bg-[#00BA8812] rounded-[4px]">
                <img
                  src="/images/icons/profile-user/period.svg"
                  alt="period"
                  class="w-5 h-5"
                />
              </div>
              <p>2022</p>
            </div>
          </section>
          <section
            class="text-green-seakun-secondary-dark justify-self-end sm:justify-self-auto"
          >
            <h3>Layanan Seakun</h3>
            <div class="flex items-center gap-2 font-bold mt-2">
              <div class="p-1 bg-[#00BA8812] rounded-[4px]">
                <img
                  src="/images/icons/profile-user/product.svg"
                  alt="product"
                  class="w-5 h-5"
                />
              </div>
              <p>4 Dipakai</p>
            </div>
          </section>
          <section class="text-green-seakun-secondary-dark">
            <h3>Sudah Hemat</h3>
            <div class="flex items-center gap-2 font-bold mt-2">
              <div class="p-1 bg-[#00BA8812] rounded-[4px]">
                <img
                  src="/images/icons/profile-user/voucher.svg"
                  alt="voucher"
                  class="w-5 h-5"
                />
              </div>
              <p>Rp.345.000</p>
            </div>
          </section>
          <section
            class="text-green-seakun-secondary-dark justify-self-end sm:justify-self-auto"
          >
            <h3>Pencapaian User</h3>
            <div class="flex items-center gap-2 font-bold mt-2">
              <div
                class="py-1 px-3 bg-[#00BA8812] flex gap-1 items-center rounded-[20px] min-w-[97px] min-h-[30px]"
              >
                <img
                  src="/images/icons/profile-user/star.svg"
                  alt="star"
                  class="w-[22px] h-[21px]"
                />
                <p class="text-xs">Sebestie</p>
              </div>
            </div>
          </section>
        </div> -->
      </header>
      <div class="">
        <CardProfile
          :is-loading="isLoading"
          :profile="customerData"
          @clickEditButton="isEdit = true"
        />
      </div>
    </template>
    <template v-else>
      <EditProfile
        :profile="customerData"
        :is-loading="isLoading"
        @clickArrow="isEdit = false"
        @onClickCancel="isEdit = false"
        @onUpdateProfile="updateProfile"
      />
    </template>
  </div>
</template>

<script>
import CardProfile from './views/card-profile.vue';
import EditProfile from './views/edit-profile.vue';
import CustomerService from '~/services/CustomerServices';
import { setAvatar } from '~/helpers/tokenAuth';
import { mapActions } from 'vuex';

export default {
  layout: 'profile',
  middleware: 'authorize',
  components: {
    CardProfile,
    EditProfile,
  },
  data() {
    return {
      CustomerService,
      isEdit: false,
      customerData: {},
      isLoading: true,
    };
  },
  mounted() {
    this.CustomerService = new CustomerService(this);
    this.getCustomerDetail();
  },
  methods: {
    ...mapActions({
      setUserAvatar: 'setUserAvatar',
    }),
    async getCustomerDetail() {
      this.isLoading = true;
      const { CustomerService } = this;
      try {
        const fetchCustomer = await CustomerService.getCustomerByUid();
        if (fetchCustomer.data) {
          this.customerData = fetchCustomer.data.data;
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    async updateProfile(payload) {
      const { CustomerService } = this;
      this.isLoading = true;
      try {
        const fetchUpdateProfile = await CustomerService.updateCustomer(
          payload
        );
        if (fetchUpdateProfile.data) {
          this.$alert.show({
            status: 'success',
            message: 'Data profil berhasil diedit',
          });
          await this.getCustomerDetail();
          setAvatar(this, this.customerData.avatar);
          this.setUserAvatar(this.customerData.avatar);
          this.isEdit = false;
        }
      } catch (error) {
        console.log(error);
        this.$alert.show({
          status: 'error',
          message:
            'Gagal mengedit data profil. Coba beberapa saat lagi atau hubungi admin',
        });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .wrapper-header {
    background-image: linear-gradient(180deg, #d8fdf3 35%, #fff 65%);
  }
}
@media (min-width: 1024px) {
  .wrapper-header {
    background-image: linear-gradient(180deg, #d8fdf3, #fff);
  }
}
</style>
