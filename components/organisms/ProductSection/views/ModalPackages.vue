<template>
  <Modal
    :is-show="isShow"
    :is-loading="isLoading"
    size="auto"
    @onClose="$emit('on-close')"
  >
    <template v-slot:header>
      <div class="flex tn:gap-2 md:gap-3 xl:gap-4 items-center">
        <h1 class="tn:text-sm md:text-lg xl:text-xl font-bold">
          Pilih Paket {{ provider }}
        </h1>
      </div>
    </template>

    <div v-if="slug === 'gramedia'" class="ml-3 mb-2">
      <p class="tn:text-xs md:text-sm">
        <span class="font-bold">Pre-order:</span> Akun akan dibuatkan ketika
        anggota member dalam satu grup sudah full (berisi 2 orang). Member
        melakukan pembayaran setelah akun dibuat.
      </p>
    </div>

    <div
      v-if="packages.length > 0"
      class="flex tn:flex-col md:flex-row md:justify-between"
    >
      <div
        v-for="(item, id) in packages"
        :key="id"
        :class="`w-full h-full mx-auto ${!item.active ? 'inactive' : ''}`"
        @click="$emit('choose-packet', item)"
      >
        <CardPackage :slug="slug" :packet="item" />
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import CardPackage from './CardPackage.vue';

export default {
  name: 'ModalPackages',
  props: {
    isShow: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    provider: { type: String, default: 'Netflix' },
    packages: { type: Array, default: [] },
    slug: { type: String, default: '' },
  },
  components: {
    Modal,
    CardPackage,
  },
};
</script>

<style lang="scss" scoped>
.inactive {
  pointer-events: none;
  opacity: 0.7;
}
</style>
