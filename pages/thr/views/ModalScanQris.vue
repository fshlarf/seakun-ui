<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-1/3">
    <template v-slot:header>
      <div class="font-bold text-lg">Scan QRIS untuk Kirim THR</div>
    </template>
    <div>
      <img class="mx-auto" src="/images/journey/qr-code.png" alt="qris" />
      <p class="tn:mt-6 font-bold">Cara Kirim:</p>
      <ul
        class="font-base list-disc tn:pl-4 tn:mt-1 space-y-1 tn:text-sm md:text-base"
      >
        <li>
          (1) Scan QRIS di atas. (2) Masukkan nominal yang ingin ditransfer. (3)
          Masukkan pin e-wallet/m-banking. (4) Selesai.
        </li>
        <li>
          Jika menggunakan smartphone, (1) Ambil tangkapan layar (screenshot)
          pada kode QRIS di atas. (2) Buka aplikasi e-wallet atau m-banking. (3)
          Pilih Scan QR. (4) Pilih upload image dari galeri. (5) Pilih gambar
          tangkapan layar QRIS yang sudah tersimpan. (6) Masukkan nominal yang
          ingin di transfer. (7) Masukkan pin e-wallet/m-banking. (8) Selesai.
        </li>
      </ul>
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
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
    async downloadQrisImage() {
      const imageSrc = '/images/journey/qr-code.png';
      const image = await fetch(imageSrc);
      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);

      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'Seakun-qr-code';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style></style>
