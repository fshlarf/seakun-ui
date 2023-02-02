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
        class="tn:pl-3 tn:pr-1 md:pl-4 md:pr-3 mb-3 xl:max-w-[800px]"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <ul class="list-disc tn:text-xs md:text-sm">
          <li>
            Dengan memilih paket Pre-order artinya kamu menunggu grup penuh.
            Begitu slot sudah penuh, kamu akan dihubungi oleh Admin Seakun untuk
            melakukan pembayaran.
            <span>
              <nuxt-link
                class="tn:text-xs md:text-sm text-secondary inline font-semibold"
                to="/info/pre-order"
                >Lihat lebih lengkap</nuxt-link
              >
            </span>
          </li>
          <li v-if="isHasManyDuration">
            Durasi berlangganan dapat dipilih di halaman berikutnya.
          </li>
        </ul>
      </div>
      <div
        v-else-if="
          provider.variants && isHasManyDuration && provider.slug !== 'netflix'
        "
        class="tn:pl-3 tn:pr-1 md:pl-4 md:pr-3 mb-3 xl:max-w-[800px]"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <ul class="list-disc tn:text-xs md:text-sm">
          <li>Durasi berlangganan dapat dipilih di halaman berikutnya.</li>
        </ul>
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
