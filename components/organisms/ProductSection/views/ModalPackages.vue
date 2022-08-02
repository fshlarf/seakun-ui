<template>
  <Modal :is-show="isShow" size="xl:w-auto" @onClose="onClose">
    <template v-slot:header>
      <div class="">
        <h1 class="tn:text-base md:text-lg xl:text-xl font-bold">
          Pilih Paket {{ provider.name }}
        </h1>
      </div>
    </template>

    <div class="pb-2" v-if="!isLoading">
      <div
        v-if="preOrderPackage.includes(slug) && provider.variants"
        class="tn:mx-1 md:mx-3 mb-3"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <p class="tn:text-xs md:text-sm" v-html="setPreOrderNotes(slug)"></p>
      </div>

      <div
        v-if="provider && packageVariants"
        class="flex tn:flex-col md:flex-row tn:flex-wrap xl:flex-nowrap md:justify-between tn:space-y-3 xl:space-y-0"
      >
        <div
          v-for="(item, id) in packageVariants"
          :key="id"
          :class="`mx-auto ${item.isActive == 1 ? '' : 'inactive'}`"
          class="w-full h-full"
        >
          <CardPackage
            :slug="slug"
            :packet="item"
            class="xl:w-[416px]"
            @choosePacket="choosePacket"
          />
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
    slug: { type: String, default: '' },
  },
  data() {
    return {
      preOrderPackage: [
        'apple-one',
        'apple-tv',
        'apple-one-premier',
        'canva',
        'disney-hotstar',
        'gramedia-digital',
        'microsoft-365',
        'nord-vpn',
        'wattpad',
        'google-one',
        'amazon-prime',
        'iqiyi',
        'zoom',
        'vidio',
        'hbo-go',
        'scribd',
        'mcafee',
        'setapp',
        'bitdefender',
        'lastpass'
      ],
      packageVariants: [],
    };
  },
  watch: {
    provider(val) {
      if (val) {
        this.setPackageVariants(val);
      }
    },
  },
  components: {
    Modal,
    CardShimmerVertical,
    CardPackage,
  },
  methods: {
    setPreOrderNotes(slug) {
      const providerTypeAccount = ['gramedia', 'disney-hotstar', 'wattpad'];
      if (providerTypeAccount.includes(slug)) {
        return `<span class="font-bold">Pre-order:</span> Akun akan dibuatkan ketika
          anggota member dalam satu grup sudah lengkap. Member melakukan
          pembayaran setelah akun dibuat.`;
      } else {
        return `<span class="font-bold">Pre-order:</span> Member akan diinfokan untuk melakukan pembayaran setelah satu grup full. Link invitation ke Paket Premium akan dikirim setelah member melakukan pembayaran ke Seakun.`;
      }
    },
    setPackageVariants() {
      this.packageVariants = this.provider.variants.sort((a, b) =>
        a.isActive < b.isActive ? 1 : b.isActive < a.isActive ? -1 : 0
      );
    },
    choosePacket(item) {
      this.$emit('choosePacket', item);
    },
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>

<style lang="scss" scoped>
.inactive {
  pointer-events: none;
  opacity: 0.7;
}
</style>
