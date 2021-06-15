<template>
  <div class="header-main">
    <div class="header-img1">
      <img class="w-100" src="/images/header-bg.svg" alt="Image not found" />
    </div>
    <div class="header-img2">
      <img
        class="w-100"
        src="/images/header-middle.svg"
        alt="Image not found"
      />
    </div>
    <div class="header-img3">
      <img class="w-100" src="/images/header-main.svg" alt="Image not found" />
    </div>
    <div class="title-container container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="header-title">
            <div class="top-bar rounded-pill"></div>
            <span class="top-title font-weight-bolder">Seakun.id</span>
            <p>
              Berlangganan bersama lebih <span>praktis, legal, aman</span> dan
              <span>murah.</span>
            </p>
            <Button variant="third" label="Daftar sekarang" />
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MainLogo from '~/components/atoms/MainLogo.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    MainLogo,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  background-color: #ffffff !important;
  position: relative;
  width: 100%;

  .header-img1 {
    position: absolute;
    top: -40px;
    width: 100%;
    z-index: 0;
  }
  .header-img2 {
    position: absolute;
    top: 140px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 85rem;
    z-index: 50;
  }
  .header-img3 {
    position: absolute;
    top: 60px;
    right: 0;
    width: 44rem;
    z-index: 75;
  }
  .title-container {
    position: relative;
    height: 45rem;
    z-index: 70;

    .header-title {
      position: absolute;
      top: 12rem;
      width: 75%;
      z-index: 75;

      .top-bar {
        background-color: #ffffff;
        width: 2rem;
        height: 0.3rem;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
      }

      .top-title {
        font-size: 20px;
        color: #417465;
      }

      p {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        color: #ffffff;
        font-size: 60px;
        font-weight: 700;
        font-stretch: ultra-condensed;
        letter-spacing: -1px;
        line-height: 1.1;

        span {
          color: #417465;
        }
      }
    }
  }
}
@media (max-width: 800px) {
}
</style>
