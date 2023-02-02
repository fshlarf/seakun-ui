<template>
  <Modal :is-show="isShow" size="xl:w-auto" @onClose="onClose">
    <template v-slot:header>
      <div class="">
        <h1 class="tn:text-base md:text-lg xl:text-xl font-bold">
          Pilih Paket
        </h1>
      </div>
    </template>

    <div class="pb-2">
      <div
        v-if="provider.variants && isHasPo"
        class="tn:mx-1 md:mx-3 mb-3"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <p class="tn:text-xs md:text-sm" v-html="setPreOrderNotes(slug)"></p>
        <p class="tn:text-xs md:text-sm" v-if="isHasManyDuration">
          Durasi berlangganan dapat dipilih di halaman berikutnya.
        </p>
        <nuxt-link
          class="tn:text-xs md:text-sm text-secondary inline font-semibold"
          to="/info/pre-order"
          >Lihat Ketentuan Pre-order Selengkapnya</nuxt-link
        >
      </div>
      <div
        v-else-if="provider.variants && isHasManyDuration"
        class="tn:mx-1 md:mx-3 mb-3 tn:text-sm md:text-base"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <p>Durasi berlangganan dapat dipilih di halaman berikutnya.</p>
      </div>

      <div
        class="flex tn:flex-wrap xl:flex-nowrap justify-center items-start tn:gap-3 md:gap-6"
      >
        <PackageCard
          v-for="(item, id) in packageVariants"
          :key="id"
          :slug="slug"
          :packet="item"
          :provider="provider"
          @choosePacket="choosePacket"
        />
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical.vue';
import PackageCard from './PackageCard.vue';

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
      packageVariants: [],
    };
  },
  watch: {
    isShow(val) {
      if (val) {
        this.setPackageVariants();
      }
    },
  },
  components: {
    Modal,
    CardShimmerVertical,
    PackageCard,
  },
  computed: {
    isHasPo() {
      return this.provider.variants.some((variant) => {
        return variant.isPo === 1;
      });
    },
    isHasManyDuration() {
      return this.provider.variants.some((variant) => {
        const durations = variant.durations.split(',');
        return durations.length > 1;
      });
    },
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
      const variants = this.provider.variants.slice();
      this.packageVariants = variants.sort((a, b) =>
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
