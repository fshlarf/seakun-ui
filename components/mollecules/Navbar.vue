<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container nav-container">
      <nuxt-link class="navbar-brand d-flex" to="/">
        <MainLogo label="Seakun.id" />
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
          <li class="nav-item" v-for="(navbar, id) in navbarLink" :key="id">
            <a class="nav-link text-primary">{{ navbar.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import MainLogo from '~/components/atoms/MainLogo.vue';
export default {
  data() {
    return {
      navbarLink: [
        {
          id: 1,
          label: 'Provider',
          link: '',
        },
        {
          id: 2,
          label: 'Tipe user',
          link: '',
        },
        {
          id: 3,
          label: 'Cara pesan',
          link: '',
        },
        {
          id: 4,
          label: 'Testimoni',
          link: '',
        },
        {
          id: 5,
          label: 'QnA',
          link: '',
        },
      ],
    };
  },
  components: {
    MainLogo,
  },
  methods: {
    hideMenu() {
      let menuContainer = document.getElementById('navbarSupportedContent');
      menuContainer.classList.remove('show');
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #f4f9f8 !important;
  position: fixed;
  width: 100%;
  z-index: 100;

  .nav-link {
    font-weight: 700;
    margin-left: 50px;

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

@media only screen and (min-device-width: 1000px) and (max-device-width: 1034px) {
  .nav-container {
    padding: 0 1rem 0 1rem;
  }

  .nav-link {
    margin-left: 1px;
  }
}

@media (max-width: 840px) {
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 100;

    .nav-container {
      padding: 0 1rem 0 1rem;
    }

    .nav-link {
      margin-left: 0;
    }

    .navbar-link {
      padding-left: 20px;
    }

    .navbar-toggler {
      background-color: transparent !important;
      border-radius: 2px !important;
      border: 1px solid #86d0c1;
      height: 34px;

      span {
        &.icon-bar {
          display: block;
          width: 14px;
          height: 2px;
          border-radius: 1px;
          background: #86d0c1;
          margin: 2px 0px;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 100;

    .nav-container {
      padding: 0;
    }

    .nav-link {
      margin-left: 0;
    }
  }
}
</style>
