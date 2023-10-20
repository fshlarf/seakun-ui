<template>
  <div class="container-semabar">
    <header class="text-center lg:text-left mb-7 lg:mb-8 text-[#15382F]">
      <h1 class="font-bold text-base md:text-xl lg:text-[28px]">Testimonial</h1>
      <p class="text-sm md:text-base lg:text-xl">
        Berikut ini testimoni dari mereka yang sudah menggunakan layanan
        semabar.
      </p>
    </header>
    <div class="flex flex-col md:flex-row gap-5">
      <CardTestimonySemabarVue
        v-for="(testimony, id) in dataTestimony"
        :key="id"
        :data-testimony="testimony"
      />
    </div>
  </div>
</template>

<script>
import CardTestimonySemabarVue from './views/CardTestimonySemabar.vue';
export default {
  components: {
    CardTestimonySemabarVue,
  },
  data() {
    return {
      dataTestimony: [
        {
          name: 'Guy Hawkins',
          address: 'Semarang, Jawa Tengah',
          text:
            'Lorem  s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Ipsum adipiscing elit consectetur.',
        },
        {
          name: 'Guy Hawkins',
          address: 'Semarang, Jawa Tengah',
          text:
            'Lorem  s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Ipsum adipiscing elit consectetur.',
        },
        {
          name: 'Guy Hawkins',
          address: 'Semarang, Jawa Tengah',
          text:
            'Lorem  s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Ipsum adipiscing elit consectetur.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
