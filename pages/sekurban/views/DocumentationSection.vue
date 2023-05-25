<template>
  <div class="!overflow-visible tn:pt-12 lg:pt-20">
    <div class="container-sekurban md:flex md:justify-between md:items-center">
      <div>
        <h1
          class="tn:text-[20px] md:text-[26px] lg:text-[32px] tn:font-semibold md:font-bold"
        >
          Dokumentasi Proses Kurban
        </h1>
        <p class="tn:text-[12px] md:text-[16px] lg:text-[24px]">
          Berikut ini beberapa dokumentasi saat kurban diproses.
        </p>
      </div>

      <div class="tn:hidden xl:flex items-center space-x-8">
        <div
          @click="slideLeft"
          class="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-chevron-green cursor-pointer"
        >
          <img
            class="tn:mr-1"
            src="/images/icons/atoms/chevron-green-left.svg"
            alt="slide kiri"
          />
        </div>
        <div
          @click="slideRight"
          class="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-chevron-green transform rotate-180 cursor-pointer"
        >
          <img
            class="tn:mr-1"
            src="/images/icons/atoms/chevron-green-left.svg"
            alt="slide kanan"
          />
        </div>
      </div>
    </div>

    <div
      id="doc-container"
      class="flex items-center tn:space-x-3 md:space-x-6 overflow-x-auto overscroll-x-contain hide-scrollbar doc-container tn:mt-4 md:mt-8"
    >
      <div
        v-for="id in 5"
        :key="id"
        class="tn:w-[191px] tn:h-[136px] md:w-[323px] md:h-[285px] tn:rounded-[6px] md:rounded-[15px] overflow-hidden flex-none"
      >
        <img
          :src="`/images/sekurban/documentation/photo-${id}.jpg`"
          alt="dokumentasi kurban"
          class="min-w-full min-h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    slideLeft() {
      document.getElementById('doc-container').scrollLeft -= 600;
    },
    slideRight() {
      document.getElementById('doc-container').scrollLeft += 600;
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