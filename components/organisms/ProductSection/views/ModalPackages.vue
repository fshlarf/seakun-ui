<template>
  <Modal :is-show="isShow" size="auto" @onClose="$emit('on-close')">
    <template v-slot:header>
      <div class="flex tn:gap-2 md:gap-3 xl:gap-4 items-center">
        <h1 class="tn:text-sm md:text-lg xl:text-xl font-bold">
          Pilih Paket {{ provider.name }}
        </h1>
      </div>
    </template>

    <div v-if="!isLoading">
      <div v-if="slug === 'gramedia'" class="ml-3 mb-2">
        <p class="tn:text-xs md:text-sm">
          <span class="font-bold">Pre-order:</span> Akun akan dibuatkan ketika
          anggota member dalam satu grup sudah full (berisi 2 orang). Member
          melakukan pembayaran setelah akun dibuat.
        </p>
      </div>

      <div
        v-if="provider && provider.variants !== ''"
        class="flex tn:flex-col md:flex-row tn:flex-wrap xl:flex-nowrap md:justify-between tn:space-y-3 xl:space-y-0"
      >
        <div
          v-for="(item, id) in provider.variants"
          :key="id"
          :class="`mx-auto ${!item.active ? 'inactive' : ''}`"
          class="w-full h-full"
          @click="$emit('choose-packet', item)"
        >
          <CardPackage :slug="slug" :packet="item" class="xl:w-[416px]" />
        </div>
      </div>
    </div>

    <div v-else>
      <CardShimmerVertical />
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical.vue';
import CardPackage from './CardPackage.vue';

export default {
  name: 'ModalPackages',
  props: {
    isShow: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    provider: { type: Object, default: () => {} },
    packages: { type: Array, default: () => [] },
    slug: { type: String, default: '' },
  },
  components: {
    Modal,
    CardShimmerVertical,
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
