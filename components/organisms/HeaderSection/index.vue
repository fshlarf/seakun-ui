<template>
  <div class="header-main">
    <div class="header-img1">
      <img src="/images/header-bg.svg" alt="Image not found" />
    </div>
    <div class="header-img2">
      <img src="/images/header-middle.svg" alt="Image not found" />
    </div>
    <div class="header-img3">
      <img src="/images/header-main.svg" alt="Image not found" />
    </div>
    <div class="header-img4">
      <img src="/images/header-mobile.svg" alt="Image not found" />
    </div>
    <div class="title-container container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
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
  background-color: #ffffff;
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }

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
    max-width: 85rem;
    width: 90%;
    z-index: 50;
  }
  .header-img3 {
    position: absolute;
    top: 60px;
    right: 0;
    width: 44rem;
    z-index: 75;
  }
  .header-img4 {
    display: none;
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
        letter-spacing: -1px;
        line-height: 1.1;

        span {
          color: #417465;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .header-main {
    position: relative;
    z-index: 0;

    .header-img1 {
      top: 0;
    }
    .header-img3 {
      width: 45%;
    }
    .title-container {
      height: 28rem;

      .header-title {
        position: relative;
        top: 11rem;
        left: 3rem;
        width: 80%;
        z-index: 75;

        .top-title {
          font-size: 40px;
          color: #417465;
        }

        p {
          width: 100%;
          margin-top: 0.5rem;
          margin-bottom: 2rem;
          color: #ffffff;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -1px;
          line-height: 1.1;

          span {
            color: #417465;
          }
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .header-main {
    background-color: #86d0c1;
    .header-img1 {
      top: 0;
    }
    .header-img2 {
      display: none;
    }
    .header-img4 {
      position: relative;
      margin: auto;
      width: 65%;
      padding-top: 5rem;
      display: block;
      justify-content: center;
      z-index: 10;
    }
    .header-img3 {
      display: none;
    }
    .title-container {
      height: auto;
      .header-title {
        text-align: center;
        top: 2rem;
        left: 0;
        width: 100%;

        .top-bar {
          display: none;
        }
        p {
          width: 100%;
          margin-top: 0.5rem;
          font-size: 30px;
        }
      }
    }
  }
}
</style>
