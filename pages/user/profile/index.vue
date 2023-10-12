<template>
  <div>
    <template v-if="!isEdit">
      <header class="wrapper-header w-full relative mt-6 md:mt-0 rounded-xl">
        <img
          src="/images/profile-page/mask-header-transaction.png"
          alt="background"
          class="hidden lg:block absolute top-0 right-0"
        />
        <img
          src="/images/profile-page/mask-header-transaction-mobile.png"
          alt="background"
          class="absolute top-0 right-0 lg:hidden"
        />
        <div
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
                <p class="text-xs">Sebesti</p>
              </div>
            </div>
          </section>
        </div>
      </header>
      <div class="mt-6">
        <CardProfile @clickEditButton="isEdit = true" />
      </div>
    </template>
    <template v-else>
      <EditProfile @clickArrow="isEdit = false" />
    </template>
  </div>
</template>

<script>
import CardProfile from './views/card-profile.vue';
import EditProfile from './views/edit-profile.vue';
export default {
  layout: 'profile',
  components: {
    CardProfile,
    EditProfile,
  },
  data() {
    return {
      isEdit: false,
    };
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
