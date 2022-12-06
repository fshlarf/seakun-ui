<template>
  <div id="userType" class="container pt-20">
    <div class="text-center">
      <h1 class="font-bold tn:text-xl md:text-2xl tn:mb-4 lg:mb-8">
        Partner Seakun
      </h1>
    </div>
    <div
      class="w-full h-full grid tn:grid-cols-2 md:grid-cols-4 tn:gap-3 lg:gap-6 place-items-stretch items-stretch"
    >
      <div
        v-for="(partner, id) in partners"
        :key="id"
        class="shadow-xl rounded-2xl tn:px-6 tn:py-2 bg-white flex justify-center items-center"
      >
        <img
          class="w-full"
          :src="`/images/partners/${partner}.png`"
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
      partners: ['xendit', 'pejer', 'axdif', 'indigo-space'],
    };
  },
  components: {
    UserTypeCard,
  },
};
</script>

<style></style>
