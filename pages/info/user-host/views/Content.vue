<template>
  <div class="container pt-10">
    <div class="md:grid lg:grid-cols-4 lg:gap-4 xl:gap-8 items-start">
      <div class="relative lg:hidden">
        <div class="rounded-xl p-3 bg-greeny" @click="onClickChooseProvider">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <img
                :src="`/images/icons/${chosedProvider.slug}.svg`"
                alt="icon provider"
                class="w-9"
              />
              <p class="font-bold text-lg">
                {{ chosedProvider.name }}
              </p>
            </div>
            <div v-if="!isShowDropDown" class="w-4 h-4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 330 330"
                style="enable-background: new 0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
            <div v-if="isShowDropDown" class="w-4 h-4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 330 330"
                style="enable-background: new 0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_224_"
                  d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                />
              </svg>
            </div>
          </div>
        </div>
        <transition name="slide-up">
          <div
            v-if="isShowDropDown"
            class="border p-4 space-y-4 mb-2 bg-white absolute z-50 top-18 w-full"
          >
            <p
              role="button"
              v-for="(provider, id) in userHostProviders"
              :key="id"
              class="font-semibold"
              @click="onClickLabel(provider, id)"
            >
              {{ provider.name }}
            </p>
          </div>
        </transition>
      </div>

      <div
        class="tn:hidden lg:block provider-bar !max-h-max space-y-2 md:p-4 xl:p-6 rounded-xl bg-greeny"
      >
        <h3 class="text-xl font-bold p-2">Provider</h3>
        <div
          v-for="(provider, id) in userHostProviders"
          :key="id"
          role="button"
          class="flex items-center space-x-2 rounded-xl p-2"
          :class="{ 'bg-gray-200': provider.slug === activeProvider }"
          @click="onClickLabel(provider, id)"
        >
          <img
            :src="`/images/icons/${provider.slug}.svg`"
            alt="icon provider"
            class="w-8"
          />
          <p>{{ provider.name }}</p>
        </div>
      </div>

      <div
        class="p-8 rounded-xl bg-greeny lg:col-span-3 tn:mt-4 lg:mt-0 relative"
      >
        <img
          :src="`/images/product/brand/${chosedProvider.slug}.png`"
          alt="icon provider"
          class="absolute z-10 right-10 tn:top-16 md:top-6 tn:h-14 w-auto lg:h-16 opacity-10"
        />
        <h3 class="text-2xl font-bold mb-7 relative z-20">
          Prosedur User Host - {{ chosedProvider.name }}
        </h3>
        <div
          v-for="(flow, id) in chosedProvider.flow"
          :key="id"
          class="my-2 relative z-20"
        >
          <div class="flex space-x-5 items-start">
            <div class="flex flex-column justify-center space-y-2">
              <div class="w-[24px] h-[24px] bg-[#52AF9C] rounded-full"></div>
              <img
                v-if="id < chosedProvider.flow.length - 1"
                src="/images/icons/atoms/arrow-flow.png"
                alt="arrow indicator"
                class="w-[16px] mx-auto"
              />
            </div>
            <div>
              <p class="tn:text-sm md:text-base">{{ flow }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userHostProviders from '../../../../constants/user-host-flow.json';
export default {
  data() {
    return {
      userHostProviders,
      chosedProvider: {},
      activeProvider: 'netflix',
      isShowDropDown: false,
    };
  },
  mounted() {
    this.chosedProvider = this.userHostProviders[0];
  },
  methods: {
    onClickLabel(provider, id) {
      this.activeProvider = provider.slug;
      this.chosedProvider = this.userHostProviders[id];
      this.isShowDropDown = false;
    },
    onClickChooseProvider() {
      this.isShowDropDown = !this.isShowDropDown;
    },
  },
};
</script>

<style>
.bg-greeny {
  background: #f4f9f8;
}
.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-leave-active {
  transition: all 0.5s ease;
  transform: translateY(-20vh);
  opacity: 0;
}
.slide-up-enter,
.slide-fade-leave-to {
  transform: translateY(-20vh);
  opacity: 0;
}
</style>
