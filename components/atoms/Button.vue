<template>
  <button
    type="button"
    :class="classBtn"
    v-bind="$props"
    @click="handleOnClick"
  >
    <div v-if="isLoading">
      <div>
        <i class="fa fa-circle-o-notch fa-spin"></i>
        Loading...
      </div>
    </div>
    <div v-else>
      {{ label }}
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
