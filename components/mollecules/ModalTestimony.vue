<template>
  <Modal :is-show="showModal" @onClose="closeModal">
    <div
      class="my-1 mx-auto rounded-full overflow-hidden w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
    >
      <img
        :src="`${customer.photo}`"
        alt="#"
        class="h-full object-cover mx-auto"
      />
    </div>
    <div class="tn:px-4 md:px-8">
      <h1
        class="text-center font-bold text-secondary md:text-lg lg:text-xl xl:text-2xl my-1 md:my-2 mb-3"
      >
        {{ customer.name }} ({{ customer.provider }})
      </h1>
      <p class="my-2 tn:text-sm md:text-md lg:text-base">
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
