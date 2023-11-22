<template>
  <div class="p-3 bg-[#DBF8F2] text-dmsans rounded-lg space-y-3">
    <header class="flex justify-between items-center text-main">
      <p class="text-sm font-medium">Venue yang tersedia</p>
      <div class="flex items-center gap-1">
        <p class="text-xs">Filter Kota</p>
        <Chevron />
      </div>
    </header>
    <section
      class="rounded-[10px] border-[#00BA88] border-[1px] p-2 flex items-start gap-1 bg-[#EBFFF9]"
    >
      <img
        src="/images/icons/atoms/round-info-green.svg"
        alt="info"
        class="w-3 h-3"
      />
      <p class="text-xs text-[#00BA88] font-semibold text-nunito">
        Nikmati harga lebih terjangkau dengan menjadi member! Bayar sekaligus 4
        match per-bulan dan nikmati biaya admin lebih murah!
      </p>
    </section>
    <section>
      <div></div>
    </section>
  </div>
</template>

<script>
import Chevron from '~/components/atoms/Chevron.vue';
export default {
  components: {
    Chevron,
  },
  data() {
    return {
      isClickChevron: false,
    };
  },
  props: {
    cardData: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
