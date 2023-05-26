<template>
  <Modal :is-show="showModal" size="" @onClose="closeModal">
    <div>
      <h1 class="tn:text-sm md:text-lg lg:text-xl font-bold">Cara Pemesanan</h1>
      <ol class="tn:text-xs md:text-base space-y-1 my-2">
        <li class="flex gap-1">
          <span>1.</span>
          <span
            >Pesan layanan dengan cara melakukan pendaftaran pada form yang
            sudah disediakan.</span
          >
        </li>
        <li class="flex gap-1">
          <span>2.</span>
          <span
            >Pembayaran down payment (uang muka). Kamu bisa juga membayar full
            langsung dengan menekan tombol bayar full pada halaman
            pembayaran.</span
          >
        </li>
        <li class="flex gap-1">
          <span>3.</span>
          <span
            >Menunggu grup penuh. Bila grup sudah penuh, kamu akan mendapat
            pemberitahuan dari whatsapp oleh Sequrban (Seakun) dan diminta untuk
            melakukan pelunasan sisa pembayaran.</span
          >
        </li>
        <li class="flex gap-1">
          <span>4.</span>
          <span
            >Qurban diproses. Ada beberapa detail untuk prosesnya yaitu sebagai
            berikut.</span
          >
        </li>
        <!-- <ul class="tn:pl-2 md:pl-3 lg:pl-4"> -->
        <li class="flex gap-1 ml-3">
          <span>a.</span>
          <span
            >Kamu akan dikumpulkan bersama teman patungan qurban (7 orang
            termasuk kamu) ke grup whatsapp bersama perwakilan Sequrban dan
            Wadiqibas.</span
          >
        </li>
        <li class="flex gap-1 ml-3">
          <span>b.</span>
          <span
            >Informasi tentang hewan qurban dan waktu penyembelihan akan
            diberikan di dalam grup whatsapp.</span
          >
        </li>
        <li class="flex gap-1 ml-3">
          <span>c.</span>
          <span
            >Penayangan (streaming) proses penyembelihan akan ditayangkan oleh
            Wadiqibas lewat media streaming online (zoom atau google
            meet).</span
          >
        </li>
        <li class="flex gap-1 ml-3">
          <span>d.</span>
          <span
            >Pencacahan, pengemasan daging akan dilakukan oleh tim Wadiqibas dan
            akan didistribusikan sesuai dengan wilayah distribusi yang
            ditetapkan.</span
          >
        </li>
        <li class="flex gap-1 ml-3">
          <span>e.</span>
          <span
            >Dokumentasi lengkap untuk proses pendistribusian daging qurban akan
            dilengkapi. Link penyimpanan dokumentasi akan dikirim di grup
            whatsapp.</span
          >
        </li>
        <li class="flex gap-1 ml-3">
          <span>f.</span>
          <span
            >Setelah qurban diproses secara online, bagian potongan qurban akan
            dikirim ke alamat yang telah diinput pada proses pendaftaran.</span
          >
        </li>
        <!-- </ul> -->

        <li class="flex gap-1">
          <span>5.</span>
          <span>Bagian qurban diterima.</span>
        </li>
        <li class="flex gap-1">
          <span>6.</span>
          <span>Selesai</span>
        </li>
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
