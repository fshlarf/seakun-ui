<template>
  <div class="">
    <div class="tn:mb-[11px] md:mb-2">
      <p class="tn:text-base">{{ label }}</p>
    </div>
    <!-- <label v-if="label" class="block text-gray-700 text-sm mb-2" :for="name">
        {{label}}
      </label> -->

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
      class="label-upload w-full py-3 px-[13px] text-center text-[#A0A3BD]"
      :for="name"
      ><UploadIcon />
      <span class="tn:text-xs">Unggah bukti pembayaran</span>
    </label>

    <p v-if="error.isError" class="text-red-500 text-xs italic">
      {{ error.message }}
    </p>
  </div>
</template>

<script>
import UploadIcon from '~/assets/images/icon/upload-new.svg?inline';

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
  border: 1px #a0a3bd dashed;

  svg {
    fill: #a0a3bd;
    display: inline-block;
    height: auto;
    margin-right: 12px;
  }
}
</style>
