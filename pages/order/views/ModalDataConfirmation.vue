<template>
  <Modal :is-show="showModal" @onClose="onClose">
    <template v-slot:header>
      <div class="font-bold text-lg">Cek Data Pesanan</div>
    </template>
    <div class="">
      <WarningInfo
        text="Periksa kembali data kamu sebelum melanjutkan ke pembayaran. Kesalahan pengisian data membuat order tidak bisa diproses."
      />
    </div>
    <div class="mt-3 md:px-3">
      <h1 class="text-sm">Nama lengkap</h1>
      <p class="font-bold">{{ dataOrder.name }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Email</h1>
      <p class="font-bold">{{ dataOrder.email }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Nomor whatsapp</h1>
      <p class="font-bold">{{ dataOrder.phoneNumber }}</p>
    </div>
    <div class="h-1 w-full bg-gray-300 my-2"></div>
    <Button
      variant="primary"
      label="Daftar"
      class="w-full mt-2 py-2"
      :is-loading="isLoading"
      @click="$emit('clickSubmit')"
    />
    <Button
      variant="secondary"
      label="Kembali"
      class="w-full mt-2"
      @click="onClose"
    />
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import Button from '~/components/atoms/Button.vue';
import WarningInfo from '~/components/mollecules/WarningInfo.vue';
export default {
  components: {
    Modal,
    Button,
    WarningInfo,
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
    dataOrder: {
      type: Object,
      default: {},
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>

<style></style>
