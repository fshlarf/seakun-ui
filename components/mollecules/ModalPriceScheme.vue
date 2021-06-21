<template>
  <Modal
    :is-show="showModal"
    @onClose="closeModal"
    class="grid grid-cols-1 space-y-8"
  >
    <div v-for="(scheme, id) in dataScheme.list" :key="id" class="">
      <div
        v-if="scheme.name === dataScheme.label"
        class="tn:px-0 md:px-8 xl:px-14 mb-8"
      >
        <div class="w-1/4">
          <img
            class="w-full h-full"
            :src="`${scheme.img}`"
            alt="Image not found"
          />
        </div>
        <div class="w-full h-full mx-auto">
          <img
            class="w-full h-full"
            :src="`${scheme.screenshot}`"
            alt="Image not found"
          />
        </div>
        <div class="">
          <h1 class="text-lg font-bold my-2">Detail Harga</h1>
          <div
            v-for="(info, id) in scheme.informations"
            :key="id"
            class="flex justify-between items-center space-y-1 tn:text-xs md:text-base"
            :class="{ 'font-bold': info.is_total }"
          >
            <div>{{ info.title }}</div>
            <div>{{ info.value }}</div>
          </div>
        </div>
        <div class="h-px w-full bg-gray-400 my-2"></div>
        <div class="">
          <h1 class="text-lg font-bold my-2">Skema Berlangganan</h1>
          <ol class="space-y-1 tn:text-xs md:text-base">
            <li v-for="(item, id) in scheme.schemes" :key="id">
              {{ id + 1 }}. {{ item }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
export default {
  components: {
    Modal,
  },
  props: {
    dataScheme: {
      type: Object,
      default: {},
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style></style>
