<template>
  <div
    id="testimony"
    class="container pt-20 relative z-0"
    :class="{ 'show-more': isShowMore }"
  >
    <div class="relative w-max mx-auto xl:ml-0">
      <div class="text-center xl:hidden">
        <h1
          class="font-bold tn:text-[20px] md:text-[30px] xl:text-[36px] tn:mb-4 lg:mb-12"
        >
          Apa kata mereka?
        </h1>
      </div>
      <div class="hidden text-left xl:block">
        <h1
          class="font-bold tn:text-xl md:text-2xl xl:text-[36px] md:mb-4 lg:mb-8"
        >
          Apa kata mereka yang menggunakan Seakun?
        </h1>
      </div>
      <div class="absolute -top-4 -right-[62px]">
        <THREnvelopeVue :envelopeKey="4" />
      </div>
    </div>
    <div class="relative z-0">
      <ButtonChevron
        v-if="tweetScrollPosition !== 0"
        mode="left"
        class="hidden xl:block absolute z-10 -left-12 top-1/2 transform -translate-y-1/2"
        @click-chevron="scrollTweet('left')"
      />
      <TwitterTestimony />
      <ButtonChevron
        v-if="!isTweetEndScroll"
        mode="right"
        class="hidden xl:block absolute z-10 -right-12 top-1/2 transform -translate-y-1/2"
        @click-chevron="scrollTweet('right')"
      />
    </div>
  </div>
</template>

<script>
import TwitterTestimony from './views/TwitterTestimony.vue';
import TiktokTestimony from './views/TiktokTestimony.vue';
import InstagramTestimony from './views/InstagramTestimony.vue';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import Button from '~/components/atoms/Button.vue';
import THREnvelopeVue from '../ThrChallenge/THREnvelope.vue';

export default {
  components: {
    TwitterTestimony,
    TiktokTestimony,
    InstagramTestimony,
    ButtonChevron,
    Button,
    THREnvelopeVue,
  },
  data() {
    return {
      tweetScrollPosition: 0,
      tiktokScrollPosition: 0,
      instagramScrollPosition: 0,
      isTweetEndScroll: false,
      isTiktokEndScroll: false,
      isInstagramEndScroll: false,
      isShowMore: false,
    };
  },
  mounted() {
    const tweetContainer = document.getElementById('tweet-container');

    tweetContainer.addEventListener('scroll', () => {
      const tweetMaxScrollWidth =
        tweetContainer.scrollWidth - tweetContainer.clientWidth;
      this.tweetScrollPosition = tweetContainer.scrollLeft;
      if (this.tweetScrollPosition >= tweetMaxScrollWidth) {
        this.isTweetEndScroll = true;
      } else {
        this.isTweetEndScroll = false;
      }
    });
  },
  methods: {
    scrollTweet(direction) {
      const tweetContainer = document.getElementById('tweet-container');
      if (direction === 'right') {
        tweetContainer.scrollLeft += 600;
      } else {
        tweetContainer.scrollLeft -= 600;
      }
    },
    scrollTiktok(direction) {
      const tiktokContainer = document.getElementById('tiktok-container');
      if (direction === 'right') {
        tiktokContainer.scrollLeft += 600;
      } else {
        tiktokContainer.scrollLeft -= 600;
      }
    },
    scrollInstagram(direction) {
      const instagramContainer = document.getElementById('instagram-container');
      if (direction === 'right') {
        instagramContainer.scrollLeft += 600;
      } else {
        instagramContainer.scrollLeft -= 600;
      }
    },
  },
};
</script>

<style>
.fade-feed {
  background: linear-gradient(
    rgba(251, 251, 251, 0.2),
    rgba(251, 251, 251, 0.4),
    rgba(251, 251, 251, 0.6),
    rgba(251, 251, 251, 0.8),
    #fbfbfb,
    #fbfbfb
  );
}
.show-more {
  margin-bottom: -1110px;
}

.slide-down-enter-active {
  transition: all 0.8s ease;
}
.slide-down-leave-active {
  transition: all 0.8s ease;
  transform: translateY(100vh);
}
.slide-down-enter,
.slide-fade-leave-to {
  transform: translateY(100vh);
}
</style>
