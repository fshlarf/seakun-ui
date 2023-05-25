<template>
  <div id="order-flow-sequrban" class="tn:pt-12 lg:pt-20">
    <div class="w-full tn:py-[24px] lg:py-[42px] bg-flow-sequrban">
      <div class="container-sequrban">
        <h1
          class="tn:text-[20px] md:text-[26px] lg:text-[32px] tn:font-semibold md:font-bold text-center"
        >
          Flow Program Qurban
        </h1>
        <div
          class="flex flex-wrap justify-center items-start tn:gap-3 md:gap-14 tn:mt-6 lg:mt-12"
        >
          <div
            v-for="(flow, id) in orderFlow"
            :key="id"
            class="tn:w-[150px] md:w-[260px]"
          >
            <img
              class="tn:w-[86px] md:w-[188px] mx-auto"
              :src="flow.img"
              alt="flow order"
            />
            <div class="flex justify-center space-x-2 items-start tn:mt-2">
              <div
                class="bg-[#00BA88] tn:w-[20px] tn:h-[20px] md:w-[36px] md:h-[36px] rounded-full text-white tn:text-[12px] md:text-[14px] font-bold flex justify-center items-center"
              >
                {{ id + 1 }}
              </div>
              <div class="tn:w-[121px] md:w-[220px]">
                <p class="font-bold text-secondary tn:text-[12px] md:text-base">
                  {{ flow.title }}
                </p>
                <p class="tn:text-[12px] md:text-[14px]">{{ flow.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderFlow: [
        {
          title: 'Daftar Peserta Qurban',
          desc: 'Peserta melakukan pendaftaran secara online',
          img: '/images/sequrban/order flow/step-1.png',
        },
        {
          title: 'Pembayaran',
          desc: 'Peserta qurban melakukan pembayaran',
          img: '/images/sequrban/order flow/step-2.png',
        },
        {
          title: 'Kirim Bukti Transfer',
          desc: 'Peserta qurban mengirim bukti transfer',
          img: '/images/sequrban/order flow/step-3.png',
        },
        {
          title: 'Qurban Diproses',
          desc: 'Qurban diproses pada hari-H Idul Adha',
          img: '/images/sequrban/order flow/step-4.png',
        },
        {
          title: 'Pembagian Daging Qurban',
          desc: 'Daging qurban didistribusikan kepada yang berhak menerima.',
          img: '/images/sequrban/order flow/step-5.png',
        },
        {
          title: 'Dokumentasi & Sertifikat',
          desc:
            'Peserta qurban menerima dokumantasi proses qurban dan sertifikat qurban.',
          img: '/images/sequrban/order flow/step-6.png',
        },
      ],
    };
  },
};
</script>

<style>
.bg-flow-sequrban {
  background: rgba(238, 255, 252, 0.7);
}
</style>
