<template>
  <div class="container">
    <div
      class="mt-12 tn:p-6 md:p-8 banner grid grid-cols-1 lg:grid-cols-5 tn:gap-3 lg:gap-4 items-center"
    >
      <p class="tn:text-xs md:text-lg lg:col-span-4">
        Butuh kartu kredit atau debit online global untuk pembayaran
        internasional, pembelian item digital atau belanja barang dari luar
        negeri? Gampang, tinggal pakai layanan
        <span class="font-bold">Setitip, Nebeng Kartu Kredit</span> lewat
        <span class="font-bold">Seakun.id</span>!
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScymtKO4tV2y42PtCUSQG4v8tCiiWrmmw9QNrWUcxkAyDvD5g/viewform"
        target="_blank"
        class="!no-underline"
      >
        <Button
          label="Daftar Sekarang"
          variant="forth"
          shape="pill"
          add-class="font-bold shadow tn:inline md:block mx-auto tn:text-sm md:text-base px-4 py-3"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
export default {
  components: {
    Button,
  },
};
</script>

<style>
.banner {
  background: linear-gradient(90deg, #fff0d3 54.13%, #fffcf6 119.51%);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
}
</style>
