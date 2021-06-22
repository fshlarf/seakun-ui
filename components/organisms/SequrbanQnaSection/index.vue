<template>
  <div id="qna" class="container tn:pt-8 pb-8 md:pt-24 lg:pb-16">
    <div class="tn:text-center lg:text-left">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-8">
        Frequently Asked Questions (FAQ)
      </h1>
    </div>
    <div class="px-2 grid tn:grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start">
      <Accordion
        v-for="(faq, id) in dataFaq"
        :key="id"
        :is-show-answer="faq.isShow"
        :title="faq.question"
        :answer="faq"
        @toggleShow="toggleShow"
      />
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/atoms/Accordion.vue';
export default {
  data() {
    return {
      dataFaq: [
        {
          id: 1,
          question: 'Apakah Netflix ini itu ini?',
          answer:
            'User Netflix adalah user yang berlangganan provider Entertainment via Seakun.id dan user yang bertanggung jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya',
          isShow: false,
        },
        {
          id: 2,
          question: 'Apakah Spotify ini itu ini?',
          answer:
            'User Spotify adalah user yang berlangganan provider Entertainment via Seakun.id dan user yang bertanggung jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya',
          isShow: false,
        },
        {
          id: 3,
          question: 'Apakah Youtube ini itu ini?',
          answer:
            'User Youtube adalah user yang berlangganan provider Entertainment via Seakun.id dan user yang bertanggung jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya',
          isShow: false,
        },
        {
          id: 4,
          question: 'Apakah Gramedia ini itu ini?',
          answer:
            'User Gramedia adalah user yang berlangganan provider Entertainment via Seakun.id dan user yang bertanggung jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya',
          isShow: false,
        },
        {
          id: 5,
          question: 'Apakah Canva ini itu ini?',
          answer:
            'User Canva adalah user yang berlangganan provider Entertainment via Seakun.id dan user yang bertanggung jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya',
          isShow: false,
        },
        {
          id: 6,
          question: 'Apakah Microsoft ini itu ini?',
          answer:
            'User Microsoft adalah user yang berlangganan provider Entertainment via Seakun.id dan user yang bertanggung jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya',
          isShow: false,
        },
      ],
    };
  },
  components: {
    Accordion,
  },
  methods: {
    toggleShow(id) {
      this.dataFaq[id - 1].isShow = !this.dataFaq[id - 1].isShow;
    },
  },
};
</script>

<style></style>
