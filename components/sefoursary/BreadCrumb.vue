<template>
  <div
    class="mt-[75px] lg:mt-[120px] container-about-us text-xs md:text-sm text-[#6D7588]"
  >
    <div class="flex items-center gap-2">
      <nuxt-link to="/sefoursary">
        <img
          src="/images/sefoursary/icons/home.svg"
          alt="home"
          class="cursor-pointer"
        />
      </nuxt-link>

      <img src="/images/sefoursary/icons/arrow.svg" alt="home" />
      <nuxt-link to="/sefoursary">
        <p class="cursor-pointer">Sefoursary</p>
      </nuxt-link>
      <img src="/images/sefoursary/icons/arrow.svg" alt="home" />
      <nuxt-link to="/sefoursary/game">
        <p class="cursor-pointer">Game</p>
      </nuxt-link>
      <div v-if="level" class="flex items-center gap-2">
        <img src="/images/sefoursary/icons/arrow.svg" alt="home" />
        <p>Level {{ level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
