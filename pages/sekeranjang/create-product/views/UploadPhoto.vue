<template>
  <div class="mb-4">
    <div>
      <p>{{ label }}</p>
    </div>

    <input
      class=""
      :class="{ 'border border-red-500': error.isError }"
      type="file"
      :id="name"
      accept="image/png, image/jpg, image/jpeg,.pdf"
      @change="getImage"
      hidden
    />
    <label
      class="label-upload w-full py-3 px-4 text-center text-gray-500"
      :for="name"
    >
      <span><UploadIcon /></span> Bukti Pembayaran
    </label>

    <p v-if="error.isError" class="text-red-500 text-xs italic">
      {{ error.message }}
    </p>
  </div>
</template>

<script>
import UploadIcon from '~/assets/images/icon/upload.svg?inline';

export default {
  name: 'Input',
  components: {
    UploadIcon,
  },
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
  },
  methods: {
    getImage(event) {
      const imageFiles = event.target.files;
      this.$emit('get-image', imageFiles[0]);
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
.label-upload {
  display: inline-block;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  border: 1px #a0a3bd dashed;

  svg {
    fill: #a0a3bd;
    display: inline-block;
    width: 18px;
    height: auto;
    margin-right: 12px;
  }
}
</style>
