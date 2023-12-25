<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-1/3">
    <template v-slot:header>
      <div class="font-bold text-lg text-red-500">Oops Terjadi Kesalahan!</div>
    </template>
    <div class="">
      <WarningInfo
        text="Proses pemesanan memakan waktu lebih lama dari yang seharusnya."
      />
    </div>
    <div class="tn:mt-4">
      <p class="tn:text-sm md:text-base">
        Tenang, pesanan kamu tetap bisa di proses. Yuk klik tombol LiveChat
        Seakun (pojok kanan bawah) untuk menghubungi admin agar pesanan kamu
        dibantu langsung oleh admin.
      </p>
    </div>
    <!-- <a
      href="https://api.whatsapp.com/send?phone=6282124852232"
      target="_blank"
      rel="noopener noreferrer"
      class="tn:mt-4 w-full"
    >
      <Button
        variant="primary"
        label="Hubungi Admin"
        class="w-full tn:mt-4 py-3"
        :is-loading="isLoading"
      />
    </a> -->
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
  computed: {
    message() {
      return `Halo admin, saya terkendala dalam memesan melalui web seakun. Mohon dibantu ya. \nProvider: ${this.dataOrder.provider} \nPaket: ${this.dataOrder.variant} \nNama: ${this.dataOrder.fullName} \nEmail: ${this.dataOrder.email} \nNo whatsapp: ${this.dataOrder.phoneNumber}`;
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
