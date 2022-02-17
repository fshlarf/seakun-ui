<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-2/6">
    <template v-slot:header>
      <div class="font-bold text-lg">Ubah Durasi Berlangganan</div>
    </template>
    <div class="flex mb-8">
      <img src="/images/netflix.png" alt="image not found" class="w-14" />
      <p class="text-base font-bold ml-2">ORD65262</p>
    </div>
    <div
      v-for="(item, index) in durationData"
      :key="index"
      v-bind:style="[
        item ? { background: '#EBFCFF', border: '1.5px solid #8DCABE' } : {border: '1.5px solid #ededed'},
      ]"
      class="border-2 rounded-xl py-3 px-6 mb-2"
    >
      <p class="text-lg font-normal">1 Bulan (Rp53.000)</p>
    </div>
  </Modal>
</template>
<script>
import Modal from '~/components/atoms/Modal';

export default {
  name: 'ModalDuration',
  components: {
    Modal,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    durationData: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>
