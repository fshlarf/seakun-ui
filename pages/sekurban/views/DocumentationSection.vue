<template>
  <div class="my-5 py-3 md:py-6 container-sekurban-new">
    <div class="sm:flex sm:justify-between sm:items-center">
      <div class="text-left">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
          Dokumentasi Proses Qurban
        </h1>
        <p class="text-xs md:text-sm font-normal leading-[22px]">
          Berikut ini beberapa dokumentasi saat qurban diproses.
        </p>
      </div>

      <div class="hidden sm:flex items-center space-x-4">
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

    <div
      id="doc-container"
      ref="docContainer"
      class="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-4 sm:overflow-x-auto overscroll-x-contain hide-scrollbar mt-5"
    >
      <div
        v-for="(doc, id) in documentation.slice(0, documentationSlice)"
        :key="id"
        class="w-full h-[184px] sm:h-[250px] lg:h-[285px] tn:rounded-[6px] md:rounded-[10px] flex-none bg-cover bg-center !max-w-[500px] sm:max-w-full cursor-pointer"
        :style="{
          backgroundImage: `url('${doc.image}')`,
          width: `${imgWidth}px`,
        }"
        @click="handlePreview(id)"
        @click.stop
      ></div>
    </div>
    <div
      class="flex gap-2 items-center cursor-pointer mt-5 w-max mx-auto sm:hidden"
      @click="isShowAll = !isShowAll"
    >
      <p class="text-xs font-semibold text-primary">
        {{ isShowAll ? 'Tampilkan sedikit' : 'Tampilkan semua' }}
      </p>
      <img
        src="/images/icons/atoms/chevron-green-left.svg"
        :class="[isShowAll ? 'rotate-90' : '-rotate-90']"
      />
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
      isShowPreview: false,
      currentPreview: null,
      isShowAll: false,
      imgWidth: null,
      documentation: [
        {
          image: '/images/sekurban/documentation/photo-1.webp',
        },
        {
          image: '/images/sekurban/documentation/photo-2.webp',
        },
        {
          image: '/images/sekurban/documentation/photo-3.webp',
        },
        {
          image: '/images/sekurban/documentation/photo-4.webp',
        },
        {
          image: '/images/sekurban/documentation/photo-5.webp',
        },
        {
          image: '/images/sekurban/documentation/photo-6.webp',
        },
        {
          image: '/images/sekurban/documentation/photo-7.webp',
        },
      ],
    };
  },
  watch: {
    isShowAll(newVal) {
      this.documentationSlice;
    },
  },
  computed: {
    documentationSlice() {
      if (process.client) {
        if (this.isShowAll) {
          return this.documentation.length;
        } else if (window.innerWidth >= 630) {
          return this.documentation.length;
        } else return 3;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closePreviewClickOutside);
    this.$nextTick(() => {
      this.updateImgWidth();
    });
  },

  beforeDestroy() {
    document.removeEventListener('click', this.closePreviewClickOutside);
  },
  methods: {
    updateImgWidth() {
      const docContainer = this.$refs.docContainer;

      if (docContainer) {
        if (window.innerWidth >= 1024) {
          const result = docContainer.offsetWidth / 3 - 12;
          this.imgWidth = parseInt(result);
        } else if (window.innerWidth >= 630) {
          const result = docContainer.offsetWidth / 2 - 12;
          this.imgWidth = parseInt(result);
        } else {
          this.imgWidth = '100%';
        }
      }
    },
    slideLeft() {
      const docContainer = this.$refs.docContainer;
      if (docContainer) {
        docContainer.scrollLeft -= docContainer.offsetWidth;
      }
    },
    slideRight() {
      const docContainer = this.$refs.docContainer;
      if (docContainer) {
        docContainer.scrollLeft += docContainer.offsetWidth;
      }
    },
    handlePreview(id) {
      this.isShowPreview = !this.isShowPreview;
      this.currentPreview = id;
    },
    closePreviewClickOutside(event) {
      const preview = this.$el.querySelector('.preview-image');

      if (preview && !preview.contains(event.target)) {
        this.isShowPreview = false;
      }
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
