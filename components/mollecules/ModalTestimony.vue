<template>
  <Modal :is-show="showModal" @onClose="closeModal">
    <div
      class="my-3 mx-auto rounded-full overflow-hidden tn:w-12 tn:h-12 lg:w-16 lg:h-16"
    >
      <img
        :src="`${customer.photo}`"
        alt="#"
        class="h-full object-cover mx-auto"
      />
    </div>
    <div class="tn:px-4 md:px-8">
      <h1
        class="text-center font-bold text-secondary tn:text-sm md:text-lg lg:text-xl xl:text-2xl md:my-2 mb-3"
      >
        {{ customer.name }} ({{ customer.provider }})
      </h1>
      <p class="my-2 tn:text-xs md:text-md lg:text-base">
        {{ customer.testimony }}
      </p>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
export default {
  data() {
    return {};
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    customer: {
      type: Object,
      default: () => {},
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
