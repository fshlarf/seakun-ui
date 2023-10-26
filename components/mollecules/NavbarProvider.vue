<template>
  <div id="navba" class="w-full fixed z-40 tn:py-3 bg-white">
    <div class="static z-0 w-full text-gray-700">
      <div class="md:container lg:flex lg:justify-between lg:items-center">
        <div
          class="px-4 border-b md:border-none pb-4 md:pb-0 flex justify-between items-center"
        >
          <nuxt-link to="/" class="">
            <img
              class="tn:h-[40px]"
              src="/images/navbar/brand_seakun.svg"
              alt="brand seakun"
            />
          </nuxt-link>
          <div role="button" class="md:hidden" @click="isOpen = !isOpen">
            <img
              v-if="!isOpen"
              class="w-[22px]"
              src="/images/icons/atoms/hamburger.svg"
              alt="menu"
            />
            <img
              v-else
              class="w-[24px]"
              src="/images/icons/atoms/close-menu.svg"
              alt="tutup menu"
            />
          </div>
        </div>
        <div>
          <div class="hidden md:flex items-center gap-[24px]">
            <nuxt-link
              class="w-full md:w-[120px] h-[36px] md:h-[46px] font-bold flex justify-center items-center border border-primary bg-white text-primary rounded-[4px] md:rounded-[8px]"
              to="/login"
            >
              <p>Masuk</p>
            </nuxt-link>
            <nuxt-link
              class="w-full md:w-[120px] h-[36px] md:h-[46px] font-bold flex justify-center items-center border border-primary bg-primary text-white rounded-[4px] md:rounded-[8px]"
              to="/register"
            >
              <p>Daftar</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="md:hidden overflow-hidden transition-all ease-in-out duration-300"
        :class="`${!isOpen ? 'h-0' : ''}`"
      >
        <div class="grid grid-cols-2 items-center gap-3 px-4 mt-5">
          <nuxt-link
            class="w-full h-[36px] font-bold flex justify-center items-center border border-primary bg-white text-primary rounded-[4px]"
            to="/login"
          >
            <p>Masuk</p>
          </nuxt-link>
          <nuxt-link
            class="w-full h-[36px] font-bold flex justify-center items-center border border-primary bg-primary text-white rounded-[4px]"
            to="/register"
          >
            <p>Daftar</p>
          </nuxt-link>
        </div>
        <div class="my-4 flex items-center gap-1 px-4">
          <img src="/images/icons/atoms/home.svg" alt="kembali" />
          <p>Kembali ke Beranda</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isOpen: false,
      isLoggedin: true,
    };
  },
  components: {
    Logo,
  },
  computed: {
    ...mapGetters({
      avatar: 'getAvatar',
    }),
  },
  mounted() {
    const username = this.$cookies.get('username');
    if (username) {
      if (!this.avatar) {
        const ava = this.$cookies.get('avatar');
        const newAva = ava ? ava : 'default';
        this.setUserAvatar(newAva);
      }
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  },
  methods: {
    ...mapActions({
      setUserAvatar: 'setUserAvatar',
    }),
  },
};
</script>

<style scoped>
.bg-nav {
  background-color: #ffffff !important;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
}
@media (min-width: 800px) {
  .bg-nav {
    background-color: #ffffff !important;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
}
</style>
