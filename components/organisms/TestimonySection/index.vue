<template>
  <div class="container tn:pt-12 pb-12 md:pt-14 xl:pt-24 md:pb-12">
    <div class="text-center xl:hidden">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-12">
        Apa kata mereka?
      </h1>
    </div>
    <div class="hidden text-left xl:block">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-12">
        Apa kata mereka yang menggunakan Seakun.id?
      </h1>
    </div>
    <div
      class="tn:p-2 tn:flex tn:gap-6 tn:overflow-x-scroll tn:overscroll-contain lg:block lg:grid lg:overflow-visible lg:overscroll-none lg:grid-cols-2 lg:justify-center lg:gap-6 lg:place-items-stretch lg:items-stretch"
    >
      <TestimonyCard
        v-for="(testimony, id) in dataLengthTestimony"
        :key="id"
        :customer="testimony"
        @onClickShowTestimony="onClickShowTestimony"
        class="lg:w-full lg:h-full tn:flex-none"
      />

      <ModalTestimony
        :show-modal="showModalTestimony"
        :customer="dataDetailTestimony"
        @closeModal="toggleModal"
      />
    </div>
  </div>
</template>

<script>
import TestimonyCard from '/components/mollecules/TestimonyCard.vue';
import ModalTestimony from '/components/mollecules/ModalTestimony.vue';
export default {
  data() {
    return {
      showModalTestimony: false,
      dataDetailTestimony: {},
      dataTestimony: [
        {
          id: 1,
          name: 'Tom Riddle',
          provider: 'Netflix',
          photo: '/images/testimony/tom.jpg',
          testimony:
            'Karena saya harus isolasi di rumah dan bosan sekali, jadi saya coba langganan Netflix pakai Seakun. Ternyata terpercaya banget, lebih murah lagi. Konsepnya Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          sortTestimony: '',
        },
        {
          id: 2,
          name: 'Bellatrix Lestrange',
          provider: 'Spotify',
          photo: '/images/testimony/bella.jpg',
          testimony:
            'Karena sepupu saya menguasai TV, akhirnya saya cari alternatif lain untuk galau: Spotify. Tapi menangis agak gak enak kalo ada iklan di tengah lagu. Jadi langganan Spotify murah pake Seakun aja deh.',
          sortTestimony: '',
        },
        {
          id: 3,
          name: 'Lucius Malfoy',
          provider: 'Gramedia',
          photo: '/images/testimony/malfoy.jpg',
          testimony:
            'Untung ada Gramedia premium di Seakun.id. Jadi bisa beli buku banyak.',
          sortTestimony: '',
        },
        {
          id: 4,
          name: 'Fenrir Greyback',
          provider: 'Youtube',
          photo: '/images/testimony/greyback.jpg',
          testimony:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          sortTestimony: '',
        },
      ],
    };
  },
  components: {
    TestimonyCard,
    ModalTestimony,
  },
  computed: {
    dataLengthTestimony() {
      const newDataTestimony = this.dataTestimony;
      newDataTestimony.map((x) => {
        if (x.testimony.length > 220) {
          x.sortTestimony = x.testimony.slice(0, 220);
        } else {
          x.sortTestimony = x.testimony;
        }
      });
      return newDataTestimony;
    },
  },
  methods: {
    toggleModal() {
      this.showModalTestimony = !this.showModalTestimony;
    },
    onClickShowTestimony(data) {
      this.showModalTestimony = !this.showModalTestimony;
      const newData = this.dataTestimony[data.id - 1];
      this.dataDetailTestimony = newData;
    },
  },
};
</script>

<style></style>
