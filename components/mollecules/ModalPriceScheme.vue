<template>
  <Modal :is-show="showModal" size="xl:w-auto" @onClose="closeModal">
    <template v-slot:header>
      <div class="flex tn:gap-2 md:gap-3 xl:gap-4 items-center">
        <h1 class="tn:text-sm md:text-lg xl:text-xl font-bold">
          Skema Harga {{ dataScheme.name }}
        </h1>
        <p
          class="tn:text-xs md:text-sm text-primary font-semibold cursor-pointer"
          @click="toSchemePage"
        >
          Lihat semua
        </p>
      </div>
    </template>
    <div
      class="tn:space-y-3 xl:space-y-0 xl:flex xl:w-auto"
      :class="{ 'xl:justify-center': dataScheme.list.length < 4 }"
    >
      <div v-for="(scheme, id) in dataScheme.list" :key="id">
        <div
          v-if="scheme.slug === dataScheme.slug"
          class="scheme-card tn:px-2 tn:py-2 md:px-8 xl:px-4 xl:mx-2 tn:border-top md:border rounded-xl xl:py-3"
        >
          <div
            class="relative h-10 w-44 mx-auto flex justify-center items-center"
          >
            <img
              class="block max-h-[100%] max-w-[100%]"
              :src="`${scheme.img}`"
              alt="price scheme"
            />
          </div>
          <div class="text-center">
            <h1 class="tn:text-lg xl:text-sm font-bold my-2">
              {{ scheme.title }}
            </h1>
          </div>
          <div
            v-if="
              dataScheme.slug === 'wattpad' || dataScheme.slug === 'google-one'
            "
            class="w-auto h-48 border"
          >
            <img
              class="h-full mx-auto"
              :src="`${scheme.screenshot}`"
              alt="price scheme"
            />
          </div>
          <div v-else class="w-full h-full mx-auto">
            <img
              class="w-full h-full my-2 border"
              :src="`${scheme.screenshot}`"
              alt="price scheme"
            />
          </div>
          <div class="space-y-1">
            <h1 class="tn:text-lg xl:text-sm font-bold my-2">Detail Harga</h1>
            <div
              v-for="(info, id) in scheme.informations"
              :key="id"
              class="flex justify-between items-center tn:text-xs md:text-sm xl:text-xs"
              :class="{ 'font-bold': info.is_total }"
            >
              <div>{{ info.title }}</div>
              <div>{{ info.value }}</div>
            </div>
          </div>
          <div v-if="scheme.notes" class="tn:my-2 md:my-3">
            <p class="italic tn:text-xs md:text-sm xl:text-xs font-semibold">
              {{ scheme.notes }}
            </p>
          </div>
          <div class="h-px w-full bg-gray-400 my-2"></div>
          <div class="">
            <h1 class="tn:text-lg xl:text-sm font-bold my-2">
              Skema Berlangganan
            </h1>
            <ol
              class="space-y-1 tn:ml-3 md:ml-4 tn:text-xs md:text-sm xl:text-xs list-decimal list-outside"
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
