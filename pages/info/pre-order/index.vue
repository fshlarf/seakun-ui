<template>
  <div>
    <div class="bg-pre-order">
      <div
        class="tn:px-[20px] md:container tn:py-[20px] md:py-[40px] xl:py-[100px]"
      >
        <div class="bg-white rounded-[8px] tn:p-[25px] md:p-[50px] xl:p-[70px]">
          <h1 class="tn:text-[24px] lg:text-[42px] font-bold text-center">
            Paket Pre-Order
          </h1>
          <div
            class="lg:flex lg:justify-between lg:items-center tn:mt-[12px] lg:mt-[32px]"
          >
            <div
              class="tn:w-[220px] md:w-[350px] lg:w-[320px] xl:w-[350px] tn:mx-auto lg:mx-0 tn:mb-[12px] lg:mb-0"
            >
              <img
                class="w-full"
                src="/images/pre-order/pre-order.svg"
                alt="paket pre order"
              />
            </div>
            <div
              class="tn:w-full lg:w-[500px] xl:w-[572px] tn:text-[12px] md:text-[20px] xl:text-[24px] text-justify tn:leading-[16px] md:leading-[31px]"
            >
              <p>
                Paket Pre-Order adalah paket dimana
                <span class="font-bold"
                  >akun akan dibuat setelah member dalam satu grup telah
                  full</span
                >
                (jumlah member dalam grup tergantung dari Provider Entertainment
                yang dipilih).
              </p>
              <p class="tn:mt-[10px] md:mt-[20px]">
                Setelah proses pendaftaran, Admin akan menghubungi kamu melalui
                Whatsapp untuk menginformasikan jumlah member saat ini, masa
                tunggu yang diperlukan, notifikasi grup jika telah full dan akun
                akan dibuat. Member melakukan pembayaran setelah grup full, akun
                akan dibagikan ke member setelah pembayaran diterima.
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-[8px] tn:p-[20px] md:p-[50px] xl:p-[70px] tn:mt-[20px] md:mt-[34px]"
        >
          <h1 class="tn:text-[24px] lg:text-[42px] font-bold text-center">
            Flow Paket Pre-Order
          </h1>
          <div
            class="flex justify-between items-center tn:mt-[12px] md:mt-[40px]"
          >
            <div
              v-for="(flow, id) in orderFlows"
              :key="id"
              class="relative tn:h-[51px] md:h-[100px] lg:h-[140px] xl:h-[162px]"
            >
              <img
                class="tn:w-[32px] md:w-[60px] lg:w-[85px] xl:w-[100px]"
                :src="`/images/pre-order/${flow.img}.svg`"
                :alt="flow.name"
              />
              <p
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 tn:text-[10px] md:text-[16px] lg:text-[22px] xl:text-[28px] font-bold whitespace-nowrap"
              >
                {{ flow.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-pre-order tn:py-[20px] md:py-[40px] xl:py-[50px]">
      <div
        class="container md:flex md:justify-between md:space-x-4 lg:space-x-8 xl:space-x-0"
      >
        <div
          class="tn:text-[100px] md:text-[110px] lg:text-[140px] xl:text-[200px] font-bold text-[#DADADA] tn:text-center md:text-left"
        >
          FAQ
        </div>
        <div class="tn:w-full xl:w-[604px] tn:space-y-[12px]">
          <Accordion
            v-for="(faq, id) in dataFaq"
            :key="id"
            :is-show-answer="faq.isShow"
            :title="faq.question"
            :answer="faq"
            @toggleShow="toggleShow"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/atoms/Accordion.vue';

export default {
  name: 'PreOrderPage',
  layout: 'new',
  components: {
    Accordion,
  },
  data() {
    return {
      orderFlows: [
        {
          name: 'Daftar',
          img: 'register',
        },
        {
          name: 'Tunggu Grup Full',
          img: 'waiting',
        },
        {
          name: 'Bayar',
          img: 'pay',
        },
        {
          name: 'Terima Akun',
          img: 'receive-account',
        },
        {
          name: 'Enjoy',
          img: 'enjoy',
        },
      ],
      dataFaq: [
        {
          id: 1,
          question: 'Berapa lama saya harus menunggu grup full?',
          answer:
            'Masa tunggu biasanya 1 minggu, kami akan menginformasikan jika dalam 1 minggu mendaftar apakah grup telah full atau masih ada slot kosong.',
          isShow: false,
        },
        {
          id: 2,
          question: 'Kapan saya harus bayar?',
          answer:
            'Member melakukan pembayaran setelah grup full dan akun telah dibuat. Admin akan menginformasikan setiap proses melalui Whatsapp.',
          isShow: false,
        },
        {
          id: 3,
          question: 'Bagaimana jika saya ingin berhenti berlangganan?',
          answer:
            'Akun berlangganan berlaku untuk 1 bulan setelah akun dibuat. Seminggu sebelum masa berlangganan habis, Admin akan menginformasikan ke setiap member apakah ingin lanjut atau berhenti berlangganan.',
          isShow: false,
        },
        {
          id: 4,
          question:
            'Bagaimana jika dalam 1 grup ada member yang berhenti berlangganan?',
          answer:
            'Seminggu sebelum masa berlaku habis, Seakun.id akan mencarikan pengganti member yang berhenti berlangganan. Jika setelah masa berlangganan habis tapi belum ada member baru yang mengisi slot, maka Grup akan memasuki masa tunggu seperti proses di awal.',
          isShow: false,
        },
      ],
    };
  },
  methods: {
    toggleShow(id) {
      this.dataFaq[id - 1].isShow = !this.dataFaq[id - 1].isShow;
    },
  },
};
</script>

<style>
.bg-pre-order {
  background: linear-gradient(90deg, #336557 0%, #8dcabe 100%);
}
</style>
