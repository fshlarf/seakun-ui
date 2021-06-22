<template>
  <Modal :is-show="showModal" size="1/3" @onClose="closeModal">
    <div>
      <h1 class="tn:text-sm md:text-lg lg:text-xl font-bold">Cara Pemesanan</h1>
      <ol class="tn:text-xs md:text-base">
        <li>1. Pesan layanan</li>
        <li>2. Bayar DP</li>
        <li>3. Menunggu full-group dan pelunasan</li>
        <li>
          4. Qurban diproses
          <ul class="pl-3">
            <li>a. Ada livestreaming pemotongan Qurban</li>
            <li>
              b. Setelah Qurban diproses secara online, bagian potongan qurban
              akan dikirim kepada alamat yang tertera pada informasi kalian.
            </li>
          </ul>
        </li>
        <li>5. Bagian Qurban dikirim</li>
        <li>6. Bagian Qurban diterima dan Selesai</li>
      </ol>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style></style>
