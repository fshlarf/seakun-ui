<template>
  <div id="company-partner" class="container tn:pt-20">
    <div class="text-center">
      <h1
        class="font-bold tn:text-[20px] md:text-[30px] xl:text-[36px] tn:mb-4 lg:mb-8"
      >
        Partner Seakun
      </h1>
    </div>
    <div
      class="w-full h-full grid tn:grid-cols-2 md:grid-cols-3 tn:gap-3 lg:gap-x-[15px] lg:gap-y-[40px] place-items-stretch items-stretch"
    >
      <div
        v-for="(partner, id) in partners"
        :key="id"
        class="flex justify-center items-center"
      >
        <img
          class="w-full"
          :src="`/images/partners/new/${partner}.png`"
          alt="partner logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserTypeCard from '/components/mollecules/UserTypeCard.vue';
export default {
  data() {
    return {
      partners: [
        'xendit',
        'flip',
        'transfez',
        'support-seller',
        'axdif',
        'kitabisa',
      ],
    };
  },
  components: {
    UserTypeCard,
  },
};
</script>

<style></style>
