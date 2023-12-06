<template>
  <Modal :is-show="showModal" size="xl:w-auto" @onClose="closeModal">
    <template v-slot:header>
      <div class="flex gap-2 md:gap-3 xl:gap-4 items-center">
        <h1 class="text-sm md:text-lg xl:text-xl font-bold">
          Skema Harga {{ dataScheme.name }}
        </h1>
        <p
          class="text-xs md:text-sm text-primary font-semibold cursor-pointer"
          @click="toSchemePage"
        >
          Lihat semua
        </p>
      </div>
    </template>
    <div
      class="xl:flex xl:w-auto"
      :class="{ 'xl:justify-center': dataScheme.list.length < 4 }"
    >
      <div v-for="(scheme, id) in dataScheme.list" :key="id">
        <div
          v-if="scheme.slug === dataScheme.slug"
          class="scheme-card p-2 md:p-8 xl:p-3 xl:mx-2 border-top md:border rounded-[22px] mb-2 md:mb-3 lg:mb-4 xl:mb-0"
        >
          <div class="w-full h-full mx-auto">
            <img
              class="w-full h-full mb-2"
              :src="`${scheme.screenshotMobile}`"
              alt="price scheme"
            />
          </div>
          <div class="space-y-1">
            <h1 class="text-lg xl:text-sm font-bold my-2">Detail Harga</h1>
            <div
              v-for="(info, id) in scheme.informations"
              :key="id"
              class="flex justify-between items-center text-xs md:text-sm xl:text-xs"
              :class="{ 'font-bold': info.is_total }"
            >
              <div>{{ info.title }}</div>
              <div>{{ info.value }}</div>
            </div>
          </div>
          <div v-if="scheme.notes" class="my-2 md:my-3">
            <p class="italic text-xs md:text-sm xl:text-xs font-semibold">
              {{ scheme.notes }}
            </p>
          </div>
          <div class="h-px w-full bg-gray-400 my-2"></div>
          <div class="">
            <h1 class="text-lg xl:text-sm font-bold my-2">
              Skema Berlangganan
            </h1>
            <ol
              class="space-y-1 ml-3 md:ml-4 text-xs md:text-sm xl:text-xs list-decimal list-outside"
            >
              <li v-for="(item, id) in scheme.schemes" :key="id">
                {{ item }}
              </li>
            </ol>
          </div>
          <div class="h-[2px] w-1/3 mx-auto mt-4 bg-primary md:hidden"></div>
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
    toSchemePage() {
      this.$emit('toSchemePage');
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
