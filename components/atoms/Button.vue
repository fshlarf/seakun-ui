<template>
  <button
    type="button"
    :class="classBtn"
    v-bind="$props"
    @click="handleOnClick"
    :disabled="isLoading || disabled"
  >
    <div v-if="isLoading">
      <div>
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        Loading...
      </div>
    </div>
    <div v-else-if="label">
      {{ label }}
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      default: '',
    },
    addClass: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classBtn: `btn btn-${this.variant} ${
        this.size ? 'btn-' + this.size : ''
      } ${this.shape === 'pill' ? '!rounded-full' : ''} ${
        this.addClass ? this.addClass : ''
      }`,
    };
  },
  methods: {
    handleOnClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="scss" scoped>
button:disabled {
  border: 1px solid #a9e0d5 !important;
  background-color: #a9e0d5 !important;
  color: #ffffff !important;
}
button:hover:disabled {
  border: 1px solid #a9e0d5 !important;
  background-color: #a9e0d5 !important;
  color: #ffffff !important;
}
.fa {
  margin-left: -12px;
  margin-right: 8px;
}
</style>
