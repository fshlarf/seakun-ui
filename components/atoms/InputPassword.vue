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
        class="relative z-0 appearance-none border rounded-lg w-full py-3 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
        :class="{ 'border-danger': error.isError }"
        :type="isShow ? 'text' : 'password'"
        :name="name"
        v-bind="$attrs"
        v-on="$listeners"
        :placeholder="placeholder"
        @input="$emit('update', $event.target.value)"
        v-model="password"
      />
      <!-- <input
        v-else
        class="relative z-0 appearance-none border rounded-lg w-full py-3 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
        :class="{ 'border-danger': error.isError }"
        type="password"
        :name="name"
        v-bind="$attrs"
        v-on="$listeners"
        :placeholder="placeholder"
        v-model="password"
        @input="$emit('update', $event.target.value)"
      /> -->
      <div
        class="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        @click="isShow = !isShow"
      >
        <img
          :src="[
            isShow
              ? '/images/icons/atoms/eye-close-up.svg'
              : '/images/icons/atoms/eye-slash.svg',
          ]"
          alt="hide"
          class="w-6 h-6"
        />
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
  data() {
    return {
      isShow: false,
      password: null,
    };
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
}
</style>
