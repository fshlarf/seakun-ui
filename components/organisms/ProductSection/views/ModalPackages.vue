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
        class="tn:px-3 tn:mb-5 md:px-4 md:mb-8 xl:max-w-auto flex bg-[#7BCAB9] bg-opacity-20 md:gap-[10px] tn:gap-[5px] border-[1px] border-[#7BCAB9] border-opacity-50 rounded-[12px] p-[12px]"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <div>
          <img
            class="md:w-[18.33px] tn:w-[12.5px]"
            src="/images/icons/atoms/symbols-info.svg"
            alt="symbols info"
          />
        </div>
        <div
          class="list-disc tn:text-xs md:text-sm md:pr-10 w-[100%] tn:pr-2 space-y-[8px]"
        >
          <p>
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
          </p>

          <p v-if="isHasManyDuration">
            Durasi berlangganan dapat dipilih di halaman berikutnya.
          </p>
        </div>
      </div>
      <div
        v-else-if="
          provider.variants && isHasManyDuration && provider.slug !== 'netflix'
        "
        class="tn:px-3 md:px-4 mb-3 xl:max-w-[800px] flex bg-[#7BCAB9] bg-opacity-20 md:gap-[10px] tn:gap-[5px] border-[1px] border-[#7BCAB9] border-opacity-50 rounded-[12px] p-[12px]"
        :class="{ 'xl:w-[416px]': provider.variants.length === 1 }"
      >
        <div>
          <img
            class="md:w-[18.33px] tn:w-[12.5px]"
            src="/images/icons/atoms/symbols-info.svg"
            alt="symbols info"
          />
        </div>
        <div class="list-disc tn:text-xs md:text-sm">
          Durasi berlangganan dapat dipilih di halaman berikutnya.
        </div>
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
