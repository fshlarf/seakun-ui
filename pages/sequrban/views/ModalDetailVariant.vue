<template>
  <Modal
    :is-show="showModal"
    :is-loading="isLoadingModal"
    size=""
    @onClose="closeModal"
  >
    <div v-if="variant.images !== ''" class="relative z-0 w-full mx-auto">
      <div
        class="tn:w-full xl:w-4/5 mx-auto carousel-container flex justify-between items-center gap-2 md:mb-2"
      >
        <div class="rotate" @click="previous">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="cursor-pointer text-white bg-primary w-9 h-9 p-2 rounded-full mx-auto"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <transition-group class="carousel" tag="div">
          <div
            v-for="(poster, index) in variant.images"
            :key="index - 1"
            class="slide"
          >
            <img :src="`${poster}`" alt="qurban variant" />
          </div>
        </transition-group>
        <div @click="next">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="cursor-pointer text-white bg-primary w-9 h-9 p-2 rounded-full mx-auto"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="xl:px-2">
      <h1 class="text-xl font-bold mt-8">Tipe {{ variant.packageCode }}</h1>
      <p class="text-secondary font-semibold upper-case mt-2">
        {{ variant.type }}, BERAT HINGGA {{ variant.weight }} KG
      </p>
      <p class="tn:text-xl md:text-3xl font-bold mt-1">
        {{ toRupiah(variant.totalCost) }}<span class="text-base"> / orang</span>
      </p>
    </div>

    <div class="tn:space-y-2 md:space-y-0 md:px-3 lg:px-6 py-2 mt-3">
      <h2 class="tn:text-base md:text-lg text-secondary my-1 font-bold">
        Detail Harga
      </h2>
      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center mt-2"
      >
        <p>Harga sapi satuan</p>
        <p class="font-bold">{{ toRupiah(variant.bulkingPrice) }}</p>
      </div>
      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p>Jumlah member dalam satu grup</p>
        <p class="font-bold">{{ variant.totalUser }}</p>
      </div>
      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p>Harga patungan</p>
        <p class="font-bold">
          {{ toRupiah(variant.bulkingPrice) }} / {{ variant.totalUser }} =
          {{ toRupiah(variant.jointPrice) }}
        </p>
      </div>
      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p>
          Biaya servis
          <span
            class="tn:text-[8px] md:text-xs text-gray-500 text-xs font-semibold"
          >
            (PEMOTONGAN, PENCACAHAN, DISTRIBUSI)</span
          >
        </p>
        <p class="font-bold">{{ toRupiah(variant.serviceCost) }}</p>
      </div>

      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p>Biaya pengemasan</p>
        <p class="font-bold">{{ toRupiah(variant.packagingCost) }}</p>
      </div>

      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p>
          Biaya kirim
          <span
            class="tn:text-[8px] md:text-xs text-gray-500 text-xs font-semibold"
          >
            (jatah daging qurban)</span
          >
        </p>
        <p class="font-bold">{{ toRupiah(variant.deliveryCost) }}</p>
      </div>

      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p>Biaya admin</p>
        <p class="font-bold">{{ toRupiah(variant.adminFee) }}</p>
      </div>

      <div
        class="tn:text-xs md:text-base flex justify-between md:items-center md:mt-1 tn:mt-2"
      >
        <p class="font-bold">Total harga</p>
        <p class="font-bold">{{ toRupiah(variant.totalCost) }}</p>
      </div>

      <div class="my-3">
        <WarningInfo :text="variant.info" />
      </div>
    </div>
    <div class="h-px w-full bg-primary"></div>

    <div class="md:px-6 py-2">
      <div class="my-3">
        <p class="font-bold">Syarat dan Ketentuan</p>
        <ol class="tn:text-sm md:text-base space-y-1 my-2">
          <li v-for="(note, id) in variant.notes" :key="id" class="">
            <div class="flex gap-2">
              <div>{{ id + 1 }}.</div>
              <div>{{ note }}</div>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="h-px w-full bg-primary"></div>
    <div class="space-y-3 mt-4 mb-0">
      <Button
        label="Pesan sekarang"
        variant="primary"
        class="w-full py-2"
        @click="toOrderPage(variant.id)"
      />
      <Button
        label="Kembali"
        variant="secondary"
        class="w-full"
        @click="closeModal"
      />
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import Button from '~/components/atoms/Button.vue';
import WarningInfo from '~/components/mollecules/WarningInfo.vue';
export default {
  data() {
    return {
      photos: [],
      slides: [
        {
          title: 'Slide 1',
          id: 1,
        },
        {
          title: 'Slide 2',
          id: 2,
        },
        {
          title: 'Slide 3',
          id: 3,
        },
        {
          title: 'Slide 4',
          id: 4,
        },
        {
          title: 'Slide 5',
          id: 5,
        },
      ],
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: Object,
      default: {},
    },
    isLoadingModal: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Modal,
    Button,
    WarningInfo,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
    },
    next() {
      const first = this.variant.images.shift();
      this.variant.images = this.variant.images.concat(first);
    },
    previous() {
      const last = this.variant.images.pop();
      this.variant.images = [last].concat(this.variant.images);
    },
    toOrderPage(id) {
      this.$router.push(`/sequrban/order?id=${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate {
  transform: rotate(180deg);
}
.upper-case {
  text-transform: uppercase;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
}
</style>
