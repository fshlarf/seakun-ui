<template>
  <div class="container pt-10">
    <div class="md:grid lg:grid-cols-4 lg:gap-4 xl:gap-8 items-start">
      <div class="relative lg:hidden">
        <h3 class="px-3 text-lg mb-2">Pilih Provider:</h3>
        <div class="rounded-xl p-3 bg-greeny" @click="onClickChooseProvider">
          <div class="flex justify-center items-center space-x-2">
            <img
              :src="`/images/icons/${chosedProvider.slug}.svg`"
              alt="icon provider"
              class="w-9"
            />
            <p class="font-bold text-lg">
              {{ chosedProvider.name }}
            </p>
          </div>
        </div>
        <transition name="slide-up">
          <div
            v-if="isShowDropDown"
            class="border p-4 space-y-4 mb-2 bg-white absolute z-50 top-28 w-full"
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
