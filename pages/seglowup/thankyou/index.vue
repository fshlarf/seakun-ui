<template>
  <div class="thankyou-page-seglowup">
    <NavbarBlank class-name="!bg-white border-b border-[#F2F5FA] h-[86px]" />
    <div class="mt-[86px] mb-[200px]">
      <div class="pt-8 md:pt-[50px] lg:pt-[68px] px-5 md:px-0">
        <div
          class="bg-white p-9 relative left-1/2 -translate-x-1/2 rounded-[15px] max-w-[660px] space-y-8 md:space-y-9"
          style="box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08)"
        >
          <img
            src="/images/seglowup/order/thankyou.webp"
            alt="thankyou"
            class="w-[180px] h-[138px] md:w-[250px] md:h-[180px] lg:w-[300px] lg:h-[231px] mx-auto"
          />
          <section
            class="text-xs sm:text-sm lg:text-base text-[#2D2D2DCC] tracking-[0.16px]"
          >
            <p class="text-center">Terima kasih telah melakukan pendaftaran.</p>
            <p>
              Paket ini adalah paket Pre-Order dimana data member akan diproses
              setelah member dalam satu grup telah terkumpul 4 orang.
              <span class="text-[#0194F3] underline font-bold cursor-pointer">
                Baca ketentuan pre-order</span
              >. Pembayaran akan dilakukan setelah satu grup full dan data
              berhasil diproses.
            </p>
          </section>
          <section
            class="mx-4 rounded-[10px] p-4 bg-white h-max"
            style="box-shadow: 0px 2px 8px 0px rgba(28, 37, 44, 0.08)"
          >
            <div class="flex gap-3">
              <p>image</p>
              <div class="font-bold text-xs sm:text-sm lg:text-base">
                <p class="text-main text-dmsans">ZAP Series 299RB</p>
                <p class="text-[#66738F] text-dmsans">ORD23423423</p>
              </div>
            </div>
            <div class="border-t-[1px] border-[#E5E5E580] mt-4 lg:mt-5">
              <div
                class="mt-3 text-xs sm:text-sm lg:text-base font-bold text-[#363636CC] flex justify-between items-center"
              >
                <p>Harga</p>
                <p>Rp2.052.000</p>
              </div>
            </div>
          </section>
          <section>
            <p
              class="tracking-[0.16px] text-[#2D2D2DCC] text-center text-xs sm:text-sm lg:text-base"
            >
              Lakukan konfirmasi ulang bahwa kamu fix berkomitmen untuk ikut
              pre-order layanan patungan ZAP Series 299RB di SeGlowUp dengan
              cara klik tombol di bawah. Atau kamu bisa klik link yang sudah
              dikirimkan ke whatsapp kamu. Konfirmasi ini bertujuan untuk
              memasukkan nama dan data diri kamu pada grup yang available secara
              sistematis.
            </p>
          </section>
          <section class="text-center px-4">
            <Button
              class="bg-[#08A081] text-white h-[44px] md:h-[56px] rounded-lg w-full text-base sm:text-lg"
              >Konfirmasi ikut pre-order</Button
            >
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from '~/components/mollecules/NavbarBlank.vue';
import Footer from '~/components/mollecules/Footer.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    NavbarBlank,
    Button,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.thankyou-page-seglowup {
  font-family: 'Nunito Sans', sans-serif;
}
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>
