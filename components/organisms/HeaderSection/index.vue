<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        <img
          src="/images/seakunid.png"
          width="30"
          height="30"
          alt="image not found"
          class="d-inline-block align-top"
        />
        <span>Seakun.id</span>
      </nuxt-link>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-expanded="false"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Toggle Navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mr-auto"></div>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="toCollegaElement">Provider</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toServiceElement">Layanan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toTestimoniElement">Testimoni</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toCustomersElement">Pengguna</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toRegistrationElement">Daftar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toAboutUsElement">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toContactUsElement">Hubungi</a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/info/scheme-of-price"
              >Skema Harga</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collegaElement: '',
      serviceElement: '',
      testimoniElement: '',
      aboutUsElement: '',
      contactElement: '',
      regElement: '',
      customersElement: '',
    };
  },
  mounted() {
    this.collegaElement = document.getElementById('collega');
    this.serviceElement = document.getElementById('facility');
    this.testimoniElement = document.getElementById('testimoni');
    this.aboutUsElement = document.getElementById('about-us');
    this.contactUsElement = document.getElementById('contact-us');
    this.regElement = document.getElementById('reg');
    this.customersElement = document.getElementById('customers');
  },
  methods: {
    hideMenu() {
      let menuContainer = document.getElementById('navbarSupportedContent');
      menuContainer.classList.remove('show');
    },
    toCollegaElement() {
      this.collegaElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
    toServiceElement() {
      this.serviceElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
    toTestimoniElement() {
      this.testimoniElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
    toAboutUsElement() {
      this.aboutUsElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
    toContactUsElement() {
      this.contactUsElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
    toCustomersElement() {
      this.customersElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
    toRegistrationElement() {
      this.regElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      this.hideMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #86d0c1 !important;
  box-shadow: 0px 0px 16px #dddddd;
  position: fixed;
  width: 100%;
  z-index: 100;

  .nav-link {
    font-weight: 700;
    color: #ffffff;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
  }

  .navbar-brand {
    cursor: pointer;
    span {
      color: #ffffff;
      font-weight: 700;
    }
  }
}
@media (max-width: 800px) {
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 100;

    .navbar-link {
      padding-left: 20px;
    }

    .navbar-toggler {
      background-color: transparent !important;
      border-radius: 2px !important;
      border: 1px solid #ffffff;
      height: 34px;

      span {
        &.icon-bar {
          display: block;
          width: 14px;
          height: 2px;
          border-radius: 1px;
          background: #ffffff;
          margin: 2px 0px;
        }
      }
    }
  }
}
</style>
