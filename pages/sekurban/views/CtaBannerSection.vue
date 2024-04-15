<template>
  <div class="bg-[#E4FFFB] -mb-12 mt-0 lg:mt-8">
    <div
      class="container-sekurban-new py-[30px] md:py-[26px] flex flex-col md:flex-row md:justify-between items-center md:rounded-[25px]"
    >
      <div
        class="w-full md:w-[300px] lg:w-[370px] xl:w-[433px] order-2 md:order-1 text-center md:text-left mt-3 md:mt-0"
      >
        <div
          class="text-xs md:text-sm font-bold bg-[#C0F5EA] text-primary py-1 md:py-1.5 px-2 md:px-3 inline-block rounded-lg"
        >
          Investasi Kebaikan
        </div>
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-3">
          Ayo Lengkapi Ibadahmu dengan berqurban!
        </h1>
        <div
          class="block md:hidden mx-auto md:mx-0 w-[258px] md:w-[300px] order-1 md:order-2 mb-4"
        >
          <img src="/images/sekurban-new/cta-image.png" alt="daftar sekarang" />
        </div>
        <p
          class="text-xs md:text-sm font-normal leading-5 lg:leading-[22px] mx-5 md:mx-0"
        >
          Jadilah bagian dari kebaikan ini dan mari berqurban bersama-sama untuk
          mendapat keberkahan-Nya.
        </p>
        <Button
          class="bg-primary text-base w-[280px] md:w-[240px] md:text-lg lg:text-[22px] font-bold text-white py-3 mt-6 lg:mt-8"
          :class="{
            'cursor-not-allowed': isLoadingProviderSekurban,
          }"
          @click="$emit('onClickOrder')"
          :is-loading="isLoadingProviderSekurban || isLoadingOrder"
        >
          Daftar Sekarang
        </Button>
      </div>

      <div
        class="hidden md:block mx-auto md:mx-0 w-[258px] md:w-[300px] lg:w-[370px] xl:w-[430px] order-1 md:order-2"
      >
        <img src="/images/sekurban-new/cta-image.png" alt="daftar sekarang" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Button,
  },
  computed: {
    ...mapGetters({
      isLoadingProviderSekurban: 'getIsLoadingProviderSekurban',
      isLoadingOrder: 'getLoadingCreateOrder',
    }),
  },
};
</script>

<style>
.cta-gradient {
  background: linear-gradient(96.79deg, #a6eadc 1.13%, #98daf2 103.41%);
}
</style>
