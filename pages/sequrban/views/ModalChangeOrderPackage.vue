<template>
  <Modal :is-loading="isLoading" :is-show="isShowModal" @onClose="closeModal">
    <div>
      <h1 class="font-bold text-2xl">Ubah varian</h1>
    </div>
    <div class="w-full space-y-4">
      <SequrbanOrderChoiceCard
        v-for="(qurbanVariant, id) in dataQurban"
        :key="id"
        :variant="qurbanVariant"
        :current-variant="qurbanCurrentVariant"
        @choosePackage="choosePackage"
      />
    </div>
  </Modal>
</template>

<script>
import SequrbanOrderChoiceCard from './SequrbanOrderChoiceCard.vue';
import Modal from '~/components/atoms/Modal.vue';
export default {
  props: {
    isShowModal: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    dataQurban: {
      type: Array,
      default: [],
    },
    qurbanCurrentVariant: {
      type: Object,
      default: {},
    },
  },
  components: {
    SequrbanOrderChoiceCard,
    Modal,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    choosePackage(id) {
      this.$emit('choosePackage', id);
    },
  },
};
</script>

<style></style>
