<template>
  <div>
    <div class="flex items-center gap-2 text-sm text-[#6D7588]">
      <nuxt-link to="/" class="flex items-center gap-2">
        <img
          src="/images/about-us/icons/home.svg"
          alt="home"
          class="w-[16px]"
        />
        <img
          src="/images/about-us/icons/arrow.svg"
          alt="home"
          class="w-[5px]"
        />
      </nuxt-link>
      <p :class="classText">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    classText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
