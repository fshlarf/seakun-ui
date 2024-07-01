<template>
  <div
    :id="`select-option-${dataList[dataList.length - 1].text}-${
      dataList[dataList.length - 1].value
    }`"
    class="relative z-10"
  >
    <button
      class="button-dropdown flex justify-between items-center w-full tn:border md:border-2 tn:!rounded-lg text-[#A0A3BD] border-[#A0A3BD] tn:py-3 tn:px-4 bg-white focus:outline-none"
      id="menu-button"
      :disabled="disabled"
      aria-expanded="true"
      aria-haspopup="true"
      @click="click"
    >
      <span v-if="btnText">{{ btnText }}</span
      ><span v-else>-</span>
      <span v-if="!isShow">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="w-3 h-3 float-right"
          fill="#A0A3BD"
        >
          <path
            d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0
        c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878
        l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"
          />
        </svg>
      </span>
      <span v-else>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512; transform: rotate(180deg)"
          xml:space="preserve"
          class="w-3 h-3 float-right"
          fill="#A0A3BD"
        >
          <path
            d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0
        c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878
        l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"
          />
        </svg>
      </span>
    </button>

    <div class="relative z-0">
      <transition name="slide-up">
        <div
          v-if="isShow"
          class="item-list w-full bg-white tn:shadow-2xl tn:rounded"
        >
          <li
            v-for="(dataItem, id) in dataList"
            :key="id"
            @click="$emit('onClikcItem', dataItem)"
            class="tn:px-4 tn:py-3 cursor-pointer text-[#A0A3BD] hover:bg-[#e9faf5]"
            :class="{ 'bg-[#e9faf5]': btnText === dataItem.text }"
          >
            {{ dataItem.text }}
          </li>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    document.addEventListener('click', this.checkOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.checkOutsideClick);
  },
  methods: {
    click() {
      this.$emit('click');
    },
    checkOutsideClick(event) {
      const box = document.getElementById(
        `select-option-${this.dataList[this.dataList.length - 1].text}-${
          this.dataList[this.dataList.length - 1].value
        }`
      );

      if (!box.contains(event.target)) {
        this.$emit('hideDropDown');
      }
    },
  },
};
</script>

<style lang="scss">
.button-dropdown {
  :disabled {
    cursor: no-drop;
    background: #efefef !important;
  }
}
.item-list {
  position: absolute;
  top: 0;
  z-index: 20 !important;
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
