<template>
  <div
    class="container-about-us pt-[53px] md:pt-[70px] lg:pt-[80px] xl:pt-[120px]"
    id="support-seakun"
  >
    <div
      class="flex flex-col-reverse sm:flex-row justify-between gap-6 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-20"
    >
      <section
        class="sm:min-w-[280px] md:min-w-[330px] lg:min-w-[510px] xl:min-w-[590px] text-center sm:text-left sm:pt-4 lg:pt-5"
      >
        <p
          class="text-green-primary text-[20px] sm:text-xl lg:text-2xl font-extrabold lg:max-w-[427px] leading-8 lg:leading-[42px]"
        >
          Dukungan Kamu, Inspirasi Kami untuk Terus Berkembang
        </p>
        <p class="text-xs md:text-sm pt-2 leading-5 lg:leading-6 lg:pr-8">
          Terima kasih telah memilih Seakun. Kami berkomitmen untuk terus
          memberikan pelayanan terbaik. Jika berkenan, Kamu bisa mendukung kami
          dengan memberikan TIP untuk Tim Seakun
        </p>
        <button
          class="bg-primary h-12 lg:h-[54px] items-center w-full sm:w-[210px] lg:w-[248px] justify-center flex text-white gap-2 mt-6 mx-auto sm:mx-0"
          @click="$router.push('/tip')"
        >
          <img src="/images/about-us/icons/send.svg" alt="send" />
          <p class="text-sm lg:text-base font-bold">Kirim TIP untuk Seakun</p>
        </button>
      </section>
      <section>
        <img
          src="/images/about-us/illustration/support.webp"
          alt="support seakuun"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
