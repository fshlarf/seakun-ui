<template>
  <Modal :is-show="showModal">
    <template v-slot:header>
      <div class="font-bold text-lg">Cek Data Pesanan</div>
    </template>
    <div class="-mt-3">
      <WarningInfo
        text="Periksa kembali data kamu sebelum melanjutkan ke pembayaran"
      />
    </div>
    <div class="mt-3 md:px-3">
      <h1 class="text-sm">Nama pemesan</h1>
      <p class="font-bold">{{ dataOrder.fullname }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Nomor telepon whatsapp</h1>
      <p class="font-bold">0{{ dataOrder.whatsapp }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Email</h1>
      <p class="font-bold">{{ dataOrder.email }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Nama lengkap yang berqurban</h1>
      <p class="font-bold">{{ dataOrder.qurban_fullname }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Nama ayah kandung yang berqurban</h1>
      <p class="font-bold">{{ dataOrder.qurban_father_name }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Alamat pengiriman daging qurban</h1>
      <p class="font-bold">{{ dataOrder.address }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Kota / Kecamatan</h1>
      <p class="font-bold">{{ dataOrder.city }}</p>
    </div>
    <div class="mt-2 md:px-3">
      <h1 class="text-sm">Kode pos</h1>
      <p class="font-bold">{{ dataOrder.postal_code }}</p>
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
      @click="showModal === false"
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
};
</script>

<style></style>
