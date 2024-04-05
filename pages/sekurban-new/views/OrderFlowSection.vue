<template>
  <div id="order-flow-sekurban" class="py-0 md:py-5">
    <div class="w-full py-[40.5px] lg:py-[60px] bg-flow-sekurban bg-[#F3FFFD]">
      <div class="container-sekurban-new">
        <h1
          class="text-xl md:text-2xl lg:text-3xl font-bold mb-8 lg:mb-12 text-center"
        >
          Flow Program Qurban
        </h1>
        <div
          class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mx-2 lg:mx-0"
        >
          <div v-for="(flow, id) in orderFlow" :key="id">
            <div
              class="bg-white shadow-lg border border-gray-100 py-4 md:py-4 lg:py-6 px-1.5 md:px-4 lg:px-2.5 rounded-xl min-h-[190px] lg:min-h-0"
            >
              <div
                class="absolute -translate-x-6 -translate-y-6 bg-primary text-white text-sm font-bold rounded-full py-1 px-2.5 inline-block"
              >
                {{ id + 1 }}
              </div>
              <div class="flex flex-col lg:flex-row gap-3 items-center">
                <div>
                  <img :src="flow.img" class="w-[60px] md:min-w-[60px]" />
                </div>
                <div class="text-center lg:text-left">
                  <p
                    class="text-xs md:text-base font-bold mb-[5px] text-primary leading-[15px] md:leading-5"
                  >
                    {{ flow.title }}
                  </p>
                  <p
                    class="text-[11px] md:text-sm font-normal text-main leading-4 md:leading-[18px]"
                  >
                    {{ flow.desc }}
                  </p>
                </div>
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
          img: '/images/sekurban-new/order-flow/step-1.png',
        },
        {
          title: 'Pembayaran',
          desc: 'Peserta qurban melakukan pembayaran',
          img: '/images/sekurban-new/order-flow/step-2.png',
        },
        {
          title: 'Kirim Bukti Transfer',
          desc: 'Peserta qurban mengirim bukti transfer',
          img: '/images/sekurban-new/order-flow/step-3.png',
        },
        {
          title: 'Qurban Diproses',
          desc: 'Qurban diproses pada hari-H Idul Adha',
          img: '/images/sekurban-new/order-flow/step-4.png',
        },
        {
          title: 'Pembagian Daging Qurban',
          desc: 'Daging qurban didistribusikan kepada yang berhak menerima.',
          img: '/images/sekurban-new/order-flow/step-5.png',
        },
        {
          title: 'Dokumentasi & Sertifikat',
          desc: 'Peserta qurban menerima dokumentasi dan sertifikat qurban.',
          img: '/images/sekurban-new/order-flow/step-6.png',
        },
      ],
    };
  },
};
</script>

<style>
.bg-flow-sekurban {
  background: rgba(238, 255, 252, 0.7);
}
</style>
