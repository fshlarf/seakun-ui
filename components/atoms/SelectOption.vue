<template>
  <div>
    <label :for="name">{{ label }}</label>
    <div class="form-content relative">
      <select
        v-model="currentValue"
        class="appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option disabled :value="null">
          {{ placeholder }}
        </option>
        <slot name="optionList"> </slot>
        <!-- <option
          v-for="(data, index) in dataList"
          :key="index"
          :value="`data.` + value"
          :disabled="disabled"
          :selected="selected"
        >
          {{ `data.` + content }}
        </option> -->
      </select>
      <div class="icon-right">
        <slot name="iconRight"> </slot>
      </div>
    </div>
    <p v-if="error.isError" class="text-red-500 text-xs italic">
      {{ error.message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    content: {
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
    initValue: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    dataList: {
      type: Array,
      default: () => [
        {
          value: null,
          text: 'No record found',
        },
      ],
    },
  },
  data: () => ({
    currentValue: '',
    newValue: '',
    newContent: '',
  }),
  watch: {
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('onSelectOption', val);
    },
    initValue(val) {
      this.currentValue = val;
    },
    value(val) {
      this.newValue = `data.` + val;
    },
    content(val) {
      this.newContent = `data.` + val;
    },
  },
  created() {
    this.currentValue = this.initValue;
    this.newValue = this.value ? `data.` + this.value : '';
    this.newContent = this.content ? `data.` + this.content : '';
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
  .icon-right {
    position: absolute;
    right: 0.75rem;
    top: 1.25rem;
  }
}
</style>
