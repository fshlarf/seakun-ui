<template>
  <div class="tn:py-[24px] md:py-[33px] bg-[#E9FAF5] -mb-12">
    <div
      class="tn:px-6 md:container md:flex md:justify-between md:items-center"
    >
      <p
        class="md:w-[350px] tn:text-[20px] md:text-[30px] xl:text-[36px] font-bold tn:text-center md:text-left"
      >
        Ingin Usaha Kamu Ada di Seakun?
      </p>
      <nuxt-link to="/vote">
        <Button
          variant="primary"
          label="Ajukan Kerjasama"
          class="tn:px-12 tn:py-3 tn:w-full md:w-auto tn:mt-6 md:mt-0"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style></style>
