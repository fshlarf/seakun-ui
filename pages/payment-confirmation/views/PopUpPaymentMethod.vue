<template>
  <div class="relative">
    <transition name="slide-up">
      <div v-if="show" class="payment-list w-full bg-white shadow rounded">
        <li class="font-bold pb-2">Transfer Dengan Bank</li>
        <ul>
          <li
            class="p-2 cursor-pointer"
            v-for="(bank, index) in dataList.transferBank"
            :key="index"
            @click="$emit('onClickItem', bank)"
          >
            {{ bank.bankName }}
          </li>
        </ul>
        <li class="font-bold pb-2">Ewallet</li>
        <ul>
          <li
            class="p-2 cursor-pointer"
            v-for="(bank, index) in dataList.ewallet"
            :key="index"
            @click="$emit('onClickItem', bank)"
          >
            {{ bank.bankName }}
          </li>
        </ul>
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
    dataList: {
      type: Object,
      default: () => ({
        transferBank: [],
        ewallet: [],
      }),
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
  max-height: 200px;
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
