<template>
  <div class="lg:container relative lg:h-[400px]">
    <div class="absolute lg:top-0 lg:left-[250px] z-10 lg:block hidden">
      <img src="/images/seatap/icon/ellipse2.svg" alt="" />
    </div>
    <div
      class="lg:absolute lg:left-0 lg:top-0 grid lg:grid-cols-4 md:grid-cols-2"
    >
      <div class="relative bg-[#417465] text-center lg:h-[400px]">
        <h1 class="text-[32px] py-[168px] text-[#FDFEFE] font-semibold">
          Cara memilih
          <br />
          teman seatap
        </h1>
        <div class="absolute bottom-0 left-0 z-10">
          <img src="/images/seatap/icon/ellipse3.svg" alt="" />
        </div>
      </div>
      <FlowCard
        v-for="(flow, id) in dataFlow"
        :key="id"
        :flow="flow"
        class="z-10 w-full lg:h-full tn:h-[433px]"
      />
    </div>
  </div>
</template>

<script>
import FlowCard from './views/Card.vue';

export default {
  components: {
    FlowCard,
  },
  data() {
    return {
      dataFlow: [
        {
          id: 1,
          tittle: 'Memilih Lokasi',
          preview:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
          bgColor: '#F7F8F8',
          opacity: '0',
        },
        {
          id: 2,
          tittle: 'Menghubungi kontak yang ada',
          preview:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
          bgColor: '#417465',
          opacity: '20',
        },
        {
          id: 3,
          tittle: 'Jika melebihi batas',
          preview:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
          bgColor: '#F7F8F8',
          opacity: '0',
        },
      ],
    };
  },
};
</script>
