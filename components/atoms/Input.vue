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
        :class="{ 'border-danger': error.isError }"
        :type="type"
        :name="name"
        v-bind="$attrs"
        v-on="$listeners"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('update', $event.target.value)"
      />
      <div class="icon-left">
        <slot name="iconLeft"> </slot>
      </div>
    </div>

    <p v-if="error.isError" class="text-red-500 text-xs pt-1 italic">
      {{ error.message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String | Number,
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
  model: {
    prop: 'value',
    event: 'update',
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
}
</style>
