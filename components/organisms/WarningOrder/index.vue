<template>
  <div
    :class="[{ 'warning-order--show': isShowWarning }]"
    class="cursor-pointer warning-order h-auto lg:w-6/12 md:w-6/12 sm:9/12 w-full px-4 mx-auto flex flex-col space-y-4 items-center justify-center rounded"
  >
    <div
      class="flex flex-row w-full justify-between items-center py-3 px-4 rounded"
    >
      <span class="warning-order-icon" @click="onClickDetailOrder">
        <AlertIcon />
      </span>
      <div
        class="warning-order-content mx-4 flex-1 text-black"
        @click="onClickDetailOrder"
      >
        <div
          class="alert-title font-semibold text-sm lg:text-lg md:text-lg sm:text-lg"
        >
          Proses berlangganan {{ provider }} belum selesai
        </div>
        <div
          class="warning-order-description text-xs lg:text-sm md:text-sm sm:text-sm"
        >
          Klik Untuk Detail
        </div>
      </div>
      <span
        class="warning-order-close cursor-pointer font-bold text-md"
        @click="onCloseWarning"
      >
        <CloseIcon />
      </span>
    </div>
  </div>
</template>

<script>
import AlertIcon from '~/assets/images/icon/alert.svg?inline';
import CloseIcon from '~/assets/images/icon/close.svg?inline';
import moment from 'moment';
export default {
  name: 'OrderWarning',
  components: {
    AlertIcon,
    CloseIcon,
  },
  mounted() {
    this.showWarning();
  },
  data() {
    return {
      isShowWarning: false,
      provider: 'Netflix',
      moment,
    };
  },
  methods: {
    showWarning() {
      const checkIsStillOrderAndData = this.checkIsStillHaveOrder();
      if (checkIsStillOrderAndData) {
        this.provider = checkIsStillOrderAndData.provider.name;
        setTimeout(
          function () {
            this.isShowWarning = true;
          }.bind(this),
          1000
        );
      }
    },
    onCloseWarning() {
      this.isShowWarning = false;
      const checkIsStillOrderAndData = this.checkIsStillHaveOrder();
      if (checkIsStillOrderAndData) {
        this.provider = checkIsStillOrderAndData.provider.name;
        setTimeout(
          function () {
            this.isShowWarning = true;
          }.bind(this),
          60000
        );
      }
    },
    checkIsStillHaveOrder() {
      const getDataOrder = localStorage['swo']
        ? JSON.parse(localStorage['swo'])
        : null;
      if (getDataOrder) {
        const dateOrder = getDataOrder.createdAt
          ? moment.unix(getDataOrder.createdAt)
          : null;
        if (dateOrder) {
          const diff = moment(moment()).diff(
            moment(dateOrder),
            'minutes',
            true
          );
          if (diff <= 5) {
            return getDataOrder;
          } else {
            localStorage.removeItem('swo');
            return false;
          }
        }
      }
      return false;
    },
    onClickDetailOrder(evt) {
      const getDataOrder = localStorage.getItem('swo')
        ? JSON.parse(localStorage['swo'])
        : {};
      this.$router.push({
        path: 'payment',
        query: {
          type: 1,
          order_uid: getDataOrder.orderUid,
          customer_uid: getDataOrder.customerUid,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.warning-order {
  position: fixed;
  bottom: -10em;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.5s linear;
  div {
    background-color: #ffc801;
  }
  &--show {
    bottom: 6em !important;
  }
  &-icon {
    align-self: self-start;
    margin-top: 6px;
    svg {
      width: 18px;
      height: auto;
      fill: black;
    }
  }
  &-close {
    svg {
      width: 12px;
      height: auto;
      fill: black;
    }
  }
}
</style>
