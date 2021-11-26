<template>
  <Modal
    :is-loading="isLoading"
    size="auto"
    :is-show="isShowModal"
    @onClose="closeModal"
  >
    <template v-slot:header>
      <div class="">
        <h1 class="tn:text-sm md:text-lg xl:text-xl font-bold">Ubah Varian</h1>
      </div>
    </template>
    <div class="xl:w-[500px] space-y-4 pb-3">
      <VariantOptionCard
        v-for="(packageVariant, id) in variantList"
        :key="id"
        :variant="packageVariant"
        :current-variant="currentPackageVariant"
        @choosePackage="choosePackage"
      />
    </div>
  </Modal>
</template>

<script>
import VariantOptionCard from './VariantOptionCard.vue';
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
    dataVariants: {
      type: Array,
      default: [],
    },
    currentPackageVariant: {
      type: Object,
      default: {},
    },
  },
  components: {
    VariantOptionCard,
    Modal,
  },
  computed: {
    variantList() {
      const newArr = [];
      this.dataVariants.forEach((variant) => {
        if (variant.type === this.currentPackageVariant.type) {
          newArr.push(variant);
        }
      });
      return newArr;
    },
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
