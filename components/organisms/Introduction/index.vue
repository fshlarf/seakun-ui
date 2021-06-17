<template>
  <div class="intro">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-6 col-xl-5 intro-img">
          <img src="/images/about-us.svg" alt="Image not found" />
        </div>
        <div class="col-md-6 col-xl-5 align-self-center">
          <h2>Tentang Kami</h2>
          <p>
            Platform pertama di Indonesia yang memberikan layanan berlangganan
            bersama dengan pengguna lain (sharing subscription) ke penyedia
            layanan entertainment seperti
            <span class="text-secondary font-weight-bold"
              >Netflix, Gramedia Digital, Spotify, Steam, dan lainnya</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;

  .col-md-6 {
    text-align: left;
    h2 {
      font-weight: 700;
      font-size: 44px;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 500;
      font-size: 22px !important;
    }
  }
  .intro-img {
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1024px) {
  .intro {
    .col-md-6 {
      h2 {
        font-size: 40px;
      }
      p {
        font-size: 20px !important;
      }
    }
  }
}
@media (max-width: 800px) {
  .intro {
    padding-bottom: 3rem !important;
    .intro-img {
      align-self: center;
    }
  }
}
@media (max-width: 400px) {
  .intro {
    .col-md-6 {
      text-align: center;
    }
  }
}
</style>
