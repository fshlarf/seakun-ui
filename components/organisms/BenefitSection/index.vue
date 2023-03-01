<template>
  <div class="tn:pt-20 tn:pb-[45px] md:pb-[90px] relative">
    <h2
      class="tn:w-[250px] md:w-[447px] font-bold tn:text-[20px] md:text-[30px] xl:text-[36px] mx-auto text-center"
    >
      Beragam Manfaat <br />
      Yang Bisa Kamu Dapatkan
    </h2>
    <div class="xl:hidden mx-auto max-w-max">
      <img
        class="tn:w-[300px] md:w-[400px] lg:w-[600px] mx-auto tn:mt-[18px]"
        src="/images/benefit/benefit.svg"
        alt="benefit seakun"
      />
    </div>
    <div
      class="flex items-center justify-center tn:mt-[38px] md:mt-[45px] tn:px-6 tn:space-x-[20px] md:space-x-0 relative z-10"
    >
      <div
        class="md:w-[276px] tn:space-y-[20px] md:space-y-[45px] lg:space-y-[60px]"
      >
        <div
          v-for="(benefit, id) in benefit1"
          :key="id"
          class="flex items-center tn:space-x-2 md:space-x-[11px]"
        >
          <div
            class="tn:!w-[29px] tn:!h-[29px] md:!w-[58px] md:!h-[58px] flex justify-center items-center rounded-[4px] bg-[#E9FAF5] tn:p-[5px] md:p-0"
          >
            <img
              class=""
              :src="`/images/benefit/${benefit.icon}.svg`"
              :alt="benefit.text"
            />
          </div>
          <p
            class="tn:w-[117px] md:w-[207px] tn:text-[12px] md:text-[20px] font-medium tn:leading-[12px] md:leading-[24px]"
          >
            {{ benefit.text }}
          </p>
        </div>
      </div>
      <div class="tn:hidden xl:block">
        <img src="/images/benefit/benefit.svg" alt="benefit seakun" />
      </div>
      <div
        class="md:w-[276px] tn:space-y-[20px] md:space-y-[45px] lg:space-y-[60px]"
      >
        <div
          v-for="(benefit, id) in benefit2"
          :key="id"
          class="flex items-center tn:space-x-2 md:space-x-[11px]"
        >
          <div
            class="tn:!w-[29px] tn:!h-[29px] md:!w-[58px] md:!h-[58px] flex justify-center items-center rounded-[4px] bg-[#E9FAF5] tn:p-[5px] md:p-0"
          >
            <img
              class=""
              :src="`/images/benefit/${benefit.icon}.svg`"
              :alt="benefit.text"
            />
          </div>
          <p
            class="tn:w-[117px] md:w-[207px] tn:text-[12px] md:text-[20px] font-medium tn:leading-[12px] md:leading-[24px]"
          >
            {{ benefit.text }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="absolute -z-10 top-0 left-0 tn:w-[175px] md:w-[300px] xl:w-[427px]"
    >
      <img
        class="w-full"
        src="/images/benefit/bg-top-left.svg"
        alt="background left"
      />
    </div>
    <div
      class="absolute -z-10 bottom-0 right-0 tn:w-[175px] md:w-[300px] xl:w-[423px]"
    >
      <img
        class="w-full"
        src="/images/benefit/bg-bottom-right.svg"
        alt="background right"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefit1: [
        {
          text: 'Hemat Hingga 70%',
          icon: 'percent',
        },
        {
          text: 'Privasi Terjamin',
          icon: 'privacy',
        },
        {
          text: 'Customer Service Responsif',
          icon: 'customer-service',
        },
      ],
      benefit2: [
        {
          text: 'Beragam Metode Pembayaran',
          icon: 'payment',
        },
        {
          text: 'Layanan Legal dan Resmi',
          icon: 'legal',
        },
        {
          text: 'Pengingat Pembayaran',
          icon: 'reminder',
        },
      ],
    };
  },
};
</script>

<style></style>
