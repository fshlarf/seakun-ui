<template>
  <div class="bg-[#F6FFFD] w-full">
    <div
      class="mt-7 md:mt-[35px] lg:mt-[52px] py-6 lg:py-8 container-semabar"
      id="flow-semabar"
    >
      <header class="text-center w-full">
        <h3
          class="text-[#15382F] text-base md:text-xl lg:text-[28px] font-bold text-dmsans"
        >
          Flow Main Bareng
        </h3>
        <p class="text-sm md:text-base lg:text-xl text-[#15382F] pt-2">
          Flow main bareng yang perlu kamu ketahui
        </p>
      </header>
      <div class="grid grid-cols-2 md:flex mt-[52px] gap-6 lg:gap-0 w-full">
        <section v-for="(flow, id) in flow" :key="id" class="mx-auto">
          <img
            :src="`/images/semabar/order-flow/${flow.images}.svg`"
            alt="flow"
            class="w-[86px] h-[86px] lg:w-[160px] lg:h-[160px] mx-auto"
          />
          <div class="flex items-center gap-2 mt-3 max-w-[133px] lg:max-w-full">
            <div
              class="w-4 h-4 lg:w-[22px] lg:h-[22px] p-2 bg bg-[#00BA88] text-white rounded-full flex items-center justify-center"
            >
              <p class="text-[10px] lg:text-sm">
                {{ id + 1 }}
              </p>
            </div>

            <p class="text-[#417465] font-bold text-xs lg:text-base">
              {{ flow.name }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flow: [
        {
          name: 'Gabung Komunitas',
          images: 'flow-1',
        },
        {
          name: 'Daftar Member & Bayar',
          images: 'flow-2',
        },
        {
          name: 'Menunggu Konfirmasi Admin',
          images: 'flow-3',
        },
        {
          name: 'Main Bareng',
          images: 'flow-4',
        },
      ],
      pillScrollPosition: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>
