<template>
  <div class="tn:pt-12 lg:pt-20">
    <div
      class="container-sekurban tn:py-[30px] tn:px-[36px] md:py-[26px] lg:px-[50px] flex tn:flex-col md:flex-row md:justify-between items-center cta-gradient tn:rounded-[15px] md:rounded-[25px]"
    >
      <div
        class="tn:w-full md:w-[300px] lg:w-[370px] xl:w-[433px] tn:order-2 md:order-1 tn:text-center md:text-left tn:mt-3 md:mt-0"
      >
        <h1
          class="tn:text-[20px] md:text-[26px] lg:text-[30px] tn:font-semibold md:font-bold"
        >
          Ayo Lengkapi Ibadahmu dengan berqurban!
        </h1>
        <p class="tn:text-[12px] md:text-[16px] lg:text-[18px] tn:mt-2">
          Jadilah bagian dari kebaikan ini dan mari berqurban bersama-sama untuk
          mendapat keberkahan-Nya.
        </p>
        <Button
          variant="third"
          class="tn:mt-4"
          add-class="tn:!text-[16px] md:!text-[20px] !font-bold tn:!px-4 md:!px-6 tn:!py-2 md:!py-3"
          @click="$emit('onClickOrder')"
          disabled
          >Daftar Sekarang</Button
        >
      </div>

      <div
        class="tn:mx-auto md:mx-0 tn:w-[258px] md:w-[300px] lg:w-[370px] xl:w-[430px] tn:order-1 md:order-2"
      >
        <img src="/images/sekurban/cta.png" alt="daftar sekarang" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<style>
.cta-gradient {
  background: linear-gradient(96.79deg, #a6eadc 1.13%, #98daf2 103.41%);
}
</style>
