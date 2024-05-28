<template>
  <div :class="className">
    <label
      v-if="label"
      class="block text-gray-700 text-sm mb-2"
      :class="classLabel"
      :for="name"
    >
      {{ label }}
    </label>
    <div class="form-content relative z-0">
      <input
        class="relative z-0 appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :class="({ 'border-danger': error.isError }, classInput)"
        type="text"
        v-model="currentValue"
        @input="handleInput"
        :placeholder="placeholder"
      />
      <div class="icon-left">
        <slot name="iconLeft"> </slot>
      </div>
    </div>
    <p
      v-if="error.isError"
      class="text-red-500 text-xs pt-1 italic"
      :class="classError"
    >
      {{ error.message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classError: {
      type: String,
      default: '',
    },
    classInput: {
      type: String | Array,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    error: {
      type: Object,
      default: () => ({
        isError: false,
        message: '',
      }),
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    className: {
      type: String,
      default: '',
    },
    classLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentValue: '',
    };
  },
  watch: {
    value: {
      handler(after) {
        this.currentValue = this.formatRupiah(after);
      },
      immediate: true,
    },
  },
  methods: {
    formatRupiah(value) {
      if (value) {
        return (
          'Rp ' +
          (value + '').replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        );
      }
    },
    handleInput() {
      this.currentValue = this.formatRupiah(this.currentValue);
      this.$emit('input', (this.currentValue + '').replace(/[^0-9]/g, ''));
    },
  },
};
</script>

<style lang="scss" scoped>
.form-content {
  svg {
    width: 16px;
    height: auto;
    fill: #a0a3bd;
  }
  .icon-left {
    position: absolute;
    right: 0.75rem;
    top: 1.25rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
