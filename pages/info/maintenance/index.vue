<template>
  <div class="container tn:pt-8 md:pt-8 tn:pb-4 md:pb-6">
    <img
      class="tn:w-[250px] md:w-[400px] mx-auto"
      src="/images/maintenance/maintenance.png"
      alt="under maintenance"
    />
    <div class="mx-auto md:w-[545px] text-center tn:px-4">
      <h1
        class="font-bold tn:text-2xl text-center lg:text-[40px] tn:mt-10 tn:mb-4 md:mb-6"
      >
        Under Maintenance
      </h1>
      <p class="md:text-[20px] text-[#2d2d2d] opacity-80">
        Maaf kepada seluruh pengguna Seakun.id, sedang dilakukan proses
        maintenance.
      </p>
      <br />
      <p class="md:text-[20px] text-[#2d2d2d] opacity-80">
        Kembali aktif lagi Minggu, 20 Agustus 2023 pukul 06.00 WIB ya. See you!
        <!-- Kembali aktif lagi siang ini pukul 12.00 WIB ya. See you! -->
      </p>
      <a
        class="w-full"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=6282124852232"
      >
        <Button
          class="mt-4 w-full !py-4"
          variant="secondary"
          label="Hubungi admin via whatsapp"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
export default {
  layout: 'new',
  components: {
    Button,
  },
  // beforeMount() {
  //   this.$router.push('/');
  // },
};
</script>

<style></style>
