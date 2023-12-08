<template>
  <div
    class="bg-[#EAF9F6] py-[32px] md:py-[48px] lg:py-[64px]"
    id="order-flow-seglowup"
  >
    <div class="w-full text-center text-[#2A5446] text-nunito">
      <h1 class="font-bold text-base md:text-xl lg:text-[30px]">
        Flow Berlangganan
      </h1>
      <p
        class="text-sm md:text-base lg:text-lg pt-2 leading-normal max-w-[271px] mx-auto md:max-w-full"
      >
        Berikut ini flow berlangganan SeGlowUp yang harus kamu ketahui
      </p>
    </div>
    <div
      class="mt-[48px] grid grid-cols-2 md:flex justify-center flex-wrap gap-5 md:gap-[70px] xl:gap-[92px] gap-y-[48px] container-semabar"
    >
      <div v-for="(flow, id) in flow" :key="id">
        <div class="flex items-start justify-center">
          <div
            class="w-6 h-6 rounded-full lg:flex justify-center hidden items-center bg-[#08A081] text-white font-bold text-base"
          >
            <p>{{ id + 1 }}</p>
          </div>
          <img
            :src="`/images/seglowup/flow/flow-${id + 1}.webp`"
            alt="flow"
            class="w-[120px] h-[120px]"
          />
        </div>
        <p
          class="max-w-[115px] mx-auto text-center md:max-w-[207px] text-xs md:text-sm lg:text-base text-[#2A5446] pt-3 font-medium"
        >
          {{ flow.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {},
  data() {
    return {
      flow: [
        {
          text: 'Pilih & Daftar Layanan di Seakun',
        },
        {
          text: 'Member Menunggu Grup Penuh',
        },
        {
          text: 'Member Melakukan Payment',
        },
        {
          text: 'Seakun menyerahkan data member & melakukan payment',
        },
        {
          text: 'Member Registrasi di Website ZAP',
        },
        {
          text: 'ZAP mengaktifasi quota Series Treatment ke member Seakun',
        },
        {
          text:
            'Nikmati treatment di lokasi ZAP manapun dengan menunjukan akun ZAP',
        },
      ],
    };
  },
  mounted() {
    this.fetchProvider();
  },
  methods: {
    ...mapActions({
      fetchProvider: 'fetchProvider',
    }),
  },
};
</script>

<style lang="scss" scoped>
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
