<template>
  <div
    class="grid grid-cols-2 w-full gap-2 items-center justify-center shadow rounded-2xl p-3"
  >
    <div
      v-if="variant.images.length > 0"
      class="w-full mx-auto rounded-xl overflow-hidden"
    >
      <img
        class="w-4/5 mx-auto"
        :src="`${variant.images[0]}`"
        alt="Image not found"
      />
    </div>
    <div v-else class="w-4/5 mx-auto rounded-xl overflow-hidden">
      <img
        class="w-full"
        src="/images/sequrban/cow variant/type-d.svg"
        alt="Images not found"
      />
    </div>
    <div class="tn:space-y-1 lg:space-y-2 w-full md:pr-4">
      <h2 class="font-semibold text-xl">
        Tipe {{ variant.packageCode }}
        <span class="text-secondary text-base font-semibold"
          >~{{ variant.weight }} KG</span
        >
      </h2>
      <h1 class="font-bold tn:text-xl md:text-1xl lg:text-2xl xl:text-3xl">
        {{ toRupiah(variant.totalCost) }}
      </h1>
      <p class="text-xs">10 grup telah bergabung</p>
      <div
        class="flex gap-1 items-center my-2"
        @click="showModalDetail(variant.id)"
      >
        <div class="">
          <svg
            width="16"
            height="16"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <path
              d="M14.9999 29.9999C6.71561 29.9999 -0.00012207 23.2842 -0.00012207 14.9999C-0.00012207 6.71561 6.71561 -0.00012207 14.9999 -0.00012207C23.2842 -0.00012207 29.9999 6.71561 29.9999 14.9999C29.9908 23.2804 23.2804 29.9908 14.9999 29.9999ZM2.99988 15.2579C3.07085 21.8597 8.46154 27.1642 15.0637 27.1289C21.6658 27.0932 26.9992 21.7311 26.9992 15.1289C26.9992 8.52664 21.6658 3.16454 15.0637 3.12887C8.46154 3.09356 3.07085 8.39802 2.99988 14.9999V15.2579ZM17.9999 22.4999H13.4999V16.4999H11.9999V13.4999H16.4999V19.4999H17.9999V22.4999ZM16.4999 10.4999H13.4999V7.49988H16.4999V10.4999Z"
              fill="#417465"
            />
          </svg>
        </div>
        <p class="text-sm font-bold text-secondary cursor-pointer">
          Lihat detail
        </p>
      </div>
      <Button
        :label="variant.isAvailable ? 'Pesan sekarang' : 'Tidak ada stok'"
        variant="primary"
        :disabled="!variant.isAvailable"
        class="w-full tn:text-xs md:text-base"
        @click="onClickOrder(variant.id)"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  data() {
    return {
      unitWeight: '',
    };
  },
  props: {
    variant: {
      type: Object,
      default: {},
    },
  },
  components: {
    Button,
  },
  mounted() {
    this.unitWeight = this.variant.unitWeight;
  },
  methods: {
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
    },
    showModalDetail(id) {
      this.$emit('showModalDetail', id);
    },
    onClickOrder(id) {
      this.$emit('onClickOrder', id);
    },
  },
};
</script>

<style></style>
