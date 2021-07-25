<template>
  <div class="relative">
    <transition name="slide-up">
      <div v-if="show" class="payment-list w-full bg-white shadow rounded">
        <div v-if="bankListCustomer.length > 0">
          <li class="font-bold pb-2">Pilih Bank / Ewallet</li>
          <ul>
            <li
              class="p-2 cursor-pointer"
              v-for="(bank, index) in bankListCustomer"
              :key="index"
              @click="$emit('onClickItem', bank)"
            >
              {{ bank.bankName }}
            </li>
          </ul>
        </div>
        <div v-if="bankListSeakun.length > 0">
          <li class="font-bold pb-2">Pilih Bank / Ewallet</li>
          <ul>
            <li
              class="p-2 cursor-pointer"
              v-for="(bank, index) in bankListSeakun"
              :key="index"
              @click="$emit('onClickItem', bank)"
            >
              {{ bank.bankName }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PopupPaymentList',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    bankListCustomer: {
      type: Array,
      default: () => [],
    },
    bankListSeakun: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-list {
  position: absolute;
  top: 0;
  z-index: 20;
  padding: 20px;
  max-height: 300px;
  overflow-y: auto;
  list-style: none; /* Remove list bullets */
  ul {
    padding-left: 24px;
  }
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-leave-active {
  transition: all 0.5s ease;
  transform: translateY(-20vh);
  opacity: 0;
}
.slide-up-enter,
.slide-fade-leave-to {
  transform: translateY(-20vh);
  opacity: 0;
}
</style>
