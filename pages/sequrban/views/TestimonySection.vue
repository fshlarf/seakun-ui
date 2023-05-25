<template>
  <div id="testimony-sequrban" class="!overflow-visible tn:pt-12 lg:pt-20">
    <div class="container-sequrban md:flex md:justify-between md:items-center">
      <div>
        <h1
          class="tn:text-[20px] md:text-[26px] lg:text-[32px] tn:font-semibold md:font-bold"
        >
          Testimoni Qurban
        </h1>
        <p class="tn:text-[12px] md:text-[16px] lg:text-[24px]">
          Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
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
      id="video-container"
      class="tn:space-y-3 md:space-y-0 md:flex md:items-center md:space-x-6 md:overflow-x-auto md:overscroll-x-contain hide-scrollbar video-container tn:mt-4 md:mt-8"
    >
      <div
        v-for="(video, id) in testimonyVideos"
        :key="id"
        class="tn:mx-auto md:mx-0 tn:w-[326px] tn:h-[189px] md:w-[650px] md:h-[400px] xl:w-[998px] xl:h-[566px] tn:rounded-[10px] md:rounded-[15px] overflow-hidden md:flex-none"
      >
        <iframe
          :src="video.link"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonyVideos: [
        {
          link:
            'https://drive.google.com/file/d/1PEhNmmVBFZlhOL40dZgc38TOQyrnCECZ/preview',
        },
        {
          link:
            'https://drive.google.com/file/d/1OE4OKy6J1hSX-mzv04-wo9WkTrU-jAHq/preview',
        },
        {
          link:
            'https://drive.google.com/file/d/1ORLJgpxHEwROTrD8oSvviMV-du-GYBjr/preview',
        },
        {
          link:
            'https://drive.google.com/file/d/1IWauA3LqYOfUkAZ3mV96vZBX0AyeBF6c/preview',
        },
      ],
    };
  },
  methods: {
    slideLeft() {
      document.getElementById('video-container').scrollLeft -= 900;
    },
    slideRight() {
      document.getElementById('video-container').scrollLeft += 900;
    },
  },
};
</script>

<style>
.bg-chevron-green {
  background: rgba(0, 186, 136, 0.1);
}
#video-container {
  scroll-behavior: smooth;
}

@media (min-width: 768px) {
  .video-container {
    width: calc(100% - ((100% - 700px) / 2));
    margin-left: auto;
    margin-right: 0;
  }
}
@media (min-width: 1024px) {
  .video-container {
    width: calc(100% - ((100% - 960px) / 2));
    margin-left: auto;
    margin-right: 0;
  }
}
@media (min-width: 1280px) {
  .video-container {
    width: calc(100% - ((100% - 1240px) / 2));
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
