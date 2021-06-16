<template>
  <div class="partnership">
    <div class="partner-bg bg-primary">
      <div class="container">
        <h2>Ingin Usaha kamu ada di Seakun.id?</h2>
        <p>
          Jangan khawatir ya, Seakun bisa kok meningkatkan usaha kamu disini!
          <br />Ayo klik tombol di bawah ini untuk mewujudkannya!
        </p>
      </div>
    </div>
    <div class="container">
      <div class="counter-card d-flex justify-content-center">
        <HexCard
          v-for="(counter, id) in dataCounter"
          :key="id"
          class="hexa-card"
          :value="counter.value"
          :label="counter.label"
        />
      </div>
    </div>
    <div class="text-center">
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
.partnership {
  padding-bottom: 5rem;
  .partner-bg {
    width: 100%;
    height: 23rem;
    padding-top: 2rem;

    h2 {
      font-weight: 700;
      font-size: 44px;
      color: #ffffff;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 500;
      font-size: 22px !important;
      color: #ffffff;
    }
  }

  .counter-card {
    position: relative;
    margin-top: -8rem;
    margin-bottom: 3.5rem;
    z-index: 10;
  }
}

@media (max-width: 840px) {
  .partnership {
    .partner-bg {
      height: 55rem;
    }
    .counter-card {
      margin-top: -38rem;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;

      .hexa-card {
        margin-bottom: 1rem;
        width: 50%;
      }
    }
  }
}
@media (max-width: 400px) {
  .partnership {
    .partner-bg {
      height: 25rem;
      text-align: center;
      padding-top: 1rem;
      h2 {
        font-weight: 700;
        font-size: 40px;
        color: #ffffff;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      p {
        font-weight: 500;
        font-size: 20px !important;
        color: #ffffff;
      }
    }
    .container {
      .counter-card {
        margin-top: -8rem;
        display: none;
        .hexa-card {
          display: none;
        }
      }
    }
  }
}
</style>
