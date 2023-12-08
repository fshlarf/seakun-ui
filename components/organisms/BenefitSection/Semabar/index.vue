<template>
  <div
    class="mt-6 md:mt-[32px] lg:mt-[52px] pb-2 md:pb-3 lg:pb-5 container"
    id="benefit-semabar"
  >
    <div class="w-full text-center text-[#15382F]">
      <h1 class="text-dmsans font-bold text-base md:text-xl lg:text-[28px]">
        Benefit Semabar
      </h1>
      <p class="text-sm md:text-base lg:text-xl pt-2 leading-normal">
        Berikut ini benefit yang akan kamu dapatkan apabila gabung Semabar
      </p>
    </div>
    <div class="lg:mt-12 mt-6 md:mt-5">
      <img
        src="/images/semabar/benefit/ball.svg"
        alt="benefit"
        class="w-[220px] lg:w-[208px] mx-auto lg:hidden"
      />

      <!--max-width 768px -->
      <div class="space-y-5 mt-5 md:hidden">
        <section
          v-for="(benefit, id) in benefits"
          :key="id"
          class="p-4 rounded-lg flex items-center gap-3 bg-white benefit-shadow"
          style="
            box-shadow: 1px 4px 6px 0px rgba(97, 128, 168, 0.15),
              1px 0px 2px 0px rgba(62, 79, 102, 0.08);
          "
        >
          <div class="bg-[#DBF8F2] p-2 rounded">
            <img
              :src="`/images/semabar/benefit/${benefit.icon}`"
              :alt="benefit.name"
              class="w-6 h-6"
            />
          </div>
          <p class="text-main text-sm font-medium leading-5 text-dmsans">
            {{ benefit.name }}
          </p>
        </section>
      </div>
      <!-- min 768px -->
      <div
        class="justify-between gap-x-5 items-start md:mt-8 hidden md:flex lg:grid grid-cols-3"
      >
        <div class="w-full space-y-5">
          <div v-for="(benefit, id) in benefits" :key="id">
            <section
              v-if="id < 3"
              class="p-4 rounded-lg flex items-center gap-3 bg-white benefit-shadow"
              style="
                box-shadow: 1px 4px 6px 0px rgba(97, 128, 168, 0.15),
                  1px 0px 2px 0px rgba(62, 79, 102, 0.08);
              "
            >
              <div class="bg-[#DBF8F2] p-2 rounded">
                <img
                  :src="`/images/semabar/benefit/${benefit.icon}`"
                  :alt="benefit.name"
                  class="w-6 h-6"
                />
              </div>
              <p class="text-main text-sm font-medium leading-5 text-dmsans">
                {{ benefit.name }}
              </p>
            </section>
          </div>
        </div>
        <div
          class="hidden lg:block h-full lg:bg-contain bg-center bg-no-repeat"
          style="background-image: url(/images/semabar/benefit/ball.svg)"
        ></div>
        <div class="w-full space-y-5 -mt-5">
          <div v-for="(benefit, id) in benefits" :key="id">
            <section
              v-if="id > 2"
              class="p-4 rounded-lg flex items-center gap-3 bg-white benefit-shadow"
              style="
                box-shadow: 1px 4px 6px 0px rgba(97, 128, 168, 0.15),
                  1px 0px 2px 0px rgba(62, 79, 102, 0.08);
              "
            >
              <div class="bg-[#DBF8F2] p-2 rounded">
                <img
                  :src="`/images/semabar/benefit/${benefit.icon}`"
                  :alt="benefit.name"
                  class="w-6 h-6"
                />
              </div>
              <p class="text-main text-sm font-medium leading-5 text-dmsans">
                {{ benefit.name }}
              </p>
            </section>
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
      benefits: [
        {
          name: 'Cari teman main bareng',
          icon: 'user-search.svg',
        },
        {
          name: 'Bayar patungan lebih murah',
          icon: 'payment.svg',
        },
        {
          name: 'Permainan yang terorganisir',
          icon: 'hamburger.svg',
        },
        {
          name: 'Membership dan komunitas yang di kelola rapi',
          icon: 'people.svg',
        },
        {
          name: 'Susunan tim, pemain dan leaderboard ',
          icon: 'flow-chart.svg',
        },
        {
          name: 'Pembayaran mudah dan praktis',
          icon: 'flash.svg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}

@media (max-width: 1024px) {
  .benefit-shadow {
    box-shadow: 1px 4px 6px 0px rgba(97, 128, 168, 0.15),
      1px 0px 2px 0px rgba(62, 79, 102, 0.08);
  }
}
@media (min-width: 1024px) {
  .benefit-shadow {
    box-shadow: 0px 4px 10px 0px rgba(67, 56, 201, 0.1);
  }
}
</style>
