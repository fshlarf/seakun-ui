<template>
  <div>
    <div v-if="isClient">
      <div
        :class="
          (addClass,
          [
            showPreview == cardId
              ? 'h-[428px] sm:w-[306px] z-30'
              : 'w-[100%] sm:w-[133px] md:w-[125px] lg:w-[143px]',
          ])
        "
        class="flex flex-col justify-between relative rounded-[10px] cursor-pointer h-[132px] sm:h-[424px] transition-all ease-in-out duration-500"
      >
        <!-- cartoon -->
        <div
          v-if="isLoading"
          class="animate-pulse bg-slate-200 top-0 left-0 bottom-0 right-0 absolute z-40 h-[132px] sm:h-[424px]"
        ></div>
        <div
          v-show="!isLoading"
          @click="isLoading ? null : $emit('onClick')"
          @mouseenter="isLoading ? null : $emit('onHover')"
          @mouseleave="isLoading ? null : $emit('mouseleave')"
          :class="[showPreview == cardId ? 'opacity-0' : 'opacity-100 z-40']"
          class="!bg-black/30 absolute top-0 left-0 right-0 bottom-0 hidden sm:block h-[132px] sm:h-[424px] w-full rounded-[10px]"
        ></div>
        <img
          v-show="!isLoading"
          :src="backgroundCartoon"
          @click="isLoading ? null : $emit('onClick')"
          @mouseenter="isLoading ? null : $emit('onHover')"
          @mouseleave="isLoading ? null : $emit('mouseleave')"
          class="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] transition-all ease-in-out duration-500 bg-black object-cover h-[132px] sm:h-[424px] w-full"
          :class="[showPreview == cardId ? 'opacity-0 ' : 'opacity-100 z-30']"
        />

        <!-- end cartoon -->
        <div v-show="!isLoading">
          <img
            :src="backgroundPhoto"
            :alt="profile.fullName"
            @load="handleLoad"
            class="w-full object-cover object-center relative z-20 sm:h-[346px] transition-all duration-500"
            :class="[
              showPreview == cardId
                ? 'h-[342px]  rounded-t-[10px]'
                : 'rounded-[10px] h-[132px]',
            ]"
            @click="$emit('onClick')"
            @mouseenter="$emit('onHover')"
            @mouseleave="$emit('mouseleave')"
          />

          <div
            class="overflow-hidden transition-all duration-500"
            :class="[showPreview == cardId ? 'h-[86px] sm:h-[78px]' : 'h-0']"
          >
            <div
              class="flex justify-between items-center bg-[#D8F2ED] rounded-b-[10px] h-full overflow-hidden text-[#08A081] p-4 sm:max-"
              @mouseenter="$emit('onHover')"
              @mouseleave="$emit('mouseleave')"
            >
              <section class="whitespace-nowrap sm:max-w-[200px]">
                <p class="text-base font-bold truncate">
                  {{ profile.fullName }}
                </p>
                <p class="text-sm text-[#36A28C] truncate">
                  {{ profile.position }}
                </p>
              </section>
              <section
                class="flex items-center relative gap-1"
                :class="{ 'z-30': showPreview == cardId }"
              >
                <div v-for="(val, key) in socialMediaObj" :key="key">
                  <img
                    :src="iconSrc(key)"
                    :alt="key"
                    class="w-[18px] h-[18px]"
                    @click="goToSocialMedia(key, val)"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      v-else
      class="w-full sm:w-[143px] cursor-pointer min-h-[132px] sm:h-[424px] bg-slate-200 animate-pulse rounded-[10px]"
    ></div> -->
  </div>
</template>

<script>
import { toKebabCase } from '../../helpers/word-transformation';
export default {
  props: {
    addClass: {
      type: String,
      default: '',
    },
    profile: {
      type: Object,
      default: () => {},
    },
    showPreview: {
      typeof: String,
      default: '',
    },
    cardId: {
      typeof: String,
      default: '',
    },
  },
  data() {
    return {
      backgroundCartoon: '',
      isLoading: true,
    };
  },
  computed: {
    isClient() {
      return process.client;
    },
    socialMediaObj() {
      return Object.fromEntries(
        Object.entries(this.profile.socialMedia).filter(
          ([key, value]) => value !== null
        )
      );
    },

    backgroundPhoto() {
      if (process.client) {
        return `/images/about-us/seakun-teams/photo/${this.toKebabCase(
          this.profile.fullName
        )}.webp`;
      }
    },
  },
  methods: {
    toKebabCase,
    goToSocialMedia(platform, username) {
      let url = '';
      switch (platform) {
        case 'x':
          url = `https://x.com/${username}`;
          break;
        case 'instagram':
          const instagramUsername = username.replace('@', '');
          url = `https://www.instagram.com/${instagramUsername}`;
          break;
        case 'tiktok':
          url = `https://www.tiktok.com/${username}`;
          break;
        case 'linkedIN':
          url = username;
          break;
        default:
          return;
      }

      // Navigasi ke URL
      window.open(url, '_blank');
    },
    updateBackgroundCartoon() {
      if (process.client) {
        const name = this.profile.fullName;
        const basePath = '/images/about-us/seakun-teams/cartoon/';
        const isMobile = window.innerWidth < 640;
        const folder = isMobile ? 'mobile' : '';
        const fileName = this.toKebabCase(name);
        const extension = 'webp';

        this.backgroundCartoon = `${basePath}${folder}/${fileName}.${extension}`;
      }
      return '';
    },
    iconSrc(media) {
      return `/images/about-us/icons/social-media/${media.toLowerCase()}.svg`;
    },
    handleLink() {
      alert('hello');
    },
    handleLoad() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },
  watch: {
    profile(_, newval) {
      this.updateBackgroundCartoon();
      this.isLoading = true;
    },
  },
  mounted() {
    if (process.client) {
      this.updateBackgroundCartoon();
      window.addEventListener('resize', this.updateBackgroundCartoon);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.updateBackgroundCartoon);
    }
  },
};
</script>

<style lang="scss" scoped></style>
