<template>
  <div
    id="testimony"
    class="container tn:pt-12 pb-12 md:pt-14 xl:pt-24 md:pb-12"
  >
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
      class="scroll-testimony tn:p-4 tn:flex tn:gap-6 tn:overflow-x-scroll tn:overscroll-auto lg:block lg:grid lg:overflow-visible lg:overscroll-none lg:grid-cols-2 lg:justify-center lg:gap-6 lg:place-items-stretch lg:items-stretch"
    >
      <TestimonyCard
        v-for="(testimony, id) in dataLengthTestimony"
        :key="id"
        :customer="testimony"
        @onClickShowTestimony="onClickShowTestimony"
        class="md:w-1/2 md:h-full lg:w-full lg:h-full tn:flex-none"
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
          name: 'Firda',
          provider: 'Netflix',
          photo: '/images/testimony/tom.jpg',
          testimony:
            'Biasanya kalau mau beli Netflix, Spotify dll secara legal tuh suka males soalnya kadang gak punya CC, harus nyari barengan, dll. Tapi kalau beli illegal suka error. Akhirnya nemu solusi karena ada Seakun.id! Menurutku ini benar-benar inovasi sih, kaya berangkat dari keresahan banget wkwkwk. Tadinya mungkin males langganan yang legal karena report, tapi sekarang jadi gampang kaan? Thank you Seakun.id',
          sortTestimony: '',
        },
        {
          id: 2,
          name: 'Antonia Inri',
          provider: 'Spotify',
          photo: '/images/testimony/bella.jpg',
          testimony:
            'I can’t recommend them enough. Ini platform langganan fitur premium bareng, Spotify, Netflix, Youtube, all without CC. Praktis, legal, aman, dan murah. I actually use them for my Spotify and it has worked wonders. Biasanya aku telat bayar Spotify tapi karena ada mereka jadi selalu diingetin deh sebelum jatuh tempo. Terus murah banget! ',
          sortTestimony: '',
        },
        {
          id: 3,
          name: 'Arvin Aji',
          provider: 'Gramedia',
          photo: '/images/testimony/malfoy.jpg',
          testimony:
            'To deal with my brain hunger for business, economics, and finance, I got myself a premium access to magazines & books in Gramedia Digital through Seakun.id. You all should really check them out! I should thank Seakun as a platform allowing people to have premium access to digital entertainments with a much lower price though account-sharing.',
          sortTestimony: '',
        },
        {
          id: 4,
          name: 'Iyen',
          provider: 'Netflix',
          photo: '/images/testimony/greyback.jpg',
          testimony:
            'Awal tau atas rekomendasi temen, terus ngerasa worth it, trusted, registrasinya simple, Adminya selain fast respon juga informatif banget. Di masa pandemi kaya gini karena seakun.id ini lah gw bisa membunuh waktu dan jadi betah di rumah dengan banyak nonton film di Netflix. Pokoknya enjoy selalu with seakun.id',
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

<style>
.scroll-testimony::-webkit-scrollbar {
  display: none;
}
.scroll-testimony {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
