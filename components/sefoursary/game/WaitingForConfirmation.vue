<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-[60] flex justify-center"
  >
    <div
      class="seafoursary__challenge w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] bg-cover mt-[143px] relative flex justify-center items-center"
    >
      <p
        class="max-w-[260px] md:max-w-[366px] mx-auto font-bold text-xs md:text-sm text-[#66738F] text-center"
      >
        Screenshot berhasil dikirim ke Admin Seakun, kamu akan mendapatkan
        notifikasi di Aplikasi Seakun apabila Admin telah berhasil memverifikasi
        screenshot kamu.
      </p>
      <div
        class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
      >
        <nuxt-link to="/sefoursary/game">
          <section
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
          >
            <p>Menu</p>
            <img
              src="/images/sefoursary/icons/hamburger.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
            />
          </section>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.seafoursary__challenge {
  background-image: url('/images/sefoursary/background/challenge.webp');
}
</style>
