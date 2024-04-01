<template>
  <div id="product-background-sekurban" class="container-sekurban-new my-5">
    <div
      class="flex flex-col lg:flex-row gap-5 lg:gap-[84px] my-10 items-center justify-between"
    >
      <div class="items-center justify-center lg:hidden">
        <img src="/images/sekurban-new/product-image.png" width="500px" />
      </div>
      <div class="w-full md:w-full lg:w-1/2">
        <div
          class="text-xs md:text-sm font-bold bg-[#C0F5EA] text-primary py-1 md:py-1.5 px-2 md:px-3 inline-block rounded-lg"
        >
          Latar Belakang
        </div>
        <h1 class="text-xl md:text-3xl font-bold mt-2 mb-1 md:mb-3">
          Program Patungan Qurban
        </h1>
        <p class="text-xs md:text-sm font-normal leading-[22px]">
          Seakun, Kitabisa, dan Ecoqurban berkolaborasi dalam membantu ibadah
          kurban. Kurban merupakan salah satu ibadah penting dalam Islam, namun
          tak semua mampu melaksanakannya. Maka dari itu, program ini bertujuan
          untuk:
        </p>

        <!-- Points -->
        <div
          v-for="(point, id) in points"
          :key="id"
          class="flex flex-col gap-3 mt-3"
        >
          <div class="flex gap-3 items-center">
            <div
              class="bg-[#00BA88] text-white text-[11px] md:text-sm font-bold px-[7px] md:px-2.5 py-[2px] md:py-1 rounded-full items-center text-center inline-flex"
            >
              {{ id + 1 }}
            </div>
            <p
              class="text-xs md:text-sm font-normal leading-[15.62px] md:leading-[18px]"
            >
              {{ point.desc }}
            </p>
          </div>
        </div>
      </div>
      <div class="hidden md:hidden lg:block lg:w-1/2">
        <img src="/images/sekurban-new/product-image.png" width="500px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          desc:
            'Mempermudah umat Islam yang ingin berkurban dengan memberikan biaya kurban yang murah dan terjangkau.',
        },
        {
          desc:
            'Membantu anak muda di Indonesia dalam rangka belajar untuk menunaikan ibadah kurban.',
        },
        {
          desc:
            'Berbagi kebahagiaan untuk dapat merasakan indahnya berkurban ke sesama.',
        },
      ],
    };
  },
};
</script>

<style>
.bg-opacity {
  background: rgba(134, 208, 193, 0.1);
}
</style>
