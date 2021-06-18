<template>
  <div class="partnership pb-24 lg:py-16">
    <div
      class="relative z-0 partner-bg bg-primary tn:px-4 py-4 lg:px-16 xl:px-28 tn:h-96 md:h-52 lg:h-60 xl:h-80"
    >
      <div class="container text-white xl:mt-12 xl:mb-4">
        <h2 class="tn:text-2xl md:text-4xl font-bold tn:my-2 md:my-2 xl:mb-4">
          Ingin Usaha kamu ada di Seakun.id?
        </h2>
        <p class="xl:text-lg font-semibold">
          Jangan khawatir ya, Seakun bisa kok meningkatkan usaha kamu disini!
          <br />Ayo klik tombol di bawah ini untuk mewujudkannya!
        </p>
      </div>
      <div class="md:container">
        <div
          class="counter-card tn:grid tn:grid-cols-2 tn:gap-0 md:flex justify-center mt-2 md:mt-0"
        >
          <HexCard
            v-for="(counter, id) in dataCounter"
            :key="id"
            class="hexa-card"
            :value="counter.value"
            :label="counter.label"
          />
        </div>
      </div>
    </div>
    <div
      class="gradient md:bg-white tn:h-52 tn:bg-primary md:h-32 lg:h-36 xl:h-44"
    ></div>
    <div
      class="gradient text-center md:bg-white container z-10 px-7 tn:bg-primary tn:h-10 md:h-auto"
    >
      <Button
        class="mx-auto btn-partner"
        variant="secondary"
        label="Ajukan Kerja Usaha saya dengan Seakun"
      />
    </div>
  </div>
</template>

<script>
import HexCard from '~/components/atoms/HexCard';
import Button from '~/components/atoms/Button';
export default {
  data() {
    return {
      dataCounter: [
        {
          id: 1,
          value: '18.000+',
          label: 'Total Transaksi',
        },
        {
          id: 2,
          value: '6.000+',
          label: 'Total Pengguna',
        },
        {
          id: 3,
          value: '10',
          label: 'Total Layanan',
        },
        {
          id: 4,
          value: '9,9/10',
          label: 'Tingkat Kepuasan',
        },
      ],
    };
  },
  components: {
    HexCard,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.bg-primary {
  background-image: linear-gradient(to left, #8dcabe, #4bac99);
}

@media (max-width: 600px) {
  .gradient {
    background-image: linear-gradient(to left, #8dcabe, #4bac99);
  }
}
</style>
