<template>
  <div class="relative !z-10">
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
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.button-dropdown {
  :disabled {
    cursor: no-drop;
    background: #efefef !important;
  }
}
</style>
