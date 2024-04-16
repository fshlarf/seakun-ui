<template>
  <div class="!overflow-visible my-5 py-3 md:py-6">
    <div
      class="container-sekurban-new md:flex md:justify-between md:items-center"
    >
      <div class="text-left">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
          Dokumentasi Proses Qurban
        </h1>
        <p class="text-xs md:text-sm font-normal leading-[22px]">
          Berikut ini beberapa dokumentasi saat qurban diproses.
        </p>
      </div>

      <div class="hidden md:flex items-center space-x-4">
        <div
          @click="slideLeft"
          class="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-chevron-green cursor-pointer"
        >
          <img
            class="mr-1"
            src="/images/icons/atoms/chevron-green-left.svg"
            alt="slide kiri"
          />
        </div>
        <div
          @click="slideRight"
          class="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-chevron-green transform rotate-180 cursor-pointer"
        >
          <img
            class="mr-1"
            src="/images/icons/atoms/chevron-green-left.svg"
            alt="slide kanan"
          />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div
      class="container-sekurban-new flex md:hidden flex-col items-center mt-5"
    >
      <div
        v-for="(id, index) in showAll ? 5 : 3"
        :key="id"
        class="mb-4 w-full h-[184px] md:w-[323px] md:h-[285px] rounded-[9px] md:rounded-[10px] overflow-hidden"
      >
        <img
          v-if="index < 3 || showAll"
          :src="`/images/sekurban/documentation/photo-${id}.jpg`"
          alt="dokumentasi kurban"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div
        v-if="!showAll"
        class="flex gap-2 items-center cursor-pointer"
        @click="showAllImages"
      >
        <p class="text-xs font-semibold text-primary">Tampilkan semua</p>
        <img
          src="/images/icons/atoms/chevron-green-left.svg"
          class="-rotate-90"
        />
      </div>
    </div>

    <!-- Non Mobile -->
    <div
      id="doc-container"
      class="container-sekurban-new hidden md:flex items-center space-x-3 md:space-x-4 overflow-x-auto overscroll-x-contain hide-scrollbar mt-5"
    >
      <div
        v-for="(doc, id) in documentation"
        :key="id"
        class="tn:w-[191px] tn:h-[136px] md:w-[323px] md:h-[285px] tn:rounded-[6px] md:rounded-[15px] overflow-hidden flex-none"
      >
        <img
          :src="doc.image"
          alt="dokumentasi kurban"
          class="min-w-full min-h-full object-cover object-center cursor-pointer"
          @click="handlePreview(id)"
        />
      </div>
    </div>
    <PreviewImageVue
      v-if="isShowPreview"
      :dataPreview="documentation"
      :currentId="currentPreview"
      @click-arrow="isShowPreview = false"
    />
  </div>
</template>

<script>
import PreviewImageVue from '../../../components/mollecules/PreviewImage.vue';
export default {
  components: {
    PreviewImageVue,
  },
  data() {
    return {
      showAll: false,
      isShowPreview: false,
      currentPreview: null,
      documentation: [
        {
          image: '/images/sekurban/documentation/photo-1.jpg',
        },
        {
          image: '/images/sekurban/documentation/photo-2.jpg',
        },
        {
          image: '/images/sekurban/documentation/photo-3.jpg',
        },
        {
          image: '/images/sekurban/documentation/photo-4.jpg',
        },
        {
          image: '/images/sekurban/documentation/photo-5.jpg',
        },
      ],
    };
  },
  methods: {
    slideLeft() {
      document.getElementById('doc-container').scrollLeft -= 600;
    },
    slideRight() {
      document.getElementById('doc-container').scrollLeft += 600;
    },
    showAllImages() {
      this.showAll = true;
    },
    handlePreview(id) {
      this.isShowPreview = !this.isShowPreview;
      this.currentPreview = id;
    },
  },
};
</script>

<style>
.bg-chevron-green {
  background: rgba(0, 186, 136, 0.1);
}
.doc-container {
  margin-left: auto;
  margin-right: 0;
}
#doc-container {
  scroll-behavior: smooth;
}

@media (min-width: 0px) {
  .doc-container {
    width: calc(100% - ((100% - 328px) / 2));
  }
}
@media (min-width: 768px) {
  .doc-container {
    width: calc(100% - ((100% - 700px) / 2));
  }
}
@media (min-width: 1024px) {
  .doc-container {
    width: calc(100% - ((100% - 960px) / 2));
  }
}
@media (min-width: 1280px) {
  .doc-container {
    width: calc(100% - ((100% - 1240px) / 2));
  }
}
</style>
