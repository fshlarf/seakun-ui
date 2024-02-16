<template>
  <div>
    <h3 class="text-base font-bold text-green-seakun-secondary-dark">
      Detail Pesanan
    </h3>
    <div class="border border-[#00BA884D] mt-3 rounded-[10px]">
      <header
        class="bg-no-repeat bg-contain bg-right rounded-t-[10px] bg-green-seakun-secondary-dark/10 text-green-seakun-secondary-dark font-bold flex items-center justify-between p-5"
        style="background-image: url(/images/background/mask-card-order.png)"
      >
        <h3>{{ orderDetails.orderCode }}</h3>
        <div
          class="min-w-[91px] min-h-[33px] flex items-center justify-center border-[1px] rounded-[6px] bg-white border-green-seakun-secondary-dark"
        >
          <p class="text-sm">
            {{ orderDetails.isActive ? 'Aktif' : 'Tidak Aktif' }}
          </p>
        </div>
      </header>
      <div
        class="text-green-seakun-secondary-dark px-5 pt-[10px] flex justify-between"
      >
        <div>
          <section class="flex items-center gap-2 !font-medium">
            <img
              src="/images/icons/atoms/email-green.svg"
              alt="email"
              class="w-5 h-5"
            />
            <p class="text-sm">{{ orderDetails.email }}</p>
          </section>
          <section class="flex items-center gap-2 mt-[6px] !font-medium">
            <img
              src="/images/icons/atoms/phone-green.svg"
              alt="phone"
              class="w-5 h-5"
            />
            <p class="text-sm">{{ orderDetails.phone }}</p>
          </section>
        </div>
        <div class="bg-center px-1 pt-1 bg-cover h-[52px] bg-mask-group">
          <div>
            <p
              class="text-xs leading-[128%] tracking-tighter min-w-[92px] text-center"
            >
              Group
            </p>
            <h4
              class="text-[20px] !font-bold leading-[128%] tracking-tighter pt-1 text-center"
            >
              {{ orderDetails.group }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderDetails: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-mask-group {
  background-image: url('/images/background/mask-group-card-order.png');
}
</style>
