<template>
  <div
    class="w-full sm:w-[400px] md:w-[390px] bg-white p-4 md:p-5 rounded-lg md:rounded-[10px]"
    style="box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1)"
  >
    <header
      class="border rounded-md"
      :class="[
        cardType == 'old'
          ? 'text-[#9638FF] bg-[#F5F1FF]  border-[#EEE7FF]'
          : 'text-[#028981] bg-[#E0F8FC]  border-[#D4EDF1]',
      ]"
    >
      <p
        class="font-bold text-sm sm:text-base py-[9px] sm:py-[11px] text-center"
      >
        {{ cardType == 'old' ? 'Harga Lama Seakun' : 'Harga Baru Seakun' }}
      </p>
    </header>
    <div class="text-xs lg:text-sm mt-2 space-y-2 text-gray-secondary">
      <section class="flex justify-between items-center">
        <p>Nama Paket</p>
        <p>{{ information.name }}</p>
      </section>
      <section class="flex justify-between items-center">
        <p>Harga Provider</p>
        <p>{{ information.price }}</p>
      </section>
      <section class="flex justify-between items-center">
        <p>Jumlah member Per grup</p>
        {{ information.member }}
      </section>
      <section class="flex justify-between items-center">
        <p>Harga Patungan</p>
        <p>{{ information.jointVenturePrice }}</p>
      </section>
      <section class="flex justify-between items-center">
        <p>Biaya Admin Seakun</p>
        <p>{{ information.adminFee }}</p>
      </section>
      <section class="flex justify-between items-center font-bold">
        <p>Harga Paket Bulanan</p>
        <p class="text-primary">{{ information.total }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardType: {
      typeof: String,
      default: 'old',
    },
    information: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
