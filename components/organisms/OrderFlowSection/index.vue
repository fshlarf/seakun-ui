<template>
  <div id="orderFlow" class="tn:pt-20">
    <div
      class="tn:pt-[24px] md:pt-[60px] tn:pb-[40px] md:pb-[84px] bg-[#F4FFFD]"
    >
      <h2
        class="tn:text-[20px] md:text-[30px] xl:text-[36px] leading-[64px] font-bold text-center"
      >
        Cara Berlangganan ni
      </h2>
      <div
        class="flex flex-wrap gap-[20px] justify-center items-center tn:mt-[16px] md:mt-[28px]"
      >
        <div
          v-for="(flow, id) in orderFlow"
          :key="id"
          class="tn:w-[105px] md:w-[210px] relative"
        >
          <div
            class="absolute right-0 md:right-7 lg:right-0 top-0 md:top-5 lg:top-3 z-10 cursor-pointer"
            a
            v-if="id == 3"
          >
            <THREnvelopeVue :envelopeKey="3" />
          </div>
          <img
            class="mx-auto relative z-20 pointer-events-none"
            :src="`/images/order flow/${flow.img}.svg`"
            :alt="flow.desc"
          />

          <div
            class="flex items-center justify-center tn:space-x-1 md:space-x-2 tn:mt-[20px]"
          >
            <div
              class="tn:w-[12px] tn:h-[12px] md:w-[24px] md:h-[24px] rounded-full flex justify-center items-center text-white bg-primary tn:text-[8px] md:text-[16px]"
            >
              {{ flow.step }}
            </div>
            <p class="text-secondary font-bold tn:text-[10px] md:text-[20px]">
              {{ flow.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import THREnvelopeVue from '../ThrChallenge/THREnvelope.vue';
export default {
  components: {
    THREnvelopeVue,
  },
  data() {
    return {
      orderFlow: [
        {
          step: 1,
          desc: 'Pesan layanan',
          img: 'step-1',
        },
        {
          step: 2,
          desc: 'Pembayaran',
          img: 'step-2',
        },
        {
          step: 3,
          desc: 'Menunggu proses',
          img: 'step-3',
        },
        {
          step: 4,
          desc: 'Pesanan diterima',
          img: 'step-4',
        },
        {
          step: 5,
          desc: 'Selesai!',
          img: 'step-5',
        },
      ],
    };
  },
};
</script>

<style></style>