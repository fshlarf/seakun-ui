<template>
  <button
    type="button"
    :class="classBtn"
    v-bind="$props"
    @click="handleOnClick"
  >
    {{ label }}
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
  },
  data() {
    return {
      classBtn: `btn btn-${this.variant} ${
        this.size ? 'btn-' + this.size : ''
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

<style>
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
</style>
