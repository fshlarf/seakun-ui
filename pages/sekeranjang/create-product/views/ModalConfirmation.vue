<template>
  <Modal :is-show="showModal" @onClose="$emit('onClose')" size="xl:w-1/3">
    <h1 class="tn:text-[28px] md:text-[32px] font-bold text-center">
      Konfirmasi Pengajuanmu
    </h1>
    <p class="text-center tn:mt-4">
      Silahkan cek lagi sebelum melakukan pengajuan.
      <br class="tn:hidden md:block" />
      Pengajuanmu akan direview oleh admin.
    </p>
    <div class="grid tn:grid-cols-1 md:grid-cols-2 tn:gap-2 md:gap-4 tn:mt-6">
      <Button
        variant="secondary-transparent"
        label="Cek ulang"
        class="w-full tn:py-4 font-bold tn:order-2 md:order-1"
        :disabled="isLoading"
        @click="$emit('onRecheck')"
      />
      <Button
        variant="primary"
        label="Konfirmasi"
        class="w-full tn:py-4 font-bold tn:order-1 md:order-2"
        :is-loading="isLoading"
        @click="$emit('clickSubmit')"
      />
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Modal,
    Button,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
