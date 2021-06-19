<template>
  <div class="intro">
    <div class="container">
      <div class="row">
        <div class="col">
          <Title title="Berlangganan Bersama, Lebih Praktis, Aman dan Murah" />
          <p>
            Platform pertama di Indonesia yang memberikan layanan
            <b> Berlangganan Bersama </b> dengan pengguna lain
            <b>(sharing subscription)</b> ke Penyedia Layanan Entertainment
            (Provider Entertainment) seperti
            <b>Netflix, Gramedia Digital, Spotify, Steam</b>
            dan lainnya agar dapat menikmati fitur premium, dengan
            <b> proses berlangganan yang praktis, legal, aman </b> dan
            <b>murah</b>.
          </p>
          <button
            type="button"
            class="intro__btn btn btn-primary"
            @click="toRegistrationElement"
          >
            Daftar
          </button>
          <div class="intro__img">
            <img src="/images/patungan-2.svg" alt="Image not found" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title';
export default {
  components: {
    Title,
  },
  data() {
    return {
      regElement: '',
    };
  },
  mounted() {
    this.regElement = document.getElementById('reg');
  },
  methods: {
    toRegistrationElement() {
      this.regElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 100px !important;
  height: 800px;

  .title {
    max-width: 500px;
    margin: 0 auto;
  }
  .col {
    text-align: center;
    h2 {
      margin-bottom: 20px !important;
    }
    p {
      margin: 0 auto;
      max-width: 880px;
      margin-top: 30px;
      margin-bottom: 40px;
      font-size: 22px;
    }
    button {
      margin: 10px;
      padding: 6px 35px !important;
    }
  }
  .container {
    max-width: 1120px !important;
    font-weight: 500 !important;
    margin: 0 auto !important;
  }
  &__img {
    img {
      width: 50rem;
    }
  }
  .row {
    padding: 0px 8px !important;
  }
}
@media (max-width: 800px) {
  .intro {
    &__img {
      text-align: center;
      margin-top: 20px;
    }
    img {
      width: 100%;
    }
    .row {
      display: block;
    }
    h2 {
      font-size: 20px;
    }
  }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
  .container {
    display: contents !important;
  }
}
</style>
