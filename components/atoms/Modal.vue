<template>
  <div>
    <div
      v-if="isShow"
      tabindex="0"
      class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
    >
      <div class="z-50 relative p-3 mx-auto my-0 max-w-xl">
        <div
          class="bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden"
        >
          <button
            class="fill-current h-6 w-6 absolute right-0 top-0 m-6 font-3xl font-bold primary focus:outline-none"
            @click="onClose"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="w-6 h-6 primary"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="px-6 py-3 text-xl border-b font-bold">
            <slot name="header"></slot>
          </div>
          <div class="p-6 flex-grow">
            <slot />
          </div>
          <div class="px-6 py-3 border-t">
            <slot name="footer"></slot>
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
  name: 'Modal',
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>

<style></style>
