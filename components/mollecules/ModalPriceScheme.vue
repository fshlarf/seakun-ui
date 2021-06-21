<template>
  <Modal :is-show="showModal" size="auto" @onClose="closeModal" class="">
    <template v-slot:header>
      <!-- <div v-for="(scheme, id) in dataScheme.list" :key="id">
        <div v-if="scheme.name === dataScheme.label"> -->
      <div class="flex tn:gap-2 md:gap-3 xl:gap-4 items-center">
        <h1 class="tn:text-sm md:text-lg xl:text-xl font-bold">
          Skema Harga {{ dataScheme.name }}
        </h1>
        <p class="tn:text-xs md:text-sm text-primary font-semibold">
          Lihat semua
        </p>
      </div>
      <!-- </div>
      </div> -->
    </template>
    <div class="tn:space-y-10 xl:space-y-0 xl:flex xl:justify-center xl:w-auto">
      <div v-for="(scheme, id) in dataScheme.list" :key="id" class="">
        <div
          v-if="scheme.name === dataScheme.label"
          class="scheme-card tn:px-0 md:px-8 xl:px-4 xl:mx-2 xl:border xl:rounded-xl xl:py-3"
        >
          <div class="w-1/4 mx-auto">
            <img
              class="w-full h-full"
              :src="`${scheme.img}`"
              alt="Image not found"
            />
          </div>
          <div class="text-center">
            <h1 class="tn:text-lg xl:text-sm font-bold my-2 text-center">
              {{ scheme.title }}
            </h1>
          </div>
          <div class="w-full h-full mx-auto">
            <img
              class="w-full h-full my-2"
              :src="`${scheme.screenshot}`"
              alt="Image not found"
            />
          </div>
          <div class="">
            <h1 class="tn:text-lg xl:text-sm font-bold my-2">Detail Harga</h1>
            <div
              v-for="(info, id) in scheme.informations"
              :key="id"
              class="flex justify-between items-center space-y-1 tn:text-xs md:text-sm xl:text-xs"
              :class="{ 'font-bold': info.is_total }"
            >
              <div>{{ info.title }}</div>
              <div>{{ info.value }}</div>
            </div>
          </div>
          <div class="h-px w-full bg-gray-400 my-2"></div>
          <div class="">
            <h1 class="tn:text-lg xl:text-sm font-bold my-2">
              Skema Berlangganan
            </h1>
            <ol class="space-y-1 tn:text-xs md:text-sm xl:text-xs">
              <li v-for="(item, id) in scheme.schemes" :key="id">
                {{ id + 1 }}. {{ item }}
              </li>
            </ol>
          </div>
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

<style>
@media (min-width: 1200px) {
  .scheme-card {
    width: 450px;
  }
}
</style>
