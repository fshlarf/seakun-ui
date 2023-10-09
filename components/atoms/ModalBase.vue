<template>
  <div>
    <div
      v-if="isShow"
      tabindex="0"
      class="z-40 left-0 top-0 bottom-0 right-0 w-full h-full fixed"
    >
      <div class="z-50 relative mx-auto my-0 w-full">
        <div
          class="modal-popup bg-white shadow-lg flex flex-col !min-w-[340px]"
        >
          <div
            class="h-[28px] w-[28px] absolute -right-[10px] -top-[10px] flex items-center justify-center rounded-full bg-black/60"
            role="button"
            @click="onClose"
          >
            <img class="" src="/images/icons/atoms/close.svg" alt="close" />
          </div>
          <div
            class="scroll-bar tn:py-0 overflow-y-auto overflow-x-visible overscroll-y-auto"
          >
            <slot />
          </div>
        </div>
      </div>
      <div
        class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
        @click="onClose"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSecondary',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      if (!this.isLoading) this.$emit('onClose');
    },
  },
};
</script>

<style>
.modal-popup overflow-visible {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 95%;
  max-width: 95%;
  min-width: 20rem;
}

.scroll-bar-hidden::-webkit-scrollbar {
  display: none;
}
.scroll-bar-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scroll-bar::-webkit-scrollbar {
  width: 5px;
}
.scroll-bar::-webkit-scrollbar-thumb {
  background: #86d0c1;
  border-radius: 2px;
  margin-right: 5px;
}
.scroll-bar {
  scrollbar-width: thin !important; /* Firefox */
  scrollbar-color: #86d0c1 #fff !important; /* Firefox */
  border-radius: 2px;
}
</style>
